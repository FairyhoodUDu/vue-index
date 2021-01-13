
const components = {
  'area-wrap': () => import('./area-wrap'),
  'white-space': () => import('./white-space'),
  'white-space-form': () => import('./white-space/white-space-form'),
  'art-list': () => import('./art-list'),
  'search': () => import('./search'),
  'search-form': () => import('./search/search-form'),
  'banner': () => import('./banner'),
  'banner-form': () => import('./banner/banner-form')
}

export default {
  install (Vue) {
    for (const key in components) {
      Vue.component(key, components[key])
    }
  }
}
