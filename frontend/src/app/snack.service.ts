import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private _snackBar: MatSnackBar) { }

  showMessage(msg:string){
    this._snackBar.open(msg, null, {duration:3000})
  }
}
