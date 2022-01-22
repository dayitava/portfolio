const HeroComponent = ({ heading, description, button, section }) => {
  return (
    <div className="flex justify-start lg:justify-between items-center max-h-screen h-[80vh]">
      <div>
        <div className="text-white py-10">
          <h1 className="font-black text-3xl lg:text-4xl">
            {heading}
            <span className="text-primary">.</span> <br />{" "}
          </h1>
          <div className="font-medium text-xl w-11/12 py-2">{description}</div>
        </div>
        <div>{button}</div>
      </div>
      {section}
    </div>
  );
};

export default HeroComponent;
