import {Component} from 'angular2/core';
import {ShoppingListEditComponent} from "./shopping-list-edit.component";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shared/shopping-list.service";
import {OnInit} from 'angular2/core';

@Component({
	templateUrl: 'templates/shopping-list.html',
	directives: [ShoppingListEditComponent],
	providers: [ShoppingListService],
})

export class ShoppingListComponent implements OnInit {
	shoppingList: Ingredient[];
	selectedItem: Ingredient = null;

	constructor(private _shoppingListService: ShoppingListService) {
	}

	ngOnInit():any {
		this.shoppingList = this._shoppingListService.getAllItems();
	}

	onSelectItem(item: Ingredient) {
		this.selectedItem = item;
	}

	onAddItem() {
		this.selectedItem = null;
	}
}