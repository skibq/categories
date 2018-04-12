<template>
  <button @click="click" class="btn" :class="renderButtonClasses" :disabled="disabled" >{{ content }}</button>
</template>

<script>
export default {
  methods: {
    click: function () {
      this.$emit('click')
    }
  },
  props: ['content', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'large', 'small', 'wide', 'active', 'disabled'],
  computed: {
    renderButtonClasses: function () {
      return {
        'btn-primary': this.primary,
        'btn-secondary': this.secondary,
        'btn-success': this.success,
        'btn-danger': this.danger,
        'btn-warning': this.warning,
        'btn-info': this.info,
        'btn-light': this.light,
        'btn-dark': this.dark,
        'btn-link': this.link,
        'btn-lg': this.large,
        'btn-sm': this.small,
        'btn-block': this.wide,
        'active': this.active
      }
    }
  }
}
</script>

<style lang="scss">
  @import "node_modules/bootstrap/scss/buttons";
  .btn {
    transition: opacity 0.15s ease-in-out;
  }
</style>
