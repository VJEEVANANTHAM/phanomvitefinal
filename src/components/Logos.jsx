import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import logo3 from "../assets/images/logo-3.png";
import logo4 from "../assets/images/logo-4.png";
import logo5 from "../assets/images/logo-5.png";
import "../logos.css";
const Logos = () => {
  return (
    <div className="w-full py-6 flex gap-35 overflow-hidden logos">
      <img src={logo1} alt="" className="w-[11em] h-[4rem] object-contain" />
      <img src={logo2} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo3} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo4} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo5} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo1} alt="" className="w-[11em] h-[4rem] object-contain" />
      <img src={logo2} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo3} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo4} alt="" className="w-[11rem] h-[4rem] object-contain" />
      <img src={logo5} alt="" className="w-[11rem] h-[4rem] object-contain" />
    </div>
  );
};
export default Logos;
