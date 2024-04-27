function Sidebar() {
  return (
    <div className="container flex flex-col mx-auto bg-white">
      <aside
        className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
        id="sidenav-main"
      >
        <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
          <a
            className="transition-colors duration-200 ease-in-out"
            href="https://www.loopple.com"
          >
            <img
              alt="Logo"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/loopple.svg"
              className="inline"
            />
          </a>
        </div>

        <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center mr-5">
            <div className="mr-5">
              <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                <img
                  className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                  alt="avatar image"
                />
              </div>
            </div>
            <div className="mr-2">
              <a
                href="javascript:void(0)"
                className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
              >
                Robert Jason
              </a>
              <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
                SEO Manager
              </span>
            </div>
          </div>
          <a
            className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
            href="javascript:void(0)"
          >
            <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {/* SVG path */}
              </svg>
            </span>
          </a>
        </div>

        <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div className="relative pl-3 my-5 overflow-y-scroll">
          <div className="flex flex-col w-full font-medium">
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a
                  href="javascript:;"
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  Sales
                </a>
              </span>
            </div>

            {/* Additional menu items */}
          </div>
        </div>
      </aside>

      <div className="flex flex-wrap ml-9 my-5">
        <div className="w-full max-w-full sm:w-1/4 mx-auto text-center">
          <p className="text-lg text-slate-500 py-1">
            Tailwind CSS Component from{" "}
            <a
              href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents"
              className="text-slate-700 hover:text-slate-900"
              target="_blank"
            >
              Riva Dashboard Library
            </a>{" "}
            by{" "}
            <a
              href="https://www.loopple.com"
              className="text-slate-700 hover:text-slate-900"
              target="_blank"
            >
              Loopple Builder
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
