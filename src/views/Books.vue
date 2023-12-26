<template>
    <Subpage :pagetit="'도서 소개'">
        <div class="bookpage">
            <VueSlickCarousel class="subpageslider" v-bind="settings">
                <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
                    <div class="imgbox"><img :src="item.imgurl"></div>
                    <strong v-html="item.name"></strong>
                </div>
            </VueSlickCarousel>
            <section class="bookdetail">
                <h1 class="booktitle">
                    Do it ! 웹사이트 따라 만들기
                    <span>HTML, CSS, 자바스크립트, JQuery, Ajax로 웹 퍼블리싱</span>
                </h1>
                <div class="book-info">
                    <div class="imgview">
                        <div class="imgbook">
                            <img src="/images/books_image/book01.jpg" alt="">
                        </div>
                        <div class="bookbtns">
                            <b-button variant="lightgray">
                                <i class="bi bi-search"></i>책 미리보기
                            </b-button>
                            <b-button variant="lightgray">전자책</b-button>
                        </div>
                    </div>
                    <div class="infolist">
                        <ul>
                            <li v-for="(item, index) in bookinfoLists" :key="index">
                                <span class="label" v-html="item.label"></span>
                                <span class="infocontent" v-html="item.content"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="book-detailinfo">
                    <div class="detailTap">
                        <b-form-radio name="detail-tap" v-model="tapselect" value="introduce" button
                            button-variant="detailtap">
                            <i class="bi bi-mic"></i>책 소개
                        </b-form-radio>
                        <b-form-radio name="detail-tap" v-model="tapselect" value="review" button
                            button-variant="detailtap">
                            <i class="bi bi-chat-left-text"></i>출판사 리뷰
                        </b-form-radio>
                        <b-form-radio name="detail-tap" v-model="tapselect" value="order" button button-variant="detailtap">
                            <i class="bi bi-layout-text-sidebar-reverse"></i>목차
                        </b-form-radio>
                        <b-form-radio name="detail-tap" v-model="tapselect" value="write" button button-variant="detailtap">
                            <i class="bi bi-journal-text"></i>저자 소개
                        </b-form-radio>
                        <b-form-radio name="detail-tap" v-model="tapselect" value="recommendation" button
                            button-variant="detailtap">
                            <i class="bi bi-person-check"></i>추천의 글
                        </b-form-radio>
                        <b-form-radio name="detail-tap" v-model="tapselect" value="reference" button
                            button-variant="detailtap">
                            <i class="bi bi-inboxes"></i>자료실
                        </b-form-radio>
                    </div>
                    <template v-if="tapselect === 'introduce'">
                        <div class="detailTapCon">
                            <h1 class="tapcontit">
                                <strong>"Do it ! 웹 사이트 따라 만들기"</strong>를 소개합니다.
                            </h1>
                            <p>
                                웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로 <br> 웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔! <br> 이 책
                                한권이면 웹 사이트 하나가 뚝딱 완성
                            </p>
                        </div>
                    </template>
                    <template v-if="tapselect === 'review'">
                        <div class="detailTapCon">
                            <h1 class="tapcontit">
                                <strong>출판사 리뷰</strong>
                            </h1>
                            <p>
                                웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로 <br> 웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔! <br> 이 책
                                한권이면 웹 사이트 하나가 뚝딱 완성
                            </p>
                        </div>
                    </template>
                    <template v-if="tapselect === 'order'">
                        <div class="detailTapCon">
                            <h1 class="tapcontit">
                                <strong>목차</strong>
                            </h1>
                            <p>
                                웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로 <br> 웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔! <br> 이 책
                                한권이면 웹 사이트 하나가 뚝딱 완성
                            </p>
                        </div>
                    </template>
                    <template v-if="tapselect === 'write'">
                        <div class="detailTapCon">
                            <h1 class="tapcontit">
                                <strong>저자 소개</strong>
                            </h1>
                            <p>
                                웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로 <br> 웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔! <br> 이 책
                                한권이면 웹 사이트 하나가 뚝딱 완성
                            </p>
                        </div>
                    </template>
                    <template v-if="tapselect === 'recommendation'">
                        <div class="detailTapCon">
                            <h1 class="tapcontit">
                                <strong>추천의 글</strong>
                            </h1>
                            <p>
                                웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로 <br> 웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔! <br> 이 책
                                한권이면 웹 사이트 하나가 뚝딱 완성
                            </p>
                        </div>
                    </template>
                    <template v-if="tapselect === 'reference'">
                        <div class="detailTapCon">
                            <h1 class="tapcontit">
                                <strong>자료실</strong>
                            </h1>
                            <p>
                                웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로 <br> 웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔! <br> 이 책
                                한권이면 웹 사이트 하나가 뚝딱 완성
                            </p>
                        </div>
                    </template>
                </div>

            </section>
        </div>
    </Subpage>
</template>

<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
    components: {
        Subpage,
    },
    data() {
        return {
            Newbooks: [
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
            settings: {
                slidesToShow: 8,    // 화면에 나타날 슬라이드 개수
                arrows: true,       // 버튼 사용 여부
                dots: false,        // 하단 버튼 사용 여부
                infinite: true,     // 슬라이드 반복 여부
                responsive: [       // 반응형 옵션
                    {
                        breakpoint: 1023,        // 브라우저 크기가 767 이하일 때
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoint: 767,        // 브라우저 크기가 464 이하일 때
                        settings: {
                            slidesToShow: 2,
                        },
                    }
                ]
            },
            bookinfoLists: [
                { label: "저자", content: "김윤미" },
                { label: "발행일", content: "2019-11-28" },
                { label: "사양", content: "312쪽 : 188*258mm" },
                { label: "ISBN", content: "979-11-6303-119-2 13000" },
                { label: "정가", content: "16,000원" },
                { label: "상태", content: "정상 판매중" },
            ],
            tapselect: "introduce",
        }
    },
};
</script>