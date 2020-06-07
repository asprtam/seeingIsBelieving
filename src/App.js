import React, { useEffect } from 'react';
import './App.css';
import Menu from './top/menu';
import Sign from './top/sign';
import Hero from './hero/hero';
import Article from './article/article';
import Footer from './footer/footer';

const App = () => {
  useEffect(() =>{
    window.getComputedStyle(document.body);
  })
  return (
    <div className="App">
      <Menu/>
      <Sign/>
      <Hero/>
      <Article/>
      <Footer>Let CaseDesign’s 3D renderings and proprietary CaseStudy® process transform your—or your client’s—next project.</Footer>
    </div>
  );
}

export default App;
