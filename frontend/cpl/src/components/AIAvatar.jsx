import { BrainCircuit } from "lucide-react";

export default function AIAvatar() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md">
        <BrainCircuit className="h-16 w-16 animate-pulse text-cyan-400" />
      </div>

      <p className="mt-4 text-sm tracking-widest text-cyan-300">
        AI ANALYZING
      </p>
    </div>
  );
}