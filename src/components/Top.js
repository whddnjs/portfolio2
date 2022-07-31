const Top = ({ scroll }) => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="btn"
      className={`fixed w-12 h-12 text-4xl rounded-[4px] bg-white/60 bottom-6 right-6 z-10 ${
        scroll ? 'block' : 'hidden'
      }`}
      onClick={() => {
        goTop();
      }}
    >
      ▲
    </button>
  );
};
export default Top;
