import { createStore } from 'vuex'

const store = createStore({
    //state
    state () {
        return {
            //WCZYTYWANE Z BAZY DANYCH
            products:
            [
                {id: 0, name: "T-SHIRT BIAŁY XL", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 20, size: "XL"},
                {id: 1, name: "T-SHIRT BIAŁY L", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 10, size: "L"},
                {id: 2, name: "T-SHIRT CZARNY M", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
                {id: 3, name: "T-SHIRT BIAŁY M", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
                {id: 4, name: "T-SHIRT CZARNY XL", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
                {id: 5, name: "T-SHIRT CZARNY L", price:"109.99", desc: "xyz", category: "T-SHIRTY", src: "https://via.placeholder.com/300", quantity: 5, size: "M"},
            ],
            orders: [
                {
                    id: 0,
                    orderCode: "KSJ)@431Nd",
                    user: {
                        id: 2,
                        name: "konrad",
                        surname: "wandtke",
                        email: "koWandtke@kutas.com",
                        city: "aChujCieTo",
                        zipCode: "69-420",
                        street: "cwelowa",
                        buildingNumber: "7",
                        flatNumber: "",
                        country: "Pizdowo"
                    },
                    status: "Opłacone"
                },
                {
                    id: 1,
                    orderCode: "KJHJ234",
                    user: {
                        id: 3,
                        name: "Kewin",
                        surname: "wandtke",
                        email: "koWandtke@kutas.com",
                        city: "aChujCieTo",
                        zipCode: "69-420",
                        street: "cwelowa",
                        buildingNumber: "7",
                        flatNumber: "",
                        country: "Pizdowo"
                    },
                    status: "Wysłane"
                },
                {
                    id: 2,
                    orderCode: "MSJ143DSd",
                    user: {
                        id: 4,
                        name: "Mateusz",
                        surname: "wandtke",
                        email: "koWandtke@kutas.com",
                        city: "aChujCieTo",
                        zipCode: "69-420",
                        street: "cwelowa",
                        buildingNumber: "7",
                        flatNumber: "",
                        country: "Pizdowo"
                    },
                    status: "W realizacji"
                }
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
        }
    }
})
export default store;