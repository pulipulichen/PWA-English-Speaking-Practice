export default function (Index) {
  Index.components = {
    ControllerMenuTopBar: () => {return import(/* webpackChunkName: "components/ControllerMenuTopBar" */ './ControllerMenuTopBar/ControllerMenuTopBar.vue')},
    ControllerMenuBottomBar: () => {return import(/* webpackChunkName: "components/ControllerMenuBottomBar" */ './ControllerMenuBottomBar/ControllerMenuBottomBar.vue')},
    
    AritcleModal: () => {return import(/* webpackChunkName: "components/AritcleModal" */ './AritcleModal/AritcleModal.vue')},
    ConfigurationModal: () => {return import(/* webpackChunkName: "components/ConfigurationModal" */ './ConfigurationModal/ConfigurationModal.vue')},
    
    SentencePanel: () => {return import(/* webpackChunkName: "components/SentencePanel" */ './SentencePanel/SentencePanel.vue')},
    LearningInstructor: () => {return import(/* webpackChunkName: "components/LearningInstructor" */ './LearningInstructor/LearningInstructor.vue')},
  }
}