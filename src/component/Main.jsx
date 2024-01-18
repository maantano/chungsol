import React, { useCallback, useEffect, useRef, useState } from "react";
import "../asset/common.css";
import "../asset/detail.css";
import "../asset/contents.css";
import logo from "../asset/img/logo.png";

const Main = () => {
  // useEffect(() => {
  //   const opacityImage = document.querySelector(".scroll-opacity");

  //   const callback = ([entry], observer) => {
  //     entry.target.style.opacity = entry.intersectionRatio;
  //   };

  //   const observer = new IntersectionObserver(callback, {
  //     threshold: [...new Array(101)].map((_, i) => i / 100),
  //   });

  //   observer.observe(opacityImage);
  // }, []);

  return (
    // <div
    //   className={scrollPosition > 600 ? "scrolled-opacity" : "scroll-opacity"}
    // >
    <div className="scroll-opacity" id="firstDiv">
      <div>
        <div
          className="section sec1 fp-section fp-table active fp-completely"
          id="section1"
          //   style="height: 944px;"
          style={{ height: 944 }}
        >
          <div className="size ">
            <div className="fp-tableCell" style={{ height: 944 }}>
              <div className="absolute ">
                <div className="txt text-white flex mt-[700px] gap-4">
                  <img
                    className="w-[200px] h-[80px] mt-10"
                    src={logo}
                    alt={logo}
                  />
                  <div className="">
                    <h2>
                      생애 주기별 <em className="mbr">맞춤 케어 솔루션</em>
                    </h2>
                    <p>
                      질환과 노화로 인해 발생되는 신체기능 저하를<br></br>각
                      건강전문가의 <b>‘케어 매니지먼트’</b>와 <b>‘재활 운동’</b>
                      으로 회복시키는 <br></br>
                      헬스케어 전문 브랜드 <b>‘웰더스’</b>입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
