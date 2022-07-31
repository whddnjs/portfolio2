import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Projects = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="projects" className="p-10 bg-[#393e46]">
      <div className="w-full mx-auto max-w-[95rem]">
        <div className="table pb-2 mx-auto mb-10 text-5xl text-white border-b border-white font-nanum-eb">
          PROJECTS
        </div>
        <div className="p-8 mx-auto mb-8 bg-white shadow_ rounded-xl">
          <div className="text-5xl text-center font-nanum-eb text-[#222] pb-2">
            Octopus Game
          </div>
          <div className="text-lg text-center font-nanum-bold text-[#666] mb-4">
            2021.10 ~ 2021.11 (5인 팀 프로젝트)
          </div>
          <div className="flex flex-wrap justify-center t:flex-col">
            <div className="w-[60%] mr-4 t:w-full t:mb-8">
              <Slider {...settings}>
                <div>
                  <img src="image/game_game.jpeg" alt="" />
                </div>
                <div>
                  <img src="image/game_join.jpeg" alt="" />
                </div>
                <div>
                  <img src="image/game_login.jpeg" alt="" />
                </div>
                <div>
                  <img src="image/game_my.jpeg" alt="" />
                </div>
                <div>
                  <img src="image/game_main.jpeg" alt="" />
                </div>
              </Slider>
            </div>
            <div className="w-[calc(40%-1rem)] t:w-full">
              <p className="pb-3 leading-7 border-b border-[#999]">
                국비학원 1차 팀 프로젝트때 만든 아두이노로 만든 게임패드를
                이용해 플레이 할 수 있는 플래시게임 웹사이트입니다. 당시
                인기였던 "오징어게임" 드라마를 패러디한 컨셉으로 만들었습니다.
                <br />
                <br />큰 스케일은 아니였지만 그동안 배웠던 자바와 오라클을
                프로젝트에 적용해보면서 다시 한번 복습 할 수 있었던
                프로젝트이며, HTML,CSS에 대해 많이 배울 수 있었습니다.
                <br />
                <br />
                처음 해본 팀 프로젝트라서 팀원들과 의사소통이 서툴러 주어진
                시간에 비해 다소 아쉬운 결과물이지만 팀 활동을 경험해보고
                팀워크의 중요성에 대해 생각하고 배울 수 있는 프로젝트였습니다.
              </p>
              <div className="py-4">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ 주요 기능
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  회원가입, 로그인, 게임플레이, 점수확인 및 등수확인
                </div>
              </div>
              <div className="py-3">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ GitHub
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  <a
                    target="_blank"
                    href="https://github.com/whddnjs/Octopus_game"
                    className="text-blue-400 break-words hover:text-blue-600"
                    rel="noopener noreferrer"
                  >
                    https://github.com/whddnjs/Octopus_game
                  </a>
                </div>
              </div>
              <div className="py-3">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ Front-end
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  HTML, CSS, JavaScript, jQuery
                </div>
              </div>
              <div className="pt-3">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ Back-end
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  JAVA(JSP & Servlet), Oracle
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto mb-8 bg-white shadow_ rounded-xl">
          <div className="text-5xl text-center font-nanum-eb text-[#222] pb-2">
            AEGIS
          </div>
          <div className="text-lg text-center font-nanum-bold text-[#666] mb-4">
            2021.11 ~ 2021.12 (5인 팀 프로젝트)
          </div>
          <div className="flex flex-wrap justify-center t:flex-col">
            <div className="w-[60%] mr-4 t:w-full t:mb-8">
              <Slider {...settings}>
                <div>
                  <img src="image/aegis1.jpeg" alt="" />
                </div>
                <div>
                  <img src="image/aegis2.jpeg" alt="" />
                </div>
                <div>
                  <img src="image/aegis3.jpeg" alt="" />
                </div>
              </Slider>
            </div>
            <div className="w-[calc(40%-1rem)] t:w-full">
              <p className="pb-3 leading-7 border-b border-[#999]">
                국비학원 2차 팀 프로젝트때 만든 작업장 통합 모니터링
                웹사이트입니다. 그중 React를 사용해 웹 프론트 파트를
                구현하였습니다.
                <br />
                <br />
                시간이 촉박해서 Redux보단 난이도가 낮은 Recoil 상태관리
                라이브러리를 배워 사용했고, Tailwindcss 라이브러리를 사용해
                디자인 했습니다.
                <br />
                <br />
                React와 Vanilla JS 기초를 많이 익히고, 검색하는 스킬, 혼자
                공부하는 방법을 배웠습니다.
              </p>
              <div className="py-4">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ 주요 기능
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  작업장 인원 파악, 실시간 센서값 확인, 센서값 기준치 초과시
                  경고, 위험 작업장 출입시 경고, 게시판
                </div>
              </div>
              <div className="py-3">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ GitHub
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  <a
                    target="_blank"
                    href="https://github.com/whddnjs/Aegis"
                    className="text-blue-400 break-words hover:text-blue-600"
                    rel="noopener noreferrer"
                  >
                    https://github.com/whddnjs/Aegis
                  </a>
                </div>
              </div>
              <div className="py-3">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ Front-end
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  React, Recoil, Tailwindcss
                </div>
              </div>
              <div className="pt-3">
                <div className="inline-block align-top w-28 font-nanum-bold">
                  ✔ Back-end
                </div>
                <div className="inline-block align-bottom w-[calc(100%-7rem)] tracking-wide">
                  Nodejs, MySQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
