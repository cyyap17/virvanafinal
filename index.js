"use strict";
//Event for Sliding Big Title

// const slide1 = document.querySelector("#sliding-1");
// const slide2 = document.querySelector("#sliding-2");
// const slide3 = document.querySelector("#sliding-3");
// const slide4 = document.querySelector("#sliding-4");
// const slide5 = document.querySelector("#sliding-5");
// const slides = [slide1, slide2, slide3, slide4, slide5];
// let num = 1;

// setInterval(function () {
//   if (num === 0 || num === 1 || num === 2 || num === 3 || num === 4) {
//     slides.forEach((slide) => (slide.style.display = "none"));
//     slides[num].style.display = "block";
//     num++;
//   } else if (num > 4) {
//     num = 0;
//   }
// }, 4000);

//Tab Component for Services

const serviceTabContainer = document.querySelector("#service-tab-container");
const serviceTabs = document.querySelectorAll(".service-tab");
const servicesContent = document.querySelectorAll(".service-content");

serviceTabContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const click = e.target.closest(".service-tab");
  console.log(click);

  if (!click) console.log("no such element");
  serviceTabs.forEach((tab) => tab.classList.remove("active-li"));
  click.classList.add("active-li");

  servicesContent.forEach((content) =>
    content.classList.remove(
      "active-row",
      "animate__animated",
      "animate__slideInRight"
    )
  );

  document
    .querySelector(`.service-content-${Math.floor(click.dataset.service)}`)
    .classList.add("active-row", "animate__animated", "animate__slideInRight");
});

//Tab Component for Products

const productTabContainer = document.querySelector("#product-tab-container");
const productTabs = document.querySelectorAll(".product-tab");
const productContent = document.querySelectorAll(".product-content");

productTabContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const click = e.target.closest(".product-tab");
  if (!click) console.log("no such element");
  productTabs.forEach((tab) => tab.classList.remove("active-li"));
  click.classList.add("active-li");

  productContent.forEach((content) =>
    content.classList.remove(
      "active-row",
      "animate__animated",
      "animate__slideInRight"
    )
  );

  document
    .querySelector(`.product-content-${Math.floor(click.dataset.product)}`)
    .classList.add("active-row", "animate__animated", "animate__slideInRight");
});

//Intersection Observer API for sticky Nav, fix whatsapp and fix scroll up
const header = document.querySelector("header");
const navbar = document.querySelector("nav");
const sectionPromotion = document.querySelector("#promotion");
const whatsapp = document.querySelector("#whatsapp");
const goUp = document.querySelector("#go-up");

const navObsOne = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      navbar.classList.add(
        "fixed-top",
        "sticky",
        "nav--bg--sticky",
        "animate__animated",
        "animate__slideInDown"
      );
      whatsapp.style.display = "flex";
      goUp.style.display = "flex";
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

navObsOne.observe(header);

const navObsTwo = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      navbar.classList.remove(
        "fixed-top",
        "sticky",
        "nav--bg--sticky",
        "animate__animated",
        "animate__slideInDown"
      );
      whatsapp.style.display = "none";
      goUp.style.display = "none";
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);

navObsTwo.observe(header);

// Intersection Observer API for Promotion

const promotions = Array.from(document.querySelectorAll(".promotion"));

const promoObserver = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.add(
        "animate__animated",
        "animate__slideInUp",
        "promotion-opacity"
      );
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);

promotions.forEach((promotion) => {
  promoObserver.observe(promotion);
});

const service = document.querySelector("#service");

const s1 = document.querySelector(".service-one");
const s2 = document.querySelector(".service-two");
const s3 = document.querySelector(".service-three");
const s4 = document.querySelector(".service-four");
const s5 = document.querySelector(".service-five");

const serviceObserver = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      s1.classList.add("animate__animated", "animate__fadeInRight");
      s2.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-1s"
      );
      s3.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-2s"
      );
      s4.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-3s"
      );
      s5.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-4s"
      );
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

serviceObserver.observe(service);

// Intersection Observer API for Product

const product = document.querySelector("#product");

const p1 = document.querySelector(".product-one");
const p2 = document.querySelector(".product-two");
const p3 = document.querySelector(".product-three");
const p4 = document.querySelector(".product-four");
const p5 = document.querySelector(".product-five");

const productObserver = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      p1.classList.add("animate__animated", "animate__fadeInRight");
      p2.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-1s"
      );
      p3.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-2s"
      );
      p4.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-3s"
      );
      p5.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__delay-4s"
      );
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

productObserver.observe(product);

// Intersection Observer API for Contact box

const contact = document.querySelector(".contact-animation");

const contactObs = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      contact.classList.add("animate__animated", "animate__fadeInUp");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

contactObs.observe(contact);

// Fading link hover effect

const navParent = document.querySelector(".navbar--ul");

const fn = function (e) {
  if (e.target.classList.contains("nav-link-item")) {
    const link = e.target;
    const links = link
      .closest(".navbar--ul")
      .querySelectorAll(".nav-link-item");

    links.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
  }
};

navParent.addEventListener("mouseover", fn.bind(0.5));
navParent.addEventListener("mouseout", fn.bind(1));
