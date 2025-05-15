import {  Route, Routes } from "react-router-dom";
import Header from "./Header";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const {mode} = useSelector(state => state.theme)

  useEffect(() => {
    const htmlElement = document.documentElement

    if(mode === 'dark') {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [mode])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:countryCode" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
