//Implement the toggle for the articles. Don't forget to add the script tags.


$(document).ready(function(){
 
$(".more1").hide();
$( "h5.read1" ).click(function() {
  $( ".more1" ).toggle( "slow", function() {
    // Animation complete.
  });
});



$(".more2").hide();
$( "h5.read2" ).click(function() {
  $( ".more2" ).toggle( "slow", function() {
    // Animation complete.
  });
});



console.log('hello');


});