import { defineNuxtPlugin } from '#app'
import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueMatomo, {
        host: 'https://analytics.wedeho.tech',
        siteId: 15,
        router: nuxtApp.$router,
        enableLinkTracking: true,
        requireConsent: false,
        trackInitialView: true,
        disableCookies: true,
        requireCookieConsent: false,
    })
})
