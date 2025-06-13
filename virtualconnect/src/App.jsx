import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Switch } from "./components/ui/switch";

export default function VirtualConnect() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-4">
      {/* Navbar */}
      <header className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div className="text-3xl font-extrabold text-blue-400 tracking-wide">
          VirtualConnect
        </div>
        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Solutions</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </nav>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black transition"
        >
          Sign In
        </Button>
      </header>

      {/* Heading and Controls */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Meet Instantly with VirtualConnect. No Downloads.
        </h1>
        <p className="text-gray-400 mb-6 text-lg">
          Join with one click. Works in any browser.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="hover:bg-blue-600 transition">Create Meeting</Button>
          <Input placeholder="Enter code" className="w-40 text-black" />
          <Button className="hover:bg-green-600 transition">Join</Button>
        </div>
      </section>

      {/* Main Video + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Video Grid */}
        <section className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <Card key={id} className="overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <img
                  src={`/video-user-${id}.jpg`}
                  alt={`User ${id}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 text-sm bg-gray-800 text-center">User {id}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Live AI Assistant */}
        <aside className="bg-gray-900 rounded-xl p-4 lg:col-span-1 h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Live AI Assistant
          </h2>
          <div className="text-sm text-gray-400 space-y-2 mb-4 h-40 overflow-y-auto">
            <p><strong>00:00</strong> Speaker 1: Let's discuss Q3 goals and objectives...</p>
            <p><strong>00:15</strong> Speaker 2: I think we should focus on market expansion...</p>
            <p><strong>00:30</strong> Speaker 3: The new features are looking promising...</p>
          </div>
          <Button className="w-full mb-2 hover:bg-purple-700 transition">Summarize</Button>
          <Textarea placeholder="Type your question..." className="text-black" />
        </aside>
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center mt-10 border-t border-gray-800 pt-4">
        <div className="space-x-4">
          <Button variant="ghost" className="hover:bg-gray-800 transition">
            🎤
          </Button>
          <Button variant="ghost" className="hover:bg-gray-800 transition">
            🎥
          </Button>
          <Button variant="destructive" className="hover:bg-red-800 transition">
            End Call
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-300">Smart Noise Cancellation</span>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
}
