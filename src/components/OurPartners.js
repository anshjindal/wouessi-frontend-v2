import React from "react";

// import Aldelia from "../assets/SVG/AldeliaLogo.svg";
// import ARQCH from "../assets/SVG/ARQCHLogo.svg";
// import Precision from "../assets/SVG/PrecisionLogo.svg";
// import Charis from "../assets/SVG/CharisLogo.svg";
// import KigaliRunningClub from "../assets/SVG/KigaliRunningClub.svg";

function OurPartners({ Logo1, Logo2, Logo3, Logo4, Logo5 }) {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] flex flex-col mt-[6vw] text-left text-[1.7vw] font-bold">
        <h1>Some great Companies</h1>
        <div className="flex gap-x-[7vw] place-content-evenly items-center">
          <img src={Logo1} className="h-[12vw] w-[12vw]"></img>
          <img src={Logo2} className="h-[10vw] w-[10vw]"></img>
          <img src={Logo3} className="h-[10vw] w-[10vw]"></img>
          <img src={Logo4} className="h-[12vw] w-[12vw]"></img>
          <img src={Logo5} className="h-[10vw] w-[10vw]"></img>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;