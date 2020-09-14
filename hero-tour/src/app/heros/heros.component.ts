import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  //heros = HEROS;
  selectedHero : Hero;

  heros : Hero[];

  onSelect(hero : Hero){
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

  getHeros() : void{
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros);
  }

  constructor(private messageService : MessageService , private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

}
