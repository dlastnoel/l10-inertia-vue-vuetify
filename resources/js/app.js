// javascript
import './bootstrap'

// css
import '../css/app.css'

// inertia
import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

// ziggy routes
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})


// vue toastification
import Toast  from 'vue-toastification';
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'


createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob('./pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(ZiggyVue, Ziggy)
      .use(vuetify)
      .use(Toast, {
        timeout: 3500,
        position: 'bottom-right',
        hideProgressBar: true,
        shareAppContext: true,
      })
      .mixin({
        methods: {
          showToast: function (message, type) {
            const toast = useToast()
            toast(message, {
              type: type,
            })
          },
        },
      })
      .component('Link', Link)
      .component('Head', Head)
      .use(plugin)
      .mount(el)
  },
  progress: {
    color: '#4CAF50',
  },
})
