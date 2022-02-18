import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the description of a test recipe', 'https://realfood.tesco.com/media/images/RFO-1400x919-Pasta-mini-mini-b876d7d9-32d3-4568-8803-1dfe995043d4-0-1400x919.jpg'),
    new Recipe('A Test Recipe', 'This is the description of a test recipe', 'https://realfood.tesco.com/media/images/RFO-1400x919-Pasta-mini-mini-b876d7d9-32d3-4568-8803-1dfe995043d4-0-1400x919.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
