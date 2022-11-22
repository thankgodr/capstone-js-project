/**
 * @author ThankGod Richard
 * @desc This class is use to manipulate the dorm for meal listing
 */
export default class MealController {
  constructor(meals = [1, 2, 4, 5, 6, 3, 4, 5, 2, 3, 42, 32, 23, 32]) {
    this.meals = meals;
  }

  printAllMeals(rootView = document.body) {
    const containerView = document.createElement('div');
    containerView.className = 'container py-5';
    const rowView = document.createElement('div');
    rowView.className = 'row';

    this.meals.forEach((meal) => {
      const singleMealRootView = document.createElement('div');
      singleMealRootView.className = 'col-md-6 col-lg-4 col-sm-12 mb-4 mb-lg-12';

      const singleMealCardView = document.createElement('div');
      singleMealCardView.className = 'card';

      //* *******************Top View **********************************/

      const singleMealTopView = document.createElement('div');
      singleMealTopView.className = 'd-flex justify-content-between p-3';

      const todaysMealTagView = document.createElement('p');
      const todatmealtext = document.createTextNode('Todays Meal');
      todaysMealTagView.appendChild(todatmealtext);
      singleMealTopView.appendChild(todaysMealTagView);

      const topCircleView = document.createElement('div');
      topCircleView.className = 'bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong top_circleView';
      const topCircleNode = document.createElement('p');
      topCircleNode.className = 'text-white mb-0 small';
      topCircleNode.appendChild(document.createTextNode('x3'));
      topCircleView.appendChild(topCircleNode);
      singleMealTopView.append(topCircleView);

      singleMealCardView.appendChild(singleMealTopView);
      //* *******************End of Top View **********************************/

      /** Meals Image */
      const mealImageTag = document.createElement('img');
      mealImageTag.className = 'card-img-top';
      mealImageTag.setAttribute('src', 'https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E=');
      mealImageTag.setAttribute('alt', 'mealName');
      singleMealCardView.append(mealImageTag);
      /** End of Meals Image */

      /** Meal Name and Likes Section */
      const nameLikesDiv = document.createElement('div');
      nameLikesDiv.className = 'row align-items-center p-3';

      // meal Name
      const mealNameHolder = document.createElement('div');
      mealNameHolder.className = 'col-6';

      const mealNameTagNode = document.createElement('p');
      mealNameTagNode.appendChild(document.createTextNode(`Meal ${meal}`));
      mealNameHolder.append(mealNameTagNode);
      nameLikesDiv.appendChild(mealNameHolder);

      // Meal Likes
      const mealikesHolder = document.createElement('div');
      mealikesHolder.className = 'col-6 d-flex flex-row-reverse';

      const likeTextNode = document.createElement('p');
      likeTextNode.appendChild(document.createTextNode('Likes'));

      const likesIconNode = document.createElement('i');
      likesIconNode.className = 'fas fa-heart hertIcon';

      mealikesHolder.appendChild(likesIconNode);
      mealikesHolder.appendChild(likeTextNode);
      nameLikesDiv.appendChild(mealikesHolder);

      // Likes Counter
      const mealCounterHolder = document.createElement('div');
      mealCounterHolder.className = 'row p-3';
      const counterContainer = document.createElement('div');
      counterContainer.className = 'col-12 d-flex flex-row-reverse';
      const pCounterTag = document.createElement('p');
      pCounterTag.appendChild(document.createTextNode('5 likes'));
      counterContainer.appendChild(pCounterTag);
      mealCounterHolder.appendChild(counterContainer);

      singleMealCardView.appendChild(nameLikesDiv);
      singleMealCardView.appendChild(mealCounterHolder);

      /** End of Meal Name and Likes Section */

      /** ********************Meal Buttons  **************** */
      const butttonHolderDiv = document.createElement('div');
      butttonHolderDiv.className = 'row';

      const commentBtnHlder = document.createElement('div');
      commentBtnHlder.className = 'col-12 text-center';
      const commentBtn = document.createElement('button');
      commentBtn.appendChild(document.createTextNode('Comment'));
      commentBtn.className = 'btn btn-primary';
      commentBtnHlder.appendChild(commentBtn);
      butttonHolderDiv.appendChild(commentBtnHlder);

      const reservationBtnHlder = document.createElement('div');
      reservationBtnHlder.className = 'col-12 text-center mt-2 mb-2';
      const reservationBtn = document.createElement('button');
      reservationBtn.appendChild(document.createTextNode('Reservations'));
      reservationBtn.className = 'btn btn-primary';
      reservationBtnHlder.appendChild(reservationBtn);
      butttonHolderDiv.appendChild(reservationBtnHlder);

      singleMealCardView.appendChild(butttonHolderDiv);
      /** ********************End of Meal Buttons  **************** */

      singleMealRootView.appendChild(singleMealCardView);
      rowView.appendChild(singleMealRootView);
    });

    containerView.appendChild(rowView);
    rootView.appendChild(containerView);
  }
}