const Card = ({ title, caption, services, bgColor }) => {
  return (
    <div className="w-[15rem] ">
      <div
        style={{ backgroundColor: bgColor }}
        className="p-5 text-white rounded-tl-xl rounded-tr-xl"
      >
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-xs">{caption}</p>
      </div>
      <div className="px-5 py-3 flex flex-col justify-between h-[11rem] border-2 border-gray-200 rounded-bl-xl rounded-br-xl">
        <div>
          <p className="text-xs text-gray-500">
            240k+ Appointment Booked Today
          </p>
          <p className="text-sm">{services}</p>
        </div>
        <button className="px-2 text-xs border-2 border-black rounded-3xl w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Card;
