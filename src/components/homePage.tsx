export default function HomePage() {
  return (
    <section className="flex items-center text-white justify-center min-h-screen bg-[#2a2a2a] px-4 ">
      <div className="text-center max-w-3xl p-6 border-4 border-amber-500 rounded-sm">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Automation, AI Driven Solutions,Custom Software
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Building Robust and Scalable AI Integrated Solutions taloired to your
          bussiness needs
        </p>
        {/* Schedule a meet*/}
        <form className="flex items-center justify-center">
          <div className="flex w-full shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="enter email"
              className="flex-1 px-4 py-3 bg-[#4a4a4a] focus:outline-non"
              required
            ></input>
            <button className="px-5 bg-[#fe6036] text-white font-medium shadow-md hover:bg-blue-700 transition-colors">
              Schedule a Meeting
            </button>
          </div>
        </form>
      </div>
    </section>
  );
  {
    /* <form>
            <input
              type="email"
              placeholder="enter email"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></input>
            <button className="inline-block px-6 py-3 m-6 rounded-2xl bg-orange-500 text-white font-medium shadow-md hover:bg-blue-700 transition-colors">
              Schedule a Meeting
            </button>
          </form> 
          */
  }
}
