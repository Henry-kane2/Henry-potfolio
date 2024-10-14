import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import   check  from "../assets/check-02.svg";
import { LeftCurve, RightCurve } from "./designs/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div
        className="max-w-[77.5rem] mx-auto
       px-5 md:px-10 lg:px-15 xl:max-w-[77.5rem]
        lg:flex"
      >
        <div className="max-w-[25rem]">
          <h2
            className="text-[1.75rem] leading-[2.5rem]
           md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] 
           lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight 
           mb-4 md:mb-8"
          >
            Additional skills and tech 'learning'{" "}
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3 " key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6
                    className="font-light 
                  text-[0.875rem] leading-6
                   md:text-base ml-5"
                  >
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p
                    className="font-light text-[0.875rem] 
                  leading-6 md:text-base mt-3 text-n-4"
                  >
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <p
            className="font-light text-[0.875rem] 
            leading-6 md:text-base mb-4 text-n-4 md:mb-16 
            lg:w-[22rem]
            lg:mx-auto"
          >
            {collabText}
          </p>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div
            className="relative left-1/2 flex w-[22rem] aspect-square
            border boder-n-6 rounded-full -translate-x-1/2
             scale-75 md:scale-100"
          >
            <div
              className="flex  w-60
                 aspect-square m-auto border
                  border-n-6 rounded-full "
            >
              <div
                className="w-[6rem] aspect-square m-auto p-[0.2rem]
                     bg-conic-gradient rounded-full"
              >
                <div
                  className="flex items-center justify-center w-full h-full
                        bg-n-8 rounded-full"
                >
                  <img
                    src="logo.svg"
                    width={48}
                    height={48}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom
                        rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex
                                w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl
                                -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto "
                      src={app.icon}
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
