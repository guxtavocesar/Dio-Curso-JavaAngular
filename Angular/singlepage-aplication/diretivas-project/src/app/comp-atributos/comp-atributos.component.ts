import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo: string = "";
  lista: string[] = [];

  corFundo: string = "blue";
  corDaFonte: string = "white";

  item: string = "";

  isEnableBlock: boolean = false;

  trocar()
  {
    if(this.estilo == 'disable')
    {
      this.estilo = 'enable';
    } else{
      this.estilo = 'disable';
    }
  }

  adicionarLista()
  {
    this.lista.push(this.item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
