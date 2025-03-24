  import { useEffect, useState } from "react";

  const items = [
    {
      title: "Customer Support",
      desc: "Dedicated customer support to assist with any issues or queries, ensuring a smooth and satisfying experience.",
    },
    {
      title: "Wide Range of Services",
      desc: "Unlock a world of possibilities with our diverse pool of talented development from digital marketing to web",
    },
    {
      title: "Verified Professionals",
      desc: "you're in good hands with our verified professionals -your trusted experts for top-quality work",
    },
    {
      title: "Quick Turnaround",
      desc: "Efficient project management and prompt delivery of services, saving clients time and effort.",
    },
    {
      title: "Secure Payments",
      desc: "Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied.",
    },
    {
      title: "Feedback and Ratings",
      desc: "Access to reviews and ratings of freelancers, helping clients make informed decisions based on previous work and client feedback.",
    },
  ];

  const Choose = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const t = setInterval(() => {
        setIndex((prev) => {
          let next = prev + 1;
          if (next === items.length) next = 0; // Use items.length for dynamic length
          return next;
        });
      }, 2000);
      return () => clearInterval(t);
    }, []);

    return (
      <div className="py-10 flex flex-col gap-10 lg:flex-row items-center">
        <div
          style={
            index % 3 === 0
              ? { backgroundColor: "#6084e1" }
              : { backgroundColor: "#d54ae8" }
          }
          className="hidden lg:flex w-[30rem] h-[30rem] rounded-full justify-center items-center -translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <div
            style={
              index % 3 === 1
                ? { backgroundColor: "#6084e1" }
                : { backgroundColor: "#ae45e4" }
            }
            className="w-[25rem] h-[25rem] rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div
              style={
                index % 3 === 2
                  ? { backgroundColor: "#6084e1" }
                  : { backgroundColor: "#d54ae8" }
              }
              className="w-[20rem] h-[20rem] rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.5)] "
            >
              <div className="w-[15rem] h-[15rem] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[12rem] text-5xl font-bold text-[#a345e4]">
          <p
            style={{
              fontFamily: "'Poppins', Helvetica",
              color: "transparent",
              textShadow: "0px 5px 5px #6c5fd4",
              WebkitTextStroke: "3px #6c5fd4",
              opacity: 0.5,
              fontSize: "3rem",
              lineHeight: "58px",
            }}
          >
            Why Choose US
          </p>
        </div>
        <div
          className="overflow-y-hidden h-[11rem] w-[40rem] self-start lg:self-center"
          style={{
            marginLeft: "0%",
          }}
        >
          <div
            style={{ transform: `translateY(${-index * 17}%)` }}
            className="flex flex-col gap-10 ml-30 transition-transform duration-500"
          >
            {items.map((item, i) => (
              <div key={i}> {/* Added key prop */}
                <p className="title-unique">{item.title}</p>
                <p className="text-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Choose;