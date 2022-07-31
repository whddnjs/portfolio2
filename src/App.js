import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Top from './components/Top';
import { useEffect, useState } from 'react';

const App = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setScroll(true);
      // console.log(scroll);
    } else {
      setScroll(false);
    }
  };

  return (
    <div className="w-full font-nanum-regular">
      <Header scroll={scroll} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Top scroll={scroll} />
    </div>
  );
};

export default App;
