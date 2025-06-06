import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Triangle, Circle, Star, X, Zap, DoorOpen, Cloud, Mountain } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Enhanced cultural symbols with specific number ranges for destiny reading
const symbols = [
  {
    id: 1,
    icon: Zap,
    name: { en: "Divine (神)", zh: "神" },
    numberRange: [1, 8], // 神: 1-8
    meaning: {
      en: "The divine realm speaks through sacred numbers. Your spiritual fortune is revealed.",
      zh: "神圣领域通过神圣数字说话。你的精神财富被揭示。"
    },
    chineseElement: "神",
    direction: "Center"
  },
  {
    id: 2,
    icon: Star,
    name: { en: "Star (星)", zh: "星" },
    numberRange: [1, 9], // 星: 1-9
    meaning: {
      en: "The celestial stars guide your destiny. Nine paths of fortune await you.",
      zh: "天上的星星指引你的命运。九条财富之路等待着你。"
    },
    chineseElement: "星",
    direction: "North"
  },
  {
    id: 3,
    icon: DoorOpen,
    name: { en: "Gate (门)", zh: "门" },
    numberRange: [1, 8], // 门: 1-8
    meaning: {
      en: "The mystical gates open to reveal your path. Eight doorways to fortune.",
      zh: "神秘之门打开，揭示你的道路。通往财富的八道门。"
    },
    chineseElement: "门",
    direction: "East"
  },
  {
    id: 4,
    icon: Cloud,
    name: { en: "Heaven (天)", zh: "天" },
    numberRange: [1, 10], // 天: 1-10
    meaning: {
      en: "Heaven bestows its blessings. Ten levels of celestial favor shine upon you.",
      zh: "天赐福泽。十层天恩照耀着你。"
    },
    chineseElement: "天",
    direction: "South"
  },
  {
    id: 5,
    icon: Mountain,
    name: { en: "Earth (地)", zh: "地" },
    numberRange: [1, 10], // 地: 1-10
    meaning: {
      en: "Mother Earth provides her strength. Ten foundations of earthly power support you.",
      zh: "大地母亲提供力量。十种大地力量的根基支撑着你。"
    },
    chineseElement: "地",
    direction: "West"
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
  const [imageError, setImageError] = useState(false);
  const IconComponent = symbol.icon;
  
  // Safety check for undefined symbol
  if (!symbol) {
    return (
      <div className="relative w-44 h-64 cursor-pointer bg-gray-200 rounded-3xl border-4 border-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }
  
  return (
    <div 
      className="relative w-44 h-64 cursor-pointer transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:z-10 group"
      onClick={onReveal}
    >
      {/* Card Back - Using Image with React fallback */}
      <div className={`absolute inset-0 rounded-3xl border-4 border-yellow-400 shadow-2xl transition-all duration-1000 overflow-hidden ${
        isRevealed ? 'opacity-0 rotate-y-180 scale-95' : 'opacity-100 scale-100'
      }`}>
        {!imageError ? (
          <div className="w-full h-full relative bg-gradient-to-br from-red-900 via-red-800 to-red-950 rounded-2xl">
            <img 
              src={`/pic/${index + 1}.png`} 
              alt="Card Back"
              className="w-full h-full object-cover rounded-2xl"
              style={{
                objectPosition: 'center center',
                filter: 'brightness(1.1) contrast(1.05)'
              }}
              onError={() => setImageError(true)}
              onLoad={() => console.log(`Card ${index + 1} back image loaded successfully`)}
            />
          </div>
        ) : (
          /* Fallback styled version */
          <div className="w-full h-full bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Elegant background pattern */}
            <div className="absolute inset-0 opacity-20">
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent"></div>
              
              {/* Subtle geometric pattern */}
              <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-yellow-300/20 rounded-lg rotate-45"></div>
              
              {/* Flowing lines */}
              <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
              <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
            </div>
            
            {/* Minimalist corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-yellow-400 rounded-tl-xl opacity-60"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-yellow-400 rounded-tr-xl opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-yellow-400 rounded-bl-xl opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-yellow-400 rounded-br-xl opacity-60"></div>
            
            {/* Central focus area with proper icon */}
            <div className="relative z-10 p-8 bg-gradient-to-br from-yellow-400/20 to-yellow-500/30 rounded-full shadow-2xl border-2 border-yellow-400/50 backdrop-blur-sm">
              <div className="text-yellow-300 text-6xl drop-shadow-2xl filter brightness-125">
                <IconComponent size={56} className="drop-shadow-2xl" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Card Front - Premium Red Theme with Prominent Number */}
      <div className={`absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-950 rounded-3xl border-4 border-yellow-400 shadow-3xl transition-all duration-1000 ${
        isRevealed ? 'opacity-100 rotate-y-0 scale-100' : 'opacity-0 rotate-y-180 scale-95'
      }`}>
        <div className="flex flex-col h-full p-6 relative overflow-hidden">
          {/* Premium background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/10 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-700/20 to-transparent rounded-3xl"></div>
          
          {/* Header Section */}
          <div className="flex justify-between items-start mb-3">
            {/* PROMINENT Number in top left - Main feature */}
            <div className="relative">
              {/* Glow effects behind number */}
              <div className="absolute inset-0 bg-yellow-400/25 rounded-full blur-sm"></div>
              
              {/* Main number container */}
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full w-9 h-9 flex items-center justify-center border border-yellow-300 shadow-md">
                <span className="text-red-900 text-sm font-bold drop-shadow-sm">
                  {symbol.generatedNumber || '?'}
                </span>
              </div>
            </div>
            
            {/* Direction indicator */}
            <div className="bg-red-700/60 rounded-full px-3 py-1 border border-yellow-400/30 backdrop-blur-sm">
              <span className="text-yellow-300 text-xs font-semibold tracking-wide">
                {language === 'en' ? symbol.direction : 
                 symbol.direction === 'North' ? '北' :
                 symbol.direction === 'South' ? '南' :
                 symbol.direction === 'East' ? '东' : 
                 symbol.direction === 'West' ? '西' : '中'}
              </span>
            </div>
          </div>
          
          {/* Main Content Section */}
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Icon with premium styling - CENTER */}
            <div className="mb-4 p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/30 rounded-2xl shadow-xl border border-yellow-400/40 backdrop-blur-sm">
              <IconComponent size={48} className="text-yellow-300 drop-shadow-2xl filter brightness-125" />
            </div>
            
            {/* Name display with better typography */}
            <div className="mb-3 text-center">
              <div className="text-yellow-100 text-xl font-bold mb-1 tracking-wide drop-shadow-lg">
                {symbol.name.en.split('(')[0].trim()}
              </div>
              <div className="text-yellow-300 text-lg font-medium tracking-widest">
                ({symbol.chineseElement})
              </div>
            </div>
            
            {/* Range display at bottom */}
            <div className="text-center">
              <div className="bg-red-700/40 rounded-lg px-3 py-1 border border-yellow-400/20 backdrop-blur-sm">
                <span className="text-yellow-200 text-sm font-medium tracking-wide">
                  {symbol.numberRange[0]}-{symbol.numberRange[1]}
                </span>
              </div>
            </div>
          </div>
          
          {/* Subtle corner accents */}
          <div className="absolute top-3 left-3 text-yellow-400/60 text-sm">◇</div>
          <div className="absolute top-3 right-3 text-yellow-400/60 text-sm">◇</div>
          <div className="absolute bottom-3 left-3 text-yellow-400/60 text-sm">◇</div>
          <div className="absolute bottom-3 right-3 text-yellow-400/60 text-sm">◇</div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
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
      subtitle: "Click on cards to reveal your mystical numbers",
      start: "Start",
      setting: "Setting", 
      credit: "Credit",
      language: "Language",
      instructions: "Click on a card to reveal your fortune number",
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
      subtitle: "点击卡片揭示你的神秘数字",
      start: "开始",
      setting: "设置",
      credit: "信用",
      language: "语言",
      instructions: "点击卡片揭示你的命运数字",
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
    if (revealedCards[index]) return;
    
    // Show notice if game hasn't started yet
    if (!gameStarted) {
      toast({
        title: language === 'en' ? "Please Start the Game First!" : "请先开始游戏！",
        description: language === 'en' 
          ? "Click the 'Start' button to begin revealing your destiny numbers." 
          : "点击'开始'按钮开始揭示你的命运数字。",
        duration: 3000,
      });
      return;
    }
    
    // Get the symbol for this specific position
    const cardSymbol = symbols[index];
    
    // Generate random number within the specific range for this card
    const [min, max] = cardSymbol.numberRange;
    const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Create symbol with generated number
    const symbolWithNumber = {
      ...cardSymbol,
      generatedNumber: generatedNumber
    };
    
    setRevealedCards(prev => {
      const newRevealed = [...prev];
      newRevealed[index] = true;
      return newRevealed;
    });
    
    setDrawnSymbols(prev => {
      const newSymbols = [...prev];
      newSymbols[index] = symbolWithNumber;
      return newSymbols;
    });

    // Show detailed fortune message
    setTimeout(() => {
      toast({
        title: `${symbolWithNumber.name[language]} (${generatedNumber}) - ${symbolWithNumber.chineseElement}`,
        description: symbolWithNumber.meaning[language],
        duration: 6000,
      });
    }, 600);
  };

  // Check for results display when all cards are revealed
  React.useEffect(() => {
    if (allCardsRevealed && drawnSymbols.length === 5 && gameStarted) {
      // Additional safety check to ensure all symbols are valid
      const validSymbols = drawnSymbols.filter(symbol => symbol && typeof symbol.generatedNumber === 'number');
      if (validSymbols.length === 5) {
        setTimeout(() => {
          setShowResults(true);
        }, 1000);
      }
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
    
    // Filter out any undefined symbols and validate all symbols have generatedNumber
    const validSymbols = drawnSymbols.filter(symbol => symbol && typeof symbol.generatedNumber === 'number');
    
    // Only calculate if we have all 5 valid symbols
    if (validSymbols.length !== 5) return null;
    
    const totalScore = validSymbols.reduce((sum, symbol) => sum + symbol.generatedNumber, 0);
    const elementCounts = validSymbols.reduce((acc, symbol) => {
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
          {/* Enhanced mystical background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-yellow-300/8 to-yellow-400/15 rounded-4xl blur-3xl transform scale-150"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/10 rounded-4xl blur-2xl transform scale-125"></div>
          
          <div className="flex gap-8 mb-10 relative z-10 p-8 bg-gradient-to-br from-red-900/40 via-red-800/30 to-red-900/40 rounded-4xl backdrop-blur-md border-2 border-yellow-400/40 shadow-3xl">
            {[0, 1, 2, 3, 4].map((index) => (
              <div key={index} className="transform transition-all duration-500 hover:translate-y-[-8px]">
                <FortuneCard
                  index={index}
                  isRevealed={revealedCards[index]}
                  onReveal={() => revealCard(index)}
                  symbol={drawnSymbols[index] || symbols[index]}
                  language={language}
                />
              </div>
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
                {drawnSymbols.filter(symbol => symbol && symbol.generatedNumber).map((symbol, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white rounded-xl p-4 shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                    <symbol.icon size={20} className="text-red-600" />
                    <span className="font-medium text-red-800">{symbol.name[language]}</span>
                    <span className="text-red-600 font-bold">({symbol.generatedNumber})</span>
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
