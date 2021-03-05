import { HttpErrorResponse } from '@angular/common/http';
import {Component} from '@angular/core'
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Passenger, passengers } from 'src/assets/passengers'
import { PassengerService } from '../passenger.service';

@Component({
   
selector: 'component-dashboard',
  template: `
    <h3>Airline passengers</h3>
    <passenger-add [items]="passengers" (add)="addPassenger($event)"></passenger-add>
    <passenger-count [items]="passengers"></passenger-count>
    <passenger-list (remove)="removePassenger($event)" (edit)="editPassenger($event)" *ngFor="let passenger  of passengers " [passenger]="passenger"></passenger-list>
    `,
  styleUrls: ['./passenger-dashboard.component.css'],

})

export class PassengerDashboardComponent{
    public passengers;
    public passengersSubscription$: Subscription;
    logError = (error: HttpErrorResponse) => console.error(error);
    
    constructor( private passengerService:  PassengerService){};
    ngOnInit() : void{
        this.getPassengers();
    }

    getPassengers() : void {
        this.passengerService.getPassengers().subscribe(p => this.passengers=p);
    }

    editPassenger(passenger: Passenger){
       this.passengersSubscription$ = this.passengerService.editPassengers(passenger).subscribe((passenger)=>
       {this.passengers=this.passengers.map(p=>{
         if(p.id === passenger.id) return Object.assign({},p,passenger);
         return p;
       });
      },this.logError
      )
    }

    removePassenger(id: Number){
        this.passengersSubscription$=this.passengerService.removePassengers(id).subscribe(()=>
        {
          this.passengers = this.passengers.filter(  p => p.id != id );

        },this.logError
        );
    }
    
    addPassenger(passenger:Passenger){
      console.log(passenger);
      this.passengersSubscription$ = this.passengerService.addPassenger(passenger).subscribe((passenger)=>
      {this.passengers=this.passengers.concat([passenger]);
      });
     }
    

    
    
}