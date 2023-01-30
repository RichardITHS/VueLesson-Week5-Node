/* Welcome to VUE Lesson week 5 */
/* simple log output */
/* console.log('Hej nu körs jag via node server')

/* Function */
/* const test = (name) => {
    return `Hej nu körs jag via en funktion: ${name}`
}

console.log(test('bertil')) */

/* Install package  with npm
/* Moment package */
//const moment = require('moment')

//console.log(moment().format('dddd'))

/* Fetch with node */
const nodeFetch = require('node-fetch')

nodeFetch('https://avancera.app/cities')
.then((response) => response.json())
.then((result) => {
    console.log(result)
})

 
