import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { AboutUs } from './pages/AboutUs';
import { Blog } from './pages/Blog';
import { Faq } from './pages/Faq';
import { ApiPage } from './pages/ApiPage';
import { Support } from './pages/Support';
import { SendingPage } from './pages/SendingPage';

export const App = () => {
  return (
    <div className="App bg-[center_-500px] bg-main-bg bg-main-bg-img overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="api" element={<ApiPage/>} />
          <Route path="support" element={<Support/>} />
          <Route path="sending" element={<SendingPage/>} />
        </Route>
      </Routes>
      {/* <Header/> */}
    </div>
  );
}
