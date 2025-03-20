const Mission = () => {
  return (
    <div className="flex flex-col gap-16 text-center py-10 px-20"
    style={{
      fontFamily:'sans-serif',
      fontWeight:'600',
      fontSize:'36px',
      lineHeight:'44px',
      letterSpacing:'0,5%',
      textAlign:'center',
      verticalAlign:'middle'

    }}
    >
      <p className="text-3xl">Our <span className="gradient-text">Mission</span></p>
      <p style={{
          fontFamily:'Cambria',
          fontWeight:'400',
          fontSize:'18px',
          lineHeight:'28px',
          letterSpacing:'0%',
          textAlign:'center',
          verticalAlign:'middle'
      }}>


        Empowering businesses with innovation, crafting bespoke solutions,and
        driving industry leadership.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="shadow-lg shadow-slate-300  p-20 flex flex-col gap-6 text-xl">
          <p className="text-2xl font-semibold">Innovate</p>
          <p>
            Harnessing the power of technology to bring fresh, groundbreaking
            ideas to life. Stay ahead with our visionary approach to
            problem-solving and growth.
          </p>
        </div>
        <div className="shadow-lg shadow-slate-300 p-20 flex flex-col gap-6 text-xl">
          <p className="text-2xl font-semibold">Create</p>
          <p>
            Designing and developing solutions that drive progress and meet
            unique challenges.Build the future with tailored solutions that
            redefine possibilities.
          </p>
        </div>
        <div className="shadow-lg shadow-slate-300 p-20 flex flex-col gap-6 text-xl">
          <p className="text-2xl font-semibold">Dominate</p>
          <p>
            Empowering businesses to lead their industries with robust, scalable
            IT strategies. Achieve unmatched success with our expertise guiding
            your digital journey{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <p className="text-4xl text-gray-400">Build Skills,connect. </p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your Email"
          className="bg-gray-100  rounded-md w-[40rem] h-[4rem] p-3"
       
        />
        <button className="h-[4rem]  w-[10rem]  px-4 py-2 rounded-md bg-[#715de3] text-2xl text-white">
          Send
        </button>
      </div>
    </div>
  );
};
export default Mission;
