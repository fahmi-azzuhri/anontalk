import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [content, setContent] = useState("");
  const sendMessageMutation = useMutation({
    mutationFn: async ({ from, to, message }) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/messages/sendMessage`,
        { from, to, content }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMessageMutation.mutate({ from, to, content });
  };

  const isValid = from && to && content;
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl rounded-lg p-8 shadow-lg">
        <div className="">
          <img src="/bg.png" alt="" />
        </div>
        <div className="bg-purple-900 p-6 rounded-lg text-white ">
          <h2 className="text-3xl font-bold mb-4">
            "Speak freely, stay anonymous. Share your thoughts, and express
            yourself without fear."
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              placeholder="From"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            />
            <input
              type="text"
              onChange={(e) => setTo(e.target.value)}
              value={to}
              placeholder="To"
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            />
            <textarea
              placeholder="Your message"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="w-full border-b-2 focus:outline-none focus:border-pink-500 p-2"
            ></textarea>
            <button
              type="submit"
              disabled={!isValid}
              className="w-full bg-pink-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-pink-600"
            >
              ✈ Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
