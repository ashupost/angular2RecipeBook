import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipesComponent} from "./recipe-book/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector:    'app',
    templateUrl: 'templates/app.html',
    directives:  [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/recipes',       name: 'Recipes',      component: RecipesComponent,     useAsDefault: true},
	{path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent },
])

export class AppComponent {
}