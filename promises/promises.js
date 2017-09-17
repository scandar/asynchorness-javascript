window.onload = function () {

    function get(url) {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);

            xhttp.onload = function () {
                if (xhttp.status == 200) {
                    resolve(JSON.parse(xhttp.response));
                } else {
                    reject(xhttp.statusText);
                }
            }

            xhttp.onerror = function () {
                reject(xhttp.statusText);
            }

            xhttp.send();
        });
    }

    var promise = get("./data.json");

    promise.then(function (data) {
        console.log(data);
        return get("./data2.json");
    }).then(function (data) {
        console.log(data);
        return get("./data3.json");
    }).then(function (data) {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    });



/*
    // jQuery
    $.get("./data.json").then(function (data) {
        console.log(data);
        return $.get("./data2.json");
    }).then(function (data) {
        console.log(data);
        return $.get("./data3.json");
    }).then(function (data) {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    });
*/

}
