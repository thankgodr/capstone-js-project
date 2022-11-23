/**
 * @author ThankGod Richard
 * @usecase Importin Bootstrap
 */
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

/**
 * @author ThankGod Richard
 * @usecase Importin FontAwesom
 */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

/** Import custom css */
import '../css/style.css';

import MealController from './modules/meal_controller';
import displayPopup from '../js/modules/popup';

const mealController = new MealController();
mealController.printAllMeals(document.getElementById('meals'));
const getData = () => {
    displayPopup();
  };
  
  const display = async () => {
    await getData();
  };
  
  display();