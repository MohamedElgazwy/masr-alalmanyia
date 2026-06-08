"use client";
import { useState, useEffect } from "react";

export default function FlyingInsect() {
  const [position, setPosition] = useState({ top: "20%", left: "20%" });
  const [isScared, setIsScared] = useState(false);

  // دالة تحريك الحشرة لأماكن عشوائية
  const moveInsectRandomly = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // بين 10% و 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  useEffect(() => {
    // تتحرك تلقائياً كل 4 ثوانٍ إذا لم يلمسها المستخدم
    const interval = setInterval(() => {
      if (!isScared) moveInsectRandomly();
    }, 4000);
    return () => clearInterval(interval);
  }, [isScared]);

  // دالة تجعل الحشرة تهرب فوراً عند اقتراب الماوس منها
  const handleInsectScare = () => {
    setIsScared(true);
    moveInsectRandomly();
    // تبريد الهروب لتعود لحالتها الطبيعية
    setTimeout(() => setIsScared(false), 500);
  };

  return (
    <>
      <div
        onMouseEnter={handleInsectScare}
        onClick={handleInsectScare}
        className="fixed z-50 pointer-events-auto cursor-pointer select-none transition-all duration-1000 ease-in-out"
        style={{
          top: position.top,
          left: position.left,
          transform: isScared ? "scale(1.4)" : "scale(1)",
        }}
      >
        {/* جسم الحشرة كرتوني مبسط باستخدام الرموز التعبيرية والأجنحة المتحركة */}
        <div className="relative flex items-center justify-center w-10 h-10">
          {/* الجناح الأيسر */}
          <span className="absolute text-xs text-slate-400 opacity-70 origin-right animate-wing-left -mt-4 -ml-5">
            🪶
          </span>
          {/* جسم البعوضة/الذبابة */}
          <span className="text-2xl filter drop-shadow-md">🦟</span>
          {/* الجناح الأيمن */}
          <span className="absolute text-xs text-slate-400 opacity-70 origin-left animate-wing-right -mt-4 -mr-5">
            🪶
          </span>
        </div>
      </div>

      {/* الأنماط الحركية (Animation) الرفرفة */}
      <style jsx global>{`
        @keyframes wingLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-45deg); }
        }
        @keyframes wingRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(45deg); }
        }
        .animate-wing-left {
          animation: wingLeft 0.1s infinite linear;
        }
        .animate-wing-right {
          animation: wingRight 0.1s infinite linear;
        }
      `}</style>
    </>
  );
}