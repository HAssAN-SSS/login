import './App.css'
import gsap from 'gsap'
import Container from './Container'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    gsap.fromTo(
      ":root",
      { backgroundImage: "linear-gradient(200deg, rgba(7,153,215,0.15) 50%, rgba(110,38,123,0.15) 100%)" },
      { backgroundImage: "linear-gradient(100deg, rgba(249,210,120,0.25) 99%, rgba(7,153,215,0.15) 60%",duration: 60, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div id='app'>
      <Container />



    </div>
  )
}

export default App
