import ControllerMenuBottomBar from './ControllerMenuBottomBar/ControllerMenuBottomBar.vue'
import ControllerMenuTopBar from './ControllerMenuTopBar/ControllerMenuTopBar.vue'

import AritcleModal from './AritcleModal/AritcleModal.vue'
import ConfigurationModal from './ConfigurationModal/ConfigurationModal.vue'

export default function (Index) {
  Index.components = {
    ControllerMenuTopBar,
    ControllerMenuBottomBar,
    
    AritcleModal,
    ConfigurationModal
  }
}