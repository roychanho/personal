import React from "react";

const Observer = () => {
  const cards = document.querySelectorAll(".card");
  // const cardContainer = document.querySelectorAll(".card-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);

      // only load first time
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
    {
      //   lazyload
      //   rootMargin: "100px";
      //   threshold: 1;
    }
  });

  // const lastCardObserver = new IntersectionObserver((entries) => {
  //   let lastCard = entries[0];
  //   if (!lastCard.isIntersecting) return;

  //   // load new elements
  //   loadCard();

  //   lastCardObserver.unobserve(lastCard.target);
  //   lastCardObserver.observe(document.querySelector(".card:last-child"));
  // });

  cards.forEach((card) => {
    observer.observe(card);
  });

  // const loadCard = () => {
  //   for (let i = 0; i < 10; i++) {
  //     const card = document.createElement("div");
  //     card.textContent = "Card";
  //     card.classList.add("card");
  //     observer.observe(card);
  //     cardContainer.append(card);
  //   }
  // };

  return (
    <div className="card-container">
      <div className="card">First card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Card</div>
      <div className="card">Last card</div>
    </div>
  );
};

export default Observer;
