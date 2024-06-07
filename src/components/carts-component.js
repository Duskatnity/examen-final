class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        "product": "Gratis",
        "price": 0,
        "content": [
          "10 usuarios incluidos",
          "2 GB de almacenamiento",
          "Soporte de correo electrónico",
          "Acceso al centro de ayuda"
        ],
        "button": "Registrate gratis"
      },
      {
        "product": "Pro",
        "price": 15,
        "content": [
          "20 usuarios incluidos",
          "10 GB de almacenamiento",
          "Soporte prioritario por correo electrónico",
          "Acceso al centro de ayuda"
        ],
        "button": "Empezar"
      },
      {
        "product": "Empresa",
        "price": 29,
        "content": [
          "30 usuarios incluidos",
          "15 GB de almacenamiento",
          "Soporte telefónico y por correo electrónico",
          "Acceso al centro de ayuda"
        ],
        "button": "Contáctenos"
      },
    ]
  }
  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
      .cart-list {
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
      }

      .product {
        width: 20rem;
        border: solid hsla(76, 0%, 28%, 1) 1px;
        border-radius: 1rem;
        padding: 0;
        color: hsla(76, 0%, 87%, 1);
      }

      .product-empresa {
        border-color: hsla(230, 88%, 49%, 1);
      }

      .product-name {
        display: flex;
        justify-content: center;
        background-color: hsla(76, 0%, 17%, 1);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom: solid hsla(76, 0%, 28%, 1) 1px;
      }

      .product-details {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 2rem;
      }

      .product-details p {
        margin: 0.25rem;
      }

      .price {
        display: flex;
        flex-direction: row;
        font-size: 2rem;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem;
      }

      .price:after {
        content: "/mes";
        color: hsla(76, 0%, 22%, 1);
      }

      .register-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }

      .register-button button{
        padding: 1rem 2rem;
        font-size: 1rem;
        border-radius: 1rem;
        background-color: hsla(230, 88%, 49%, 1);
        color: white;
        border: none;
      }

      .register-button button:hover {
        cursor: pointer;
        background-color: hsla(197, 94%, 59%, 1);
      }
      </style>

      <div class="cart-list">
      </div>
      `

      const cartList = this.shadow.querySelector('.cart-list')

      this.data.forEach(productItem => {
        const product = document.createElement('div')
        product.classList.add('product')

        if (productItem.product === 'Empresa') {
          product.classList.add('product-empresa')
        }

        cartList.appendChild(product)

        const productName = document.createElement('div')
        productName.classList.add('product-name')
        product.appendChild(productName)

        const name = document.createElement('h2')
        name.textContent = productItem.product
        productName.appendChild(name)

        const details = document.createElement('div')
        details.classList.add('product-details')
        product.appendChild(details)

        const productPrice = document.createElement('div')
        productPrice.classList.add('price')
        details.appendChild(productPrice)

        const price = document.createElement('p')
        price.textContent = ('$')+productItem.price
        productPrice.appendChild(price)

        productItem.content.forEach(item => {
          const listItem = document.createElement('p');
          listItem.textContent = item;
          details.appendChild(listItem);
        });

        const registerButton = document.createElement('div')
        registerButton.classList.add('register-button')
        product.appendChild(registerButton)

        const button = document.createElement('button')
        button.textContent = productItem.button
        registerButton.appendChild(button)
      })
  }
}

customElements.define('cart-component', Cart)
