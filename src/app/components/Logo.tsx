export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* آیکون */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-10 h-10"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#grad)" />
        <path
          d="M20 40 L32 20 L44 40 Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* متن برند */}
      <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
        فروشگاه رسام
      </span>
    </div>
  );
}
