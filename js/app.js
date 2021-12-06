window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

// searchfilter.js replaced with this code below.

var input = document.querySelector('input');
var photo = document.getElementsByTagName('a');

const searchFilter = function() {
var x = input.value.toLowerCase();

for (var i = 0; i < photo.length; i += 1 ){
  var caption = photo[i].getAttribute('data-caption').toLowerCase();

  if (caption.includes(x)) {
    photo[i].style.display = 'block';
  } else {
    photo[i].style.display = 'none';
  }
}
};
input.addEventListener('keyup', searchFilter); 

