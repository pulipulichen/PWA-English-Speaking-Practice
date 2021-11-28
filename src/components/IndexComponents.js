export default function (Index) {
  Index.components = {
    ControllerMenuTopBar: () => {return import(/* webpackChunkName: "components/ControllerMenuTopBar" */ './ControllerMenuTopBar/ControllerMenuTopBar.vue')},
    ControllerMenuBottomBar: () => {return import(/* webpackChunkName: "components/ControllerMenuBottomBar" */ './ControllerMenuBottomBar/ControllerMenuBottomBar.vue')},
    
    ArticleModal: () => {return import(/* webpackChunkName: "components/ArticleModal" */ './ArticleModal/ArticleModal.vue')},
    ConfigurationModal: () => {return import(/* webpackChunkName: "components/ConfigurationModal" */ './ConfigurationModal/ConfigurationModal.vue')},
    
    SentencePanel: () => {return import(/* webpackChunkName: "components/SentencePanel" */ './SentencePanel/SentencePanel.vue')},
    LearningInstructor: () => {return import(/* webpackChunkName: "components/LearningInstructor" */ './LearningInstructor/LearningInstructor.vue')},
  }
}