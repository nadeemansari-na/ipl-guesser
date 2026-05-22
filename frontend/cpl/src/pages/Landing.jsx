// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import { Brain, Sparkles, Trophy } from "lucide-react";

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.18),transparent_35%)]" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <h1 className="text-3xl font-black tracking-wide">
          IPL<span className="text-cyan-400">Guesser</span>
        </h1>

        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur-md transition hover:bg-white/10">
          AI Powered
        </button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <p className="text-sm tracking-wide text-cyan-200">
            AI Cricket Mind Reading Experience
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Think Of Any
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}IPL Cricketer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Answer a few smart questions and watch the AI probability engine predict the player hidden in your mind.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/game"
            className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            Start Guessing
          </Link>

            <Link to={"/How-it-work"}>
          <button className="rounded-2xl border cursor-pointer border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:scale-105 hover:bg-white/10">
            How It Works
          </button>
            </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/30">
            <Brain className="mx-auto h-10 w-10 text-cyan-400" />
            <h2 className="mt-5 text-2xl font-bold">Smart AI Engine</h2>
            <p className="mt-3 text-gray-400">
              Uses probability-based decision making to ask intelligent questions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-purple-400/30">
            <Trophy className="mx-auto h-10 w-10 text-purple-400" />
            <h2 className="mt-5 text-2xl font-bold">IPL Focused</h2>
            <p className="mt-3 text-gray-400">
              Built specifically for IPL fans with dynamic player intelligence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-400/30">
            <Sparkles className="mx-auto h-10 w-10 text-blue-400" />
            <h2 className="mt-5 text-2xl font-bold">Game Experience</h2>
            <p className="mt-3 text-gray-400">
              Futuristic animations, AI interactions, and smooth gameplay feel.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
    </div>
  );
}
