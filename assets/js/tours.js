const rangeSlider = document.querySelectorAll("#range-slider");
const lowers = document.querySelectorAll(".js-lower");
const uppers = document.querySelectorAll(".js-upper");
const openFilter = document.getElementById("open-filter");
const closeFilter = document.getElementById("close-filter");
const filterMenu = document.querySelector(".filter-menu");
const nextCard = document.getElementById("next-card");
const prevCard = document.getElementById("prev-card");

rangeSlider.forEach((range) => {
  noUiSlider.create(range, {
    start: [0, 500],
    connect: true,
    step: 10,
    range: {
      min: 0,
      max: 1800,
    },
  });
  range.noUiSlider.on("update", (value) => {
    for (let lower of lowers) {
      lower.innerHTML = "$" + Number(value[0]);
    }
    for (let upper of uppers) {
      upper.innerHTML = "$" + Number(value[1]);
    }
  });
});

openFilter.addEventListener("click", () => {
  filterMenu.classList.add("is-active");
});

closeFilter.addEventListener("click", () => {
  filterMenu.classList.remove("is-active");
});

const cards = [
  {
    title: "Dolphin Swim &amp; Dolphin Show",
    img: "assets/img/offer1.jpeg",
    price: 70,
    days: "Every Day",
    time: "2:40",
    typeTime: "hours",
  },
  {
    title: "Portable wifi in Sharm-ElSheikh",
    img: "assets/img/offer 2.jpeg",
    price: "Free",
    days: "Every Day",
    time: "40",
    typeTime: "Gp",
  },
  {
    title: "Limosine in Sharm-ElSheikh",
    img: "assets/img/offer 3.jpeg",
    price: "Free",
    days: "Every Day",
    time: "Your Day",
    typeTime: "",
  },
  {
    title: "Morning Adventure in Sharm-ElSheikh",
    img: "assets/img/offer4.jpeg",
    price: 30,
    days: "Every Day",
    time: "2",
    typeTime: "hours",
  },
  {
    title: "Tiran island full day snorkeling &amp; dive",
    img: "assets/img/offer5.jpeg",
    price: 25,
    days: "Every Day",
    time: "9",
    typeTime: "hours",
  },
  {
    title: "Ras mohamed &amp; Safari &amp; white island",
    img: "assets/img/offer6.jpeg",
    price: 50,
    days: "Every Day",
    time: "5",
    typeTime: "hours",
  },
  {
    title: "Private Speed boat &amp; free banana boat",
    img: "assets/img/offer 7.jpeg",
    price: 100,
    days: "Every Day",
    time: "1",
    typeTime: "hours",
  },
  {
    title: "Single Quad Biking",
    img: "assets/img/1.jpg",
    price: 15,
    days: "Every Day",
    time: "3",
    typeTime: "hours",
  },
  {
    title: "Double Buggy Adventures",
    img: "assets/img/2.jpg",
    price: 30,
    days: "Every Day",
    time: "3",
    typeTime: "hours",
  },
  {
    title: "Family Buggy Adventures",
    img: "assets/img/3.jpeg",
    price: 35,
    days: "Every Day",
    time: "3",
    typeTime: "hours",
  },
  {
    title: "Super Safari 5*1",
    img: "assets/img/4.jpg",
    price: 30,
    days: "Ever Day",
    time: "6",
    typeTime: "hours",
  },
  {
    title: "Horse Riding in the desert",
    img: "assets/img/5.jpeg",
    price: 20,
    days: "Every Day",
    time: "2",
    typeTime: "hours",
  },
  {
    title: "Horse Riding in the beach",
    img: "assets/img/6.jpeg",
    price: 30,
    days: "Every Day",
    time: "1",
    typeTime: "hours",
  },
  {
    title: "Camel Riding in the desert",
    img: "assets/img/7.jpeg",
    price: 15,
    days: "Every Day",
    time: "1",
    typeTime: "hours",
  },
  {
    title: "St. Catherine Monastery &amp; Dahab City Tour",
    img: "assets/img/8.jpeg",
    price: 25,
    days: "Monday, Thursday, Saturdaay",
    time: "12",
    typeTime: "hours",
  },
  {
    title: "Jeep Safari Abu Galoom",
    img: "assets/img/9.webp",
    price: 25,
    days: "Sunday, Thursday, Wednesday, Friday",
    time: "10:30",
    typeTime: "hours",
  },
];

