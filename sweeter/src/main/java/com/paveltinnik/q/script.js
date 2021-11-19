var div = document.getElementById("root");

function main() {
    alert("Today's date is " + x);
}

var p = document.createElement("p");
var node = document.createTextNode("Some text");
p.appendChild(node);
div.appendChild(p);

function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
}

setInterval(
    () => div.innerHTML = getCurrentTimeString(),
    1000
);
