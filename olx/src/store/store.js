import { createStore } from 'vuex'

const store = createStore({
    //state
    state () {
        return {
            //WCZYTYWANE Z BAZY DANYCH - DANE TYLKO O UZYTKOWNIKU - JEGO DANE, JEGO ZAMOWIENIA + ogolne produkty
            products:
            [
                {id: 0, name: "T-SHIRT BIAŁY XL", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 20, size: "XL"},
                {id: 1, name: "T-SHIRT BIAŁY L", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 10, size: "L"},
                {id: 2, name: "T-SHIRT CZARNY M", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
                {id: 3, name: "T-SHIRT BIAŁY M", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
                {id: 4, name: "T-SHIRT CZARNY XL", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
                {id: 5, name: "T-SHIRT CZARNY L", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
            ],
            user:
            [
                {id: 0, login: 'kwDebil123', name: "Konrad", surname: "Wandtke", password: "xxxxxx", email: 'kondi@wp.pl', phone: '+48694202137', city: "Mrzezino", zipCode: "84-123", street: 'Lipowa', buildingNumber: "7", flatNumber: null, country: "Polska"}
            ],
            orders: [
                {
                    id: 0,
                    userId: 0,
                    orderCode: "0001",
                    date: "21-12-2001",
                    products: [
                        {id: 0, name: "T-SHIRT BIAŁY XL", price: "109.99", quantity: 1},
                        {id: 1, name: "T-SHIRT BIAŁY L", price: "109.99", quantity: 1}
                    ],
                    price: '219,98',
                    status: "Opłacone"
                },
                {
                    id: 1,
                    userId: 0,
                    orderCode: "0002",
                    date: "23-12-2001",
                    products: [
                        {id: 0, name: "T-SHIRT BIAŁY XL", price: "109.99", quantity: 1},
                        {id: 1, name: "T-SHIRT BIAŁY L", price: "109.99", quantity: 1}
                    ],
                    price: '219,98',
                    status: "W realizacji"
                },
            ],
            isLogged: false,
        }
    },
    //mutacje
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        },
        SET_ORDERS(state, payload) {
            state.orders = payload
        },
        SET_IS_LOGGED(state, payload) {
            state.isLogged = payload
        },
        SET_USER(state, payload){
            state.user = payload
        }
    },
    //actions
    actions: {
        setProducts(context, payload) {
            context.commit('SET_PRODUCTS', payload)
        },
        setOrders(context, payload) {
            context.commit('SET_ORDERS', payload)
        },
        setIsLogged(context, payload) {
            context.commit('SET_IS_LOGGED', payload)
        },
        setUser(context, payload){
            context.commit('SET_USER', payload)
        }
    },
    //getters
    getters: {
        getProducts (state) {
            return state.products
        },
        getOrders (state) {
            return state.orders
        },
        getIsLogged(state){
            return state.isLogged
        },
        getUser(state){
            return state.user
        }
    }
})
export default store;