import css from './test.scss'

function component() {
  let element = document.createElement('div');

  console.log(css)

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "000";

  return element;
}

document.body.appendChild(component());