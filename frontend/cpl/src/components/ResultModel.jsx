import { motion } from "framer-motion";

export default function ResultModal({ player, confidence, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-xl rounded-3xl border border-cyan-400/20 bg-[#0b0f19] p-10 text-center shadow-2xl"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          AI Prediction Complete
        </p>

        <h2 className="mt-6 text-5xl font-black">
          {player}
        </h2>

        <p className="mt-5 text-lg text-gray-300">
          Confidence Score: 
          <span className="font-bold text-cyan-400">
            {Math.floor(confidence*100)}%
          </span>
        </p>

        <button
          onClick={()=>{
            onClose
            window.location.reload()
          }}
            className="mt-10 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-bold transition hover:scale-105"
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
}