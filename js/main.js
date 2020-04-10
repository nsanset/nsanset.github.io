$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 });





$(function(){
 $("#phone").mask('+38(000) 000-0000');
 $('#applyForm').submit(function(e){
 	e.preventDefault();
 	var studentName = $("#name").val();
 	var phone = $("#phone").val();
 	var email = $("#email").val();
 	var course = $('#applyForm').data('course');
 	Email.send({
    SecureToken : "57dcf116-5f35-40e7-a808-31f31226f042",
    To : 'nagyrnyak@gmail.com',
    From : "mazakiller@bigmir.net",
    Subject : "test",
    Body : "And this is the body"
}).then(
  message => alert("message-test")
);
 	$("#modal").removeClass("show-my");
 	$("#thanks").addClass("show-my");
 });
 $(".showModal").click(function(e){
 	$('#modal').addClass("show-my");
 	$('#applyForm').data('course',$(this).attr('id'));
 });
$("#closeModal").click(function(e){
	$("#modal").removeClass("show-my");
});
$("#closeThanks").click(function(e){
	$("#thanks").removeClass("show-my");
	});
});
