import React from "react"; 

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
 
  return (
    <footer className="mt-20 border-t border-white/10  backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-5">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Left */}
          <div className="text-center items-center md:text-left">
            <p>Copyright {year} © Pramod Singh. All Right Reserved.
            </p> 
          </div>
        </div> 
      </div>
    </footer>
  );
}; 
