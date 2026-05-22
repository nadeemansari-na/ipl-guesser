import { Brain, MessageCircleQuestion, Search, Target } from "lucide-react"

export const  Work_Flow=()=>{
    return (
      <div className="mt-28 w-full max-w-full">
  {/* How It Works Section */}
  
  {/* Heading */}
  <div className="text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
      AI Workflow
    </p>

    <h2 className="text-4xl font-black md:text-5xl">
      How It
      <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {" "}Works
      </span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
      The AI continuously filters IPL players using probability,
      smart questioning, and elimination logic until it predicts
      the cricketer in your mind.
    </p>
  </div>

  {/* Steps */}
  <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

    {/* Step 1 */}
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold">
        1
      </div>

      <Search className="mt-4 h-12 w-12 text-cyan-400" />

      <h3 className="mt-6 text-2xl font-bold">
        Think Of A Player
      </h3>

      <p className="mt-4 leading-relaxed text-gray-400">
        Choose any IPL cricketer in your mind.
        The AI starts with all possible players equally probable.
      </p>
    </div>

    {/* Step 2 */}
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 font-bold">
        2
      </div>

      <MessageCircleQuestion className="mt-4 h-12 w-12 text-purple-400" />

      <h3 className="mt-6 text-2xl font-bold">
        Answer Smart Questions
      </h3>

      <p className="mt-4 leading-relaxed text-gray-400">
        Based on your answers, the probability engine eliminates
        impossible players and boosts matching candidates.
      </p>
    </div>

    {/* Step 3 */}
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold">
        3
      </div>

      <Target className="mt-4 h-12 w-12 text-blue-400" />

      <h3 className="mt-6 text-2xl font-bold">
        AI Predicts The Player
      </h3>

      <p className="mt-4 leading-relaxed text-gray-400">
        Once confidence becomes high enough, the AI makes its final
        prediction with calculated certainty.
      </p>
    </div>
  </div>

  {/* Probability Engine Box */}
  <div className="mt-16 rounded-3xl border border-cyan-400/10 bg-linear-to-r from-cyan-500/10 to-purple-500/10 p-10 backdrop-blur-md">
    
    <div className="flex flex-col items-center text-center">
      <Brain className="h-14 w-14 text-cyan-400" />

      <h3 className="mt-6 text-3xl font-black">
        Dynamic Probability Engine
      </h3>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
        Every answer updates player probabilities in real time.
        The AI continuously learns from your responses,
        increases confidence levels, and selects the next
        most intelligent question automatically.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200">
          Real-Time Confidence Tracking
        </div>

        <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-5 py-2 text-sm text-purple-200">
          Smart Player Elimination
        </div>

        <div className="rounded-full border border-blue-400/20 bg-blue-400/10 px-5 py-2 text-sm text-blue-200">
          Adaptive Question Logic
        </div>
      </div>
    </div>
  </div>
</div>
    )
}