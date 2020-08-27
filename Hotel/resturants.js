function SearchItems() {
    key = document.getElementById('searchbox').value;
    parentelements = document.getElementById('items');
    Arrayofitems = parentelements.getElementsByTagName('div');
    for (i = 0; i < Arrayofitems.length; i++) {
        par = Arrayofitems[i].getElementsByClassName('description-heading')[0];
        text = par.textContent || par.innerHTML;
        if (text.toUpperCase().indexOf(key) > -1)
            Arrayofitems[i].style.display = "inline-block";
        else {
            Arrayofitems[i].style.display = "none";
        }
    }
}
filterSelection("الجميع")
function filterSelection(c) {
    var x, i;
    parentelements = document.getElementById('items');
    x = parentelements.getElementsByTagName('div');
    if (c == "الجميع") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
