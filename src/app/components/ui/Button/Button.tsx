"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-primaryWhite bg-primaryYellow hover:bg-primaryWhite hover:text-primaryYellow focus:ring-primaryWhite h-12 w-full cursor-pointer rounded-[5px] text-base font-bold shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] transition focus:ring-2 focus:outline-none"
    >
      {children}
    </button>
  );
}
