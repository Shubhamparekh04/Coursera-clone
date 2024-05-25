$(document).ready(function () {


    $("#banner").hide();

    // Hide magnifier button on big screen
    // $("nav>div>a+i").hide();



    // --------------------------------------------1. Home page page start -----------------------------------//


    // if window scrolldown = B-navbar slideUp & on page Scrollup = B-navbar slideDown


    var LastScrolled = 0;

    $(document).on("scroll", function () {

        var CurrentScrolled = $(document).scrollTop();

        if (CurrentScrolled >= LastScrolled) {
            $("body > nav > div.container-fluid.bg-dark.text-white.ps-5.mb-2").slideUp();
        } else {
            $("body > nav > div.container-fluid.bg-dark.text-white.ps-5.mb-2").slideDown();
        }
        LastScrolled = CurrentScrolled;


        if ($(this).scrollTop() >= 800) {
            $("#banner").slideDown("fast");
            $("#dark-nav").addClass("py-1");

        } else {
            $("#banner").slideUp("fast");
            $("#dark-nav").removeClass("py-1");
        }

    });







    // --------------------------------------------1. Home page page End -----------------------------------//














    // --------------------------------------------2. courses page start -----------------------------------//

    $("#myLearning").hide();


    $("#pills-tab > li > button").on("click", function () {

    });

    // on click of any tab [home/my-learnings/online degree] all button color black
    $("#pills-tab > li > button").css("color", "black");

    // default home button color blue & border bottom medium thickness
    $("#pills-home-tab").css({ "color": "blue", "border-bottom-width": "medium" });

    // check which button is clicked with id
    $("#pills-tab > li > button").on("click", function () {

        // on clicking any button turn all button color black
        $("#pills-tab > li > button").css("color", "black")


        // if it's home button
        if ($(this).attr("id") === "pills-home-tab") {

            // show home & hide learning
            $("#home").show();
            $("#myLearning").hide();

            // Change home tab color blue & border bottom medium thickness
            $(this).css({ "color": "blue", "border-bottom-width": "medium" });
        }

        // if it's my learning button
        if ($(this).attr("id") === "pills-profile-tab") {
            $(this).css({ "color": "blue", "border-bottom-width": "medium" });

            // show learning & hide home
            $("#home").hide();
            $("#myLearning").show();
        }

        // if it's Online degree button
        if ($(this).attr("id") === "pills-contact-tab") {
            $(this).css({ "color": "blue", "border-bottom-width": "medium" });
        }
    });

    // --------------------------------------------2. courses page end -----------------------------------//

});
