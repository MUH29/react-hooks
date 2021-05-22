import  React,{ useState } from 'react';

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
const[pageName,setPageName] = useState("Home");
const changePageName = (pageName) => setPageName(pageName);
return (
  <>
  <Header changePageName={setPageName} currentPage={pageName} />
{pageName === "Home" && <Home/>}
{pageName === "About" && <About/>}
  <Footer />
  </>
);_
}


export default App;