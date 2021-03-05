import {Component,Input} from "@angular/core"
import { Passenger } from "src/assets/passengers";

@Component({
selector:'passenger-count',
template:`
<div *ngIf="items">
    checked In passengers :{{items.length}}
</div>`

})


export class PassengerCountComponent{
    @Input() items: Passenger[];
}