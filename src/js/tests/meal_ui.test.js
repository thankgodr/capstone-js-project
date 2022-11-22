import MealController from '../modules/meal_controller';

describe('Testing the meal is Printed out to dorm', () => {
  // Arrange
  /** Mocking the document using Js-dom */
  document.body.innerHTML = `<section id="meals" style="background-color: #eee;">
     </section>`;
  const mealController = new MealController([1, 2, 3, 4]);

  // Act
  mealController.printAllMeals(document.getElementById('meals'));

  // Assert
  test('Test that the children printer are 4', () => {
    const childCount = document.getElementsByClassName('card');
    expect(childCount.length).toBe(mealController.meals.length);
  });
});