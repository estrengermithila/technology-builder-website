import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100">
      <div className=" px-6 sm:px-8 lg:px-10">
        <div className="py-14 sm:py-16 flex flex-col md:flex-row items-center md:justify-around gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">
                  DS
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Dev<span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-[15px] items-center text-center leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex items-center justify-center gap-5 mt-7">
              <a
                href="#"
                className="text-slate-500 hover:text-slate-900 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-sky-500 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800 mb-6">
              Product
            </h3>

            <ul className="space-y-3.5">
              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-500 hover:text-pink-500 transition"
                >
                  Home
                </a>
              </li>

              <li><a href="#technologies" className="text-sm text-slate-500 hover:text-pink-500 transition">
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-slate-500 hover:text-pink-500 transition"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800 mb-6">
              Company
            </h3>

            <ul className="space-y-3.5">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-500 hover:text-pink-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-500 hover:text-pink-500 transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-pink-500 transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-100"></div>

        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-7">

            <a
              href="#"
              className="text-xs sm:text-sm text-slate-400 hover:text-slate-700 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs sm:text-sm text-slate-400 hover:text-slate-700 transition"
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;