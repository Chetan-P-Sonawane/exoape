import React from "react";

const Work = () => {
  return (
    <div className="min-h-[100vh] w-full relative mx-auto">
      <div className="max-w-screen-xl h-full mx-auto mt-16 sm:mt-28 px-7 sm:pl-28 sm:pr-0">
        <div className=" featured flex gap-2 ">
          <svg
            className="w-3"
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h4 className="inline-block text-sm">Featured Projects</h4>
        </div>
        <h1 className="text-[16vw] sm:text-[18vw] mt-1 mb-4 sm:mb-10 font-normal tracking-tighter ">
          Work
        </h1>

        <div className="workp1 w-full min-h-[100vh] flex-none sm:flex sm:flex-row-reverse justify-between">
          <div className="w-full sm:w-[30%]">
            <div className=" featured gap-2 hidden sm:flex ">
              <svg
                className="w-3"
                data-v-669b4a84=""
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-v-669b4a84=""
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h4 className="inline-block">Featured Projects</h4>
            </div>

            <h3 className=" text-[4.7vw] sm:text-2xl pb-8">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </h3>
            <img
              className="hidden sm:block"
              src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
              alt=""
            />
          </div>

          <div className=" w-full sm:w-[54%]">
            <img
              src="https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)"
              alt=""
            />
            <img
              className="sm:hidden pt-10 sm:pt-24 "
              src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
