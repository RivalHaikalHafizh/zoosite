import 'regenerator-runtime'
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
//   import jquery
import $ from 'jquery'
import '../component/card-list.js'
import '../component/card-item.js'
import '../styles/style.css'
import main from '../data/app.js'
window.$ = window.jQuery = $
// import swipper

document.addEventListener('DOMContentLoaded', main)
