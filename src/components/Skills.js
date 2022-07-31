// import front from '../assets/image/front_stack.jpg';
// import back from '../assets/image/back_stack.jpg';
// import version from '../assets/image/version_stack.jpg';

// const Skills = () => {
//   return (
//     <div id="skills" className="py-10 bg-[#00adb5]/40">
//       <h1 className="mb-6 text-5xl text-center font-nanum-eb">SKILLS</h1>
//       <div className="flex justify-center bg-black h-[70vh] w-[55%] items-center">
//         <div className="flex flex-col flex-wrap items-center">
//           <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//             <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b">
//               Front end
//             </p>
//             <div className="">
//               <img src="image/front_stack.jpg" alt="" />
//             </div>
//           </div>
//           <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//             <p className="text-2xl font-nanum-eb text-[#00adb5]/80">Back end</p>
//             <img src="image/back_stack.jpg" alt="" />
//           </div>
//           <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//             <p className="text-2xl font-nanum-eb text-[#00adb5]/80">
//               Version Control
//             </p>
//             <img src="image/version_stack.jpg" alt="" />
//           </div>
//           <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//             <p className="text-2xl font-nanum-eb text-[#00adb5]/80">
//               Certificate
//             </p>
//             <p className="pt-1 text-lg font-nanum-eb">· SQLD(개발자)</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// const Skills = () => {
//   return (
//     <div id="skills" className="py-10 bg-[#00adb5]/40">
//       <h1 className="mb-6 text-5xl text-center font-nanum-eb">SKILLS</h1>
//       <div className="h-[70vh] relative left-[50%] translate-x-[-50%] flex flex-col flex-wrap">
//         <div className="p-4 mr-5 bg-white rounded-xl">
//           <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b">
//             Front end
//           </p>
//           <img src="image/front_stack.jpg" alt="" />
//         </div>
//         <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//           <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b">
//             Front end
//           </p>
//           <img src="image/front_stack.jpg" alt="" />
//         </div>
//         <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//           <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b">
//             Front end
//           </p>
//           <img src="image/front_stack.jpg" alt="" />
//         </div>
//         <div className="bg-white rounded-xl w-[300px] mr-5 p-4">
//           <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b">
//             Front end
//           </p>
//           <img src="image/front_stack.jpg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

const Skills = () => {
  return (
    <div id="skills" className="py-10 bg-[#00adb5]/40">
      <div className="w-full h-[48rem] max-w-[68rem] mx-auto t:h-[68rem] m:h-[110rem]">
        <div className="table pb-2 mx-auto mb-10 text-5xl border-b border-black font-nanum-eb">
          SKILLS
        </div>
        <div className="flex flex-col flex-wrap content-around h-[42rem] t:h-[62rem] m:h-[106rem]">
          <div className="p-4 mx-auto mb-8 bg-white shrink-0 w-80 rounded-xl shadow_ b:w-72 m:w-80">
            <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b pb-2 mb-1">
              Front end
            </p>
            <img src="image/front_stack.jpg" alt="" className="block w-full" />
          </div>
          <div className="p-4 mx-auto mb-8 bg-white shrink-0 w-80 rounded-xl shadow_ b:w-72 m:w-80">
            <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b pb-2 mb-1">
              Back end
            </p>
            <img src="image/back_stack.jpg" alt="" className="block w-full" />
          </div>
          <div className="p-4 mx-auto mb-8 bg-white shrink-0 w-80 rounded-xl shadow_ b:w-72 m:w-80">
            <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b pb-2 mb-1">
              Version Control
            </p>
            <img
              src="image/version_stack.jpg"
              alt=""
              className="block w-full"
            />
          </div>
          <div className="p-4 mx-auto bg-white shrink-0 w-80 rounded-xl shadow_ b:w-72 m:w-80">
            <p className="text-2xl font-nanum-eb text-[#00adb5]/80 border-b pb-2 mb-1">
              Certificate
            </p>
            <p className="pt-2 text-lg font-nanum-eb">· SQLD(개발자)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
