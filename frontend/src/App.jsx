import { useState } from "react";

const App = () => {
  const [selectedInterest, setSelectedInterest] = useState("UI/UX design");
  const interests = [
    "UI/UX design",
    "Web design",
    "Graphic design",
    "Design system",
    "Other",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-900 p-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl bg-white rounded-lg p-8 shadow-lg">
        <div className="text-white space-y-4">
          <h2 className="text-3xl font-bold">
            Let's discuss on something{" "}
            <span className="text-pink-500">cool</span> together
          </h2>
          <p className="flex items-center gap-2">
            <span className="text-pink-500">✉</span> SaulDesign@gmail.com
          </p>
          <p className="flex items-center gap-2 bg-pink-500 p-2 rounded-lg">
            <span>📞</span> +123 456 789
          </p>
          <p className="flex items-center gap-2">
            <span className="text-pink-500">📍</span> 123 Street 456 House
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-gray-700 mb-4">I'm interested in...</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => setSelectedInterest(interest)}
                className={`px-4 py-2 rounded-lg text-sm border ${
                  selectedInterest === interest
                    ? "bg-pink-500 text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            />
            <textarea
              placeholder="Your message"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            ></textarea>
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg flex items-center justify-center gap-2">
              ✈ Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
