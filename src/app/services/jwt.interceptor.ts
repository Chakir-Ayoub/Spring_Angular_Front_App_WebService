import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    // Vérifier si la demande est une requête POST vers l'URL "http://localhost:8080/api/users"
    if (request.method === 'POST' && request.url === 'http://localhost:8080/api/users') {
      return next.handle(request); // Passer la demande sans ajouter l'en-tête d'autorisation
    }

    // Ajouter l'en-tête d'autorisation pour les autres demandes
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
