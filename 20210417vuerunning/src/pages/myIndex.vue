<template>
  <q-page class="flex flex-center">
    HIER KOMT HET COC LOGO
    <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
  </q-page>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Message from 'components/Message.vue'

Vue.component('app-message', Message)

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
]

export default {
  name: 'PageIndex',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      EssentialLinks: linksData
    }
  }
}
</script>
