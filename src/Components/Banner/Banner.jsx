const Banner = () => {
  return (
    <div className="bg-[url(https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/09/young-woman-gardener-caring-plants-treating-flower-2023-01-31-23-19-44-utc-1.jpg)] w-full h-[100vh] -mt-20 bg-cover bg-center bg-no-repeat">
      <div className="bg-[rgba(28,78,28,0.65)] w-full h-full flex justify-center items-center text-white">
        <div className="text-center">
          <p className="text-2xl font-normal w-1/4 mx-auto mb-6 border-2 rounded-3xl px-8 py-1 border-white">
            Making Lawns Loveable
          </p>
          <h2 className="text-8xl font-extrabold">
            The Green Light to a Gorgeous Lawn
          </h2>
          <p className="text-base font-normal mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex justify-center gap-6 pt-10 items-center">
            <button className=" py-4 px-14 rounded-full text-base font-normal text-[rgba(49,87,44)] bg-[rgb(167,201,87)] hover:bg-white hover:scale-110  hover:transition-1000 duration-1000">
              Learn more
            </button>
            <span className=" w-16 h-16 rounded-full bg-white cursor-pointer hover:bg-[#fff0] text-[rgba(49,87,44)] hover:text-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
