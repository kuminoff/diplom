"use strict";

const showComments = (data) => {
  const commentContainer = document.querySelector(".comments-container");

  let i = 0;

  const showCommentsThree = () => {
    commentContainer.innerHTML = "";

    const dataComments = [
      data.comments[i],
      data.comments[i + 1],
      data.comments[i + 2],
    ];

    dataComments.forEach((comment) => {
      let div = document.createElement("div");
      div.classList.add("review-margin-bottom", "row", "comment-item");

      if (comment.id % 2 === 0) {
        div.innerHTML = `
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                    <img src="../images/users/${
                      comment.image !== "" ? comment.image : "face-default.png"
                    }" alt="" class="img-responsive avatar">
                    </div>
                </div>
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-green review-arrow review-arrow-left">
                        <p class="text-normal">${comment.author}</p>
                        <p>${comment.comment}</p>
                    </div>
                </div>
                </div>
                `;
      } else {
        div.innerHTML = `
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-gray review-arrow review-arrow-right">
                        <p class="text-normal">${comment.author}</p>
                        <p>${comment.comment}</p>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="../images/users/${
                          comment.image !== ""
                            ? comment.image
                            : "face-default.png"
                        }" alt="" class="img-responsive avatar">
                    </div>
                </div>
                </div>
                `;
      }

      commentContainer.append(div);
    });
  };

  showCommentsThree();

  setInterval(() => {
    if (i < data.comments.length - 3) {
      i++;
    } else {
      i = 0;
    }
    showCommentsThree();
  }, 200000000000000);
};

export default showComments;
