const menuItems = [
  {
    id: 1,
    item: "Food Item-01",
    oneliner: "One: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "Item-01.jpg",
    hotel: "Hotel Name-01",
    desc: "One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium aperiam autem labore magnam illo doloremque perspiciati similique totam ex.",
  },

  {
    id: 2,
    item: "Food Item-02",
    oneliner: "two: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "Item-02.jpg",
    hotel: "Hotel Name-02",
    desc: "Two: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium aperiam autem labore magnam illo doloremque perspiciati similique totam ex.",
  },

  {
    id: 3,
    item: "Food Item-03",
    oneliner:
      "Three: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "Item-03.jpg",
    hotel: "Hotel Name-03",
    desc: "Three: eLorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium aperiam autem labore magnam illo doloremque perspiciati similique totam ex.",
  },

  {
    id: 4,
    item: "Food Item-04",
    oneliner: "Four: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "Item-04.jpg",
    hotel: "Hotel Name-04",
    desc: "Four: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium aperiam autem labore magnam illo doloremque perspiciati similique totam ex.",
  },

  {
    id: 5,
    item: "Food Item-05",
    oneliner: "Five: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "Item-05.jpg",
    hotel: "Hotel Name-05",
    desc: "Five: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium aperiam autem labore magnam illo doloremque perspiciati similique totam ex.",
  },
];

const item = document.getElementById("item");
const oneLiner = document.getElementById("oneLiner");
const img = document.getElementById("img");
const hotel = document.getElementById("hotel");
const desc = document.getElementById("desc");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let currentMenu = 0;
window.addEventListener("DOMContentLoaded", function () {
  allMenu(currentMenu);
});

const allMenu = () => {
  let menu = menuItems[currentMenu];
  item.textContent = menu.item;
  oneLiner.textContent = menu.oneliner;
  img.src = menu.img;
  hotel.textContent = menu.hotel;
  desc.textContent = menu.desc;
};

random.addEventListener("click", () => {
  currentMenu = Math.floor(Math.random() * menuItems.length);
  allMenu(currentMenu);
});

prev.addEventListener("click", () => {
  currentMenu--;
  if (currentMenu < 0) {
    currentMenu = menuItems.length - 1;
  }
  allMenu(currentMenu);
});

next.addEventListener("click", () => {
  currentMenu++;
  if (currentMenu > menuItems.length - 1) {
    currentMenu = 0;
  }
  allMenu(currentMenu);
});
