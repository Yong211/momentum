$(document).ready(function () {
    renderCurrentTemp();
    renderCurrentTime();
    renderQuote();
});

function renderCurrentTemp() {
    let url = `http://spartacodingclub.shop/sparta_api/weather/seoul`;

    // 방법은 아래에 하신 방법이랑 같은 방법으로 진행했습니다.
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // 요 아래 부분이 ajax 부분이에요. $() 이 부분입니다.
            $("#temp").text(data["temp"]);
        })
        // 이렇게 catch를 쓰시면 에러를 찾아서 무슨에러인지 체크 가능합니다.
        .catch((error) => {
            console.log(error);
        });
}

function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let datetime = data["datetime"].substr(11, 5);
            $("#time").text(datetime);
        });
}

function renderQuote() {
    let url = `https://api.quotable.io/random`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let content = `" ${data["content"]} "`;

            let author = `- ${data["author"]} -`;

            $("#content").text(content);

            $("#author").text(author);
        });
}