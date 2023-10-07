import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador:Router
    ) {

    //Recuperando parametros - http://localhost:4200/portfolio/55
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    // Recuperando Query params - http://localhost:4200/portfolio/55?nome=gustavo&batman=dccomics
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
   }

  ngOnInit(): void {

    // Forcar componente a fazer alguma rota
    setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
