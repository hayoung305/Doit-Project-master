/* __placeholder__ */
export default (await import("vue")).defineComponent({
  data() {
    return {
      Newbooks: [
        {
          imgurl: "/images/books_image/book01.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book02.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book03.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book04.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book05.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book06.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book07.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book08.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book09.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book10.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book11.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book12.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book13.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
      ],
      settings: {
        slidesToShow: 5, // 화면에 나타날 슬라이드 개수
        arrows: true, // 버튼 사용 여부
        dots: false, // 하단 버튼 사용 여부
        infinite: true, // 슬라이드 반복 여부
        responsive: [
          {
            breakpoint: 767, // 브라우저 크기가 767 이하일 때
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 464, // 브라우저 크기가 464 이하일 때
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
});
