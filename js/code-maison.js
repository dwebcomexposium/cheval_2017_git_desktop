$(document).ready(function(){

var ActuSlider = {

	slides : [],
	prevslides : [],
	current : 0,
	nbslides : false,
	duration : 5000,
	isauto : true,
	direction : false,

	init : function(){

		var that = this;

		$('.front').find('.list-grids-with-pagin').find('.gla-item').each(function(_idx){
			$(this).addClass('c-slide');
			that.nbslides ++;
		});

		that.auto();
		that.change();
		that.navigation();
	},

	navigation : function(){

		var that = this;

		$('.front').find('.list-grids-with-pagin').append('<div class="c-prev">Précédent</div>');
		$('.front').find('.list-grids-with-pagin').append('<div class="c-next">Suivant</div>');

		$('.front').find('.list-grids-with-pagin').find('.c-prev').bind('click', function(){
			that.prev();
		});

		$('.front').find('.list-grids-with-pagin').find('.c-next').bind('click', function(){
			that.next();
		});
	},

	auto : function(){
		var that = this;

		$('.front').find('.list-grids-with-pagin').bind('mouseover', function(){
			that.isauto = false;
		})

		$('.front').find('.list-grids-with-pagin').bind('mouseout', function(){
			that.isauto = true;
		})

		setInterval(function(){
			if(that.isauto){
				that.next();
			}
		}, that.duration);
	},

	next : function(){
		if(this.current < this.nbslides -1){
			this.current ++;
		}else{
			this.current = 0;
		}
		this.direction = 'left'
		this.change();
	},

	prev : function(){
		if(this.current > 0){
			this.current --;
		}else{
			this.current = this.nbslides-1;
		}
		this.direction = 'right'
		this.change();
	},

	goto : function(_index){
		this.current = _index;
		this.change();
	},

	change : function(){

		var that = this;

		that.prevslides = that.slides;

	

		$('.front').find('.list-grids-with-pagin').find('.gla-item').each(function(_idx){

		/*	if(_idx > that.current || !that.prevslides.indexOf(_idx)){
				if(that.direction == 'left'){
					direction = 'd-next';
				}else{
					direction = 'd-prev';
				}
			}else{
				if(that.direction == 'left'){
					direction = 'd-prev';
				}else{
					direction = 'd-next';
				}
			}

			if(that.current < 1 && _idx==that.nbslides-1){
				if(that.direction == 'left'){
					direction = 'd-prev';
				}else{
					direction = 'd-next';
				}
			}else{
				if(that.direction == 'left'){
					direction = 'd-next';
				}else{
					direction = 'd-prev';
				}
			}*/

			/*if(that.current == that.nbslides - 1 && _idx == that.nbslides - 2){
				if(that.direction == 'left'){
					direction = 'd-prev';
				}else{
					direction = 'd-next';
				}
			}else{
				if(that.direction == 'left'){
					direction = 'd-next';
				}else{
					direction = 'd-prev';
				}
			}*/


		/*	if(_idx < that.current){
			
				direction = 'd-prev';
				
			}else{
			
				direction = 'd-next';
				
			}*/

			console.log('current : ' + that.current + ' - ' + 'id : ' + _idx + ' - inarray : ' + that.slides.indexOf(_idx));

			if(that.slides.indexOf(_idx) != -1){
				if(_idx < that.current){
					direction = 'd-prev';
				}else{
					direction = 'd-next';
				}
					$(this).addClass('d-reset');
			}else{
				direction = 'd-next';
				$(this).removeClass('d-reset');
			}


			$(this).removeClass('d-prev').removeClass('d-next');
			$(this).addClass(direction);

			for(var k=0; k<that.slides.length; k++){
				$(this).removeClass('c-slide-'+k);
			}
		});

		if(that.current != 0){
			if(that.current < that.nbslides-1){
				that.slides = [that.current-1, that.current, that.current+1];
			}else{
				that.slides = [that.current-1, that.current, 0];
			}
		}else{
			that.slides = [that.nbslides-1, 0, that.current+1];
		}

		for(var j=0; j<that.slides.length; j++){
			$('.front').find('.list-grids-with-pagin').find('.gla-item').eq(that.slides[j]).addClass('c-slide-'+j);
		}
	}
}

$(".block-page.newsletter-form").css("display", "none");

$('.front .list-grids-with-pagin .grid-la-list').slick({
  infinite: true,
 track: function() { return $(this).children('grid-la-list'); },
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

/*ActuSlider.init();*/
console.log('118');

});