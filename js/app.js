//List of all images
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
    }
];


var $overlay = $('<div id=overlay></div>');
var $leftArrow = $('<span class=left-arrow></span>');
var $image = $('<img>');
var $rightArrow = $('<span class=right-arrow></span>');
var $caption = $('<p></p>')

var $imageList = $("#image-list");
var currentImage;


$(document).ready(function () {
    //add the initial images on load
    for (image in images) {
        $imageList.append('<li class="show"><a href="' + images[image].image + '"><img src="' + images[image].thumbnail + '" alt="' + images[image].caption + '"></a></li>');
    };
    console.log("this is happening");
});



//----------Build the overlay----------
//add the left arrow to the overlay
$overlay.append($leftArrow);
//add the image to the overlay
$overlay.append($image);
//add the right arrow to the overlay
$overlay.append($rightArrow);
//add the caption to the overlay
$overlay.append($caption);
//add the overlay to the body
$('body').append($overlay);


//function that shows the overlay
function showOverlayWithImage(selectedImage) {
    var imageLocation = $(selectedImage).attr("href");
    var captionValue = $(selectedImage).children().attr("alt");

    currentImage = $(selectedImage).parent().index();
    console.log(currentImage);

    $image.attr("src", imageLocation);
    $caption.text(captionValue);

    //display the overlay (gracefully)
    $overlay.fadeIn(250);
}



//handle click on an image
$("body").on("click", "a", function (event) {
    event.preventDefault();
    showOverlayWithImage(this);
});

//exit overlay when clicked on
$("#overlay").on("click", function () {
    $(this).fadeOut(250);
});

$overlay.on("click", ".left-arrow", function () {
    console.log("arrow clicked");
});



//----------Search----------
$('#searchField').on("keyup", function () {

    //loop through images and test for search string
    $('#image-list li').each(function (index) {

        //store the value of the search in a variable
        var $searchQuery = $("#searchField").val().toLowerCase();
        //store the value of each image caption in a variable
        var $imageCaption = $imageList.children().eq(index).children().children().attr('alt').toLowerCase();
        //store the li
        var $imageLi = $imageList.children().eq(index);

        //test image caption against search query
        if ($imageCaption.includes($searchQuery)) {
            //match
            //add class of show to li
            if ($imageLi.hasClass('hide')) {
                $imageLi.removeClass('hide').addClass('show');
            }
        } else {
            //not match
            //add class of hide to li
            if ($imageLi.hasClass('show')) {
                $imageLi.removeClass('show').addClass('hide');
            }
        }
    })
});
