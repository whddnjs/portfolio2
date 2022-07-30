import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="py-10 w-full bg-[#eee]">
      <h1 className="mb-10 text-5xl text-center font-nanum-eb">ABOUT ME</h1>
      <div className="w-full px-10 text-lg leading-loose text-center">
        <p>
          ▪ 어려서부터 컴퓨터를 좋아해서 자연스레 프로그래밍에 관심이
          생겼습니다.
        </p>
        <p>▪ 새로운 것에 도전하고 배우는 것을 좋아합니다.</p>
        <p>
          ▪ 프론트엔드뿐만 아니라 백엔드에도 관심이 있고 최종적으로는 풀스택
          개발자를 목표로 하고 있습니다.
        </p>
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="w-[60%] justify-around flex t:flex-col">
          <div></div>
          <div className="flex items-center justify-center t:mb-2">
            <BsFillTelephoneFill size="25" />
            <div className="ml-2 text-xl">010-6292-7950</div>
          </div>
          <div className="flex items-center justify-center t:mb-2">
            <MdEmail size="30" />
            <div className="ml-2 text-xl">kimjw7950@gmail.com</div>
          </div>
          <div className="flex items-center justify-center">
            <BsGithub size="30" />
            <div className="ml-2 text-xl text-blue-400 hover:text-blue-600">
              <a
                target="_blank"
                href="https://github.com/whddnjs"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
