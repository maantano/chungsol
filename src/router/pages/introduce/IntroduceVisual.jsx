import React from "react";

const IntroduceVisual = (props) => {
  const bannerPositionChk = props.data.bannerPositionChk || false;

  return (
    <div>
      <div className="sub_visual" style={{ backgroundColor: "black" }}>
        <div
          className="sub_visual"
          style={{
            backgroundImage: `url(${props.data.banner})`,
            backgroundPosition: bannerPositionChk ? "0px -200px" : "0",
          }}
        >
          <div className="w-full h-[400px] flex justify-center items-center">
            <div className="">
              <div className="flex justify-center items-center flex-col">
                <p className="text-6xl text-white font-bold">
                  {props.data.title}
                </p>
                <span className="mt-6 text-3xl text-white font-semibold">
                  {props.data.subTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceVisual;
