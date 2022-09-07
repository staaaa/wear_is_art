import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    //state
    state () {
        return {
            //WCZYTYWANE Z BAZY DANYCH
            products: [
                { id: 0, name: 'bluza nike', price: '299.99', src: 'https://via.placeholder.com/300', desc: 'przykladowy opis'},
                { id: 1, name: 'spodnie nike', price: '99.99', src: 'https://via.placeholder.com/300', desc: 'przykladowy opis'},
                { id: 2, name: 'koszulka nike', price: '2399.99', src: 'https://via.placeholder.com/300', desc: 'przykladowy opis' },
                { id: 3, name: 'buty nike', price: '49.99', src: 'https://via.placeholder.com/300', desc: 'przykladowy opis' },
                { id: 4, name: 'czapka nike', price: '599.99', src: 'https://via.placeholder.com/300', desc: 'przykladowy opis' },
                { id: 5, name: 'skarpetki nike', price: '9.99', src: 'https://via.placeholder.com/300', desc: 'przykladowy opis' },
            ]
        }
    },
    //mutacje
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        }
    },
    //actions
    actions: {
        setProducts(context, payload) {
            context.commit('SET_PRODUCTS', payload)
        }
    },
    //getters
    getters: {
        getProducts (state) {
            return state.products
        }
    }
})
export default store;