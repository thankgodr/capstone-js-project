/**
 * @jest-environment jsdom
 */

import commentsCounter from '../modules/comment_counter.js';

describe('Testing comments counter', () => {
  // Arrange
  const link = document.createElement('p');
  const data = [
    {
      username: 'motsow',
      creation_date: '2022-11-24',
      comment: 'Delicious!',
    },
    {
      comment: 'taste good',
      username: 'richard',
      creation_date: '2022-11-24',
    },
    {
      creation_date: '2022-11-24',
      comment: 'me',
      username: 'comment',
    },
  ];

  // Act
  const count = commentsCounter(data, link);

  // Assert
  test('Number of comments is 3', () => { expect(count).toBe(3); });
});

describe('Testing comments counter', () => {
  // Arrange
  const link = document.createElement('p');
  const data = [];

  // Act
  const count = commentsCounter(data, link);

  // Assert
  test('Number of comments is 0', () => { expect(count).toBe(0); });
});