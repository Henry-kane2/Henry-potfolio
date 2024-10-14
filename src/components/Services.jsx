import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import loading from '../assets/loading-01.svg'
import {  service1, service2, service3 } from "../assets";
import { henryServices, henryServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./designs/Services";

const Services = () => {
  return (
    <Section id="how _to_use">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
        <Heading
          title="More about Henry🌟 "
          text="trying to get hired with more skills to learn
        "
        />
        <div className="relative">
          <div
            className="relative z-1 flex items-center h-[39rem]
             mb-5 p-8 border border-neutral-500 rounded-3xl overflow-hidden
             lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none
                 md:w-3/5 xl:w-auto"
            >
              <img
                src={service1}
                className=" w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="smartest AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="text-[2rem] leading-normal mb-4">Henry kane</h4>
              <p
                className="font-light text-[0.875rem] leading-6 md:text-base
               mb-[3rem] text-n-3"
              >
                More tech to dive into
              </p>
              <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                {henryServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-neutral-600"
                  >
                    <img src={loading} width={24} height={24} className=""/>
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className="absolute left-4 right-4 bottom-4
              border-n-1/10 border lg:left-1/2 lg:rigth-auto lg:bottom-8
               lg:-translate-x-1/2"
            />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              className="relative min-h-[39rem] border border-n-1/10 
                rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col
                 justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15"
              >
                <h4 className="text-[2rem] leading-normal mb-4">Web Designs</h4>
                <p
                  className="font-light text-[0.875rem] leading-6 md:text-base
                 mb-[3rem] text-n-3"
                >
                  Enhance your Web using web designers and programmer&apos;s
                  Around the world . Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Contact me</h4>
                <p
                  className="font-light text-[0.875rem] leading-6 md:text-base
                 mb-[2rem] text-neutral-400"
                >
                  After seeing my potfolio i hope you and pray you get in touch
                  👇
                </p>
                <ul className="flex items-start justify-between">
                  {henryServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={` rounded-2xl flex items-center justify-center
                            ${
                              index == 2
                                ? "w-[3rem] h-[3rem] p-0.25 conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876) rounded-2xl md:w-[4.5rem] md:h[4.5rem]"
                                : "flex w-10 h-10 bg-neutral-800 md:w-15 md:h-15 "
                            }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex item-center justify-center w-full h-full bg-neutral-700 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem]  rounded-xl overflow-hidden md:h-25">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
         <Gradient/>
        </div>
      </div>
    </Section>
  );
};

export default Services;
