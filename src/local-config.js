let localConfig = {
  fieldArticle: ``,
  pitch: 1,
  rate: 1,
  voiceName: null,
  playingIndex: 0,
  //lastPlayIndex: 5,
  repeatPractice: true,
  autoPlay: false,
  practiceSentenceMask: 'none', // none translation word-block sentence-block
  practiceMode: 'writing',  // speaking writing
  speakingInstructionStrategy: 'sentence', // none sentence words-by-words word-by-word
  setenceTokenizerStrategy: 'english-default', // english-default english-basic english-clause chinese-default chinese-comma
  
  debugSpeechToTextUtilsMockup: 'false',  // perfect false auto
  articleResource: 'english-cnn-world-news',  // english-bbc-world-news english-cnn-world-news englis-taiwan-today chinese-pts-news
}

export default localConfig