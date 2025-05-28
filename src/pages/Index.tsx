
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Triangle, Circle, Star, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Cultural symbols and their meanings
const symbols = [
  {
    id: 1,
    icon: Triangle,
    name: { en: "Mountain", zh: "山" },
    number: 8,
    meaning: {
      en: "Strength and stability await you. Like the eternal mountain, your foundation is solid.",
      zh: "力量与稳定等待着你。如永恒的山峰，你的根基坚实。"
    }
  },
  {
    id: 2,
    icon: Circle,
    name: { en: "Unity", zh: "圆" },
    number: 9,
    meaning: {
      en: "Harmony and completeness surround you. The circle brings endless possibilities.",
      zh: "和谐与完整围绕着你。圆满带来无限可能。"
    }
  },
  {
    id: 3,
    icon: Star,
    name: { en: "Guidance", zh: "星" },
    number: 7,
    meaning: {
      en: "Your path is illuminated by wisdom. Follow the star to your destiny.",
      zh: "智慧照亮你的道路。跟随星光走向命运。"
    }
  },
  {
    id: 4,
    icon: X,
    name: { en: "Crossroads", zh: "十" },
    number: 4,
    meaning: {
      en: "Important decisions await. Choose with your heart and mind united.",
      zh: "重要的决定在等待。用心灵与理智的结合来选择。"
    }
  },
  {
    id: 5,
    icon: Circle,
    name: { en: "Fortune", zh: "福" },
    number: 6,
    meaning: {
      en: "Good fortune flows toward you like a gentle river. Embrace the blessings.",
      zh: "好运如温柔的河流向你涌来。拥抱祝福。"
    }
  }
];

const FortuneCard = ({ 
  index, 
  isRevealed, 
  onReveal, 
  symbol, 
  language 
}: {
  index: number;
  isRevealed: boolean;
  onReveal: () => void;
  symbol: any;
  language: 'en' | 'zh';
}) => {
  const IconComponent = symbol.icon;
  
  return (
    <div 
      className="relative w-20 h-32 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onReveal}
    >
      <div className={`absolute inset-0 bg-gray-600 rounded-lg border border-gray-500 transition-all duration-500 ${
        isRevealed ? 'opacity-0 rotate-y-180' : 'opacity-100'
      }`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-800 text-xl font-bold">
            {index === 0 && <Triangle size={24} />}
            {index === 1 && <Circle size={24} />}
            {index === 2 && <Star size={24} />}
            {index === 3 && <X size={24} />}
            {index === 4 && <Circle size={24} />}
          </div>
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg border border-yellow-500 transition-all duration-500 ${
        isRevealed ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
      }`}>
        <div className="flex flex-col items-center justify-center h-full p-2">
          <IconComponent size={20} className="text-red-800 mb-1" />
          <div className="text-red-800 text-xs font-bold text-center">
            {symbol.name[language]}
          </div>
          <div className="text-red-800 text-lg font-bold mt-1">
            {symbol.number}
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [revealedCards, setRevealedCards] = useState<boolean[]>([false, false, false, false, false]);
  const [drawnSymbols, setDrawnSymbols] = useState<any[]>([]);
  const [gameStarted, setGameStarted] = useState(false);

  const text = {
    en: {
      title: "Cultural Fortune Cards",
      subtitle: "Discover ancient wisdom through traditional symbols",
      start: "Start",
      setting: "Setting", 
      credit: "Credit",
      language: "Language",
      instructions: "Click on a card to reveal your fortune",
      newGame: "New Game"
    },
    zh: {
      title: "文化占卜卡",
      subtitle: "通过传统符号发现古老智慧",
      start: "开始",
      setting: "设置",
      credit: "关于",
      language: "语言",
      instructions: "点击卡片揭示你的运势",
      newGame: "新游戏"
    }
  };

  const revealCard = (index: number) => {
    if (revealedCards[index] || !gameStarted) return;
    
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    setRevealedCards(prev => {
      const newRevealed = [...prev];
      newRevealed[index] = true;
      return newRevealed;
    });
    
    setDrawnSymbols(prev => {
      const newSymbols = [...prev];
      newSymbols[index] = randomSymbol;
      return newSymbols;
    });

    // Show fortune message
    setTimeout(() => {
      toast({
        title: `${randomSymbol.name[language]} (${randomSymbol.number})`,
        description: randomSymbol.meaning[language],
        duration: 5000,
      });
    }, 600);
  };

  const startGame = () => {
    setGameStarted(true);
    setRevealedCards([false, false, false, false, false]);
    setDrawnSymbols([]);
    toast({
      title: language === 'en' ? "Game Started!" : "游戏开始！",
      description: text[language].instructions,
      duration: 3000,
    });
  };

  const showCredits = () => {
    toast({
      title: language === 'en' ? "Cultural Fortune Cards" : "文化占卜卡",
      description: language === 'en' 
        ? "An educational app exploring Chinese cultural traditions through interactive fortune-telling."
        : "通过互动占卜探索中国文化传统的教育应用程序。",
      duration: 4000,
    });
  };

  const showSettings = () => {
    toast({
      title: language === 'en' ? "Settings" : "设置",
      description: language === 'en' 
        ? "Use the Language button to switch between English and Chinese."
        : "使用语言按钮在英文和中文之间切换。",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-800 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-2">{text[language].title}</h1>
        <p className="text-yellow-200 text-lg">{text[language].subtitle}</p>
      </div>

      {/* Card Area */}
      <div className="flex gap-4 mb-8">
        {[0, 1, 2, 3, 4].map((index) => (
          <FortuneCard
            key={index}
            index={index}
            isRevealed={revealedCards[index]}
            onReveal={() => revealCard(index)}
            symbol={drawnSymbols[index] || symbols[index]}
            language={language}
          />
        ))}
      </div>

      {/* Instructions */}
      {gameStarted && (
        <div className="text-yellow-200 text-center mb-6">
          {text[language].instructions}
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex gap-4 mb-6">
        <Button 
          onClick={startGame}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-lg font-medium"
        >
          {gameStarted ? text[language].newGame : text[language].start}
        </Button>
        <Button 
          onClick={showSettings}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-lg font-medium"
        >
          {text[language].setting}
        </Button>
        <Button 
          onClick={showCredits}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-lg font-medium"
        >
          {text[language].credit}
        </Button>
      </div>

      {/* Language Toggle */}
      <Button 
        onClick={() => setLanguage(prev => prev === 'en' ? 'zh' : 'en')}
        className="bg-yellow-600 text-red-900 hover:bg-yellow-500 px-6 py-2 rounded-lg font-medium"
      >
        {text[language].language}: {language === 'en' ? 'English' : '中文'}
      </Button>
    </div>
  );
};

export default Index;
