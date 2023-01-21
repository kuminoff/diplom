"use strict";

const getComments = (url) => {
  const commentContainer = document.querySelector(".comments-container");
  commentContainer.innerHTML = `<img class="comments-load-img" src="../images/loading-svgrepo-com.svg">`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export default getComments;