let currentPage = 1;
let cardsPerPage = 5;
let pageNumbers = [];

for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
  pageNumbers.push(i);
}

const addNumber = () => {
  document.getElementById("page-numbers").innerHTML = "";
  pageNumbers.map((number) => {
    document.getElementById("page-numbers").innerHTML += `
      <div class="col-auto">
        <button
          class="button blue-1 rounded-5 size-40 ${
            number == currentPage && "bg-blue-1 text-white border-0"
          }"
          onclick="chanegeCards(${number})"
        >
          ${number}
        </button>
      </div>
      `;
  });
};

addNumber();

const displayCard = () => {
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFristPost = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFristPost, indexOfLastCard);
  document.getElementById("display-card").innerHTML = "";
  currentCards.map((card) => {
    document.getElementById("display-card").innerHTML += `
    <div class="col">
      <div class="card border-0 card-product">
        <a href="#">
          <div class="img-hov">
            <img src="${card.img}" alt="" />
          </div>
          <div class="card-body">
            <h4 class="text-dark-1 text-18 fw-500">
              <span>${card.title}</span>
            </h4>
            <p class="mt-2 text-14">Sharm-Elsheikh , Egypt</p>
            <div
              class="d-flex justify-content-between pt-2 align-items-center"
            >
              <div class="text-16 text-light-1">
                Price:
                <span class="fw-500 text-dark-1">${card.price} ${
      typeof card.price == "number" ? "GBP" : ""
    }</span>
              </div>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center x-gap-5">
                  <i
                    class="fa-solid fa-star text-yellow-1 text-10"
                  ></i>
                  <i
                    class="fa-solid fa-star text-yellow-1 text-10"
                  ></i>
                  <i
                    class="fa-solid fa-star text-yellow-1 text-10"
                  ></i>
                  <i
                    class="fa-solid fa-star text-yellow-1 text-10"
                  ></i>
                  <i
                    class="fa-solid fa-star text-yellow-1 text-10"
                  ></i>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-between pt-2 align-items-center"
            >
              <div class="text-16 text-light-1">${card.days}</div>
              <div class="text-16 text-light-1">
                <span class="fw-500 text-dark-1">${card.time}</span>
                ${card.typeTime}
              </div>
            </div>
            <a
              class="button py-3 px-3 dark-1 bg-blue-1 text-white mt-3 border-radius-0"
              href="#"
            >
              Add To Cart
              <i class="fa-solid fa-cart-shopping ms-2"></i>
            </a>
          </div>
        </a>
      </div>
    </div>
    `;
  });
};

displayCard();

const chanegeCards = (number) => {
  currentPage = number;
  displayCard();
  addNumber();
  getNextCard(false);
  getPrevCard(false);
};
nextCard.addEventListener("click", getNextCard);

function getNextCard(type) {
  type != false &&
    (currentPage !== pageNumbers.length &&
      (currentPage++, displayCard(), addNumber()),
    getPrevCard(false));
  if (currentPage === pageNumbers.length) {
    nextCard.disabled = true;
  } else nextCard.disabled = false;
}

prevCard.addEventListener("click", getPrevCard);

function getPrevCard(type) {
  type != false &&
    (currentPage !== 1 && (currentPage--, displayCard(), addNumber()),
    getNextCard(false));
  if (currentPage === 1) {
    prevCard.disabled = true;
  } else prevCard.disabled = false;
}
