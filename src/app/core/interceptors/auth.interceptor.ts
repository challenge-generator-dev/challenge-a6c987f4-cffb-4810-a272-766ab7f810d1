import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  
  const isApiCall = req.url.includes('/api/');
  const isAuthEndpoint = req.url.includes('/auth/') || req.url.includes('/login');
  
  if (token && isApiCall && !isAuthEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    return next(authReq).pipe(
      tap({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log(`[AuthInterceptor] Peticion exitosa a ${req.url}`);
          }
        },
        error: (error) => {
          if (error.status === 401) {
            console.warn('[AuthInterceptor] Token expirado, limpiando session');
            localStorage.removeItem('auth_token');
            sessionStorage.removeItem('auth_token');
            window.location.href = '/login';
          } else if (error.status === 403) {
            console.warn('[AuthInterceptor] Acceso denegado al recurso');
          }
        },
      })
    );
  }
  
  if (isApiCall && !isAuthEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return next(authReq);
  }
  
  return next(req);
};