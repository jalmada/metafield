export default class MetaField {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.element.style.cssText = "color: white; background-color: blue; width: 300px";
    this.addMetaBox();
  }

  addMetaBox() {
    this.metaBox = document.createElement("div");

    var rect = this.element.getBoundingClientRect();

    this.metaBox.style.cssText = `position: absolute;
                                  top: ${rect.top}px;
                                  left: ${rect.left + rect.width}px;
                                  color: white;
                                  width:${rect.height}px;
                                  height:${rect.height}px;
                                  background-color: red;
                                  float: left`;
    this.metaBox.innerHTML = "Mta";
    this.element.parentNode.insertBefore(this.metaBox, this.element.nextSibling);
    //this.element.appendChild(this.metaBox);
  }

  //render() {
  //  this.innerEl.style.transform = `rotate(${this.angle}deg)`;
  //}
}
