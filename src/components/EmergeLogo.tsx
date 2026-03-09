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
        <path
          d="M20 4L35 11V24C35 32 28.5 36.5 20 37C11.5 36.5 5 32 5 24V11L20 4Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M14 14H24" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M14 20H22" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M14 26H24" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
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
