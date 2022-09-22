const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "MOLETOM",
    price: 70,
    colors: [
      {
        code: "pink",
        img: "./img/21_09_2022 18_31_46.png",
      },
      {
        code: "black",
        img: "./img/92E335F4-F843-4F7F-B334-9850519E28D5.png",
      },
    ],
  },
  {
    id: 2,
    title: "CANECA",
    price: 45,
    colors: [
      {
        code: "pink",
        img: "./img/E61ED215-EB33-46CE-BF96-AB7AA8206F0A.png",
      },
      {
        code: "SaddleBrown",
        img: "./img/99184b79-8060-40DB-A71B-8D15B6F398FD.png",
      },
    ],
  },
  {
    id: 3,
    title: "ALMOFADA",
    price: 35,
    colors: [
      {
        code: "SaddleBrown",
        img: "./img/8C673588-0513-4371-A62B-95A03AD946C8.png",
      },
      {
        code: "blue",
        img: "./img/5EB6AC88-18C1-4E2F-A89A-F2F6EB1C973A.png",
      },
    ],
  },
  {
    id: 4,
    title: "Quadro",
    price: 55,
    desc: "sla",
    colors: [
      {
        code: "cornflowerblue",
        img: "./img/81B72942-DF54-4E31-8F6D-02582686475D.png",
      },
      {
        code: "SaddleBrown",
        img: "./img/ADD83288-FFD8-44F2-B6F7-19B7B22534AD.png",
      },
    ],
  },
  {
    id: 5,
    title: "MDF",
    price: 65,
    colors: [
      {
        code: "blue",
        img: "./img/4940E230-C9D1-4AB5-8B82-4AA515D4BC60.png",
      },
      {
        code: "SaddleBrown",
        img: "./img/47158A59-2C7A-4F49-BCC8-CAAB0DF63E29.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelectorAll(".Desc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //Slide através do índice dos produtos 
    choosenProduct = products[index];

    //Atribuição de título e valor ao produto
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "R$" + choosenProduct.price;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductImg.src = choosenProduct.colors[0].img;

    //atribuição de cores 
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});