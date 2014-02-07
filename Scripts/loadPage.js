$(document).ready(function () {
    $('#left-nav a').click(function (e) {
        e.preventDefault();
        var v = e.target.getAttribute('href');
        $('#left-nav').text = v;
    });
});