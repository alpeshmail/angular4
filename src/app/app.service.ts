import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';


import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
    constructor(private http: HttpClient)
    {

    }
    getItems():Observable<string[]> {
        let apiUrl = 'http://localhost:58235/api/items/getall';
        return this.http.get<string[]>(apiUrl);
        // return this.http.get(apiUrl)
        //            .map((res: Response) => {return res.json()
        // });
    }
}