const IntlRelativeFormat = require('intl-relativeformat');
const IntlMessageFormat = require('intl-messageformat');
const rf = new IntlRelativeFormat('es');

console.log(IntlMessageFormat)

let horaId= document.getElementById('formatjs');
let hora = new Date()

let out = rf.format(hora);

var MESSAGES = {
    'en-US': {
      NUM_PHOTOS:
        'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}',
    },
  
    'es-MX': {
      NUM_PHOTOS:
        'Usted {numPhotos, plural, ' +
        '=0 {no tiene fotos.}' +
        '=1 {tiene una foto.}' +
        'other {tiene # fotos.}}',
    },
  };
  
  var output;
  
  var enNumPhotos = new IntlMessageFormat.default(MESSAGES['en-US'].NUM_PHOTOS, 'en-US');
  output = enNumPhotos.format({numPhotos: 1000});
  console.log(output); // => "You have 1,000 photos."
  
  var esNumPhotos = new IntlMessageFormat.default(MESSAGES['es-MX'].NUM_PHOTOS, 'es-MX');
  output = esNumPhotos.format({numPhotos: 1000});
  console.log(output); // => "Usted tiene 1,000 fotos."

console.log(out);

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems,autoTrigger);
});