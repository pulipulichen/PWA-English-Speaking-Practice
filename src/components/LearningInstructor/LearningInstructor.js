
let LearningInstructor = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      beep: null,
      tryToStop: false
    }
  },
  //watch: {},  // LearningInstructorWatch.js
  //computed: {}, // LearningInstructorComputed.js
  //mounted() {}, // LearningInstructorMounted.js
  methods: {} // LearningInstructorMethods.js
}

import LearningInstructorComputed from './LearningInstructorComputed.js'
LearningInstructorComputed(LearningInstructor)

import LearningInstructorMethods from './LearningInstructorMethods.js'
LearningInstructorMethods(LearningInstructor)

import LearningInstructorMethodsNavigation from './LearningInstructorMethodsNavigation.js'
LearningInstructorMethodsNavigation(LearningInstructor)

import LearningInstructorMethodsSentence from './LearningInstructorMethodsSentence.js'
LearningInstructorMethodsSentence(LearningInstructor)

import LearningInstructorMethodsWord from './LearningInstructorMethodsWord.js'
LearningInstructorMethodsWord(LearningInstructor)

import LearningInstructorMethodsToLearn from './LearningInstructorMethodsToLearn.js'
LearningInstructorMethodsToLearn(LearningInstructor)

import LearningInstructorMethodsFeedback from './LearningInstructorMethodsFeedback.js'
LearningInstructorMethodsFeedback(LearningInstructor)

import LearningInstructorMounted from './LearningInstructorMounted.js'
LearningInstructorMounted(LearningInstructor)

import LearningInstructorWatch from './LearningInstructorWatch.js'
LearningInstructorWatch(LearningInstructor)

export default LearningInstructor