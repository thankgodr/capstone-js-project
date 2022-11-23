import NetWorkRequest from '../network_request';

export default class LikesRequest {
    #networRequest;
    #path;

    constructor(gammeID = "9JcQwe8YeiV9ciPMfpK9") {
      this.#networRequest = new NetWorkRequest();
      this.#path = `apps/${gammeID}/likes`;
    }

    getLikes = () => {
      return this.#networRequest.get(this.#path, true);
    }

    postLikes = (mealID, callback = () => {}) => {
        const postBody = {
            "item_id": mealID
        }
        const result = this.#networRequest.post(this.#path, postBody)
        callback();
        return result
    }
}