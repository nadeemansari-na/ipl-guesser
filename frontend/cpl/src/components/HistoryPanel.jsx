export default function HistoryPanel({ history }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-cyan-300">
        Question History
      </h2>

      <div className="space-y-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/5 bg-black/30 p-4"
          >
            <p className="text-sm text-gray-300">{item.question}</p>

            <div className="mt-3 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}