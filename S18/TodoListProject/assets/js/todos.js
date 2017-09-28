$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete a Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); 
});

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    //clear the text after hitting enter
    $(this).val("");
    //create new li and add todo to ul
    $("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + todoText + "</li>");
    
    //console.log($(this).val());
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});

//event.stopPropagation(); //stops bubbling effect, it stops bubbling on parent elements