import type { NextPage } from "next";
import { CiMail } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";



export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-left text-sm text-olivedrab font-inter mq750:pb-[25px] mq750:box-border mq1050:pb-[39px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke flex flex-col items-start justify-start pt-6 px-[108px] pb-[196px] box-border relative gap-[44px] max-w-full mq750:gap-[22px] mq750:pl-[54px] mq750:pr-[54px] mq750:box-border mq1050:pt-5 mq1050:pb-[127px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:pb-[83px] mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border top-[0] z-[99] sticky max-w-full font-sf-caption-1-regular">
          <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-row items-center justify-start py-4 px-6 box-border gap-[80px] max-w-full z-[3] mq750:gap-[40px] mq450:gap-[20px]">
            <img
              className="self-stretch w-[174px] relative max-h-full object-contain min-h-[60px]"
              loading="lazy"
              alt=""
              src="/logobg2-1@2x.png"
            />
            <nav className="m-0 flex-1 flex flex-row items-start justify-between py-5 pr-[179px] pl-0 box-border max-w-full gap-[20px] text-left text-sm text-gray-900 font-sf-caption-1-regular mq750:pr-[89px] mq750:box-border mq1050:hidden mq450:pr-5 mq450:box-border">
              <a href="./development-stages.tsx" className="[text-decoration:none] relative tracking-[-0.15px] leading-[18px] font-bold text-[inherit] inline-block min-w-[57px] cursor-pointer">
                Services
              </a>
              <a className="[text-decoration:none] relative tracking-[-0.15px] leading-[18px] font-bold text-[inherit] inline-block min-w-[41px] cursor-pointer">
                Media
              </a>
              <a className="[text-decoration:none] w-[41px] relative tracking-[-0.15px] leading-[18px] font-bold text-[inherit] inline-block cursor-pointer">
                Cases
              </a>
              <a className="[text-decoration:none] relative tracking-[-0.15px] leading-[18px] font-bold text-[inherit] inline-block min-w-[28px] cursor-pointer">
                FAQ
              </a>
              <a className="[text-decoration:none] w-[61px] relative tracking-[-0.15px] leading-[18px] font-bold text-[inherit] inline-block cursor-pointer">
                Contacts
              </a>
            </nav>
            <div className="w-[337px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                
                <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
                <CiMobile1 className="text-xl" />

                  <a className="[text-decoration:none] relative tracking-[-0.15px] leading-[18px] font-medium text-[inherit] inline-block min-w-[25px] whitespace-nowrap">
                    +91
                  </a>
                  <a className="[text-decoration:none] flex-1 relative tracking-[-0.15px] leading-[18px] font-medium text-[inherit]">
                    7878787878
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
               
                <CiMail className="text-xl"/>

                <div className="flex-1 relative tracking-[-0.15px] leading-[18px] font-medium whitespace-nowrap">
                  <a
                    className="text-[inherit]"
                    href="mailto:thousanditcompany@gmail.com"
                    target="_blank"
                  >
                    abhi@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[1021.4px] h-[2063.5px] absolute !m-[0] top-[-633.7px] right-[-209.4px] object-contain z-[1]"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="w-[600px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[20px] max-w-full text-20xl text-orange-100">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.33px] font-inherit mq1050:text-12xl mq450:text-4xl">
            <span className="font-extrabold">User-Centric Excellence</span>
            <span className="text-gray-900">
              <span className="font-semibold font-inter">{`: Our `}</span>
              <b className="font-inter">App Development services</b>
              <span className="font-semibold"> Tackles Your Pain Points</span>
            </span>
          </h1>
          <div className="self-stretch relative text-lg tracking-[-0.24px] text-gray-900 font-sf-caption-1-regular">
            <span>{`Experience a Seamless Digital Journey with `}</span>
            <span className="font-extrabold text-olivedrab">Desun</span>
            <span>
              <span>
                {" "}
                - Where Every Line of Code Resolves Your Challenges and
              </span>
              <span className="font-medium font-sf-caption-1-regular">{` `}</span>
            </span>
            <b className="text-orange-100">Elevates Your App Experience</b>
            <span> to Unparalleled Heights.</span>
          </div>
        </div>
        <div className="w-[676px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-start justify-center p-6 box-border gap-[32px] max-w-full z-[2] text-xl text-gray-900 mq750:gap-[16px]">
          <b className="w-[600px] relative tracking-[0.38px] leading-[24px] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
            <p className="m-0">Leave your contacts and we will call you back</p>
            <p className="m-0">within 30 minutes</p>
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[24px] max-w-full text-smi text-gray-500 font-sf-caption-1-regular">
            <div className="flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Full name
                  </div>
                  <input
                    className="w-[69px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-start justify-start font-sf-caption-1-regular text-base text-gray-900"
                    placeholder="My Name"
                    type="text"
                  />
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Phone number
                  </div>
                  <div className="w-40 flex flex-row items-start justify-start gap-[8px] text-base text-gray-900">
                    <div className="flex flex-col items-center justify-center py-[5px] px-0">
                      <img
                        className="w-[18px] h-3 relative object-cover"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="relative tracking-[-0.41px] leading-[22px] inline-block min-w-[28px] whitespace-nowrap">
                      +91
                    </div>
                    <div className="flex-1 relative tracking-[-0.41px] leading-[22px]">
                      0000000000
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Business name
                  </div>
                  <div className="w-[198px] flex flex-row items-start justify-start text-base text-gray-900">
                    <div className="flex-1 relative tracking-[-0.41px] leading-[22px]">
                      ABC Technologies PVT LTD
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Business mail
                  </div>
                  <input
                    className="w-[187px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-start justify-start font-sf-caption-1-regular text-base text-gray-900"
                    placeholder="demoaccount@gmail.com"
                    type="text"
                  />
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-214.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-olivedrab flex flex-row items-start justify-start py-[11px] px-6 text-center text-sm text-white">
              <div className="w-[84px] relative tracking-[-0.15px] leading-[18px] font-semibold inline-block">
                <p className="m-0">Get</p>
                <p className="m-0">consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
