import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientData from "../data/ClientData";

const SpecialCenter = () => {
  // For arrow design purpose
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "purple" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container   mx-auto">
          <div className="flex items-center  text-3xl xl:text-3xl w-full justify-center font-bold text-blue-900 ">
             Clinics center
          </div>

          <Slider {...settings}>
            {clientData.map((a, id) => (
              <div
                key={id}
                className="flex flex-row flex-wrap  justify-center items-center pt-10 pb-12 "
              >
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    className="h-48 lg:h-60  lg:w-[500px]   flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage: `url(${a.img})`,
                      backgroundSize: "100% 100%",
                    }}
                    title="Image Title"
                  ></div>

                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gray-50">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center">
                        <svg
                          className="fill-current text-gray-500 w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {a.profession}
                      </div>
                      <p className="text-gray-700 text-base">
                        {a.para.substring(0,150)}. . . .
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={a.img}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">{a.name}</p>
                        <p className="text-gray-600 font-bold   ">{a.prof}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SpecialCenter;
