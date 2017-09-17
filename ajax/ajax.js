window.onload = function () {

    // AJAX using vanilla javascript
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {

        if (http.readyState == 4 && http.status == 200) {
            // console.log(JSON.parse(http.response));
        }

        // console.log(http.readyState);
    }

    http.open("GET", "./data.json", true);
    http.send();


    // AJAX using jQuery
    $.get('./data.json', function (data) {
        // console.log(data);
    });


    // AJAX using axios

    axios.get('./data.json')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}
