import { motion } from "framer-motion";

export default function QuestionCard({ question }) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
        AI QUESTION
      </p>

      <h2 className="text-2xl font-bold leading-relaxed md:text-4xl">
        {question.text}
      </h2>
    </motion.div>
  );
}