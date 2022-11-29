class CardItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set card (card) {
    this._card = card
    this.render()
  }

  get card () {}
  render () {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.7);
        }
        
        .fan-art-card {
          width: 50%;
          max-height: 90%;
          object-fit: fill;
          object-position: center;
        }
        
        .card-info {
          padding: 24px;
        }
        
        .card-info > h2 {
          font-weight: lighter;
        }
        
        .card-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; 
        }
        @media screen and (max-width: 576px) {
          :host {
            display: flex;
            flex-direction: column;
          }
          .fan-art-card {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
        }
        
        @media screen and (max-width: 768px) {
          :host {
            display: flex;
            flex-direction: column;
          }
          .fan-art-card {
            width: 100%;
            max-height: 300px;
            object-fit: fill;
            object-position: center;
          }       
        }
      </style>
      
      <img class="fan-art-card" src="${this._card.image_link}" alt="Fan Art" class="img-fluid">
      <div class="card-info">
        <h1>${this._card.name}</h1>
        <p>latin name: ${this._card.latin_name}</p>
        <p>animal type: ${this._card.animal_type}</p>
        <p>active time: ${this._card.active_time}</p>
        <p>length min: ${this._card.length_min}</p>
        <p>weight min: ${this._card.weight_min}</p>
        <p>weight max: ${this._card.weight_max}</p>
        <p>diet: ${this._card.diet}</p>
        <p>geo range: ${this._card.geo_range}</p>
        <p>Habitat: ${this._card.habitat}</p>
      </div>
    `
  }
}

customElements.define('card-item', CardItem)
