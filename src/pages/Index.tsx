import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Triangle, Circle, Star, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Enhanced cultural symbols with more Chinese details
const symbols = [
  {
    id: 1,
    icon: Triangle,
    name: { en: "Mountain", zh: "山" },
    number: 8,
    meaning: {
      en: "The sacred peaks bring stability and eternal strength. Like Mount Tai, your foundation will endure through all seasons.",
      zh: "神圣的山峰带来稳定和永恒的力量。如泰山般，你的根基将历经四季而不摇。"
    },
    chineseElement: "土",
    direction: "North"
  },
  {
    id: 2,
    icon: Circle,
    name: { en: "Unity", zh: "圆满" },
    number: 9,
    meaning: {
      en: "The perfect circle represents harmony in the Middle Kingdom. Heaven and Earth unite in your favor.",
      zh: "完美的圆代表中华和谐。天地合一，助你成功。"
    },
    chineseElement: "金",
    direction: "West"
  },
  {
    id: 3,
    icon: Star,
    name: { en: "Guidance", zh: "北斗" },
    number: 7,
    meaning: {
      en: "The North Star guides travelers home. Ancient wisdom illuminates your destined path.",
      zh: "北斗星指引游子归家。古老智慧照亮你的命运之路。"
    },
    chineseElement: "水",
    direction: "North"
  },
  {
    id: 4,
    icon: X,
    name: { en: "Crossroads", zh: "十字" },
    number: 4,
    meaning: {
      en: "At the crossroads of destiny, choose with the wisdom of Confucius. Balance is the way.",
      zh: "在命运的十字路口，以孔子的智慧选择。平衡即是道。"
    },
    chineseElement: "木",
    direction: "East"
  },
  {
    id: 5,
    icon: Circle,
    name: { en: "Fortune", zh: "福运" },
    number: 6,
    meaning: {
      en: "The dragon brings prosperity from the eastern seas. Your fortune flows like the Yellow River.",
      zh: "龙从东海带来繁荣。你的福运如黄河般奔流。"
    },
    chineseElement: "火",
    direction: "South"
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
      className="relative w-24 h-36 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onReveal}
    >
      {/* Card Back */}
      <div className={`absolute inset-0 bg-gray-100 rounded-lg border-2 border-gray-300 shadow-lg transition-all duration-500 ${
        isRevealed ? 'opacity-0 rotate-y-180' : 'opacity-100'
      }`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-800 text-2xl">
            {index === 0 && <Triangle size={28} />}
            {index === 1 && <Circle size={28} />}
            {index === 2 && <Star size={28} />}
            {index === 3 && <X size={28} />}
            {index === 4 && <Circle size={28} />}
          </div>
        </div>
      </div>
      
      {/* Card Front with Chinese details */}
      <div className={`absolute inset-0 bg-gradient-to-b from-red-600 to-red-800 rounded-lg border-2 border-yellow-400 shadow-lg transition-all duration-500 ${
        isRevealed ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
      }`}>
        <div className="flex flex-col items-center justify-center h-full p-2 relative">
          {/* Traditional Chinese border pattern */}
          <div className="absolute top-1 left-1 right-1 bottom-1 border border-yellow-300 rounded opacity-50"></div>
          
          {/* Element symbol in corner */}
          <div className="absolute top-2 right-2 text-yellow-300 text-xs font-bold">
            {symbol.chineseElement}
          </div>
          
          {/* Main symbol */}
          <IconComponent size={24} className="text-yellow-300 mb-2" />
          
          {/* Chinese and English name */}
          <div className="text-yellow-300 text-sm font-bold text-center mb-1">
            {symbol.name[language]}
          </div>
          
          {/* Lucky number */}
          <div className="text-yellow-300 text-xl font-bold mb-1">
            {symbol.number}
          </div>
          
          {/* Direction indicator */}
          <div className="text-yellow-200 text-xs opacity-75">
            {language === 'en' ? symbol.direction : 
             symbol.direction === 'North' ? '北' :
             symbol.direction === 'South' ? '南' :
             symbol.direction === 'East' ? '东' : '西'}
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
  const [showResults, setShowResults] = useState(false);

  const text = {
    en: {
      title: "Chinese Fortune Cards",
      subtitle: "Discover ancient wisdom through traditional symbols",
      start: "Start",
      setting: "Setting", 
      credit: "Credit",
      language: "Language",
      instructions: "Click on a card to reveal your fortune",
      newGame: "New Game",
      results: "Your Complete Fortune Reading",
      totalScore: "Total Fortune Score",
      dominantElement: "Dominant Element",
      fortuneSummary: "Fortune Summary",
      yourPath: "Your destined path combines the wisdom of ancient China. The elements guide your journey through life's seasons.",
      closeResults: "Close Results"
    },
    zh: {
      title: "中华占卜卡",
      subtitle: "通过传统符号发现古老智慧",
      start: "开始",
      setting: "设置",
      credit: "关于",
      language: "语言",
      instructions: "点击卡片揭示你的运势",
      newGame: "新游戏",
      results: "你的完整运势解读",
      totalScore: "总运势分数",
      dominantElement: "主导元素",
      fortuneSummary: "运势总结",
      yourPath: "你的命运之路融合了古代中国的智慧。五行元素指引你走过人生的四季。",
      closeResults: "关闭结果"
    }
  };

  // Check if all cards are revealed
  const allCardsRevealed = revealedCards.every(revealed => revealed);

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

    // Show detailed fortune message
    setTimeout(() => {
      toast({
        title: `${randomSymbol.name[language]} (${randomSymbol.number}) - ${randomSymbol.chineseElement}`,
        description: randomSymbol.meaning[language],
        duration: 6000,
      });
    }, 600);
  };

  // Check for results display when all cards are revealed
  React.useEffect(() => {
    if (allCardsRevealed && drawnSymbols.length === 5 && gameStarted) {
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    }
  }, [allCardsRevealed, drawnSymbols.length, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setRevealedCards([false, false, false, false, false]);
    setDrawnSymbols([]);
    setShowResults(false);
    toast({
      title: language === 'en' ? "Game Started!" : "游戏开始！",
      description: text[language].instructions,
      duration: 3000,
    });
  };

  const showCredits = () => {
    toast({
      title: language === 'en' ? "Chinese Fortune Cards" : "中华占卜卡",
      description: language === 'en' 
        ? "An educational app exploring Chinese cultural traditions through interactive fortune-telling with five elements and directions."
        : "通过互动占卜探索中国文化传统的教育应用程序，融合五行和方位学说。",
      duration: 5000,
    });
  };

  const showSettings = () => {
    toast({
      title: language === 'en' ? "Settings" : "设置",
      description: language === 'en' 
        ? "Use the Language button to switch between English and Chinese. Each card represents traditional Chinese elements and directions."
        : "使用语言按钮在英文和中文之间切换。每张卡片代表传统的中国元素和方向。",
      duration: 4000,
    });
  };

  // Calculate results
  const calculateResults = () => {
    if (drawnSymbols.length !== 5) return null;
    
    const totalScore = drawnSymbols.reduce((sum, symbol) => sum + symbol.number, 0);
    const elementCounts = drawnSymbols.reduce((acc, symbol) => {
      acc[symbol.chineseElement] = (acc[symbol.chineseElement] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const dominantElement = Object.entries(elementCounts).reduce((a, b) => 
      elementCounts[a[0]] > elementCounts[b[0]] ? a : b
    )[0];

    return { totalScore, dominantElement };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-800 flex flex-col items-center justify-center p-8 relative">
      {/* Header with Chinese styling */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-300 mb-3 tracking-wide">{text[language].title}</h1>
        <p className="text-yellow-200 text-xl">{text[language].subtitle}</p>
        <div className="w-32 h-0.5 bg-yellow-400 mx-auto mt-4"></div>
      </div>

      {/* Main content area - centered */}
      <div className="flex flex-col items-center">
        {/* Card Area */}
        <div className="flex gap-6 mb-8">
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
        {gameStarted && !allCardsRevealed && (
          <div className="text-yellow-200 text-center text-lg">
            {text[language].instructions}
          </div>
        )}

        {/* Results Display */}
        {showResults && results && (
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-lg p-8 shadow-2xl border-4 border-yellow-400 max-w-2xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-red-800 mb-2">{text[language].results}</h2>
              <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-red-100 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">{text[language].totalScore}</h3>
                <div className="text-4xl font-bold text-red-600">{results.totalScore}</div>
              </div>
              <div className="text-center p-4 bg-red-100 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">{text[language].dominantElement}</h3>
                <div className="text-4xl font-bold text-red-600">{results.dominantElement}</div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">{text[language].fortuneSummary}</h3>
              <p className="text-red-700 leading-relaxed">{text[language].yourPath}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {drawnSymbols.map((symbol, index) => (
                <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow">
                  <symbol.icon size={20} className="text-red-600" />
                  <span className="font-medium text-red-800">{symbol.name[language]}</span>
                  <span className="text-red-600 font-bold">({symbol.number})</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setShowResults(false)}
                className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-md font-medium"
              >
                {text[language].closeResults}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Control Buttons - Bottom Right */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <Button 
          onClick={startGame}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-md font-medium"
        >
          {gameStarted ? text[language].newGame : text[language].start}
        </Button>
        <Button 
          onClick={showSettings}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-md font-medium"
        >
          {text[language].setting}
        </Button>
        <Button 
          onClick={() => setLanguage(prev => prev === 'en' ? 'zh' : 'en')}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-md font-medium"
        >
          {text[language].language}
        </Button>
        <Button 
          onClick={showCredits}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 rounded-md font-medium"
        >
          {text[language].credit}
        </Button>
      </div>
    </div>
  );
};

export default Index;
