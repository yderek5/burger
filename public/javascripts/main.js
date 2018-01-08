$(document).ready(function () {
    $(".devour").on("click", function (event) {
        var burgerId = $(this).attr("burger-id");
        $.ajax("/api/burgers/" + burgerId, {
            type: "PUT"
        }).then(function () {
            location.reload();
        });
    });

    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        var burgerName = $("#burger").val().trim();
        var newBurger = {
            burgerName: burgerName
        };

        $.post("/api/burgers", newBurger, function (data) {
            location.reload();
        });
    });
});