import LikesRequest from "./network/requests/likes_request";

/**
 * @author ThankGod Richard
 * @desc This class is use to manipulate the dorm for meal listing
 */
export default class MealController {
  
  constructor(meals = [1, 2, 4, 5, 6, 3, 4, 5, 2, 3, 42, 32, 23, 32]) {
    this.meals = meals;
    this.likesArray = []
    this.likeRequest = new LikesRequest();
  }


  

  printAllMeals(rootView = document.body){
    rootView.innerHTML = ""
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
      mealImageTag.setAttribute('src', meal.strMealThumb);
      mealImageTag.setAttribute('alt', 'mealName');
      singleMealCardView.append(mealImageTag);
      /** End of Meals Image */

      /** Meal Name and Likes Section */
      const nameLikesDiv = document.createElement('div');
      nameLikesDiv.className = 'row align-items-center p-3';

      // meal Name
      const mealNameHolder = document.createElement('div');
      mealNameHolder.className = 'col-9';

      const mealNameTagNode = document.createElement('p');
      mealNameTagNode.appendChild(document.createTextNode(meal.strMeal));
      mealNameHolder.append(mealNameTagNode);
      nameLikesDiv.appendChild(mealNameHolder);

      // Meal Likes
      const mealikesHolder = document.createElement('div');
      mealikesHolder.className = 'col-3 d-flex flex-row-reverse';

      const likeTextNode = document.createElement('p');
      likeTextNode.className = "liketext"
      likeTextNode.appendChild(document.createTextNode('Likes'));
      likeTextNode.addEventListener("click",(event) =>{
          event.preventDefault()
          this.likeRequest.postLikes(meal.idMeal, () => {
              this.getLikes(() => {
                document.getElementById(meal.idMeal).innerHTML = `${this.#findLikes(meal.idMeal)["likes"]+1} likes`
              })
          })
      })


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
      pCounterTag.setAttribute("id", meal.idMeal)
      pCounterTag.appendChild(document.createTextNode(`${this.#findLikes(meal.idMeal)["likes"]} likes`));
      counterContainer.appendChild(pCounterTag);
      mealCounterHolder.appendChild(counterContainer);

      singleMealCardView.appendChild(nameLikesDiv);
      singleMealCardView.appendChild(mealCounterHolder);

      /** End of Meal Name and Likes Section */

      /** ********************Meal Buttons  **************** */
      const butttonHolderDiv = document.createElement('div');
      butttonHolderDiv.className = 'row';

      const commentBtnHlder = document.createElement('div');
      commentBtnHlder.className = 'col-12 text-center mb-4';
      const commentBtn = document.createElement('button');
      commentBtn.appendChild(document.createTextNode('Comment'));
      commentBtn.className = 'btn btn-primary';
      commentBtnHlder.appendChild(commentBtn);
      butttonHolderDiv.appendChild(commentBtnHlder);

      singleMealCardView.appendChild(butttonHolderDiv);
      /** ********************End of Meal Buttons  **************** */

      singleMealRootView.appendChild(singleMealCardView);
      rowView.appendChild(singleMealRootView);
    });

    containerView.appendChild(rowView);
    rootView.appendChild(containerView);
  }

  getLikes(callBack= () => {}){
    this.likeRequest.getLikes().then((result) => {
      this.likesArray = result
      callBack()
    })
  }

  #findLikes(id){
    const curr = this.likesArray.find(o => o.item_id === id );
    if(curr == undefined){
      return { likes: 0}
    }else{
      return curr
    }
  }
}