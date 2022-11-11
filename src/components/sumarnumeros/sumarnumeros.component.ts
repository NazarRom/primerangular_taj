import { Component,ViewChild,ElementRef } from "@angular/core";

@Component({
    selector:"sumar-numeros",
    templateUrl:"./sumarnumero.component.html"
})

export class SumarNumeros{
    //declaramos las referencias a cada elemento del formulario
    @ViewChild("cajanumero1")cajaNumero1!: ElementRef;
    @ViewChild("cajanumero2")cajaNumero2!: ElementRef;
    public suma!: number;
    //en angular todo los objetos debe ser instanciados
    
    sumarNumeros(): void{
        var num1 = this.cajaNumero1.nativeElement.value;
        var num2 = this.cajaNumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}