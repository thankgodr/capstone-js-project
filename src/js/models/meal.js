export default class Meal {
    instructions;

    likes = 0;

    comments = [];

    constructor(id, name, thumbnailImage) {
      this.id = id;
      this.name = name;
      this.thumbnailImage = thumbnailImage;
    }
}