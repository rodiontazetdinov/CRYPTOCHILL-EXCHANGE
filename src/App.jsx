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
import { Account } from './pages/Account';
import { useState } from 'react';

export const App = () => {

  const [dropdownTagsOpen, setDropdownTagsOpen] = useState(false);
  const [dropdownMainMenuOpen, setDropdownMainMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div
      onClick={() => {
        if (isLanguageOpen) setIsLanguageOpen(false);
        if (isAccountOpen) setIsAccountOpen(false);
        if (dropdownTagsOpen) setDropdownTagsOpen(false);
        if (dropdownMainMenuOpen) setDropdownMainMenuOpen(false);
      }}
      className="App bg-[center_-500px] bg-main-bg bg-main-bg-img overflow-x-hidden"
    >
      <Routes>
        <Route
          path="/" 
          element={
            <Layout
              dropdownMainMenuOpen={dropdownMainMenuOpen}
              setDropdownMainMenuOpen={setDropdownMainMenuOpen}
              isLanguageOpen={isLanguageOpen}
              setIsLanguageOpen={setIsLanguageOpen}
              isAccountOpen={isAccountOpen}
              setIsAccountOpen={setIsAccountOpen}
            />
          }
        >
          <Route index element={<Main/>} />
          <Route path="about" element={<AboutUs/>} />
          <Route
            path="blog" 
            element={
              <Blog
                dropdownTagsOpen={dropdownTagsOpen}
                setDropdownTagsOpen={setDropdownTagsOpen} />
            }
          />
          <Route path="faq" element={<Faq/>} />
          <Route path="api" element={<ApiPage/>} />
          <Route path="support" element={<Support/>} />
          <Route path="sending" element={<SendingPage/>} />
          <Route path="account/*" element={<Account/>} />
        </Route>
      </Routes>
      {/* <Header/> */}
    </div>
  );
}
