import { Component } from "@angular/core";
@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrls:["./deportes.component.css"]
})

export class DeportesComponents{
public sports: Array<string>;
public numeros:Array<number>;

constructor() {
    this.sports = ["Petanca","Curling","Canicas","Futbol","Padel"]
    this.numeros = [5,6,9,12,14,53,22];
}
}