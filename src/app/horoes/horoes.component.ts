import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-horoes',
  templateUrl: './horoes.component.html',
  styleUrls: ['./horoes.component.css']
})
export class HoroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[] = []; 
  selectedHero?: Hero; 

  constructor(
    private heroService: HeroService
    ) { }


  
  getHeroes(): void{
     this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes
    );
  }
   
  ngOnInit(): void {
    this.getHeroes();
  }

  
}
