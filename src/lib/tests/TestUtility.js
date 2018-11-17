export const clearDOM = () => document.body.innerHTML = '';

export const setDOM = (divClass, divID) => {
  clearDOM()

  const div = document.createElement('div');
  div.className += divClass || 'simple-keyboard';

  if (divID)
    div.setAttribute('id', divID);

  document.body.appendChild(div);

  return div;
}
