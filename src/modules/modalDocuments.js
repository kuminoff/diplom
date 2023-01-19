"use strict";

const modalDocuments = () => {
  const documents = document.querySelectorAll(".sertificate-document");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  documents.forEach((doc) => {
    const docImgSrc = doc.querySelector("img").src.split("/")[5];
    const docImg = document.createElement("div");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("doc-btn");
    closeBtn.innerHTML = `<img class = "popup-close-btn-img" src = "./images/cross-svgrepo-com.svg">`;
    docImg.classList.add("doc");
    docImg.innerHTML = `<img class="document-img" src="../images/documents/original/${docImgSrc}"></img>`;
    docImg.append(closeBtn);
    body.append(docImg);

    docImg.style.display = "none";

    doc.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.style.display = "block";
      docImg.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
      docImg.style.display = "none";
    });
  });
};

export default modalDocuments;
