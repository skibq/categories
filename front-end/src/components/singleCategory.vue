<template>
  <div class="single-category">
    <span class="single-category__number">{{category.category_order}}</span>
    <p class="single-category__name">{{category.category_name}}</p>
    <div @click="removeCategoryInit" class="single-category__remove">x</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      category: {
        category_order: null,
        category_name: ''
      }
    }
  },
  props: ['id'],
  methods: {
    ...mapActions([
      'removeCategory',
      'getCategories'
    ]),
    removeCategoryInit: function () {
      this.removeCategory(this.category.category_ID).then(() => {
        this.getCategories()
      })
    }
  },
  created () {
    this.category = this.$store.getters.getCategoryById(this.id)
  }
}
</script>

<style lang="scss">
  .single-category {
    border: 1px solid $gray-200;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }
  .single-category__name {
    width: calc(100% - 44px);
    padding: 10px;
    text-align: left;
    margin: 0;
  }
  .single-category__number {
    margin-bottom: 0px;
    width: 44px;
    padding: 10px;
    background-color: $gray-600;
    color: $white;
    cursor: grab;
  }
  .single-category__remove {
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    color: $red;
    position: absolute;
    right: -100px;
    font-weight: bold;
    opacity: 0;
  }
  .single-category:hover .single-category__remove{
    opacity: 1;
    right: 0px;
    transition: opacity 0.3s;
  }
</style>
