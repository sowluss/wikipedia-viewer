$(document).ready(function () {

    // run code after a click
    $("#btn").click(function () {

        // getting search input
        var searchFor = $("#search-field").val();

        // API url and searchFor
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchFor + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                $("#output").html('');
                for (var i = 0; i < data[0].length; i++) {
                    $("#output").append("<li><a href= " + data[3][i] + "' target= '_blank'>" + data[1][i] + "</a><p> " + data[2][i] + "</p></li>");
                }
                $("#search-field").val(''); // empties the search box
            },
            error: function (errorMessage) {
                alert("Error");
            }
        });

    });

    /* pressing keyboard Enter key the content flashes briefly and dissapears */
    $("#search-field").keypress(function (e) {
        if (e.which == 13) {
            $("#btn").click();
        }
    });

});