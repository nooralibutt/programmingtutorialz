function load_page() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("page").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "article.html", true);
    xmlhttp.send();
    console.log(xmlhttp);
}