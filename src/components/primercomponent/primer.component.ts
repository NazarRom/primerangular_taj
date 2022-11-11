import {Component} from '@angular/core';
@Component({
    //debemos indicar un selector que será el nombre
    //de etiqueta para las paginas del proyecto
    selector:"primer-component",
    //el template de un component puede ser externo
    templateUrl:"./primer.component.html",

    styleUrls:["./primer.component.css"]
    
    
})
//todo componente debe ser exportado como class
//dicho componente de la clase será el declarado posteriormente
//dentro de module
export class PrimerComponent{
    //vamos a crerar una serie de propiedades
    public titulo : string;
    public descripcion: string;
    public anyo: number;

    constructor() {
        this.titulo = "Viernes";
        this.descripcion = "Aprendiendo Angula a tope";
        this.anyo = 2022;
    }

}

