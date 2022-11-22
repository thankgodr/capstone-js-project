import NetWorkRequest from '../network_request';

export default class LikesRequest {
    #networRequest;
    #path;

    constructor(gammeID) {
      this.#networRequest = new NetWorkRequest();
      this.#path = `apps/${gammeID}/likes`;
    }

    getLikes = () => {
      return this.#networRequest.get(this.#path, true);
    }

    postLikes = (mealID) => {
        const postBody = {
            "item_id": mealID
        }
        return this.#networRequest.post(this.#path, postBody)
    }
}