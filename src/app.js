import { getRandomColor } from './utils'
export default function initApp() {
  const btnChangeBgColorHTML =  document.createElement('button')
  btnChangeBgColorHTML.className = 'button'
  btnChangeBgColorHTML.textContent = 'Изменить цвет страницы'
  document.body.append(btnChangeBgColorHTML)

  btnChangeBgColorHTML.addEventListener('click', (e) => {
    document.body.style.backgroundColor = getRandomColor()
  })
  console.log('Hello world')
}