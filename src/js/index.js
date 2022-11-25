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
import CreateGameRequest from './modules/network/requests/create_game_request';
import GetMeals from './modules/network/requests/get_meal_request';
import CounterController from './modules/counter_controller';

const gameId = localStorage.getItem('involvementApiGameId');

// Create gameid if not already created
if (gameId === undefined) {
  const createGameRequest = new CreateGameRequest();
  createGameRequest.create().then((gameId) => {
    localStorage.setItem('involvementApiGameId', gameId);
  });
}

new GetMeals().fetch().then((result) => {
  const mealController = new MealController(result.meals);
  mealController.getLikes(() => {
    // Print the meals to screen
    mealController.printAllMeals(document.getElementById('meals'));

    // Update the homePage Counter
    const countController = new CounterController();
    document.getElementById('counter').innerHTML = `(${countController.countChildren(document.getElementById('meals'), 'card')})`;
  });
});
