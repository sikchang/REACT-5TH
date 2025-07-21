import Home from "@/page/Home";
import Login from "@/page/Login";
import Product from "@/page/Product";
import ProductDeail from "@/page/ProductDeail";
import Register from "@/page/Register";

export const routes = [
  {
    title: '메인',
    path: '/',
    element: <Home />
  },
  {
    title: '상품목록',
    path: '/Product',
    element: <Product />
  },
  {
    title: '고객지원',
    path: '/Contact',
    element: <div>Contact page</div>
  },
  {
    title: '로그인',
    path: '/Login',
    element: <Login />
  },
  {
    title: '회원가입',
    path: '/Register',
    element: <Register />
  },
  {
    title: '상품상세',
    path: '/Product/:id', // 동적 라우팅
    element: <ProductDeail />
  },
]


















