// Start Header
const dropdown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selected-img");
const hamburger = document.querySelector(".hamburger-menu");
const headerMenu = document.querySelector(".header-menu");
const header = document.querySelector("header.header");

$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();
  if (windowScroll >= 110) {
    header.classList.add("header2");
    header.classList.add("shadow");
  } else {
    header.classList.remove("header2");
    header.classList.remove("shadow");
  }
});

let languages = [
  {
    id: 1,
    name: "English",
    img: "assets/img/united-kingdom.png",
  },
  {
    id: 2,
    name: "العربية",
    img: "assets/img/palestine.png",
  },
  {
    id: 3,
    name: "Germany",
    img: "assets/img/germany.png",
  },
  {
    id: 4,
    name: "Italiano",
    img: "assets/img/italy.png",
  },
  {
    id: 5,
    name: "Russia",
    img: "assets/img/russia.png",
  },
  {
    id: 6,
    name: "Français",
    img: "assets/img/france.png",
  },
];

const displayLanguages = () => {
  languages.map((item) => {
    list.innerHTML += `
    <li class="item" onclick="getLanguages(${item.id})">
      <img src="${item.img}" alt="image" class="me-2" />
      <div class="text">${item.name}</div>
    </li>
  `;
  });
};

displayLanguages();

dropdown.addEventListener("click", () => {
  $(list).toggle(400);
});

const getLanguages = (id) => {
  const language = languages.find((item) => item.id === id);
  selected.innerHTML = language.name;
  selectedImg.src = language.img;
  $(list).fadeOut(100);
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("scale-up-center");
});
// End Header
