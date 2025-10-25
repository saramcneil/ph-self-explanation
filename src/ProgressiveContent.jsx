import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProgressiveContent = ({ screens, onComplete, DiagramComponent }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg min-h-[300px]">
       {screens[currentScreen].includes("__SHOW_DIAGRAM__") ? (
  <>
    <div 
      className="text-gray-800 leading-relaxed text-lg"
      dangerouslySetInnerHTML={{ __html: screens[currentScreen].replace("__SHOW_DIAGRAM__", "") }}
    />
    {DiagramComponent && <DiagramComponent />}
  </>
) : screens[currentScreen] === "__DIAGRAM__" ? (
  DiagramComponent ? <DiagramComponent /> : <div>Diagram loading...</div>
) : (
  <div 
    className="text-gray-800 leading-relaxed text-lg"
    dangerouslySetInnerHTML={{ __html: screens[currentScreen] }}
  />
)}

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Screen {currentScreen + 1} of {screens.length}
        </p>
        <button
          onClick={nextScreen}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
        >
          {currentScreen < screens.length - 1 ? 'Next' : 'Continue to Self-Explanation'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2 justify-center">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentScreen 
                ? 'w-8 bg-purple-600' 
                : index < currentScreen
                ? 'w-2 bg-purple-400'
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressiveContent;
