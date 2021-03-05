import { EventEmitter } from "@angular/core";
import {Component,Input, Output} from "@angular/core"
import { NgForm } from "@angular/forms";
import { Passenger } from "src/assets/passengers";



@Component({
    selector:'passenger-add',
    template:
    `
<form #f="ngForm" (ngSubmit)="onSubmit(f)" >
       
<label for="fullName">
Name
</label>
<input name="fullName" ngModel required >


<label for="checkInDate">
checkInDate
</label>
<input type="date" name="checkInDate" ngModel>


<button>Submit</button>
</form>`
    
    })

    
export class PassengerAddComponent{
    @Input() items: Passenger[];
    @Output() add : EventEmitter<Passenger> = new EventEmitter();
    
    passengerToAdd: Passenger;
    onSubmit(f:NgForm){
        console.log(this.items[this.items.length-1].id);
        this.passengerToAdd ={
            "id": this.items[this.items.length-1].id + 1,
            "fullName": f.value.fullName,
            "checkedIn": f.value.checkInDate ? true : false ,
            "checkInDate": new Date(f.value.checkInDate).getTime(),
            "children": []
            
          }
        this.add.emit(this.passengerToAdd);
    }
}
    





