interface EmergeLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  showText?: boolean;
}

export function EmergeLogo({
  className = '',
  width = 36,
  height = 36,
  showText = true,
}: EmergeLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground shrink-0"
      >
        {/* Shield outline */}
        <path
          d="M20 3L35 10.5V23C35 31 28.5 36 20 37.5C11.5 36 5 31 5 23V10.5L20 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Upward chevron — "emerge" */}
        <path
          d="M13 24L20 15L27 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span
          className="text-foreground text-[15px] font-bold tracking-[0.22em]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
        >
          EMERGE
        </span>
      )}
    </div>
  );
}
