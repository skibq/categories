import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from './../config.js'

const API_URL = config.api_url

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    addCategory: (state, data) => {
      state.categories.push({
        category_name: data
      })
    },
    updateCategories: (state, data) => {
      state.categories = data
    },
    updateCategoriesOrder: (state, index) => {
      state.categories.forEach((el, index, categories) => {
        state.categories[index].category_order = index
      })
    }
  },
  actions: {
    saveCategories (context) {
      return new Promise((resolve, reject) => {
        this.state.categories.forEach((el, index, object) => {
          console.log(el.category_ID)
          if (el.category_ID === undefined) {
            console.log('posting...')
            axios.post(`${config.api_url}/categories`, el).then((response) => {
              resolve()
            })
          } else {
            axios.put(`${config.api_url}/categories/${el.category_ID}`, el)
          }
        })
      })
    },
    getCategories: function (context) {
      axios.get(`${API_URL}/categories`).then((response) => {
        context.commit('updateCategories', response.data)
      }, (err) => {
        console.log(err)
      })
    },
    removeCategory: function (context, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${API_URL}/categories/${id}`).then((reponse) => {
          resolve()
        }, (err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories.find(category => category.category_ID === id)
    }
  }
})
