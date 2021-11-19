import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="fixed w-full top-0 flex items-center justify-between flex-wrap px-5 lg:px-0 py-3 font-black max-w-screen-xl">
        <div className="flex items-center flex-shrink-0 text-white">work</div>
        <div className="flex items-center flex-shrink-0 text-white text-4xl uppercase">
          d <span className="text-purple-600">U.</span>
        </div>
        <div className="flex items-center flex-shrink-0 text-white ">about</div>
      </nav>
    </div>
  );
};

export default NavigationBar;
