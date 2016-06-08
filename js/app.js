var $overlay = $('<div id=overlay></div>');
var $image = $('<img>');
var $caption = $('<p></p>')

$overlay.append($image);
$overlay.append($caption);
$('body').append($overlay);

$('a').on("click", function (event) {
    event.preventDefault();

    var imageLocation = $(this).attr("href");
    var captionValue = $(this).children().attr("alt");
    console.log(imageLocation);
    console.log(captionValue);

    $image.attr("src", imageLocation);
    $caption.text(captionValue);

    $overlay.show();
});

$("#overlay").on('click', function () {
    $overlay.hide();
});
