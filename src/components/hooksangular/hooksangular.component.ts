import { Component,OnInit,DoCheck } from "@angular/core";

@Component({
    selector:"hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit, DoCheck{
public mensaje: string;

constructor(){
    console.log("Entrando en constructor");
    this.mensaje = "Soy Hooks Angular"
}
//implementamos el metodo ngOnInit
ngOnInit(): void {
    console.log("ngOnInit(): Ejecutando este método!!!");
}
ngDoCheck(): void {
    console.log("Ejecutando ngDoCheck");
}
cambiarMensaje(): void {
 this.mensaje = "single day!!!"   

}
}