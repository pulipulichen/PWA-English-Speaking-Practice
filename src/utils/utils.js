import AsyncUtils from './AsyncUtils.js'
import DiffUtils from './DiffUtils.js'
import ClipboardUtils from './ClipboardUtils.js'
import AxiosUtils from './AxiosUtils.js'
import FileUtils from './FileUtils.js'
import URLUtils from './URLUtils.js'
import './date-helper.js'

import DictUtils from './DictUtils.js'
import SpeechToTextUtils from './SpeechToTextUtils.js'
//import TextToSpeechUtils from './TextToSpeechUtils.js'
import ResponsiveVoiceTextToSpeechUtils from './ResponsiveVoiceTextToSpeechUtils.js'
import SoundUtils from './SoundUtils.js'
import TransUtils from './TransUtils.js'
import RandomUtils from './RandomUtils.js'

export default {
  AsyncUtils,
  DiffUtils,
  ClipboardUtils,
  AxiosUtils,
  FileUtils,
  URLUtils,
  DictUtils,
  SpeechToTextUtils,
  TextToSpeechUtils: ResponsiveVoiceTextToSpeechUtils,
  //TextToSpeechUtils,
  SoundUtils,
  TransUtils,
  RandomUtils
}