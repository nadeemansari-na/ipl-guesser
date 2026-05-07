import { motion } from "framer-motion";

export default function AnswerButtons({ onAnswer }) {
  const buttons = [
    {
      label: "YES",
      value: "yes",
      style: "from-green-500 to-emerald-500",
    },
    {
      label: "NO",
      value: "no",
      style: "from-red-500 to-rose-500",
    },
    {
      label: "MAYBE",
      value: "maybe",
      style: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {buttons.map((btn) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          key={btn.value}
          onClick={() => onAnswer(btn.value)}
          className={`rounded-2xl bg-gradient-to-r ${btn.style} px-6 py-4 text-lg font-bold shadow-lg transition`}
        >
          {btn.label}
        </motion.button>
      ))}
    </div>
  );
}