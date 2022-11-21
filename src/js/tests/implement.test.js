import Tans from '../modules/tans';

test('Tetsting Jest is instaed', () => {
  const tan = new Tans();
  expect(tan.add(2, 2)).toBe(4);
});