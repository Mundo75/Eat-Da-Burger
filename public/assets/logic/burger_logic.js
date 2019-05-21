$(function () {

    $(".btn-devour").on("click", function (event) {

        let id = $(this).data("id");



        $.ajax("/api/burgers/" + id, {

            type: "PUT",

            data: {

                id: id,

                devoured: 1

            }

        }).then(function () {

            console.log("Tasty Burger YUM!");

            location.reload();

        });

    });



    $(".gameForm").on("submit", function (event) {

        event.preventDefault();



        if (validateForm()) {

            let newBurger = { burger_name: $("#burgerType").val().trim() };



            $.ajax("/api/burgers", {

                type: "POST",

                data: newBurger

            }).then(function () {

                console.log("New burger on Deck!");

                location.reload();

            });

        }

    });

});



function validateForm() {

    let validated = true;



    $(".burgerForm").removeClass("has-error");

    $("#helpBlock").hide();



    if ($("#burgerType").val() === "") {

        $("#burgerType").parent().addClass("has-error");

        $("#helpBlock").show();

        validated = false;

    }



    return validated;

}