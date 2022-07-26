// Пункт 1

const skills = ['js', 'css', 'html'];
const div1 = document.querySelector('.value1');

div1.textContent = skills[0];

// Пункт 2

const values = [0, 1, false, 2, undefined, 3,  null];
const div2 = document.querySelector('.value2');

const filtredValues = values.filter( el => (el != 0) && (el != undefined) );
div2.textContent = `[ ${filtredValues} ]`;

// Пункт 3

const arrays = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
const div3 = document.querySelector('.value3');

div3.textContent = arrays.findIndex( el => el.length > 3);