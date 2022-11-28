import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'MyComponent',

  setup () {
    return () => h(QBadge, {
      class: 'MyComponent',
      label: 'MyComponent'
    })
  }
}
