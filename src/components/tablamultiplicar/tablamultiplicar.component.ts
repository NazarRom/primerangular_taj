import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "tabla-multiplicar",
    templateUrl: "./tablamultiplicar.component.html"
})

export class TablaMultiplicar {
    @ViewChild("cajanumero") cajanumero!: ElementRef;
    public num!:number;
    public numeros!: Array<number>;

    multiplicarNumeros(): void {
        this.num = this.cajanumero.nativeElement.value;
        var aux = [];
        for (var i = 1; i <= 10; i++) {
            var nums = this.num * i;
            aux.push(nums);
        }
        this.numeros = aux;
        console.log(this.numeros)
    }
}