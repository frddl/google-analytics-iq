var q = document.getElementsByClassName('question__question')[0].innerText;
var url = "https://example.com/server.php?q=" + q; // change example.com with your domain
var method = "GET";
var postData = q;
var shouldBeAsync = true;

var request = new XMLHttpRequest();
request.onload = function () {
    var status = request.status;
    var data = request.responseText;

    document.getElementsByClassName('u-headingsection--assessment')[0].innerText += ' (answer: ' + data + ')';
    console.log(data);
}

request.open(method, url, shouldBeAsync);
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.send(postData);
