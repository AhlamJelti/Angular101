import {Component,EventEmitter,Input, Output} from '@angular/core'
import { NgForm } from '@angular/forms';
import { Passenger } from 'src/assets/passengers'


@Component({
    selector:'passenger-list',
    template:`
   
    <span class="status"  [ngStyle]="{ 'background-color':passenger.checkedIn ? 'tomato' : 'turquoise' }"></span>
    <input type="text" *ngIf="editing" (input)="handleFullNameEdit($event)" [value]="passenger.fullName" />
    <span *ngIf="!editing">{{passenger.fullName}}</span>
    <div class="checkin-date">
        checkedIn in date : 
        {{
            passenger.checkInDate ? (passenger.checkedIn | date :"y MMMM d " | uppercase ) : "not checked in"
        }}
    </div>
    <div class="children">
        children :{{passenger.children?.length || 0 }}
    </div>
    <div class="action">
      <button (click)="toggleEdit()">{{ editing ? "done" : "edit" }}</button>
      <button (click)="handleRemove(passenger.id)">remove</button>
    </div>`,
    styleUrls: ["./passenger-list.component.css"],

})

export class PassengerListComponent{
@Input() passenger: Passenger;
@Output() edit: EventEmitter<Passenger> = new EventEmitter();
@Output() remove: EventEmitter<number> = new EventEmitter();
@Output() add: EventEmitter<Passenger> = new EventEmitter();
editing: boolean = false;
passengerToEmit:Passenger;
passengerToAdd:Passenger;
toggleEdit(){
    if(this.editing){
        this.edit.emit(this.passengerToEmit);
    }
    this.editing= !this.editing;
}
handleFullNameEdit(event: any){
    this.passengerToEmit={...this.passenger, fullName: event.target.value }
}

handleRemove(id: number){
    this.remove.emit(id);
}

}