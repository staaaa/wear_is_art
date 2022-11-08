import { createStore } from 'vuex'

const store = createStore({
    //state
    state () {
        return {
            //WCZYTYWANE Z BAZY DANYCH - DANE TYLKO O UZYTKOWNIKU - JEGO DANE, JEGO ZAMOWIENIA + ogolne produkty
            products:
            [
                {id: 0, name: "T-SHIRT BIAŁY XL", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT001", size: "XL"},
                {id: 1, name: "T-SHIRT BIAŁY XL", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT001", size: "XL"},
                {id: 2, name: "T-SHIRT BIAŁY XL", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT001", size: "XL"},
                {id: 3, name: "T-SHIRT BIAŁY XL", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT001", size: "XL"},
                {id: 4, name: "T-SHIRT BIAŁY L", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT002", size: "L"},
                {id: 5, name: "T-SHIRT BIAŁY L", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT002", size: "L"},
                {id: 6, name: "T-SHIRT BIAŁY M", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT003", size: "M"},
                {id: 7, name: "T-SHIRT BIAŁY M", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT003", size: "M"},
                {id: 8, name: "T-SHIRT BIAŁY M", price:"109.99", desc: "xyz", category: "t-shirt", src: "https://via.placeholder.com/300", orderId: null, productCode: "TSHIRT003", size: "M"},
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
            modalCart: false,
            currentProductCode: null,
            userOrderData: null,
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
        },
        SET_MODAL_CART(state, payload){
            state.modalCart = payload
        },
        SET_CURRENT_PRODUCT_CODE(state, payload){
            state.currentProductCode = payload
        },
        SET_USER_ORDER_DATA(state, payload){
            state.userOrderData = payload;
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
        },
        setModalCart(context, payload){
            context.commit('SET_MODAL_CART', payload)
        },
        setCurrentProductCode(context, payload){
            context.commit('SET_CURRENT_PRODUCT_CODE', payload)
        },
        setUserOrderData(context, payload){
            context.commit('SET_USER_ORDER_DATA', payload);
        }
    },
    //getters
    getters: {
        getProducts (state) {
            let products = [];
            for(let i = 0; i < state.products.length; i++)
            {
                if(state.products[i].category == "t-shirt")
                {
                    if(products.length == 0)
                    {
                        products.push(state.products[i]);
                    }
                    else if(products.length != 0 && !products.some(e => e.productCode === state.products[i].productCode)){
                        products.push(state.products[i]);
                    }
                }
            }
            return products
        },
        getPreviewTshirts (state) {
            let products = [];
            let counter = 0;
            for(let i = 0; i < state.products.length; i++)
            {
                if(counter < 3)
                {
                    if(state.products[i].category == "t-shirt")
                    {
                        if(counter == 0)
                        {
                            products.push(state.products[i]);
                            counter++;
                        }
                        else if(counter != 0 && !products.some(e => e.productCode === state.products[i].productCode)){
                            products.push(state.products[i]);
                            counter++;
                        }
                    }
                }
            }
            return products
        },
        getQuantity(state){
            let quantity = 0;
            for(let i = 0; i < state.products.length; i++)
            {
                if(state.products[i].productCode == state.currentProductCode){
                    quantity++;
                }
            }
            return quantity;
        },
        getOrders (state) {
            return state.orders
        },
        getIsLogged(state){
            return state.isLogged
        },
        getUser(state){
            return state.user
        },
        getModalCart (state) {
            return state.modalCart
        },
        getCurrentProductCode(state){
            return state.currentProductCode;
        },
        getUserOrderData(state){
            return state.userOrderData;
        },
    }
})
export default store;