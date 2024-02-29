import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

import { ToastController } from '@ionic/angular';


import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apikey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class RequesInterceptorService implements HttpInterceptor {



  constructor(
    public toastController: ToastController

  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let params =  new HttpParams().appendAll({

      // eslint-disable-next-line @typescript-eslint/naming-convention
      api_key : apikey,
      language: 'es',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      include_image_language: 'es',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      include_adult: false

    });

    if (req.params.has('query')) {
      params = params.append('query',req.params.get('query'));
    }
    if (req.params.has('page')) {
      params = params.append('page',req.params.get('page'));
    }



    const reqClone = req.clone({
      params
    });



    return next.handle(reqClone)
      .pipe(
        map((resp: HttpEvent<any>) => {

          if (resp instanceof HttpResponse) {

            this.presentToast('Conexión exitosa!','primary');
          }
          return resp;
        }),
        catchError((error: HttpErrorResponse) => {

          if (error.status === 401) {
            if (error.error.success === false) {
              this.presentToast(error.error.status_message,'danger');
            }
          }
          return throwError(error);
        })
      );

  }


  //TODO: Error message
  async presentToast(meg: string,color: string) {
    const toast = await this.toastController.create({
      message: meg,
      duration: 2000,
      position: 'bottom',
      color
    });

    toast.present();
  }

}
