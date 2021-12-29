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
    let favList = "";
    let afternoon = "";
    for (let i = 0; i < artistData.length; i++) {
        var status = "";
        if(artistData[i].type=="circle"){
            status = "artist.html?artistName=" + artistData[i].p;
        } else {
            status = "play.html?title=" + artistData[i].h4;
        }
        favList += 
        `
        <li class="swiper-slide">
            <a href="${status}">
                <div class="img_box">
                    <img class="${artistData[i].type}" src="img/${artistData[i].img}" alt="${artistData[i].h4} - ${artistData[i].p}">
                </div>
                <div class="txt_box">
                    <h4>${artistData[i].h4}</h4>
                    <p>${artistData[i].p}</p>
                </div>
            </a>
        </li>
        `
        ;
        
        
        
    }
    for (let i = artistData.length -1 ; i >= 0; i--) {
        var status = "";
        if(artistData[i].type=="circle"){
            status = "artist.html?artistName=" + artistData[i].p;
        } else {
            status = "play.html?title=" + artistData[i].h4;
        }
        afternoon +=
            `
            <li class="swiper-slide">
                <a href="${status}">
                    <div class="img_box">
                        <img class="${artistData[i].type}" src="img/${artistData[i].img}" alt="${artistData[i].h4} - ${artistData[i].p}">
                    </div>
                    <div class="txt_box">
                        <h4>${artistData[i].h4}</h4>
                        <p>${artistData[i].p}</p>
                    </div>
                </a>
            </li>
            
            `
        ;
    }
   $("#favList").html(favList);
   $("#newAlbum").html(favList);
   $("#afternoon ul").html(afternoon);

});

