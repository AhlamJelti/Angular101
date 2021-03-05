import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,of } from "rxjs";
import { Passenger } from "src/assets/passengers";
import { passengers } from 'src/assets/passengers';


const URL ="http://localhost:3000/passengers"
@Injectable({
    providedIn: 'root'
  })
export class PassengerService{
     
    constructor(private http: HttpClient){}

    public getPassengers(): Observable<Passenger[]>{

        return this.http.get<Passenger[]>(URL);
    }
    removePassengers(id :Number):Observable<any | void>{
        return this.http.delete(`${URL}/${id}`)
    }
    editPassengers(passenger: Passenger): Observable<Passenger>{
        return this.http.put<Passenger>(`${URL}/${passenger.id}`,passenger);
    }

    addPassenger(passenger: Passenger):Observable<Passenger>{
        return this.http.post<Passenger>(URL,passenger);
    }
}