import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="min-h-[350px] flex flex-col md:flex-row items-center justify-between gap-10 py-12 md:py-8">   
          <div className="w-full md:w-1/2">
       <h1 className="text-4xl sm:text-5xl lg:text-[48px] leading-[1.05] font-extrabold tracking-tight">
 <span className="block text-[#111827]">
           Build Your Ideal
              </span>
                 <span className="block bg-gradient-to-r from-[#ff512f] via-[#f72585] to-[#8b2be2] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
<p className="mt-6 max-w-xl text-[15px] sm:text-base leading-7 text-slate-500">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project. </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="px-4 py-2.5 rounded-md text-sm font-semibold text-white
                bg-gradient-to-r from-[#ff6a00] to-[#ec4899]
                hover:from-[#ff512f] hover:to-[#db2777]
                transition-all duration-300 shadow-sm hover:shadow-md">Explore Technologies</button>
              <button
                type="button"
                className="px-7 py-2.5 rounded-md text-sm font-medium
                text-slate-600 bg-white border border-slate-200
                hover:border-slate-300 hover:bg-slate-50
                transition-all duration-300"> Learn More </button>
 </div>
          </div>
   <div className="w-full md:w-1/2 flex justify-center md:justify-end">

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;