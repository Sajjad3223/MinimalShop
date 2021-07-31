var inputLeft = $('#input-left');
var inputRight = $('#input-right');

var thumbLeft = $(".slider > .thumb.left");
var thumbRight = $('.slider > .thumb.right');
var range = $('.slider > .range');


function SetLeftValue(_event,percent = -1){
    
    var _this = inputLeft,
    min = _this.attr('min'),
    max = _this.attr('max');

    if(percent != -1)
        _this.val(percent);

    _this.val(Math.min(_this.val(), inputRight.val()));

    var percent = ((_this.val() - min) / (max - min)) * 100;

    thumbLeft.css("left" , (percent + "%"));
    range.css("left" , (percent + "%"));
    $(thumbLeft).find('input').val(parseInt(percent))
}
SetLeftValue();

function SetRightValue(_event,percent = -1){
    
    var _this = inputRight,
    min = _this.attr('min'),
    max = _this.attr('max');

    console.log(percent)

    if(percent != -1)
        _this.val(percent);

    _this.val(Math.max(_this.val(), inputLeft.val()));

    var percent = ((_this.val() - min) / (max - min)) * 100 ;

    thumbRight.css("right" , (100 - percent) + "%");
    range.css("right" , (100 - percent) + "%");
    
    $(thumbRight).find('input').val(parseInt(percent))
}
SetRightValue();

inputLeft.on("input" , SetLeftValue,);
inputRight.on("input" , SetRightValue);

$('.min,.max').on("input",(event)=>{
    var target = event.currentTarget;

    if($(target).hasClass('min'))
    {
        SetLeftValue(target,$(target).val())
    }
    else{
        SetRightValue(target,$(target).val())
    }
});