var $overlay = $('<div id=overlay></div>');
var $leftArrow = $('<span class=left-arrow></span>');
var $image = $('<img>');
var $rightArrow = $('<span class=right-arrow></span>');
var $caption = $('<p></p>')
var $imageList = $("#image-list");
var counter = 0;
var arrowClicked = false;

var images = [
    {
        image: "Photos/01.jpg",
        thumbnail: "Photos/Thumbnails/01.jpg",
        caption: "Hay Bales - I love hay bales. Took this snap on a drive through the countryside past some straw fields."
    },
    {
        image: "Photos/02.jpg",
        thumbnail: "Photos/Thumbnails/02.jpg",
        caption: "Lake - The lake was so calm today. We had a great view of the snow on the mountains from here."
    },
    {
        image: "Photos/03.jpg",
        thumbnail: "Photos/Thumbnails/03.jpg",
        caption: "Canyon - I hiked to the top of the mountain and got this picture of the canyon and trees below."
    },
    {
        image: "Photos/04.jpg",
        thumbnail: "Photos/Thumbnails/04.jpg",
        caption: "Iceberg - It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
    },
    {
        image: "Photos/05.jpg",
        thumbnail: "Photos/Thumbnails/05.jpg",
        caption: "Desert - The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
    },
    {
        image: "Photos/06.jpg",
        thumbnail: "Photos/Thumbnails/06.jpg",
        caption: "Fall - Fall is coming, I love when the leaves on the trees start to change color."
    },
    {
        image: "Photos/07.jpg",
        thumbnail: "Photos/Thumbnails/07.jpg",
        caption: "Plantation - I drove past this plantation yesterday, everything is so green!"
    },
    {
        image: "Photos/08.jpg",
        thumbnail: "Photos/Thumbnails/08.jpg",
        caption: "Dunes - My summer vacation to the Oregon Coast. I love the sandy dunes!"
    },
    {
        image: "Photos/09.jpg",
        thumbnail: "Photos/Thumbnails/09.jpg",
        caption: "Countryside Lane - We enjoyed a quiet stroll down this countryside lane."
    },
    {
        image: "Photos/10.jpg",
        thumbnail: "Photos/Thumbnails/10.jpg",
        caption: "Sunset - Sunset at the coast! The sky turned a lovely shade of orange."
    },
    {
        image: "Photos/11.jpg",
        thumbnail: "Photos/Thumbnails/11.jpg",
        caption: "Cave - I did a tour of a cave today and the view of the landscape below was breathtaking."
    },
    {
        image: "Photos/12.jpg",
        thumbnail: "Photos/Thumbnails/12.jpg",
        caption: "Bluebells - I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
    },
]

$overlay.append($leftArrow);
$overlay.append($image);
$overlay.append($rightArrow);
$overlay.append($caption);
$('body').append($overlay);



$('a').on("click", function (event) {
    event.preventDefault();

    console.log(this);
    var imageLocation = $(this).attr("href");
    var captionValue = $(this).children().attr("alt");

    $image.attr("src", imageLocation);
    $caption.text(captionValue);

    $overlay.show();
});

$("#overlay").on('click', function () {
    if (!arrowClicked) {
        $overlay.hide();
    } else {
        arrowClicked = false;
    }
});

$(".right-arrow").on('click', function (event) {
    arrowClicked = true;
    var test = this;
    test = this.prev();
    console.log(test);
});



// When you type in the search field
$("#searchField").on("keyup", function (event) {
    $imageList.empty();
    for (image in images) {
        var testImage = images[image].caption
        var testValue = $("#searchField").val()
        if (testImage.toLowerCase().includes(testValue.toLowerCase())) {
            $imageList.append('<li><a href="' + images[image].image + '"><img src="' + images[image].thumbnail + '" alt="' + images[image].caption + '"></a></li>')
        }
    }


    $('a').on("click", function (event) {
        event.preventDefault();

        var imageLocation = $(this).attr("href");
        var captionValue = $(this).children().attr("alt");

        $image.attr("src", imageLocation);
        $caption.text(captionValue);

        $overlay.show();
    });

});

//return all images with alt attribute that matches the query text
// display only returned images
