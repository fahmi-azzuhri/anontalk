const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl rounded-lg p-8 shadow-lg">
        <div className="">
          <img src="/bg.png" alt="" />
        </div>
        <div className="bg-purple-900 p-6 rounded-lg text-white ">
          <h2 className="text-3xl font-bold mb-4">
            "Speak freely, stay anonymous. Share your thoughts, and express
            yourself without fear."
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="From"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            />
            <input
              type="text"
              placeholder="To"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            />
            <textarea
              placeholder="Your message"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            ></textarea>
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-pink-600">
              ✈ Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
