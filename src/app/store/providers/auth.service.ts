import { Injectable } from '@angular/core';
import { ApiService } from './../../core/providers/api.service'
import { of } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(
    public apiService: ApiService
  ) { }
  public signIn(authData: any) {    
    if (authData.email == "covid19@gmail.com" && authData.password == "covid@123") {
      return of({
        message: "Successfully loggedin",
        success: true,
        data: {
          email: authData.email,
          authToken: "zstfwrefcdvqhabbzudchhckeqweloil"
        },

      }).pipe(delay(3000))
    }
    else {      
      return of({
        message: "User is not exist!",
        success: false,
        error: "User is not exist!"
      }).pipe(delay(3000))
    }
  }


  public getList(authData: any) {    
    let today = this.formatDate()
    return this.apiService.get('daily/' + today)
  }

  public  formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() - 1),
        year = d.getFullYear();   
    return [month,day,year].join('-');
}
}



