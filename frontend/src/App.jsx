import React, { useState } from "react";
import Input from "./input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoChatbubblesOutline } from "react-icons/io5";

const Card = ({ from, to, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md break-words">
      <h3 className="font-bold text-gray-800">From : {from}</h3>
      <h3 className="font-bold text-gray-800"> To : {to}</h3>
      <p className="text-gray-600 mt-2">{content}</p>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: posts = [],
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get all message"],
    queryFn: async () =>
      axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/messages/getAllMessage`)
        .then((response) => response.data),
  });

  if (isFetching || isLoading) {
    return <div className="text-white text-center mt-10">Please wait...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error loading messages!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#16359f] relative">
      <nav class="flex items-center justify-between flex-wrap bg-[#16359f] p-6">
        <div class="flex flex-col flex-shrink-0 text-white gap-3">
          <div className="flex">
            <IoChatbubblesOutline size={30} />
            <span class="font-semibold text-xl tracking-tight">Anontalk!</span>
          </div>
          <h3>Boleh bebas tulis apapun untuk siapapun yang penting NO SARA</h3>
        </div>
      </nav>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-5 p-4">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Card from={post.from} to={post.to} content={post.content} />
            </div>
          ))
        ) : (
          <div className="text-white text-center w-full">
            No messages available.
          </div>
        )}
      </div>

      <button
        className="fixed bottom-6 right-6 bg-white text-[#16359f] p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white focus:outline-none cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        ➕
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Input setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  );
};

export default App;
