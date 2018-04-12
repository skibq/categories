<template>
  <div class="">
    <ul class="category-list col-md-3 mx-auto">
      <draggable v-model="categories" @end="dragAndDrop();">
        <singleCategory v-for="(category, index) in categories" :key="category.category_ID" :id="category.category_ID" :index="index" class="category-list" />
      </draggable>
    </ul>
    <div class="category-list__add-category form-group col-md-3 mx-auto">
      <label class="category-list__add-label" for="addNewCategory">Add category:</label>
      <input class="category-list__add-input form-control" v-model="new_category_name" type="text" id="addNewCategory" placeholder="">
      <btn class="category-list__add-btn" @click="addCategoryInit();" primary="true" content="Add category" />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import singleCategory from './singleCategory.vue'
import btn from './btn.vue'
import { mapActions, mapMutations } from 'vuex'

export default {
  data: function () {
    return {
      saving_disabled: true,
      new_category_name: ''
    }
  },
  components: {
    singleCategory,
    draggable,
    btn
  },
  methods: {
    ...mapActions([
      'getCategories',
      'saveCategories'
    ]),
    ...mapMutations([
      'addCategory',
      'updateCategoriesOrder'
    ]),
    addCategoryInit: function () {
      this.addCategory(this.new_category_name)
      this.updateCategoriesOrder()
      this.saveCategories().then(() => {
        console.log('getting categories after add')
        this.getCategories()
      })
      this.new_category_name = ''
    },
    dragAndDrop: function () {
      this.updateCategoriesOrder()
      this.saveCategories().then(() => {
        console.log('getting categories after drag-n-drop')
        this.getCategories()
      })
    }
  },
  computed: {
    categories: {
      get () {
        return this.$store.state.categories
      },
      set (value) {
        this.$store.commit('updateCategories', value)
      }
    }
  },
  created () {
    this.getCategories()
  }
}
</script>

<style lang="scss">
  .category-list__buttons {
    margin-top: 80px;
    text-align: right;
  }
  .category-list__reset {
    margin-left: 20px;
  }
  .category-list__add-btn {
    margin-top: 10px;
  }
</style>
