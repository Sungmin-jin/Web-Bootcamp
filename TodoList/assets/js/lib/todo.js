
//Click Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }

    //same logic
    $(this).toggleClass("completed")
});

//Click on X to delete Todo
$("ul").on("click", "span",  function(event){
    $(this).parent().fadeOut("slow", function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        var text = $(this).val();
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${text}</li>`);
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(); 
})






