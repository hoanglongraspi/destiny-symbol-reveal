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
      className="relative w-28 h-40 cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1"
      onClick={onReveal}
    >
      {/* Card Back with Chinese patterns */}
      <div className={`absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border-3 border-amber-300 shadow-xl transition-all duration-700 ${
        isRevealed ? 'opacity-0 rotate-y-180' : 'opacity-100'
      }`}>
        <div className="flex items-center justify-center h-full relative overflow-hidden">
          {/* Traditional Chinese cloud pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300"></div>
            <div className="absolute top-2 left-2 w-6 h-6 border-2 border-amber-400 rounded-full opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-amber-400 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-amber-400 rounded-full opacity-20"></div>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-amber-400"></div>
          <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-amber-400"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-amber-400"></div>
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-amber-400"></div>
          
          {/* Main icon with glow effect */}
          <div className="relative z-10 p-2 bg-amber-200/50 rounded-full">
            <div className="text-amber-700 text-3xl drop-shadow-lg">
              {index === 0 && <Triangle size={32} />}
              {index === 1 && <Circle size={32} />}
              {index === 2 && <Star size={32} />}
              {index === 3 && <X size={32} />}
              {index === 4 && <Circle size={32} />}
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Front with enhanced Chinese styling */}
      <div className={`absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-xl border-3 border-yellow-400 shadow-xl transition-all duration-700 ${
        isRevealed ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
      }`}>
        <div className="flex flex-col items-center justify-center h-full p-3 relative overflow-hidden">
          {/* Traditional Chinese decorative background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent"></div>
          </div>
          
          {/* Inner decorative frame */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-yellow-300/50 rounded-lg"></div>
          
          {/* Traditional corner ornaments */}
          <div className="absolute top-2 left-2 text-yellow-300 text-xs">◆</div>
          <div className="absolute top-2 right-2 text-yellow-300 text-xs">◆</div>
          <div className="absolute bottom-2 left-2 text-yellow-300 text-xs">◆</div>
          <div className="absolute bottom-2 right-2 text-yellow-300 text-xs">◆</div>
          
          {/* Element symbol with background */}
          <div className="absolute top-3 right-3 bg-yellow-300/20 rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-yellow-300 text-sm font-bold">{symbol.chineseElement}</span>
          </div>
          
          {/* Main symbol with enhanced styling */}
          <div className="relative z-10 mb-2 p-2 bg-yellow-300/10 rounded-full">
            <IconComponent size={28} className="text-yellow-300 drop-shadow-lg" />
          </div>
          
          {/* Chinese and English name with background */}
          <div className="relative z-10 bg-yellow-300/10 rounded-md px-2 py-1 mb-2">
            <div className="text-yellow-300 text-sm font-bold text-center tracking-wide">
              {symbol.name[language]}
            </div>
          </div>
          
          {/* Lucky number with traditional styling */}
          <div className="relative z-10 bg-yellow-300/20 rounded-full w-8 h-8 flex items-center justify-center mb-2">
            <span className="text-yellow-300 text-xl font-bold">{symbol.number}</span>
          </div>
          
          {/* Direction indicator with Chinese styling */}
          <div className="relative z-10 bg-yellow-200/10 rounded px-2 py-0.5">
            <span className="text-yellow-200 text-xs opacity-90">
              {language === 'en' ? symbol.direction : 
               symbol.direction === 'North' ? '北' :
               symbol.direction === 'South' ? '南' :
               symbol.direction === 'East' ? '东' : '西'}
            </span>
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
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-yellow-400/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border border-yellow-400/25 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-yellow-400/30 rounded-full"></div>
        
        {/* Traditional Chinese pattern lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </div>

      {/* Header with enhanced Chinese styling */}
      <div className="text-center mb-12 relative z-10">
        <div className="relative inline-block">
          {/* Decorative elements around title */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl">◆</div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl">◆</div>
          
          <h1 className="text-6xl font-bold text-yellow-300 mb-4 tracking-wider drop-shadow-2xl relative">
            {text[language].title}
            {/* Traditional Chinese decorative elements */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl opacity-60">龍</div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl opacity-60">鳳</div>
          </h1>
        </div>
        
        <p className="text-yellow-200 text-xl mb-4 font-medium">{text[language].subtitle}</p>
        
        {/* Enhanced decorative line with pattern */}
        <div className="flex items-center justify-center gap-2">
          <div className="text-yellow-400 text-sm">◆</div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="text-yellow-400 text-lg">※</div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="text-yellow-400 text-sm">◆</div>
        </div>
      </div>

      {/* Main content area - centered */}
      <div className="flex flex-col items-center relative z-10">
        {/* Card Area with enhanced background */}
        <div className="relative">
          {/* Mystical background glow */}
          <div className="absolute inset-0 bg-yellow-400/5 rounded-3xl blur-xl transform scale-110"></div>
          
          <div className="flex gap-8 mb-8 relative z-10 p-6 bg-black/10 rounded-2xl backdrop-blur-sm border border-yellow-400/20">
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
        </div>

        {/* Instructions with enhanced styling */}
        {gameStarted && !allCardsRevealed && (
          <div className="text-yellow-200 text-center text-lg font-medium bg-black/20 px-6 py-3 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
            {text[language].instructions}
          </div>
        )}

        {/* Enhanced Results Display */}
        {showResults && results && (
          <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 rounded-2xl p-8 shadow-2xl border-4 border-yellow-400 max-w-2xl relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-6xl text-red-600">龍</div>
              <div className="absolute top-4 right-4 text-6xl text-red-600">鳳</div>
              <div className="absolute bottom-4 left-4 text-4xl text-red-600">福</div>
              <div className="absolute bottom-4 right-4 text-4xl text-red-600">壽</div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-red-800 mb-2">{text[language].results}</h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-red-600 text-sm">◆</div>
                  <div className="w-24 h-0.5 bg-red-600"></div>
                  <div className="text-red-600 text-lg">※</div>
                  <div className="w-24 h-0.5 bg-red-600"></div>
                  <div className="text-red-600 text-sm">◆</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-50 rounded-xl border border-red-200 shadow-md">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">{text[language].totalScore}</h3>
                  <div className="text-5xl font-bold text-red-600 drop-shadow-lg">{results.totalScore}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-50 rounded-xl border border-red-200 shadow-md">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">{text[language].dominantElement}</h3>
                  <div className="text-5xl font-bold text-red-600 drop-shadow-lg">{results.dominantElement}</div>
                </div>
              </div>

              <div className="text-center mb-6 bg-gradient-to-r from-red-50 to-amber-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">{text[language].fortuneSummary}</h3>
                <p className="text-red-700 leading-relaxed font-medium">{text[language].yourPath}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {drawnSymbols.map((symbol, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white rounded-xl p-4 shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                    <symbol.icon size={20} className="text-red-600" />
                    <span className="font-medium text-red-800">{symbol.name[language]}</span>
                    <span className="text-red-600 font-bold">({symbol.number})</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-xl font-medium shadow-lg transform hover:scale-105 transition-all"
                >
                  {text[language].closeResults}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Control Buttons - Bottom Right */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-20">
        <Button 
          onClick={startGame}
          className="bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-800 hover:from-amber-300 hover:to-yellow-300 px-6 py-3 rounded-xl font-medium shadow-lg border border-yellow-400/50 backdrop-blur-sm transform hover:scale-105 transition-all"
        >
          {gameStarted ? text[language].newGame : text[language].start}
        </Button>
        <Button 
          onClick={showSettings}
          className="bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-800 hover:from-amber-300 hover:to-yellow-300 px-6 py-3 rounded-xl font-medium shadow-lg border border-yellow-400/50 backdrop-blur-sm transform hover:scale-105 transition-all"
        >
          {text[language].setting}
        </Button>
        <Button 
          onClick={() => setLanguage(prev => prev === 'en' ? 'zh' : 'en')}
          className="bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-800 hover:from-amber-300 hover:to-yellow-300 px-6 py-3 rounded-xl font-medium shadow-lg border border-yellow-400/50 backdrop-blur-sm transform hover:scale-105 transition-all"
        >
          {text[language].language}
        </Button>
        <Button 
          onClick={showCredits}
          className="bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-800 hover:from-amber-300 hover:to-yellow-300 px-6 py-3 rounded-xl font-medium shadow-lg border border-yellow-400/50 backdrop-blur-sm transform hover:scale-105 transition-all"
        >
          {text[language].credit}
        </Button>
      </div>
    </div>
  );
};

export default Index;
