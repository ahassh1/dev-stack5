import footerImg from "../assets/Background+Shadow.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">


          <div className="lg:pr-8">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 overflow-hidden rounded-lg">
                <img
                  src={footerImg}
                  alt="DevStack"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-lg font-bold tracking-tight text-gray-800">
                Dev
                <span className="text-[#D91B7E]">Stack</span>
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:border-[#D91B7E] hover:bg-[#D91B7E] hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:border-[#D91B7E] hover:bg-[#D91B7E] hover:text-white"
              >
                Twitter
              </a>

              <a
                href="#"
                className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:border-[#D91B7E] hover:bg-[#D91B7E] hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Home
              </a>

              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Technologies
              </a>

              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Products
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                About
              </a>

              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Contact
              </a>

              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Careers
              </a>
            </div>
          </div>

 
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="w-fit text-sm text-gray-500 transition hover:translate-x-1 hover:text-[#D91B7E]"
              >
                Services
              </a>
            </div>
          </div>
        </div>

  
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 DevStack model & All rights reserved.
          </p>

          <p>
            Built for new developer, by developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;