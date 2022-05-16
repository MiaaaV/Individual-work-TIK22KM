let sliderFeat = document.getElementById("slider-featured");
let sliderIn = document.getElementById("slider-indoors");
let sliderOut = document.getElementById("slider-outdoors");

let item1 = sliderFeat.getElementsByClassName("item-featured");
let item2 = sliderIn.getElementsByClassName("item-indoors");
let item3 = sliderOut.getElementsByClassName("item-outdoors");

// featured

function next_f() {
    sliderFeat.append(item1[0]); // moves the first item -1 in queue
}

function previous_f() {
    sliderFeat.prepend(item1[item1.length - 1]) // moves the last item +1 in queue
}

// indoors

function next_i() {
    sliderIn.append(item2[0]);
}

function previous_i() {
    sliderIn.prepend(item2[item2.length - 1])
}

// outdoors

function next_outdoors() {
    sliderOut.append(item3[0]);
}

function previous_outdoors() {
    sliderOut.prepend(item3[item3.length - 1])
}