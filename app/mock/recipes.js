System.register(["../shared/recipe", "../shared/ingredient"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Wiener Schnitzel', 'A tasty Schnitzel', 'url', [
                    new ingredient_1.Ingredient('Pork Meat', 1),
                    new ingredient_1.Ingredient('French Fries', 1),
                    new ingredient_1.Ingredient('Salad', 2),
                ]),
                new recipe_1.Recipe('Super Mega Burger', 'Tastes so delicious!', 'url', [
                    new ingredient_1.Ingredient('Buns', 4),
                    new ingredient_1.Ingredient('Salad', 1),
                    new ingredient_1.Ingredient('Paddies', 4),
                    new ingredient_1.Ingredient('Vegetables', 2),
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBR1csT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDOUIsSUFBSSxlQUFNLENBQUMsa0JBQWtCLEVBQzVCLG1CQUFtQixFQUNuQixLQUFLLEVBQ0w7b0JBQ0MsSUFBSSx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzlCLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLHVCQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDMUIsQ0FDRDtnQkFDRCxJQUFJLGVBQU0sQ0FBQyxtQkFBbUIsRUFDN0Isc0JBQXNCLEVBQ3RCLEtBQUssRUFDTDtvQkFDQyxJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDekIsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzFCLElBQUksdUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixJQUFJLHVCQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDL0IsQ0FDRDthQUNELENBQUEsQ0FBQyIsImZpbGUiOiJtb2NrL3JlY2lwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcclxuXHJcbmV4cG9ydCBsZXQgUkVDSVBFUzogUmVjaXBlW10gPSBbXHJcblx0bmV3IFJlY2lwZSgnV2llbmVyIFNjaG5pdHplbCcsIFxyXG5cdFx0J0EgdGFzdHkgU2Nobml0emVsJyxcclxuXHRcdCd1cmwnLFxyXG5cdFx0W1xyXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnUG9yayBNZWF0JywgMSksXHJcblx0XHRcdG5ldyBJbmdyZWRpZW50KCdGcmVuY2ggRnJpZXMnLCAxKSxcclxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1NhbGFkJywgMiksXHJcblx0XHRdXHJcblx0KSxcclxuXHRuZXcgUmVjaXBlKCdTdXBlciBNZWdhIEJ1cmdlcicsIFxyXG5cdFx0J1Rhc3RlcyBzbyBkZWxpY2lvdXMhJyxcclxuXHRcdCd1cmwnLFxyXG5cdFx0W1xyXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnQnVucycsIDQpLFxyXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnU2FsYWQnLCAxKSxcclxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1BhZGRpZXMnLCA0KSxcclxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1ZlZ2V0YWJsZXMnLCAyKSxcclxuXHRcdF1cclxuXHQpIFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
