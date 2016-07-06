'use strict';

import MetaField from "./MetaField";

const metaFieldDiv = new MetaField('#metafielddiv',0, true);
const metaFieldCheckbox = new MetaField('#metafieldcheckbox',1, true);
const metaFieldText = new MetaField('#metafieldtext',2, true);
const metaFieldRadio = new MetaField('#metafieldradio',3, true);
const metaFieldImg = new MetaField('#metafieldimg',4, true);

require('font-awesome/css/font-awesome.css'); 

document.body.innerHTML = '<i class="fa fa-fw fa-question"></i>';
//window.setInterval(
//  () => {
//    triangle.rotate(1);
//    triangle.render();
//  },
//  20
//);
