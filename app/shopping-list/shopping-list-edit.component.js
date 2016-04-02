System.register(['angular2/core', "../shared/shopping-list.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListEditComponent.prototype.onSubmit = function (item) {
                    this.ingredient !== null
                        ? this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item)
                        : this._shoppingListService.insertItem(item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.ingredient);
                    this.ingredient = null;
                };
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        templateUrl: 'templates/my-shopping-list-edit.html',
                        inputs: ['ingredient'],
                        styleUrls: ['src/css/shopping-list.css'],
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUdDLG1DQUFvQixvQkFBeUM7b0JBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQUcsQ0FBQztnQkFFakUsNENBQVEsR0FBUixVQUFTLElBQWdCO29CQUN4QixJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7MEJBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDOzBCQUNyRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQUVELDRDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO2dCQXRCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdEIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQ3hDLENBQUM7OzZDQUFBO2dCQWtCRixnQ0FBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsaUVBZ0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LXNob3BwaW5nLWxpc3QtZWRpdCcsXHJcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbXktc2hvcHBpbmctbGlzdC1lZGl0Lmh0bWwnLFxyXG5cdGlucHV0czogWydpbmdyZWRpZW50J10sXHJcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2hvcHBpbmctbGlzdC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50IHtcclxuXHRpbmdyZWRpZW50OiBJbmdyZWRpZW50O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxyXG5cclxuXHRvblN1Ym1pdChpdGVtOiBJbmdyZWRpZW50KSB7XHJcblx0XHR0aGlzLmluZ3JlZGllbnQgIT09IG51bGxcclxuXHRcdFx0PyB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLnVwZGF0ZUl0ZW0odGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRJbmRleE9mSXRlbSh0aGlzLmluZ3JlZGllbnQpLCBpdGVtKVxyXG5cdFx0XHQ6IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbShpdGVtKTtcclxuXHJcblx0fVxyXG5cclxuXHRvbkRlbGV0ZSgpIHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVsZXRlSXRlbSh0aGlzLmluZ3JlZGllbnQpO1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50ID0gbnVsbDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
