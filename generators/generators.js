window.onload = function () {

    genWrap(function* () {
        var data = yield $.get("./data.json");
        console.log(data);
        var data2 = yield $.get("./data2.json");
        console.log(data2);
        var data3 = yield $.get("./data3.json");
        console.log(data3);
    });

    function genWrap(generator) {
        var gen = generator();

        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function (data) {
                    return handle(gen.next(data));
                });
            }
        }

        return handle(gen.next());
    }

}
