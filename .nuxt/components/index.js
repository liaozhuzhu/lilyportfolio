export { default as Highlights } from '../../components/Highlights.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Post } from '../../components/Post.vue'
export { default as Search } from '../../components/Search.vue'
export { default as Stories } from '../../components/Stories.vue'
export { default as Suggested } from '../../components/Suggested.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
