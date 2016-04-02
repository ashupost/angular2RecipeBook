System.register(['angular2/core', "../mock/shopping-list"], function(exports_1, context_1) {
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
    var core_1, shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_1_1) {
                shopping_list_1 = shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getAllItems = function () {
                    return shopping_list_1.SHOPPING_LIST;
                };
                ShoppingListService.prototype.getItem = function (index) {
                    return shopping_list_1.SHOPPING_LIST[index];
                };
                ShoppingListService.prototype.getIndexOfItem = function (item) {
                    return shopping_list_1.SHOPPING_LIST.indexOf(item);
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.push(item);
                };
                ShoppingListService.prototype.insertItems = function (items) {
                    Array.prototype.push.apply(shopping_list_1.SHOPPING_LIST, items);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
                };
                ShoppingListService.prototype.updateItem = function (index, item) {
                    shopping_list_1.SHOPPING_LIST[index] = item;
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkE0QkEsQ0FBQztnQkEzQkEseUNBQVcsR0FBWDtvQkFDQyxNQUFNLENBQUMsNkJBQWEsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBYTtvQkFDcEIsTUFBTSxDQUFDLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsNENBQWMsR0FBZCxVQUFlLElBQWdCO29CQUM5QixNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQWdCO29CQUMxQiw2QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBbUI7b0JBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxJQUFnQjtvQkFDMUIsNkJBQWEsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLEtBQWEsRUFBRSxJQUFnQjtvQkFDekMsNkJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBNUJGO29CQUFDLGlCQUFVLEVBQUU7O3VDQUFBO2dCQTZCYiwwQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQscURBNEJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4vaW5ncmVkaWVudFwiO1xyXG5pbXBvcnQge1NIT1BQSU5HX0xJU1R9IGZyb20gXCIuLi9tb2NrL3Nob3BwaW5nLWxpc3RcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdFNlcnZpY2Uge1xyXG5cdGdldEFsbEl0ZW1zKCkge1xyXG5cdFx0cmV0dXJuIFNIT1BQSU5HX0xJU1Q7XHJcblx0fVxyXG5cclxuXHRnZXRJdGVtKGluZGV4OiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBTSE9QUElOR19MSVNUW2luZGV4XTtcclxuXHR9XHJcblxyXG5cdGdldEluZGV4T2ZJdGVtKGl0ZW06IEluZ3JlZGllbnQpIHtcclxuXHRcdHJldHVybiBTSE9QUElOR19MSVNULmluZGV4T2YoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRpbnNlcnRJdGVtKGl0ZW06IEluZ3JlZGllbnQpIHtcclxuXHRcdFNIT1BQSU5HX0xJU1QucHVzaChpdGVtKTtcclxuXHR9XHJcblxyXG5cdGluc2VydEl0ZW1zKGl0ZW1zOiBJbmdyZWRpZW50W10pIHtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KFNIT1BQSU5HX0xJU1QsIGl0ZW1zKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xyXG5cdFx0U0hPUFBJTkdfTElTVC5zcGxpY2UoU0hPUFBJTkdfTElTVC5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgaXRlbTogSW5ncmVkaWVudCkge1xyXG5cdFx0U0hPUFBJTkdfTElTVFtpbmRleF0gPSBpdGVtO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
