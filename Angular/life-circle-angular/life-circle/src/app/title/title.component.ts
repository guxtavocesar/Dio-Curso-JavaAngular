import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  // O atributo é se inicia vazio, porém ele é inputável, quem chamá-lo pode alterá-lo
  @Input()nome: string = ''

  constructor()
  {
    console.log(`Constructor ${this.nome}`);

  }

  ngOnInit(): void
  {
    console.log(`OnInit ${this.nome}`);

  }

  ngOnChanges(): void
  {
    // Sempre que um valor é mudado, o OnChanges ocorrerá
    console.log(`OnChanges ${this.nome}`);
  }

}



