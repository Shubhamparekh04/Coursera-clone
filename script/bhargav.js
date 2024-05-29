$(document).ready(function () {

  // Hide magnifier button on big screen
  // $("nav>div>a+i").hide();


});

// MODELPURCHES FORM START
$("#model-form").hide()

$("#btn").on("click", function () {
  $("#model-form").toggle()
})

$("#close").on("click", function () {
  $("#model-form").hide()
})

// MODELPURCHES FORM END