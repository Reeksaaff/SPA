import {
  TreatmentsComponent
} from './treatments.js'

export const CartComponent = {
  render: () => {
    return `
          <section>
            <h1>Cart</h1>
            <p>kupuj </p>
          </section>
        `;
  }
}

let carts = document.querySelectorAll('a'); // czyta wszystkie znaczniki a z index.html
// let carts = document.querySelectorAll('.add-cart'); nie czyta klasy, która jest wrzucona w html napisany w treatments.js
console.log(carts)
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    console.log('added to cart')
  })
}