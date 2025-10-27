import './styles.css'

let count = 0
const countEl = document.getElementById('count')
const inc = document.getElementById('increment')
const dec = document.getElementById('decrement')

inc.addEventListener('click', () => {
  count++
  countEl.textContent = count
})
dec.addEventListener('click', () => {
  count = Math.max(0, count-1)
  countEl.textContent = count
})
