import VueDisqus from 'vue-disqus'
import VueGtag from 'vue-gtag'
import FontAwesome from './font-awesome'

// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  FontAwesome(Vue)

  head.htmlAttrs = { lang: 'he' }
  head.bodyAttrs = { dir: 'rtl' }

  Vue.use(VueDisqus, {
    shortname: 'bcsstudent'
  })

  if (isClient) {
    Vue.use(
      VueGtag,
      {
        config: { id: 'UA-29494162-4' }
      },
      router
    )
  }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}