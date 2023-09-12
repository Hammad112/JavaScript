// !Creating new element through Js


//TODO Adding h2 in a web page
const h2 = document.createElement('h2');
// ~Adding text
h2.innerText = "HeLLO PEEPS";
// ~Adding id and class
h2.setAttribute('id', 'identity');
h2.setAttribute('class', 'classes');


//* Showing on web page
document.body.appendChild(h2);


// TODO Adding  a marquee
const para = document.createElement('span');
para.innerText = "This is a an span Tag";

para.setAttribute('id', 'spans');
para.setAttribute('class', 'spanclass');

document.body.appendChild(para);