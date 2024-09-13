import { useState } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

function PronunciationButton() {
  const [WouessiPronunciation, setWouessiPronunciation] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className="w-[95%] h-fit flex justify-end text-[#2703A5] max-[450px]:hidden">
        {WouessiPronunciation ? (
          <div className="mt-[-9vw] p-[2vw] pt-[2vw] pb-[2vw] bg-white rounded-lg absolute">
            <h1 className="text-[2vw] font-bold">Wou-essi /wu: ε si:/</h1>
            <div className="border-[0.1vw] border-[#2703A5]"></div>
            <p className="text-[1.1vw] mt-[1.1vw]">
              The way we pronounce our name is "woo-eh-ssi".
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="w-[95%] flex justify-end mb-[-7vw] mt-[1.5vw] max-[450px]:hidden">
        <div
          onClick={() => setWouessiPronunciation(!WouessiPronunciation)}
          className={`${
            WouessiPronunciation
              ? "bg-[#FF9900]"
              : "bg-[#2703A5] hover:bg-[#FF9900]"
          } transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] w-[6vw] h-[6vw] text-[1.1vw] cursor-pointer`}
        >
          {WouessiPronunciation ? (
            <ImCross className="w-[3vw] h-[3vw] text-white hover:text-[#2703A5]" />
          ) : (
            <HiOutlineSpeakerWave className="w-[3vw] h-[3vw] rotate-[-30deg] text-white" />
          )}
        </div>
      </div>

      {/* mobile */}
      <div className="w-[95%] h-fit mt-[3vw] mb-[4vw] flex justify-end text-[#2703A5] z-10 min-[450.1px]:hidden">
        {WouessiPronunciation ? (
          <div className="p-[2vw] pt-[3vw] pb-[3vw] bg-white rounded-lg absolute">
            <h1 className="text-[4.5vw] font-bold">Wou-essi /wu: ε si:/</h1>
            <div className="border-[0.1vw] border-[#2703A5]"></div>
            <p className="text-[2.5vw] mt-[1.1vw]">
              The way we pronounce our name is "woo-eh-ssi".
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="w-[95%] h-full flex justify-end items-center min-[450.1px]:hidden">
        <div
          onClick={() => setWouessiPronunciation(!WouessiPronunciation)}
          className={`${
            WouessiPronunciation
              ? "bg-[#FF9900]  hover:bg-[#FF9900]"
              : "bg-[#2703A5]"
          } transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] w-[12vw] h-[12vw] text-[1.1vw] cursor-pointer`}
        >
          {WouessiPronunciation ? (
            <ImCross className="w-[7vw] h-[7vw] text-white" />
          ) : (
            <HiOutlineSpeakerWave className="w-[8vw] h-[8vw] rotate-[-30deg] text-white" />
          )}
        </div>
      </div>
    </>
  );
}

export default PronunciationButton;