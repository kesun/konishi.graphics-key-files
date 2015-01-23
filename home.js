var insideGallery = false;
var currentImageBig = null;

$(window).load(function(){
	winResized();
	loadingImage($('#frameHomeBannerLoader'));
	loadBanners(0);
}).bind('resize',function() {
	winResized();
});;

$(document).ready(function(){

	$('#mainNavGallery').click(function(){
		var galleryLeft = $('#mainNavGallery').position().left;
		$('#gallerySubmenu').css('padding-left', galleryLeft);
		$('#frameAboutContent').stop().fadeOut(300, function(){
			$('#frameHomeContent').stop().fadeOut(300, function(){
				$('#frameHomeBannerDummy').stop().fadeOut(300, function(){
					$('#gallerySubmenu').stop().fadeIn(300, function(){
						clearGallery();
						$('#galleryThumbsFrame').stop().fadeIn(300, function(){
							insideGallery = true;
							loadGalleries(0);
						});
					});
				});
			});
		});
	});

	$('#mainNavHome').click(function(){
		insideGallery = false;
		$('#frameHomeBanner').stop().hide();
		$('#frameAboutContent').stop().fadeOut(300, function(){
			$('#galleryThumbsFrame').stop().fadeOut(300, function(){
				$('#gallerySubmenu').stop().fadeOut(300, function(){
					$('#frameHomeBannerDummy').stop().fadeIn(300, function(){
						loadingImage($('#frameHomeBannerLoader'));
						loadBanners(0);
						$('#frameHomeContent').stop().fadeIn(300);
					});
				});
			});
		});
	});

	$('#mainNavAbout').click(function(){
		insideGallery = false;
		$('#galleryThumbsFrame').stop().fadeOut(300, function(){
			$('#gallerySubmenu').stop().fadeOut(300, function(){
				$('#frameHomeContent').stop().fadeOut(300, function(){
					$('#frameHomeBannerDummy').stop().fadeOut(300, function(){
						$('#frameAboutContent').stop().fadeIn(300);
					});
				});
			});
		});
	});

	$('#gallerySubTest').click(function(){
		$('#highlightBox').fadeIn(500);
	});

	$('#highlightBox').click(function(){
		$('#highlightBox').fadeOut(300, function(){
			$('#lePic').hide();
			currentImageBig = null;
		});
	});

	$('#galleryThumbsFrame').on('mouseenter', '.thumbnail', function(){
		$(this).stop().fadeTo(300, 1);
		var children = $(this).children();
		if(children.length > 2){
			var temp = $(children[2]);
			temp.stop();
			temp.animate({ 'top': 100 - parseInt(temp.css('height').substring(0, temp.css('height').length - 2)) + 'px' });
		}
	});

	$('#galleryThumbsFrame').on('mouseleave', '.thumbnail', function(){
		$(this).stop().fadeTo(300, 0.5);
		var children = $(this).children();
		if(children.length > 2){
			var temp = $(children[2]);
			temp.stop();
			temp.animate({ 'top': 100 + parseInt(temp.css('height').substring(0, temp.css('height').length - 2)) + 'px' });
		}
	});

	$('#galleryThumbsFrame').on('click', '.thumbnail', function(){
		var dis = $($(this).children()[1]);
		currentImageBig = dis.attr('src');
		$('#highlightBox').fadeIn(500, function(){
			$('#lePic').attr('src', dis.attr('src'));
			winResized();
			$('#lePic').fadeIn(300);
		});
	});
});

function randomBannerImg(){
	var rnd = Math.floor(Math.random() * (banners.images.length - 1));
	$('#frameHomeBanner').css("background-image", "url(" + banners.path + banners.images[rnd].fileName + ")");
}

function loadBanners(ind){
	if(ind < banners.images.length){
		var img = new Image();
		img.src = banners.path + banners.images[ind].fileName;
		img.class = "forPreloading";
		$(img).waitForImages({
			waitForAll: true,
			finished: function(){
				loadBanners(ind + 1);
			}
		});
	}else{
		randomBannerImg();
		$('#frameHomeBannerLoader').stop().fadeOut(100);
		$('#frameHomeBanner').stop().fadeIn(300);
	}
}

function loadGalleries(ind){
	if(ind < galleries.length && insideGallery){
		var banner = $('#galleryThumbsFrame').append('<div class="collectionName">' + galleries[ind].galleryName + '</div>').children();
		$(banner[$(banner).length - 1]).fadeIn(300, function(){
			loadGallery(ind, $(galleries[ind].galleryDatabase), imageDatabasePath + galleries[ind].galleryPath, 0);
		});
	}
}

function loadGallery(galInd, gallery, path, ind){
	if(ind < gallery.length && insideGallery){
		var newDiv = '<div class="thumbnail">' +
			'<div class="thumbnailLoadingFrame">∙♥∙</div>' +
			'<img class="thumbnailPic" src="' + path + gallery[ind].fileName + '">' +
			'</div>';
		var newObj = $('#galleryThumbsFrame').append(newDiv);
		var loaderObj = $($(newObj).children()[$(newObj).children().length - 1]).find('.thumbnailLoadingFrame');
		loadingImage(loaderObj);
		$(newObj).waitForImages({
			waitForAll: true,
			finished: function(){
				loaderObj.stop().fadeOut(100, function(){
					var base = $($(newObj).children()[$(newObj).children().length - 1]);
					var curPic = base.find('.thumbnailPic');
					curPic.css("left", "-" + gallery[ind].thumbLeft + "px")
						.css("top", "-" + gallery[ind].thumbTop + "px")
					curPic.fadeIn(600);
					var temp = base.append('<div class="thumbnailHover">' + gallery[ind].title + '</div>');
					temp.children().find('.thumbnailHover').css('top', 100);
					loadGallery(galInd, gallery, path, ind + 1);
				});
			}
		});
	}else if(ind == gallery.length){
		$('#galleryThumbsFrame').append('<div class="galleryBlankBreak"></div>');
		loadGalleries(galInd + 1);
	}
}

function loadingImage(obj){
	obj.fadeIn(300, function(){
		obj.fadeOut(300, function(){
			loadingImage(obj);
		});
	});
}

function clearGallery(){
	$('#galleryThumbsFrame').empty();
}


function winResized() {
	var $image=$('#lePic');
	if ($image.size() && currentImageBig != null) {
		var curImage = new Image();
		curImage.src = currentImageBig;
		var ww=$(window).width() - 40;
		var wh=$(window).height() - 40;
		var iw=curImage.width;
		var ih=curImage.height;

		var f=Math.min(ww/iw,wh/ih);
		var iwr=Math.min(Math.round(iw*f), iw);
		var ihr=Math.min(Math.round(ih*f), ih);
		$image.css({
			'position':'fixed',
			'width': iwr,
			'height': ihr,
			'left': (Math.round(ww-iwr)/2) +'px',
			'top': (Math.round(wh-ihr)/2) +'px'
		});
	}
}