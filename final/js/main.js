$(document).ready(function()
{    
    $("#div1").text($("#p1").css("display"));
    $("#div2").text($("#p2").css("display"));
    $("#div3").text($("#p3").css("display"));
    $("#div4").text($("#p4").css("display"));
    $("#div5").text($("#p5").css("display"));
    $("#div6").text($("#p6").css("display"));
    
    $("#hide1").click(function()
    {
        $("#p1").addClass("hidden");
        $("#div1").text($("#p1").css("display"));
    });
    
    $("#show1").click(function()
    {
        $("#p1").removeClass("hidden");
        $("#div1").text($("#p1").css("display"));
    });
    
    $("#hide2").click(function()
    {
        $("#p2").addClass("hidden");
        $("#div2").text($("#p2").css("display"));
    });
    
    $("#show2").click(function()
    {
        $("#p2").removeClass("hidden");
        $("#div2").text($("#p2").css("display"));
    });
    
    $("#hide3").click(function()
    {
        $("#p3").addClass("hidden");
        $("#div3").text($("#p3").css("display"));
    });
    
    $("#show3").click(function()
    {
        $("#p3").removeClass("hidden");
        $("#div3").text($("#p3").css("display"));
    });

    $("#hide4").click(function()
    {
        $("#p4").addClass("hidden");
        $("#div4").text($("#p4").css("display"));
    });

    $("#show4").click(function()
    {
        $("#p4").removeClass("hidden");
        $("#div4").text($("#p4").css("display"));
    });

    $("#hide5").click(function()
    {
        $("#p5").addClass("hidden");
        $("#div5").text($("#p5").css("display"));
    });

    $("#show5").click(function()
    {
        $("#p5").removeClass("hidden");
        $("#div5").text($("#p5").css("display"));
    });

    $("#hide6").click(function()
    {
        $("#p6").addClass("hidden");
        $("#div6").text($("#p6").css("display"));
    });

    $("#show6").click(function()
    {
        $("#p6").removeClass("hidden");
        $("#div6").text($("#p6").css("display"));
    });
});


$(document).ready(function(){
$('.slider_mini').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        // autoplay: true,
        // autoplaySpeed: 2000
      });
});


$(document).ready(function(){
$('.slider_big').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 3000
      });
});

