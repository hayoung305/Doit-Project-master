<template>
    <section class="maincontents">
        <section class="mainbanner">
            <img src="/images/mainimg.png">
        </section>
        <section class="newbook">
            <h1 class="maintit">새로 나온 도서 <span>분야별로 새로 나온 도서를 만나 보세요.</span></h1>
            <div class="tapcontent">
                <div class="tap">
                    <b-button variant="tap active" @click="AddContents('Newbooks_it')">IT 전문서</b-button>
                    <b-button variant="tap" @click="AddContents('Newbooks_work')">업무 능력, 기타</b-button>
                    <b-button variant="tap" @click="AddContents('Newbooks_photo')">사진 예술</b-button>
                    <b-button variant="tap" @click="AddContents('Newbooks_science')">데이터 과학</b-button>
                </div>
                <VueSlickCarousel class="mainslider" v-bind="settings">
                    <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
                        <span class="imgbox"><img :src="item.imgurl"></span>
                        <strong v-html="item.name"></strong>
                        <span class="textbox" v-html="item.subdec"></span>
                    </div>
                </VueSlickCarousel>
            </div>
        </section>
        <section class="searchbook">
            <h1 class="maintit">도서 검색 <span>찾고자 하는 도서명을 검색해 주세요.</span></h1>
            <div class="inputarea">
                <b-form-input v-model="keyword" />
                <b-button variant="search"><i class="bi bi-search"></i> </b-button>
                <div class="autolayer" v-if="keyword.length > 0" :class="{ none: autocomplate.length === 0 }">
                    <ul v-if="autocomplate.length > 0">
                        <li v-for="(item, index) in autocomplate[0].books" :key="index" v-html="item.booktit"></li>
                    </ul>
                    <div class="nonemessage" v-else>
                        <i class="bi bi-x-circle-fill"></i>검색 결과가 없습니다.
                    </div>
                </div>
            </div>
            <div class="guidehash">
                <span v-for="(item, index) in hashdata" :key="index" v-html="item.text"></span>
            </div>
        </section>
        <section class="bannermenu"></section>
        <section class="notice">
            <h1 class="maintit">공지사항</h1>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            Newbooks: [],
            Newbooks_it: [
                {
                    imgurl: "/images/books_image/book01.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book02.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book03.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book04.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book05.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book06.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book07.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book08.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book09.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book10.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book11.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book12.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
                {
                    imgurl: "/images/books_image/book13.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."
                },
            ],
            Newbooks_work: [
                {
                    imgurl: "/images/books_image/book08.jpg",
                    name: "된다! 엑셀 수식 & 함수",
                    subdec: "매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을..."
                }
            ],
            Newbooks_photo: [
                {
                    imgurl: "/images/books_image/book15.jpg",
                    name: "포토샵 사진 보정 & 합성 디자인 사전",
                    subdec: "포토샵 사진 보정, 합성 때문에 고민인가요? 한 권으로 상위..."
                }
            ],
            Newbooks_science: [
                {
                    imgurl: "/images/books_image/book21.jpg",
                    name: "블록체인 무엇인가?",
                    subdec: "이 책은 과장된 소문에 휘둘리지도, 비트코인에 집중하지도 않는..."
                }
            ],
            settings: {
                slidesToShow: 5,    // 화면에 나타날 슬라이드 개수
                arrows: true,       // 버튼 사용 여부
                dots: false,        // 하단 버튼 사용 여부
                infinite: true,     // 슬라이드 반복 여부
                responsive: [       // 반응형 옵션
                    {
                        breakpoint: 767,        // 브라우저 크기가 767 이하일 때
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 464,        // 브라우저 크기가 464 이하일 때
                        settings: {
                            slidesToShow: 2,
                        },
                    }
                ]
            },
            hashdata: [
                { text: "html", value: "html" },
                { text: "vue", value: "vue" },
                { text: "css", value: "css" },
                { text: "javascript", value: "javascript" },
                { text: "자료구조/알고림즘", value: "자료구조/알고림즘" },
                { text: "파이썬", value: "파이썬" },
            ],
            booksname: [
                {
                    cata: "html",
                    books: [
                        { booktit: "Do it! 웹 사이트 따라 만들기", author: "김윤미" },
                        { booktit: "Do it! HTML+CSS+자바스크립트 웹 표준의 정석", author: "고경희" },
                        { booktit: "Do it! 반응형 웹 만들기", author: "김운아" },
                        { booktit: "Do it! 인터렉티브 웹 페이지 만들", author: "최상일" },
                    ],
                },
                {
                    cata: "vue",
                    books: [
                        { booktit: "Do it! vuw.js 입문", author: "장기효" },
                    ],
                },
                {
                    cata: "javascript",
                    books: [
                        { booktit: "Do it ! 프로그래시브 웹앱 만들기", author: "김응석" },
                        { booktit: "Do it ! 모던 자바스크립트 프로그래밍의 정석", author: "고경희" },
                    ],
                },
            ],
            keyword: "",
        };
    },
    created() {
        this.Newbooks = this.Newbooks_it;
    },
    methods: {
        AddContents(contents) {
            this.Newbooks = this[contents];
            // console.log(event.target);      // 이를 통해 이벤트의 세부 정보를 알 수 있음 
            // event.target : 이벤트가 발생한 DOM요소
            // event.currentTarget : 이벤트 핸들러가 연결된 DOM 요소
            // event.type : 이벤트의 유형을 나타냄
            document.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
        },
    },
    computed: {
        autocomplate() {
            const resultlists = this.booksname.filter((item) => {
                if (item.cata.match(this.keyword))
                    return item; // item 반환
            });
            return resultlists;
        },
    },
};
</script>