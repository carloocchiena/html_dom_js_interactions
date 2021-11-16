// define the function for the radio buttons
// Rating

var clickRating = 0;
var clickDate = 0;

function checkRating() {
    clickRating ++;
    if (clickRating % 2 != 0) {
        document.getElementById("rich-yes").checked = true
        rich = " 9,4/10 - 237 ratings";
        console.log(rich);
    } else {
        document.getElementById('rich-yes').checked = false;
        rich = "";
    }

    document.getElementById("rating").innerHTML = '<img src="https://cdn-bnbkg.nitrocdn.com/fHTUSkGzNpMecGZasGsrEZDrbMjRPuVx/assets/static/optimized/rev-4e18b2d/wp-content/themes/highervisibility_new/serp-snippet/images/stars.png", width=60px, alt="Ratings">' + rich;

}

// Date

function checkDate() {
    clickDate ++;
    if (clickDate % 2 != 0) {
        document.getElementById("date-yes").checked = true
        date = "15 June, 2021 - "
        document.getElementById("date").innerHTML = date;
        console.log(date);
    } else {
        document.getElementById('date-yes').checked = false;
        date= " ";
        document.getElementById("date").innerHTML = date;
    }
}

// handle Title, Url and Description

function changeTitle(textField) {
    value = textField;
    document.getElementById("title").innerHTML = value;
    console.log(value);
}

function changeURL(textField) {
    value = textField;
    document.getElementById("url").innerHTML = value;
    console.log(value);
}

function changeDescription(textField) {
    value = textField;
    document.getElementById("description").innerHTML = value;
    console.log(value);
}

// jquery to run the counters of words

$("#titleField").keyup(updateCountTitle);
$("#titleField").keydown(updateCountTitle);

function updateCountTitle() {
    var cs = $(this).val().length;
    $('#charactersTitle').text(cs);
}

$("#urlField").keyup(updateCountUrl);
$("#urlField").keydown(updateCountUrl);

function updateCountUrl() {
    var cs = $(this).val().length;
    $('#charactersUrl').text(cs);
}

$("#descriptionField").keyup(updateCountDescription);
$("#descriptionField").keydown(updateCountDescription);

function updateCountDescription() {
    var cs = $(this).val().length;
    $('#charactersDescription').text(cs);
}
