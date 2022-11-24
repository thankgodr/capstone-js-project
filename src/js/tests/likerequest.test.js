import CreateGameRequest from '../modules/network/requests/create_game_request';
import LikesRequest from '../modules/network/requests/likes_request';
import 'isomorphic-fetch';// eslint-disable-line

// Mockng local storage
global.localStorage = {
  state: {
    gameKey: process.env.APP_ID,
  },

  setItem(key, item) {
    this.state[key] = item;
  },
  getItem(key) {
    return this.state[key];
  },
  clear() {
    this.state = {};
  },
};

describe('Testing the Involment api for game creation', () => {
  const createGame = new CreateGameRequest();
  test('Tetsing game created', async () => {
    const data = createGame.create();
    return data.then((result) => {
      localStorage.setItem('gameKey', result);
      expect(result.length > 0).toBe(true);
    });
  });
});

describe('Testing the Involment API to post and get likes', () => {
  const gammeID = '9JcQwe8YeiV9ciPMfpK9';
  const likesRequest = new LikesRequest(gammeID);
  test('Tetsing post likes', async () => {
    const data = likesRequest.postLikes('123443');
    return data.then((result) => {
      expect(result).toBe('Created');
    });
  });

  test('Tetsing get likes', async () => {
    const data = likesRequest.getLikes();
    return data.then((result) => {
      expect(result[0].likes > 0).toBe(true);
    });
  });
});