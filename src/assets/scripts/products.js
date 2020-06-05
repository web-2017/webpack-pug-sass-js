import { data } from "../data/dummy.data";

// const products = data.map((product) => {
//   return product;
// });

function getProducts(param) {
  let result;
  try {
    result = [...param];
    return result;
  } catch (error) {
    console.log("Error", error);
  }
}

// get data
const products = getProducts(data);
console.log(products);

class Products {
  constructor(options) {
    this.getElem = options.getElem;
    this.classNameLi = options.classNameLi;
    this.classNameTitle = options.classNameTitle;
    this.classNameImage = options.classNameImage;
    this.classNamePrice = options.classNamePrice;
    this.classNameOptions = options.classNameOptions;
    this.data = options.data;
  }

  render() {
    let getElement = document.querySelector(this.getElem);
    console.log(1, getElement);

    this.data.map((product) => {
      let img = product.srcImg
        ? product.srcImg
        : "https://lh3.googleusercontent.com/proxy/H7LmYzo7hvtn7gykM52TTU0xwV7Am23oHU1hYGnElAgnJ_3kyyeaMAjn0M8XMGtGZ3K1NTFQ-azC2byRhav4anQ9crBxQsfjfdHVVDiwjJW1j2Xd9siXUiUcXQ";

      let year = product.year ? product.year : "";
      getElement.innerHTML += `
        <li class='${this.classNameLi}'>
          <img class=${this.classNameImage} src=${img} />
          <h3 class=${this.classNameTitle}>${product.title} ${year}</h3>
          <p class=${this.classNamePrice}>${product.price}</p>
          <p class=${this.classNameOptions}>${product.city}</p>
          <p class=${this.classNameOptions}>${product.date}</p>
        </li>
      `;
    });
  }
}

const cardShow = new Products({
  getElem: "#categoryProduct",
  data: products,
  classNameLi: "products__item",
  classNameTitle: "products__title",
  classNameImage: "products__img",
  classNamePrice: "products__price",
  classNameOptions: "products__desc",
});

cardShow.render();

console.log(cardShow);
