<template>
    <section id="wrap">
        <!-- 검색 엔진 최적화를 위해 콘텐츠롸 어울리는 제목을 h1태그에 텍스트로 넣음 -->
        <h1 class="blind">웹사이트 제목</h1>
        <Header />
        <section id="container">
            <router-view />
        </section>
        <Footer />
    </section>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
};
</script>