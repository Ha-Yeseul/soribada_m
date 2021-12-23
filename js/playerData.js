$(document).ready(function () {
    var artistData = [{
        type: "squire",
        h4: "Next Level",
        p: "AESPA",
        img: "aespa01.jpg"
    },
    {
        type: "circle",
        h4: "즐겨듣는 아티스트",
        p: "AKMU",
        img: "AKMU.jpg"
    },
    {
        type: "squire",
        h4: "BTS",
        p: "Butter",
        img: "bts.jpg"
    },
    {
        type: "circle",
        h4: "즐겨듣는 아티스트",
        p: "백예린",
        img: "yerin.jpg"
    },
    {
        type: "squire",
        h4: "나의 첫사랑",
        p: "다비치",
        img: "davichi.jpg"
    },
    {
        type: "squire",
        h4: "라일락",
        p: "아이유",
        img: "IU01.jpg"
    },
    {
        type: "squire",
        h4: "Strawberry Moon",
        p: "아이유",
        img: "IU02.jpg"
    },
    {
        type: "squire",
        h4: "사랑은 늘 도망가",
        p: "임영웅",
        img: "imyeongung.jpg"
    },
    {
        type: "squire",
        h4: "ELEVEN",
        p: "IVE",
        img: "IVE_ELEVEN.jpg"
    },
    {
        type: "squire",
        h4: "Cold Blooded",
        p: "Jessi",
        img: "jessi.jpg"
    },
    {
        type: "squire",
        h4: "TANG♡",
        p: "MINO",
        img: "MINO-TANG.jpg"
    },
    {
        type: "squire",
        h4: "동거",
        p: "선우정아",
        img: "SWJA.jpg"
    },
    {
        type: "squire",
        h4: "You can't sit with us",
        p: "선미",
        img: "sunmi.jpg"
    }


];


    for (let i = 0; i < artistData.length; i++) {
        
        if (artistData[i].h4 == checkParam() && artistData[i].type == "squire") {   
            console.table(artistData[i])
            $("#img").attr('src',`img/${artistData[i].img}`);
            $("#img").attr('alt',`${artistData[i].p} - ${artistData[i].h4}`);
            $("#title").text(artistData[i].h4);
            $("#singer").text(artistData[i].p);
        }
        
    }

    




});

function checkParam() {
    // index.html 에서 클릭하면 play.html?title = "아티스트이름"
    // 으로 주소가 이동한다. 
    // 이전 화면의 주소에서 "아티스트이름" 부분을 얻어와서 어느가수의 데이터가 필요한지
    // 알기 위한 함수이다. 
    // decodeUIR 함수는 자바스크립트 내장자체 함수로
    // html 주소는 백예린 이라고 주소창에 쳤을 경우 주소가 %EB%B0%B1%EC%98%88%EB%A6%B0%0A
    // 으로 인코딩되면서 바뀐다 이걸 다시 한글로 바꿔주기 위한 함수이 decode다 
    return decodeURI(window.location.search.split('title=')[1]);
}

