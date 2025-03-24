import "./animation.css";
import { services } from "../assets/data/services";
const Animation = () => {
  return (
    <div className="bg-[#bd2ce8] h-[40rem] flex justify-center items-center overflow-hidden " >
      <div className="bg-[#4187b5] w-[75vw] h-[75vw] rounded-full flex justify-center items-center enlarge">
        <div className="bg-blue-400 w-[65vw] h-[65vw] rounded-full flex justify-center items-center enlarge">
          <div className="bg-white w-[55vw] h-[55vw] rounded-full enlarge relative">
            {services.map((s, i) => (
              <div
                key={i}
                className="service flex flex-col items-center justify-center"
                style={
                  i > 0
                    ? {
                        animationDelay: `${4.5 + (i - 1) * 6}s`,
                      }
                    : {
                        animationDelay: "-3s",
                      }
                }
              >
                <img
                  src={s.image}
                  alt=""
                  className="w-[6rem] h-[6rem] object-contain"
                />
                <p className="text-2xl  md:text-4xl font-semibold text-center">
                  {s.title}
                </p>
                <p className="text-center">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Animation;
