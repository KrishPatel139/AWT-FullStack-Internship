function display(params){
    var singleValues = $("#single").val();
    var multipleValues = $("#multiple").val();
    $("p").html("<b>Single:</b>" + singleValues + "<b>Multiple:</b>" + multipleValues.join(", "));
}
$("select").on("change", displayVals);
displayVals();