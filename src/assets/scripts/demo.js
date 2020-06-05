// import { data } from "../data/dummy.data";

// let allData = [];

// function getData(data) {
//   try {
//     allData.push(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// getData(data);

// class RenderDates {
//   constructor(options) {
//     this.getClass = options.getClass;
//     this.className = options.className;
//     this.tagElement = options.tagElement;
//     this.data = options.data;
//   }

//   render() {
//     const getElem = document.querySelector(this.getClass);

//     data.forEach((elem) => {
//       getElem.innerHTML += `
//       <${this.tagElement}>
//         <h4>${elem.title}</h4>
//         <img src=${elem.srcImg} class=${this.className}>

//       </${this.tagElement}
//       <${this.tagElement} ></${this.tagElement}>
//       <${this.tagElement}>${elem.city}</${this.tagElement}>
//     `;
//     });
//   }
// }

// const newRender = new RenderDates({
//   getClass: ".list",
//   className: "img-test",
//   tagElement: "li",
//   data: allData,
// });
// newRender.render();
