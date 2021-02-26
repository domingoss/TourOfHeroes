import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heroes'

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

  heroes= HEROES;
  selectedHero?: Hero; 

  constructor() { }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
   
  ngOnInit(): void {
  }

}
