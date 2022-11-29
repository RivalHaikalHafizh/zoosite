import './card-item.js'

class CardList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set cards (cards) {
    this._cards = cards
    this.render()
  }

  get cards () {}

  renderError (message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color:red;
        }
      </style>
    `
    this.shadowDOM.innerHTML += '<h2 class="placeholder">ada kesalahan pada API </h2>'
  }

  render () {
    this.shadowDOM.innerHTML = ''
    const cardItemElement = document.createElement('card-item')
    cardItemElement.card = this._cards
    this.shadowDOM.appendChild(cardItemElement)
  }
}

customElements.define('card-list', CardList)
