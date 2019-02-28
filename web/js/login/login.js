$(document).ready(function () {
    $('.login-form .type-fields').removeClass('focus');
    $('.login-form .form-control').each(function(idx, target){
        if($(target).val() != ""){
            $(target).parent('.type-fields').addClass('focus');    
        }
    })
    $('.login-form .form-control').on('focus', function () {
        $(this).parent('.type-fields').addClass('focus');
    });
    $('.login-form .form-control').on('focusout', function () {
        $(this).parent('.type-fields').removeClass('focus');
        if ($(this).val().length > 0) {
            $(this).parent('.type-fields').addClass('focus');
        }
    });
    if($('.login-form .form-control').val().length > 0) {
        $(this).parent('.type-fields').addClass('focus');
    }

    imageSVG();
});

function imageSVG() {
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
}