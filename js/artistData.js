$(document).ready(function () {

    var artistData = [{
            type: "background",
            title: "즐겨듣는 아티스트",
            h2: "백예린",
            album: "",
            img: "yerin_bg.jpg"

        },
        {
            type: "nonBg",
            title: "Bye Bye my Blue",
            h2: "백예린",
            album: "Bye Bye my Blue",
            img: "byebyemyblue.jpg"

        },
        {
            type: "nonBg",
            title: "square",
            h2: "백예린",
            album: "Every letter is sent you",
            img: "everyletterIsentyou.jpg"

        },
        {
            type: "nonBg",
            title: "우주를 건너",
            h2: "백예린",
            album: "Frank",
            img: "frank.jpg"

        },
        {
            type: "nonBg",
            title: "왜 날?",
            h2: "백예린",
            album: "선물",
            img: "gift.jpg"

        },
        {
            type: "nonBg",
            title: "그건 아마 우리의 잘못이 아닐거야",
            h2: "백예린",
            album: "Our Love is great",
            img: "ourloveisgreat.jpg"

        },
        {
            type: "nonBg",
            title: "love you on christmas",
            h2: "백예린",
            album: "love you on christmas",
            img: "loveyouonchristmas.jpg"

        },
        {
            type: "background",
            title: "즐겨듣는 아티스트",
            h2: "AKMU",
            album: "",
            img: "AKMU_bg.jpg"

        },
        {
            type: "nonBg",
            title: "Give Love",
            h2: "AKMU",
            album: "play",
            img: "AKMU_01.jpg"

        },
        {
            type: "nonBg",
            title: "RE-BYE",
            h2: "AKMU",
            album: "사춘기 上",
            img: "AKMU_02_1.jpg"

        },
        {
            type: "nonBg",
            title: "오랜 날 오랜 밤",
            h2: "AKMU",
            album: "사춘기 下",
            img: "AKMU_02_2.jpg"

        },
        {
            type: "nonBg",
            title: "DINOSAUR",
            h2: "AKMU",
            album: "SUMMER EPISODE",
            img: "AKMU_02_3.jpg"

        },
        {
            type: "nonBg",
            title: "뱃노래",
            h2: "AKMU",
            album: "항해",
            img: "AKMU_03.jpg"

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/ky_eju33KuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            h2: "AKMU",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/EtiPbWzUY9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            h2: "AKMU",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/n30-nDqriys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            h2: "AKMU",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/fY4wgaEb5TY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            h2: "AKMU",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/yfS6FnER1pg" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`,
            h2: "백예린",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/_md16sTcnPM" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`,
            h2: "백예린",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/_EfRa_ywkEw" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`,
            h2: "백예린",
            album: "",
            img: ""

        },
        {
            type: "iframe",
            title: `<iframe src="https://www.youtube.com/embed/z19ceDKYAlo" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`,
            h2: "백예린",
            album: "",
            img: ""

        },
    ];

    let artistWrap = "";
    let artistList = "";
    let albumList = "";
    let iframeList = "";
    for (let i = 0; i < artistData.length; i++) {
        if (artistData[i].h2 == checkParam()) {
            //상단 백그라운드 이미지 및 좋아요 갯수
            if (artistData[i].type == "background") {
                var cnt = randomNumber();
                $(".artistWrap").css("background-image", 
                    `linear-gradient(
                        to bottom,
                        rgba(20, 20, 20, 0) 10%, 
                        rgba(20, 20, 20, 0.3) 50%,
                        rgba(20, 20, 20, 0.8) 75%, 
                        rgba(20, 20, 20, 1) 100%), 
                        url(img/${artistData[i].img})`
                );
                artistWrap =
                    `
                    <div class="inner">
                        <div class="txt_box">
                        <h2>${artistData[i].h2}</h2>
                        <a href="#">
                            <p>
                            <i class="fas fa-heart"></i>&nbsp;&nbsp;
                                ${cnt}
                            </p>
                        </a>
                        </div>
                    </div>
                    `;

                $(".artistWrap").html(artistWrap);
            } else if(artistData[i].type == "nonBg") {
                

                artistList +=
                    `
                    <li>
                        <a href="#">
                            <div class="img_box">
                                <img src="img/${artistData[i].img}" alt="${artistData[i].title}">
                            </div>
                            <div class="txt_box">
                                <h4>${artistData[i].title}</h4>
                                <p>${artistData[i].h2}</p>
                            </div>
                            <div class="more">
                                <i class="fas fa-ellipsis-v"></i>
                             </div>
                        </a>
                    </li>
                    `;
                if (artistData[i].album != null && artistData[i].album != undefined) {
                    //앨범이 있는 경우 앨범에 표시
                    albumList +=
                        `
                        <li class="swiper-slide">
                            <a href="#">
                                <div class="img_box">
                                    <img src="img/${artistData[i].img}" alt="${artistData[i].album}">
                                </div>
                                <div class="txt_box">
                                    <h4>${artistData[i].album}</h4>
                                    <p>${artistData[i].h2}</p>
                                </div>
                            </a>
                        </li>
                        `;
                }

            } else {
               iframeList +=
                `
                <li class="swiper-slide">
                    <div>
                        ${artistData[i].title}
                    </div>
                </li>
                `;
            }
           
            
        }
        
    }
    $(".ArtList ul").html(artistList);
    $(".album ul").html(albumList);
    $(".video ul").html(iframeList);

    




});

function checkParam() {
    // index.html 에서 클릭하면 artist.html?artistName = "아티스트이름"
    // 으로 주소가 이동한다. 
    // 이전 화면의 주소에서 "아티스트이름" 부분을 얻어와서 어느가수의 데이터가 필요한지
    // 알기 위한 함수이다. 
    // decodeUIR 함수는 자바스크립트 내장자체 함수로
    // html 주소는 백예린 이라고 주소창에 쳤을 경우 주소가 %EB%B0%B1%EC%98%88%EB%A6%B0%0A
    // 으로 인코딩되면서 바뀐다 이걸 다시 한글로 바꿔주기 위한 함수이 decode다 
    return decodeURI(window.location.search.split('artistName=')[1]);
}

function randomNumber() {
    // Math.random 함수는 검색해보면 많이 나옴
    let str = ''
    for (let i = 0; i < 6; i++) {
        if (i == 3) str += ",";
        str += Math.floor(Math.random() * 10)
    }
    //왼쪽에 0이 붙는 경우 0제거 ex)0012345 = 12345
    return str.replace(/(^0+)/, "");
}