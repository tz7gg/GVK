
var mql = window.matchMedia('all and (min-width: 991px)');

$(document).ready(function() {
	$('#fullpage').fullpage({

		scrollingSpeed: 700,
		autoScrolling:true,
		anchors: ['firstPage', 'secondPage', '3rdPage' , '4rdPage' , '5rdPage' , '6rdPage' , '7rdPage' , '8rdPage' , '9rdPage'],
        navigation:true,
        navigationTooltips: [],
        showActiveTooltip: true,
        menu: '#menu',
        parallax: true,

        onLeave: function(nextPage, page, move){
		 if(page.anchor === 'firstPage' || page.anchor === '9rdPage'){
		 	if (mql.matches) {
			 	$("#menu li a").css({"color": "white"})
				$("#menu li.active").css({"border-color": "white"})
				$("#menu li").css({"border-color": "white"})
			}
		 } else {
		 	if (mql.matches) {
			 	$("#menu li a").css({"color": "#212529"})
				$("#menu li.active").css({"border-color": "#212529"})
				$("#menu li").css({"border-color": "#212529"})

					
			}
		 };

		 if(page.anchor === 'firstPage' || page.anchor === '9rdPage'){
		 	$("#instagram").attr("src", "images/instagram.png")
			$("#vk").attr("src", "images/vk.png")
			$("#alt-menu").attr("src", "images/menu.png")
			$(".main-menu").addClass("main-menu-shadow")
			
		 } else { 
		 	$("#instagram").attr("src", "images/alt-instagram.png")
			$("#vk").attr("src", "images/alt-vk.png")
			$("#alt-menu").attr("src", "images/alt-menu.png")
			$(".main-menu").removeClass("main-menu-shadow")
		}
		


		 if(move != "null"){

  			maxLeft = Math.floor(200);

  			maxTop = Math.floor(700);

  			var randomLeft = Math.floor(Math.random() * (maxLeft - 0 + 1)) +0; //Максимум и минимум включаются
  			var randomTop = Math.floor(Math.random() * (maxTop - 0 + 1)) + 0; //Максимум и минимум включаются

			$('.sharik').stop().animate({'left': randomLeft , 'top': randomTop}, 2000,); 
			}
		},

	});

	$(".open-menu").click(function(){
	    $(".open-menu").removeClass("show-menu")
	    $(".close-menu").addClass("show-menu")
	    $(".main-menu").addClass("mobile-menu")
	    $("#menu").css({display: "flex"})
	    $("li").addClass("menu-triger")
	});

	$(".close-menu").click(function(){
	    $(".close-menu").removeClass("show-menu")
	    $(".open-menu").addClass("show-menu")
	    $(".main-menu").removeClass("mobile-menu")
	    $("#menu").css({display: "none"})
	});

	$('body').on('click','.menu-triger', function(){    
		$(".close-menu").removeClass("show-menu")
		$(".open-menu").addClass("show-menu")
	  	$(".main-menu").removeClass("mobile-menu")
	  	$("#menu").css({display: "none"})
    });
});


$('#submit').submit(function(){
	$("#btn").text("Спасибо заявка принята!")
	$(".btn").attr('disabled',true);
    $.post(
        'mail.php', // адрес обработчика 
        {
            name: $('#name').val(), 
            phone: $('#phone').val(),
            message: $('#message').val()   
        } 
    );
    return false;
});





