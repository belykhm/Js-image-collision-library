

function crash(id1, id2) {

    var TopPositionElement1 = document.getElementById(id1).offsetTop;
    var LeftPositionElement1 = document.getElementById(id1).offsetLeft;
    var widthElement1 = document.getElementById(id1).offsetWidth;
    var heightElement1 = document.getElementById(id1).offsetHeight;  
    var TopPositionElement2 = document.getElementById(id2).offsetTop;
    var LeftPositionElement2 = document.getElementById(id2).offsetLeft;
    var widthElement2 = document.getElementById(id2).offsetWidth;
    var heightElement2 = document.getElementById(id2).offsetHeight;
    var BottomElement1 = TopPositionElement1 + heightElement1;
    var rightElement1 = LeftPositionElement1 + widthElement1;
    var BottomElement2 = TopPositionElement2 + heightElement2;
    var rightElement2 = LeftPositionElement2 + widthElement2;

    if (LeftPositionElement1 > rightElement2 || LeftPositionElement2 > rightElement1) {
        return false;
    }

    if (TopPositionElement1 > BottomElement2 || TopPositionElement2 > BottomElement1) {
        return false;
    }

    return true;
}

// To call:
//if (crash("ball 1 id", "ball 2 id")) {
    // do sometthing
//}
