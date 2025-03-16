import React, { useState } from 'react';

// 主组件
const VocabularyFlashcard = () => {
  // 词汇数据
  const vocabularyData = [
    {
      word: '调整',
      pinyin: 'tiáo zhěng',
      partOfSpeech: '动词',
      meaning: '改变使适合，使恰当',
      example: '我需要调整一下作息时间。',
      examplePinyin: 'Wǒ xūyào tiáozhěng yíxià zuòxí shíjiān.',
      exampleTranslation: 'I need to adjust my daily schedule.',
      image: '/images/tiaozheng.jpg'
    },
    {
      word: '过渡',
      pinyin: 'guò dù',
      partOfSpeech: '名词/动词',
      meaning: '从一种状态到另一种状态的转变过程',
      example: '假期和工作之间需要一个过渡期。',
      examplePinyin: 'Jiàqī hé gōngzuò zhījiān xūyào yí gè guòdù qī.',
      exampleTranslation: 'We need a transition period between holidays and work.',
      image: '/images/guodu.jpg'
    },
    {
      word: '有效',
      pinyin: 'yǒu xiào',
      partOfSpeech: '形容词',
      meaning: '能够达到预期目的的，产生预期效果的',
      example: '这是一种有效的学习方法。',
      examplePinyin: 'Zhè shì yì zhǒng yǒuxiào de xuéxí fāngfǎ.',
      exampleTranslation: 'This is an effective learning method.',
      image: '/images/youxiao.jpg'
    },
    {
      word: '现象',
      pinyin: 'xiàn xiàng',
      partOfSpeech: '名词',
      meaning: '客观存在的事物表现或情况',
      example: '假期结束后工作适应不良是常见现象。',
      examplePinyin: 'Jiàqī jiéshù hòu gōngzuò shìyìng bùliáng shì chángjiàn xiànxiàng.',
      exampleTranslation: 'Difficulty adapting to work after holidays is a common phenomenon.',
      image: '/images/xianxiang.jpg'
    },
    {
      word: '实现',
      pinyin: 'shí xiàn',
      partOfSpeech: '动词',
      meaning: '使计划、愿望等变为现实',
      example: '他实现了自己的梦想。',
      examplePinyin: 'Tā shíxiàn le zìjǐ de mèngxiǎng.',
      exampleTranslation: 'He realized his dream.',
      image: '/images/shixian.jpg'
    },
    {
      word: '转换',
      pinyin: 'zhuǎn huàn',
      partOfSpeech: '动词',
      meaning: '从一种状态、形式改变到另一种',
      example: '我们需要转换一下心情。',
      examplePinyin: 'Wǒmen xūyào zhuǎnhuàn yíxià xīnqíng.',
      exampleTranslation: 'We need to change our mood.',
      image: '/images/zhuanhuan.jpg'
    },
    {
      word: '利用',
      pinyin: 'lì yòng',
      partOfSpeech: '动词',
      meaning: '使用、运用（资源、时间等）',
      example: '利用假期的最后一天准备工作。',
      examplePinyin: 'Lìyòng jiàqī de zuìhòu yì tiān zhǔnbèi gōngzuò.',
      exampleTranslation: 'Use the last day of vacation to prepare for work.',
      image: '/images/liyong.jpg'
    },
    {
      word: '心中有数',
      pinyin: 'xīn zhōng yǒu shù',
      partOfSpeech: '成语/固定短语',
      meaning: '心里有把握，对情况了解清楚',
      example: '做事前要心中有数。',
      examplePinyin: 'Zuò shì qián yào xīnzhōng yǒushù.',
      exampleTranslation: 'Be clear about what you are doing before you start.',
      image: '/images/xinzhongyoushu.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardState, setCardState] = useState(0); // 0: 图片, 1: 词语, 2: 详细信息
  const [showPinyin, setShowPinyin] = useState(true);
  const [showExampleTranslation, setShowExampleTranslation] = useState(false);

  const currentWord = vocabularyData[currentIndex];

  // 处理卡片点击，循环切换三个状态
  const handleCardClick = () => {
    setCardState((prevState) => (prevState + 1) % 3);
  };

  // 切换到下一个词
  const handleNext = () => {
    setCardState(0); // 重置为图片状态
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabularyData.length);
  };

  // 切换到上一个词
  const handlePrevious = () => {
    setCardState(0); // 重置为图片状态
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vocabularyData.length) % vocabularyData.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-purple-800">对外汉语电子词卡</h1>
        
        <div className="mb-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {currentIndex + 1} / {vocabularyData.length}
          </div>
          <div className="flex space-x-4">
            <label className="flex items-center text-sm">
              <input 
                type="checkbox" 
                checked={showPinyin} 
                onChange={() => setShowPinyin(!showPinyin)}
                className="mr-1"
              />
              拼音
            </label>
            <label className="flex items-center text-sm">
              <input 
                type="checkbox" 
                checked={showExampleTranslation} 
                onChange={() => setShowExampleTranslation(!showExampleTranslation)}
                className="mr-1"
              />
              翻译
            </label>
          </div>
        </div>
        
        <div 
          className="relative w-full h-80 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={handleCardClick}
        >
          {/* 第一层：图片 */}
          <div 
            className={`absolute w-full h-full rounded-lg transition-opacity duration-300 ${
              cardState === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{
              backgroundColor: '#4F46E5',
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
            }}
          >
            <div className="flex flex-col items-center justify-center h-full text-white p-6">
              <img 
                src={currentWord.image} 
                alt={currentWord.word}
                className="max-h-52 mb-4 rounded-md shadow-md"
              />
              <p className="text-sm italic text-white">点击查看词语</p>
            </div>
          </div>
          
          {/* 第二层：词语 */}
          <div 
            className={`absolute w-full h-full rounded-lg transition-opacity duration-300 ${
              cardState === 1 ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{
              backgroundColor: '#6D28D9',
              background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)'
            }}
          >
            <div className="flex flex-col items-center justify-center h-full text-white p-6">
              <h2 className="text-5xl font-bold mb-4">{currentWord.word}</h2>
              {showPinyin && <p className="text-2xl mb-6">{currentWord.pinyin}</p>}
              <p className="text-sm italic">点击查看详细解释</p>
            </div>
          </div>
          
          {/* 第三层：详细信息 */}
          <div 
            className={`absolute w-full h-full rounded-lg bg-white p-6 transition-opacity duration-300 ${
              cardState === 2 ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-purple-800">{currentWord.word}</h3>
                {showPinyin && <p className="text-md text-gray-600">{currentWord.pinyin}</p>}
                <p className="text-sm text-gray-500">{currentWord.partOfSpeech}</p>
              </div>
              
              <div className="mb-3">
                <p className="text-md"><span className="font-medium">释义：</span>{currentWord.meaning}</p>
              </div>
              
              <div className="mb-3">
                <p className="text-md"><span className="font-medium">例句：</span>{currentWord.example}</p>
                {showPinyin && <p className="text-sm text-gray-600">{currentWord.examplePinyin}</p>}
                {showExampleTranslation && <p className="text-sm text-gray-700 italic">{currentWord.exampleTranslation}</p>}
              </div>
              
              <p className="text-sm mt-auto italic text-center text-gray-500">点击回到图片</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <button 
            onClick={handlePrevious}
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-lg shadow transition-colors"
          >
            上一个
          </button>
          <button 
            onClick={handleNext}
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-lg shadow transition-colors"
          >
            下一个
          </button>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          点击卡片切换：图片 → 词语 → 详细解释
        </div>
      </div>
    </div>
  );
};

export default VocabularyFlashcard;