const pageRouter = {
  path: "/", //  컴포넌트 경로
  name: "layout", //  컴포넌트 이름
  //  redirect: "/main",  해당 컴포넌트를 바로 출력함(리다이렉트)
  component: () => import("@/layout/index.vue"),
  children: [
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main.vue"),
    },
    {
      path: "/book",
      name: "book",
      component: () => import("@/views/Books.vue"),
    },
  ],
};

export default pageRouter;
