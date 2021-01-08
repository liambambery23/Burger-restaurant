$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("submit works");

        let newBurger = {
            burger_name: $("#burger-order").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger created!");
                location.reload();
            }
        );
    });

    $(".change-devour").on("click", function(event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newDevour");

        let newDevourState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("Changed devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
})