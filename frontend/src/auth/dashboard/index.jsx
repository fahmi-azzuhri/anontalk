import React from "react";
import Card from "./dashboard-card";

function getRandomColor() {
  const colors = [
    "#ff0000",
    "#ff4500",
    "#ff8c00",
    "#ffa500",
    "#ffd700",
    "#ffff00",
    "#adff2f",
    "#32cd32",
    "#008000",
    "#00ff7f",
    "#00ced1",
    "#1e90ff",
    "#0000ff",
    "#4b0082",
    "#8a2be2",
    "#ff00ff",
    "#ff1493",
    "#c71585",
    "#dc143c",
    "#b22222",
    "#8b0000",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function Dashboard() {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-md mt-2 border-2 border-gray-900 p-6">
        <header className="w-full max-w-md flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <h2 className="text-lg font-semibold text-center">Anontalk! Results</h2>
        <div className="flex flex-col gap-4">
          <Card color={getRandomColor()}>
            <p className="text-sm text-gray-100">New messages</p>
            <p className="text-2xl font-bold">16,048</p>
          </Card>
          <Card color={getRandomColor()}>
            <p className="text-sm text-gray-100">Active Users</p>
            <p className="text-2xl font-bold">3,200</p>
          </Card>
          <Card color={getRandomColor()}>
            <p className="text-sm text-gray-100">Total Posts</p>
            <p className="text-2xl font-bold">1,245,789</p>
          </Card>
          <Card color={getRandomColor()}>
            <p className="text-sm text-gray-100">New Signups</p>
            <p className="text-2xl font-bold">500</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
