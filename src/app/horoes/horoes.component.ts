import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

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


  constructor() { }

  ngOnInit(): void {
  }

}
