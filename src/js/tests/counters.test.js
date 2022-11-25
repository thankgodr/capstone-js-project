import CounterController from '../modules/counter_controller';
import MealController from '../modules/meal_controller';
import GetMeals from '../modules/network/requests/get_meal_request';
import 'isomorphic-fetch';

describe('Test Counter Controller', () => {
  const countController = new CounterController();
  document.body.innerHTML = `<section id="meals" style="background-color: #eee;">
     </section>`;

  test('Test for meall added to the dom', async () => {
    const data = new GetMeals().fetch();
    return data.then((result) => {
      new MealController(result.meals).printAllMeals(document.getElementById('meals'));
      expect(countController.countChildren(document, 'card')).toBe(result.meals.length);
    });
  });
});