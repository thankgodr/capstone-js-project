const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = '9JcQwe8YeiV9ciPMfpK9';

const commentsHeader = document.querySelector('.comments-container h4');
const spinner = document.querySelector('#comments-spinner');

const getComments = async (id) => {
  commentsHeader.innerHTML = 'Comments (0)';
  spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  await fetch(`${baseURL}${appID}/comments?item_id=${id}`)
    .then((reponse) => reponse.json())
    .then((json) => {
      spinner.innerHTML = '';
      commentsCounter(json, commentsHeader);
      const commentsList = document.querySelector('.comment');
      commentsList.innerHTML = '';
      json.forEach((comment) => {
        const newComment = document.createElement('li');
        newComment.innerHTML = `<span class="date">${comment.creation_date}</span><span class="name">${comment.username}:</span> <span
              class="comment-text">${comment.comment}</span>`;
        commentsList.appendChild(newComment);
      });
    });
};

const postComment = async (username, comment, id) => {
  await fetch(`${baseURL}${appID}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    getComments(id);
  });
};

const commentsCounter = (data, link) => {
    if (data.length) {
      link.innerHTML = `Comments (${data.length})`;
    }
    return data.length;
};

export { postComment, getComments, commentsCounter};