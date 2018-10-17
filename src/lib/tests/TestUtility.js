export default class TestUtility {
  /**
   * FUNCTIONS
   */

  setDOM = (divClass, divID) => {
    this.clear();
    const div = document.createElement('div');
    div.className += divClass || "simple-keyboard";

    if(divID)
      div.setAttribute("id", divID);

    document.body.appendChild(div);

    return div;
  }

  clear = () => {
    document.body.innerHTML = "";
  }
}