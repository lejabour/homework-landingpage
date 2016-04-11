//Implement the toggle for the articles. Don't forget to add the script tags.


$(document).ready(function(){
 
$(".readLess1").hide();
$(".more1").hide();
$( "h5.read1" ).click(function(event) {
  event.preventDefault();
  $( ".more1" ).toggle();
  $( "h5.read1" ).toggle();
    $( ".readLess1" ).toggle();
    // Animation complete.
  });

$( ".readLess1" ).click(function(event) {
  event.preventDefault();
  $( ".more1" ).toggle();
  $( ".readLess1" ).toggle();
  $( "h5.read1" ).toggle();
});


$(".more2").hide();
$(".readLess2").hide();
$( "h5.read2" ).click(function() {
 event.preventDefault();
  $( ".more2" ).toggle();
  $( "h5.read2" ).toggle();
    $( ".readLess2" ).toggle();
    // Animation complete.
  });


$( ".readLess2" ).click(function(event) {
  event.preventDefault();
  $( ".more2" ).toggle();
  $( ".readLess2" ).toggle();
  $( "h5.read2" ).toggle();
});

 

$(".more3").hide();
$( "h5.read3" ).click(function(event) {
  event.preventDefault();
  $( ".more3" ).toggle();
  $( "h5.read3" ).toggle();
    //animation complete
});

console.log('hello');


});