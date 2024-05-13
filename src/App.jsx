import { Fragment, useContext } from "react";
import { BrowserRouter, Navigate, Route,  Routes } from "react-router-dom";

import Layout from "./components/layout/public";
import HomePage from "./pages/public/home";
import CategoryPage from "./pages/public/category";
import PostPage from "./pages/public/posts";
import BlogPage from "./pages/public/blog";
import AboutPage from "./pages/public/about";
import RegisterPage from "./pages/public/register";
import LoginPage from "./pages/public/login";
import AccountPage from "./pages/user/account";
import MyPostPage from "./pages/user/my-posts";

import 'swiper/css';
import AdminAccountPage from "./pages/admin/account";
import AdminLayout from "./components/layout/private";
import Dashboard from "./pages/admin/dashboard";
import { AuthContext } from "./context";
import AdminCategoryPage from "./pages/admin/category";
import AdminPostPage from "./pages/admin/posts";


const App = () => {
  const {isAuth , role} = useContext(AuthContext)
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="posts" element={<PostPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="account" element={<AccountPage /> }/>
            <Route path="my-posts" element={<MyPostPage />} /> */}

            <Route path="account" element={isAuth  ? <AccountPage /> : <Navigate to="/login" />} />
            <Route path="my-posts" element={isAuth ?  <MyPostPage /> : <Navigate to="/login" />} />
          </Route>
          <Route element={isAuth && role === "admin" ? <AdminLayout/>  : <Navigate to="/"/>}>
            <Route path="admin/dashboard" element={<Dashboard/>}/>
            <Route path="admin/category" element={<AdminCategoryPage/>}/>
            <Route path="admin/post" element={<AdminPostPage/>}/>
            <Route path="admin/account" element={<AdminAccountPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
