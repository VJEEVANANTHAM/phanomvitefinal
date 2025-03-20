import logo from "../assets/images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full text-white px-5 md:px-20 py-10 flex flex-col items-center gap-12"
      style={{
        background:
          "linear-gradient(to bottom, #796dd2 40%, #332f52 70%, #1a1923 100%)",
        width: "100%",
        height: "auto", // Changed to auto for responsiveness
        top: "6682.1px",
      }}
    >
      <div
        className="flex flex-col gap-6 w-full md:w-[40%] text-center mt-10" // Adjusted width and margin
        style={{
          fontFamily: "sans-serif",
          fontWeight: "700",
          fontSize: "32px", // Adjusted font size
          lineHeight: "40px", // Adjusted line height
          letterSpacing: "0%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <p className="text-3xl font-bold">
          Let's make something great together.
        </p>
        <p className="text-xl text-[#bbb8d6] font-bold">
          Let us know what challenges you are trying to solve so we can help.
        </p>
        <button className="bg-white rounded-3xl px-8 py-2 w-fit mx-auto text-lg text-[#53499d]">
          Join Us
        </button>
      </div>
      <div className="w-full h-[1px] bg-white"></div>
      <div
        className="flex flex-col lg:flex-row justify-between w-full gap-8 mt-7" // Adjusted margin
      >
        <img src={logo} alt="" className="w-[15rem] h-[5rem] object-cover mx-auto lg:mx-0" /> {/* Adjusted width and margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 text-center lg:text-left"> {/* Adjusted gap and alignment */}
          <p>Home</p>
          <p>Facebook</p>
          <p>Services</p>
          <p>Instagram</p>
          <p>Hire Indian Talent</p>
          <p>Linkedin</p>
          <p>Our Portfolio</p>
          <p>Pinterest</p>
          <p>Book an Appointment</p>
          <p>Twitter</p>
        </div>
        <div className="text-center lg:text-left"> {/* Added text-center */}
          <p>Address :</p>
          <p>E-193, Third Floor, TDS Tower</p>
          <p>Phase 8B, Industrial Area, Sector 74</p>
          <p>Sahibzada Ajit Singh Nagar</p>
          <p>Punjab 160055</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-8 self-start mt-8"> {/* Adjusted margin */}
        <div className="flex flex-col gap-6 text-center lg:text-left"> {/* Added text-center */}
          <div className="flex flex-col md:flex-row gap-4"> {/* Adjusted gap */}
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>About Cookies</p>
          </div>
          <p>Copyright 2025 Phanom Techno Private Ltd. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4"> {/* Added items-center */}
          <div className="bg-[#6c5fd4] flex justify-center items-center rounded-xl h-fit text-white text-3xl p-4 mx-auto lg:mx-0"> {/* Added mx-auto */}
            <FaPhoneAlt />
          </div>
          <div className="flex flex-col text-2xl text-center lg:text-left"> {/* Adjusted font size and alignment */}
            <p className="text-[#6c5fd4]">Call to ask any question</p>
            <p>+91 (628) 007-2655</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;