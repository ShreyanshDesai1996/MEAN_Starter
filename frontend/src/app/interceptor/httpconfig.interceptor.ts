import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserService } from '../user.service'
import { SnackService } from '../snack.service'

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(public userService: UserService, public snackService : SnackService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.userService.getToken();

        //if this route is supposed to be accessed by non auth users as well, continue and allow the request
        if(this.userService.isUnprotected(request.url)){
            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        //console.log('event--->>>', event);
                    }
                    return event;
                }), catchError((error: HttpErrorResponse) => {
                    let data = {};
                    data = {
                        reason: error && error.error && error.error.reason ? error.error.reason : '',
                        status: error.status
                    };
                    this.snackService.showMessage(JSON.stringify(data));
                    return throwError(error);
                })
            );
        }

        if (token) {
            console.log('Interceptor sending request with token:',token)
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }), catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.snackService.showMessage(JSON.stringify(data));
                return throwError(error);
            })
        );
    }
}