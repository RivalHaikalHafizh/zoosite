import '../component/card-list.js'

const app = () => {
  const cardListElement = document.querySelector('card-list')
  const button = document.querySelector('button')
  button.addEventListener('click', async () => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then(resp => resp.json())
      .then((data) => {
        renderResult(data)
      })
      .catch((error) =>
        fallbackResult(error)
      )
  })

  const renderResult = (results) => {
    cardListElement.cards = results
  }

  const fallbackResult = (message) => {
    cardListElement.renderError(message)
  }
}

export default app
