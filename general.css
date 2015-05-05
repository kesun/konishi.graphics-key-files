var insideGallery = false;
var insideAnimation = false;
var inside3D = false;
var currentImageBig = null;
var currentImageObj = null;

$(window).load(function(){
	winResized();
	loadingImage($('#frameHomeBannerLoader'));
	loadBanners(0);
}).bind('resize',function() {
	winResized();
});

$(function() {
	// Find all YouTube videos
	var $allVideos = $("iframe"),

	    // The element that is fluid width
	    $fluidEl = $("#galleryAnimationFrame");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)

			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');
	});
});

$(document).ready(function(){
	$('#mainNavGallery').click(function(){
		if(insideGallery == false){
			inside3D = false;
			insideAnimation = false;
			var galleryLeft = $('#mainNavGallery').position().left;
			$('#gallerySubmenu').css('padding-left', galleryLeft);
			$('#gallery3dFrame').stop().fadeOut(300, function(){
				$('#galleryAnimationFrame').stop().fadeOut(300, function(){
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
			});
		}
	});

	$('#subNavTwoDim').click(function(){
		if(insideGallery == false){
			inside3D = false;
			insideAnimation = false;
			var galleryLeft = $('#mainNavGallery').position().left;
			$('#gallery3dFrame').stop().fadeOut(300, function(){
				$('#galleryAnimationFrame').stop().fadeOut(300, function(){
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
			});
		}
	});

	$('#subNavAnimation').click(function(){
		if(insideAnimation == false){
			insideGallery = false;
			inside3D = false;
			$('#gallery3dFrame').stop().fadeOut(300, function(){
				$('#frameAboutContent').stop().fadeOut(300, function(){
					$('#galleryThumbsFrame').stop().fadeOut(300, function(){
						$('#frameHomeContent').stop().fadeOut(300, function(){
							$('#frameHomeBannerDummy').stop().fadeOut(300, function(){
								$('#galleryAnimationFrame').stop().fadeIn(300, function(){
									winResized();
									insideAnimation = true;
									//
								});
							});
						});
					});
				});
			});
		}
	});

	$('#subNavThreeDim').click(function(){
		if(inside3D == false){
			insideGallery = false;
			insideAnimation = false;
			$('#frameAboutContent').stop().fadeOut(300, function(){
				$('#galleryAnimationFrame').stop().fadeOut(300, function(){
					$('#galleryThumbsFrame').stop().fadeOut(300, function(){
						$('#frameHomeContent').stop().fadeOut(300, function(){
							$('#frameHomeBannerDummy').stop().fadeOut(300, function(){
								$('#gallery3dFrame').stop().fadeIn(300, function(){
									inside3D = true;
									//
								});
							});
						});
					});
				});
			});
		}
	});

	$('#mainNavHome').click(function(){
		insideAnimation = false;
		insideGallery = false;
		inside3D = false;
		$('#frameHomeBanner').stop().hide();
			$('#gallery3dFrame').stop().fadeOut(300, function(){
			$('#galleryAnimationFrame').stop().fadeOut(300, function(){
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
		});
	});

	$('#mainNavAbout').click(function(){
		insideAnimation = false;
		insideGallery = false;
		inside3D = false;
			$('#gallery3dFrame').stop().fadeOut(300, function(){
			$('#galleryAnimationFrame').stop().fadeOut(300, function(){
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
		});
	});

	$('#gallerySubTest').click(function(){
		$('#highlightBox').fadeIn(500);
	});

	$('#highlightBox').click(function(){
		if($('#highlightBoxNavLeft').is(':hover') || $('#highlightBoxNavRight').is(':hover')){ // $('#lePic').is(':hover') || 
		}else{
			switchBigPic(null);
		}
	});

	$('.highlightBoxNav').hover(
		function(){
			$(this).stop();
			$(this).animate({
				'opacity': 1
			}, 'fast');
		},
		function(){
			$(this).stop();
			$(this).animate({
				'opacity': 0
			}, 'fast');
		}
	);

	$('.highlightBoxNav').click(function(){
		var next = null;
		if($(this).attr('id') == "highlightBoxNavLeft"){
			next = currentImageObj.prev();
		}else if($(this).attr('id') == "highlightBoxNavRight"){
			next = currentImageObj.next();
		}
		if(next.hasClass('thumbnail') && next.find('.thumbnailLoadingFrame').is(':animated') == false){
			switchBigPic(next);
		}else{
			$(this).stop();
			$(this).animate({
				'background-color': 'rgba(225, 225, 225, .5)',
				'color': '#000'
			}, 100, function(){
				$(this).animate({
					'background-color': 'rgba(0, 0, 0, .5)',
					'color': '#FFF'
				}, 'fast');
			});
		}
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

	$('#galleryThumbsFrame').on('click', '.thumbnailPic', function(){
		var dis = $(this);
		$('#highlightBox').fadeIn(500, function(){
			switchBigPic(dis.parent());
		});
	});

	document.oncontextmenu = function() {return false;};

	$('#galleryThumbsFrame').on('mouseup', '.thumbnailPic', function(e){
		if( e.button == 2 ) {
			if($($(this).children()[1]).css("display") != "none"){
				window.open($(this).attr('src'));
			}
			return false;
		}
		return true;
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
		var banner = $('#galleryThumbsFrame').append('<div class="collectionName">' + '<span class="heart">♥</span> ' + galleries[ind].galleryName + '</div>').children();
		banner = banner[banner.length - 1];
		$('#galleryThumbsFrame').append('<div class="galleryBlankBreak"></div>');
		$(banner).fadeIn("fast", function(){
			loadGallery(ind, $(galleries[ind].galleryDatabase), imageDatabasePath + galleries[ind].galleryPath, 0, $(banner));
			loadGalleries(ind + 1);
		});
	}
}

function loadGallery(galInd, gallery, path, ind, prevElem){
	if(ind < gallery.length && insideGallery){
		var newObj = '<div class="thumbnail">' +
			'<div class="thumbnailLoadingFrame"><div class="thumbnailLoadingText">∙<span class="heart">♥</span> Loading <span class="heart">♥</span>∙ <br />(' + (ind + 1) + " / " + gallery.length + ')</div></div>' +
			'<img class="thumbnailPic" src="' + path + gallery[ind].fileName + '">' +
			'</div>';
		newObj = $(newObj).insertAfter(prevElem);
		var loaderObj = newObj.find('.thumbnailLoadingFrame');
		loadingImage(loaderObj);
		newObj.waitForImages({
			waitForAll: true,
			finished: function(){
				loaderObj.stop().fadeOut(100, function(){
					var base = newObj;
					var curPic = base.find('.thumbnailPic');
					curPic.css("left", "-" + gallery[ind].thumbLeft + "px")
						.css("top", "-" + gallery[ind].thumbTop + "px")
					curPic.fadeIn(500, function(){
						var temp = base.append('<div class="thumbnailHover">' + gallery[ind].title + '</div>');
						temp.children().find('.thumbnailHover').css('top', 100);
						loadGallery(galInd, gallery, path, ind + 1, newObj);
					});
				});
			}
		});
	}
}

function loadAnimation(galInd, gallery, path, ind){
	if(ind < gallery.length && insideAnimation){}
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
	var $navLeft=$('#highlightBoxNavLeft');
	var $navRight=$('#highlightBoxNavRight');
	var $navLeftGlyph=$('#highlightBoxNavLeftGlyphicon');
	var $navRightGlyph=$('#highlightBoxNavRightGlyphicon');

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
		var left=(Math.round(ww-iwr)/2);
		var top=(Math.round(wh-ihr)/2);

		var glyphiconLeftWidth = $navLeftGlyph.css('width');
		var glyphiconLeftHeight = $navLeftGlyph.css('height');
		var glyphiconRightWidth = $navRightGlyph.css('width');
		var glyphiconRightHeight = $navRightGlyph.css('height');

		$image.css({
			'position':'fixed',
			'width': iwr,
			'height': ihr,
			'left': left +'px',
			'top': top +'px'
		});
		$navLeft.css({
			'left': left + 20 +'px',
			'top': top + 20 +'px',
			'height': ihr
		});
		$navRight.css({
			'left': left + iwr - 120 + 20 +'px',
			'top': top + 20 +'px',
			'height': ihr
		});
		$navLeftGlyph.css({
			'line-height': ihr + 'px'
		});
		$navRightGlyph.css({
			'line-height': ihr + 'px'
		});
	}

	// Find all YouTube videos
	var $allVideos = $("iframe"),

	    // The element that is fluid width
	    $fluidEl = $("#galleryAnimationFrame");

	// When the window is resized
	// (You'll probably want to debounce this)
	var newWidth = $fluidEl.width();

	// Resize all videos according to their own aspect ratio
	$allVideos.each(function() {

		var $el = $(this);
		$el
			.width(newWidth / 2)
			.height(newWidth * $el.data('aspectRatio') / 2);

	});
}

function switchBigPic(nextPic){ // nextPic is the thumbnail obj
	if(nextPic == null){
		$('#highlightBox').fadeOut(300, function(){
			$('#lePic').hide();
			currentImageBig = null;
		});
	}else{
		console.log("nextPic", nextPic);
		$('.highlightBoxNav').attr('display', 'none');
		$('#lePic').fadeOut(function(){
			currentImageObj = nextPic;
			var thumbnailInfo = $(nextPic.find('.thumbnailPic')[0]);
			currentImageBig = thumbnailInfo.attr('src');
			$('#lePic').attr('src', currentImageBig);
			winResized();
			$('#lePic').fadeIn(300);
			$('.highlightBoxNav').attr('display', 'display');
		});
	}
}
