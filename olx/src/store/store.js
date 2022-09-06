import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    //state
    state () {
        return {
            currentProductId: "test"
        }
    },
    //mutacje
    mutations: {
        SET_CURRENT_PRODUCT_ID(state, payload) {
            state.currentProductId = payload
        }
    },
    //actions
    actions: {
        setCurrentProductId(context, payload) {
            context.commit('SET_CURRENT_PRODUCT_ID', payload)
        }
    },
    //getters
    getters: {
        getCurrentProductId (state) {
            return state.currentProductId
        }
    }
})
export default store;