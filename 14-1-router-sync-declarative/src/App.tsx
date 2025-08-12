import Root from '@/pages';
import About from "@/pages/About";
import AuthLayout from '@/pages/Auth/AuthLayout';
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import City from '@/pages/Concerts/City';
import ConcertsHome from '@/pages/Concerts/ConcertsHome';
import Trending from '@/pages/Concerts/Trending';
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Root />}>
            {/* 기본 홈 페이지 */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            {/* auth route 감싸주는 것의 이름 prefix*/}
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* concerts route */}
            <Route path="concerts">
              <Route index element={<ConcertsHome />} />
              <Route path=':city' element={<City />} />
              <Route path="trending" element={<Trending />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
