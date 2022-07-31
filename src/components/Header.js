import { useState } from 'react';
import { Link } from 'react-scroll';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

const Header = ({ scroll }) => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const offToggle = () => {
    setToggle(false);
  };

  return (
    <>
      <ul
        className={`flex fixed right-10 w-[35%] h-[55px] bg-black/70 text-white text-xl rounded-b-3xl text-opacity-70 justify-around items-center t:w-full t:bg-white t:right-0 t:rounded-none t:text-black t:h-[60px] ${
          toggle ? 't:flex' : 't:hidden'
        } z-10`}
      >
        <Link to="home" spy={true} smooth={true} duration={300}>
          <li
            className="cursor-pointer hover:text-opacity-100 hover:text-white t:hover:text-black"
            onClick={offToggle}
          >
            HOME
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={300}>
          <li
            className="cursor-pointer hover:text-opacity-100 hover:text-white t:hover:text-black"
            onClick={offToggle}
          >
            ABOUT ME
          </li>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={300}>
          <li
            className="cursor-pointer hover:text-opacity-100 hover:text-white t:hover:text-black"
            onClick={offToggle}
          >
            SKILLS
          </li>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={300}>
          <li
            className="cursor-pointer hover:text-opacity-100 hover:text-white t:hover:text-black"
            onClick={offToggle}
          >
            PROJECTS
          </li>
        </Link>
      </ul>
      <button
        className={`hidden t:block t:fixed t:top-0 t:right-0 t:w-[60px] t:h-[60px] ${
          scroll ? 't:text-black' : 't:text-white'
        } `}
        onClick={changeToggle}
      >
        {toggle ? <MdOutlineClose size="50" /> : <GoThreeBars size="50" />}
      </button>
    </>
  );
};

export default Header;
