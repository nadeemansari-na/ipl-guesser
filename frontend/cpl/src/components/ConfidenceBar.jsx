export default function ConfidenceBar({ confidence }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-gray-300">
        <span>AI Confidence</span>
        <span>{confidence}%</span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-white/10">
        <div
          style={{ width: `${confidence}%` }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
        />
      </div>
    </div>
  );
}