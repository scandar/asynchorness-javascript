window.onload = function () {

    function handleErrors(jqXHR, textStatus, error) {
        console.log(error);
    }


    // AJAX using jQuery
    ajaxGet("./data.json", logDataOne, handleErrors);

    function logDataOne(data) {
        console.log(data);
        ajaxGet("./data2.json", logDataTwo, handleErrors);
    }

    function logDataTwo(data) {
        console.log(data);
        ajaxGet("./data3.json", logDataThree, handleErrors);
    }

    function logDataThree(data) {
        console.log(data);
    }

    function ajaxGet(url, success, error) {
        $.ajax({
            type: 'GET',
            url: url,
            success: success,
            error: error
        });
    }
    
}
