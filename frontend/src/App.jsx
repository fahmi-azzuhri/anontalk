import React from "react";

const posts = [
  {
    title: "To Her: FEJS 1 'K'",
    content:
      "Satu bulan lebih berlalu dan aku masih menunggumu bales chat, bahkan hanya untuk sekedar say hi to me :(",
    comments: ["Fejs 1? Kezia ya om?"],
  },
  {
    title: "cie, menfess udah sepi",
    content: "😔 kangen suasana kelas",
    comments: [],
  },
  {
    title: "Yg cinlok selain galang nadia siapa lg ni",
    content: "",
    comments: ["maunya sih aku tpi dia ga peka", "akuu, tapi hts"],
  },
  {
    title: "Itu anak pm-1 sama ui/ux-5 ada yang jadian?",
    content: "Tagih PJ sebinar gasehh",
    comments: [
      "Siapa??",
      "nadia galang",
      "wanjir mamah knp anakmu npc di binar 😂😂😂",
    ],
  },
  {
    title: "kangen nadia pm1.",
    content: "chat gadibales coooo :) dibaca ajakaga wkww",
    comments: ["anonnn"],
  },
  {
    title: "To Her: FEJS 1 'K'",
    content:
      "Satu bulan lebih berlalu dan aku masih menunggumu bales chat, bahkan hanya untuk sekedar say hi to me :(",
    comments: ["Fejs 1? Kezia ya om?"],
  },
  {
    title: "cie, menfess udah sepi",
    content: "😔 kangen suasana kelas",
    comments: [],
  },
  {
    title: "cie, menfess udah sepi",
    content: "😔 kangen suasana kelas",
    comments: [],
  },
  {
    title: "kangen nadia pm1.",
    content: "chat gadibales coooo :) dibaca ajakaga wkww",
    comments: ["anonnn"],
  },
];

const Card = ({ title, content, comments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md break-words">
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{content}</p>
      <div className="mt-4 flex justify-between text-gray-500 text-sm">
        <div className="flex items-center space-x-1">
          <span>💬</span>
          <span>{comments.length}</span>
        </div>
        <button className="text-blue-500">Tambah komentar</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-blue-900 p-4">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Card
              title={post.title}
              content={post.content}
              comments={post.comments}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
