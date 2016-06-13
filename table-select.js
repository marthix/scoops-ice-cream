$("#table1 tr").click(function() {
    var selected = $(this).hasClass("highlight");
    $("#table1 tr").removeClass("highlight");
    if(!selected)
            $(this).addClass("highlight");
});
