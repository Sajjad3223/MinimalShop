var slider = $("#carousel");
var images = $('#carousel img');
var index = 0;


$('#btnPrev').on("click",function(){
    if(index > 0)
    {
        slider.css({"transition":"0.4s ease-in-out"});
        index--;
        slider.css({"transform":"translateX("+ (index * 100) +"%)"}); 
    }
    else
    {
        slider.css({"transition":"none"});
        slider.css({"transform":"translateX(" +( (images.length - 1)  * 100 )+ "%)"}); 
        index = images.length-1;
    }
});
$('#btnNext').on("click",function(){
    if(index < images.length - 1)
    {
        slider.css({"transition":"0.4s ease-in-out"});
        index++;
        slider.css({"transform":"translateX("+ (index * 100) +"%)"}); 
    }
    else
    {
        slider.css({"transition":"none"});
        slider.css({"transform":"translateX(0%)"}); 
        index = 0;
    }
});