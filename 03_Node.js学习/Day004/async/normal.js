function getData(callback) {
    setTimeout(() => {
        callback({ 'name': 'tom', 'age': 18 });
    }, 2000);

}

getData(function (data) {
    console.log(data);
})
