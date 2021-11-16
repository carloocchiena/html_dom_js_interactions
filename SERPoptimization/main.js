var clickRating = 0;
var clickDate = 0;

function checkRating() {
    clickRating ++;
    if (clickRating % 2 != 0) {
        document.getElementById("rich-yes").checked = true
        rich = "***** 9,4/10 - 237 ratings";
        console.log(rich);
    } else {
        document.getElementById('rich-yes').checked = false;
        rich = "";
    }

    document.getElementById("rating").innerHTML = rich;

}

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

