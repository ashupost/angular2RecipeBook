System.register(['angular2/core', "./shopping-list-edit.component", "../shared/shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.selectedItem = null;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.shoppingList = this._shoppingListService.getAllItems();
                };
                ShoppingListComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onAddItem = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/shopping-list.html',
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQywrQkFBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUY3RCxpQkFBWSxHQUFlLElBQUksQ0FBQztnQkFHaEMsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELDRDQUFZLEdBQVosVUFBYSxJQUFnQjtvQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQseUNBQVMsR0FBVDtvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztnQkF2QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixXQUFXLEVBQUUsOEJBQThCO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQzt3QkFDdkMsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ2hDLENBQUM7O3lDQUFBO2dCQW9CRiw0QkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQseURBa0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2hvcHBpbmctbGlzdC5odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzaG9wcGluZ0xpc3Q6IEluZ3JlZGllbnRbXTtcclxuXHRzZWxlY3RlZEl0ZW06IEluZ3JlZGllbnQgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLnNob3BwaW5nTGlzdCA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0QWxsSXRlbXMoKTtcclxuXHR9XHJcblxyXG5cdG9uU2VsZWN0SXRlbShpdGVtOiBJbmdyZWRpZW50KSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcblx0fVxyXG5cclxuXHRvbkFkZEl0ZW0oKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
