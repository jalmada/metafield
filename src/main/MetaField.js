export default class MetaField {
  constructor(selector, type = 0, adjustHeight = false) {
    this._types = ['div','checkbox'];
    this._type = type;
    this._element = document.querySelector(selector);
    this._adjustHeight = adjustHeight;
    this.addMetaBox(this._type); 
  }



  set Type(value) {

    if(value === this._type) return;

    this._type = this._types.findIndex(value);
    this._type = this._type < 0 ? 0 : this._type;

    addMetaBox(this._type);
  }

  addMetaBox(type = 0) {

    this._type = type;

    if(!!this._metaBox) {
      this._element.removeChild(this._metaBox);
    }

    if(!!this._metaControl) {
      this._metaBox.removeChild(this._metaControl);
    }

    this._metaBox = document.createElement("div");

    switch(type)
    {
      case 1:
        this._metaControl = document.createElement("input");
        this._metaControl.type = 'checkbox';
        break;
      default:
        this._metaControl = document.createElement("div");
        this._metaControl.innerHTML = "M";
    }

    var rect = this._element.getBoundingClientRect();
    var controlRect = this._metaControl.getBoundingClientRect();

    this._metaBox.style.cssText = `position: absolute;
                                  top: ${rect.top}px;
                                  left: ${rect.left + rect.width}px;
                                  color: white;` +
                                  (this._adjustHeight ? `height:${rect.height}px;` : ``) +
                                  `background-color: red;`;

    this._metaControl.style.cssText = `position:relative; margin-top: -13px; top:50%`;

    this._metaBox.appendChild(this._metaControl);
    this._element.parentNode.insertBefore(this._metaBox, this._element.nextSibling);
  }

  //render() {
  //  this.innerEl.style.transform = `rotate(${this.angle}deg)`;
  //}
}
