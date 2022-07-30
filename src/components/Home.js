import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const content = '웹 개발자 김종원의 포트폴리오입니다.';
    const text = document.querySelector('.text');
    let i = 0;
    function typing() {
      if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
      }
    }
    setInterval(typing, 200);
  });
  return (
    <div
      id="home"
      className="flex items-center justify-center h-[70vh] home_bg w-full text-white"
    >
      <div className="text-5xl font-nanum-bold text lg:text-4xl sm:text-2xl"></div>
      <div className="text-6xl animate-pulse1 font-nanum-bold lg:text-5xl sm:text-3xl">
        |
      </div>
    </div>
  );
};

export default Home;
