import  React,{ useState } from 'react';

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';



function App() {
  const [pageName, setPageName] = useState("Home");

  const changePageName = (pageName) => setPageName(pageName);

  return (
    <>
      <Header changePageName={changePageName} currentPage={pageName} />
      {pageName === "Home" && <Home />}
      {pageName === "About" && <About />}
      {pageName === "News" && <News />}
      {pageName === "Contact" && <Contact />}
      <Footer />
    </>
  );
};
export default App;