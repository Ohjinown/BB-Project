function dragSlide_init() {
  var $slideDrag = $('.slide-bb').find(' > .slide-draggable');
  var slideDuration = parseInt($slideDrag.parent().attr('data-slide-duration'));
  
  $slideDrag.data("data-slide-index", 0)
  var slideIndex = $slideDrag.data("data-slide-index");
  var dragAmount = 0;


  //slideIndex = 0;
  
  // slide setting
  function slideSet() {
	var $this = $slideDrag;
	var $parent = $this.parent();
	var slideWidth = $this.width();
	var slideItemWidth = $parent.children().children().eq(slideIndex).width()+1 + parseInt($parent.children().children().eq(slideIndex).css("padding-left"));
	
	console.log("slideWidth : " + slideWidth); //640px
	console.log("slideItemWidth : " + slideItemWidth); //513px
	
	var duration = slideDuration / 1000;
	
	$this.css('transition', 'transform ' + duration + 's');
	if(slideIndex == 2){
			slideItemWidth = slideItemWidth - ($slide.width()-slideItemWidth);
		}
	$this.css({ transform: "translateX(" + slideIndex * -slideItemWidth + "px)" });
  }
  
  //drag slide
  function dragSlide() {
	
	var $this = $(this);
	
	// drag prevent
	if ($this.hasClass('prevent')) {
	  return ;
	}
	$this.addClass('prevent');
	
	// slide
	var $slide = $this.parent();
	
	var slideWidth = $slide.width()*0.8;

	var slideItemWidth = $slide.children().children().eq(slideIndex).width()+1 + parseInt($slide.children().children().eq(slideIndex).css("padding-left"));

	//console.log(slideItemWidth);
	var minDistance = (slideWidth / 2) / 2;

	var dragPosition = parseInt($this.css("left"));
	slideDuration = parseInt($slide.attr('data-slide-duration'));
	var slideLimit = $this.find(" > .item").length - 1;
	
	//drag reset
	$this.stop().animate({ left: 0 }, {duration: slideDuration, complete: function(){
	  $this.removeClass('prevent');
	}});
	
	
	// drag direction
	if (dragPosition < 0) {
	  //console.log("right");
	  if (dragPosition > -minDistance || slideIndex >= slideLimit) return ;
	  
	  $this.data("data-slide-index", ++slideIndex);
		if(slideIndex == 2){
			slideItemWidth = slideItemWidth - ($slide.width()-slideItemWidth);
		}
	  dragAmount += -slideItemWidth;
	}
	else {
	  //console.log("left");
	  if (dragPosition < minDistance || slideIndex <= 0) return ;
	
		if(slideIndex == 2){
			slideItemWidth = slideItemWidth - ($slide.width()-slideItemWidth);
		}
	  $this.data("data-slide-index", --slideIndex);
	
	  dragAmount += slideItemWidth;
	}
	$this.css({ transform: "translateX(" + dragAmount + "px)" });

	
	for(var ixx = 0; ixx < 3; ixx++){
		//console.log($(".navigation_bar").children().eq(ixx));
		$(".navigation").children().eq(ixx).removeClass('active');
	}
	$(".navigation").children().eq(slideIndex).addClass('active');
//					
	$(".console").html(slideIndex);
  }

  function currentSlideItem(targetIndex){
//	console.log(slideIndex);
	var moreStep = 0;
	if(targetIndex == slideIndex){
		return ;
	} else if(targetIndex > slideIndex){
		moreStep = targetIndex - slideIndex;	

	} else if(targetIndex < slideIndex){
		moreStep = slideIndex - targetIndex;	
	}
//	console.log(moreStep);
  }


  // draggable
  slideSet();
  $(".slide-bb .slide-draggable").draggable({ axis: "x", stop: dragSlide });
  $(window).resize(_.throttle(slideSet, 100));
 
  //$(".console").html(slideIndex);
  return {
	currentSlideItem : currentSlideItem
  }
}

$(document).ready(function() {
	slideBB = dragSlide_init();
	console.log(slideBB);
});

