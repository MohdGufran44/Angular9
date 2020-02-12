import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c.pxhere.com/photos/53/1f/brunch_food_packages-1068427.jpg!d'),
    new Recipe('A vegetable-garnish', 'This is spicy a test', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-produce-breakfast-meat-lunch-cuisine-asian-food-main-course-meat-dish-hors-d-oeuvre-vegetable-garnish-680258.jpg'),
    new Recipe('A Fruits Recipe', 'This is normal a test', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
