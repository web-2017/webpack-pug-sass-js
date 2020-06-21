import { productsData } from '../data/products.data'


const products = [...productsData]

class Products {
  constructor(options) {
    this.data = options.data
    this.classParentElement = options.classParentElement
    this.classElement = options.classElement
    this.classTitle = options.classTitle
    this.classImg = options.classImg
    this.classPrice = options.classPrice
    this.classCity = options.classCity
    this.classDate = options.classDate
  }

  render(){
    let elem = document.querySelector(this.classParentElement)
    this.data.map(product => {
      return elem.innerHTML += `
        <li class=${this.classElement}>
          <img class=${this.classImg} src=${product.src} alt='picture'/>
          <h4 class=${this.classTitle}>${product.title}</h4>
          <p class=${this.classPrice}>${product.price}</p>
          <p class=${this.classCity}>${product.city}</p>
          <p class=${this.classDate}>${product.date}</p>
        </li>
      `
    })
  }
}


const productsRender = new Products({
  data: products,
  classParentElement: '#products_list',
  classElement: 'products__item',
  classImg: 'products__img',
  classTitle: 'products__h4',
  classPrice: 'products__price',
  classCity: 'products__city',
  classDate: 'products__date',
})


productsRender.render()
console.log(productsRender);

