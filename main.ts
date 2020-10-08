let LABOUR_COST = 0.75
let RENT_OF_SHOP = 1
let HST = 1.13
let diameter_of_the_pizza = game.askForNumber("What is the diameter of your pizza? (inches)")
let materials_for_pizza = 0.5 * diameter_of_the_pizza
let labour_and_rent = LABOUR_COST + RENT_OF_SHOP
let cost_of_pizza = labour_and_rent + materials_for_pizza
let Cost_of_pizza_and_tax = cost_of_pizza * HST
game.splash("The cost of your " + diameter_of_the_pizza + "inch pizza is $" + Math.round(Cost_of_pizza_and_tax) + "(HST included)")
