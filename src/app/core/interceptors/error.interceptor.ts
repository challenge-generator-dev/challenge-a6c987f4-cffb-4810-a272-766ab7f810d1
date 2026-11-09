import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, switchMap, retry, retryWhen, delayWhen } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<any> => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Error desconocido';
      
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error del cliente: ${error.error.message}`;
      } else {
        errorMessage = `Error del servidor: ${error.status} - ${error.message}`;
        
        switch (error.status) {
          case 0:
            console.error('[ErrorInterceptor] Sin conexion con el servidor');
            errorMessage = 'No se puede conectar con el servidor. Verifica tu conexion a internet.';
            break;
          case 400:
            console.error('[ErrorInterceptor] Solicitud incorrecta:', error.url);
            errorMessage = error.error?.message || 'Solicitud incorrecta. Verifica los datos enviados.';
            break;
          case 404:
            console.error('[ErrorInterceptor] Recurso no encontrado:', error.url);
            errorMessage = 'El recurso solicitado no fue encontrado.';
            break;
          case 500:
            console.error('[ErrorInterceptor] Error interno del servidor:', error.url);
            errorMessage = 'Error interno del servidor. Por favor, intenta mas tarde.';
            break;
          case 503:
            console.error('[ErrorInterceptor] Servicio no disponible:', error.url);
            errorMessage = 'El servicio no esta disponible temporalmente.';
            break;
          default:
            console.error(`[ErrorInterceptor] Error HTTP ${error.status}:`, error.message);
        }
      }
      
      const errorLog = {
        timestamp: new Date().toISOString(),
        url: req.url,
        method: req.method,
        status: error.status,
        message: errorMessage,
        error: error.error,
      };
      
      console.error('[ErrorInterceptor] Error capturado:', errorLog);
      
      return throwError(() => ({
        ...error,
        message: errorMessage,
        logged: true,
      }));
    }),
    retryWhen((errors) =>
      errors.pipe(
        delayWhen((error, index) => {
          const retryAttempts = 3;
          const retryDelay = 1000;
          
          if (index >= retryAttempts) {
            throw error;
          }
          
          if (error.status === 0 || error.status >= 500) {
            console.log(`[ErrorInterceptor] Reintento ${index + 1} de ${retryAttempts}`);
            return timer(retryDelay * Math.pow(2, index));
          }
          
          throw error;
        })
      )
    )
  );
};