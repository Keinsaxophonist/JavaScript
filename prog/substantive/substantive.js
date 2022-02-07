document.getElementById("button").onclick = function() {

var tmp = document.getElementById("textfeld").value;

    tmp = tmp.replaceAll(" ", "', <br/>");
    tmp = tmp.replaceAll("<br/>", "'<br/>");

    document.getElementById("label").innerHTML ="var Worte = ['" +  tmp + " ']";
}