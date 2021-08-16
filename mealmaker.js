const menu = {
  _courses: {
    appetizers: [],
    mains:[],
    desserts: [],
  },

get appetizers(){
return this._courses.appetizers;
},

set appetizers(appetizer){
this._courses.appetizers=appetizer;
},

get mains(){
return this._courses.mains;
},
set mains(main){
 this._courses.mains=main;
},
get desserts(){
return this._courses.desserts;
},
set desserts(dessert){
 this._courses.desserts=dessert;
},

get courses(){
  return{
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  };
},

addDishToCourse(courseName, dishName,dishPrice){ 
  const dish = { 
    name: dishName, 
    price: dishPrice
};
return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName) {
const dishes = this._courses[courseName];
let randomIndex=Math.floor(Math.random()*dishes.length);
return dishes[randomIndex];
},

generateRandomMeal() {
  let appetizer= this.getRandomDishFromCourse("appetizers");
  let main = this.getRandomDishFromCourse("mains");
  let dessert = this.getRandomDishFromCourse("desserts");
  let totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal will consist of ${appetizer.name} for an appetizer, ${main.name} as the entree, and ${dessert.name} for dessert. The total price for this meal will be ${totalPrice} euro`;
}
};

menu.addDishToCourse('appetizers', 'tempura vegetables', 6.50);
menu.addDishToCourse('appetizers', 'spring rolls', 6.00);
menu.addDishToCourse('appetizers', 'crab legs', 14.00);
menu.addDishToCourse('mains', 'california rolls', 5.50);
menu.addDishToCourse('mains', 'crab sashimi', 13.00);
menu.addDishToCourse('desserts', 'tiramisu', 10.00);
menu.addDishToCourse('desserts', 'sesame cookies', 7.00);
menu.addDishToCourse('desserts', 'cheesecake', 15.00);

const meal = menu.generateRandomMeal();
console.log(meal);//Your meal will consist of crab legs for an appetizer, california rolls as the entree, and sesame cookies for dessert. The total price for this meal will be 26.5 euro