import {createStore} from 'vuex'

export default createStore({
    state:{
        isTitlePage:true,
        isAddNewOffert:false,
        isLogged:false,
        isRegisterForm:false,
        isLoginForm:false,
        isFavourite:false,
    },
    getters:{
        getIsTitlePage(state){
            return state.isTitlePage;
        },
        getIsAddNewOffert(state){
            return state.isAddNewOffert;
        },
        getIsLogged(state){
            return state.isLogged;
        },
        getIsRegisterForm(state){
            return state.isRegisterForm;
        },
        getIsLoginForm(state){
            return state.isLoginForm;
        },
        getIsFavourite(state){
            return state.isFavourite;
        }
    },
    mutations:{
        SET_ALL_MAIN_PAGES_OFF(state){
            state.isTitlePage = false;
            state.isAddNewOffert = false;
            state.isRegisterForm = false;
            state.isLoginForm = false;
            state.isFavourite = false;
        },
        SET_TITLE_PAGE(state){
            state.isTitlePage = true;
        },
        SET_ADD_NEW_OFFERT(state){
            state.isAddNewOffert = true;
        },
        SET_IS_LOGGED(state){
            state.isLogged = true;
        },
        SET_IS_REGISTER_FORM(state){
            state.isRegisterForm = true;
        },
        SET_IS_LOGIN_FORM(state){
            state.isLoginForm = true;
        },
        SET_IS_FAVOURITE(state){
            state.isFavourite = true;
        }
    },
    actions:{
        setTitlePage (context) {
            context.commit('SET_ALL_MAIN_PAGES_OFF');
            context.commit('SET_TITLE_PAGE');
        },
        setAddNewOffert (context) {
            context.commit('SET_ALL_MAIN_PAGES_OFF');
            context.commit('SET_ADD_NEW_OFFERT');
        },
        setLogged(context){
            context.commit('SET_ALL_MAIN_PAGES_OFF');
            context.commit('SET_IS_LOGGED');
        },
        setRegisterForm(context){
            context.commit('SET_ALL_MAIN_PAGES_OFF');
            context.commit('SET_IS_REGISTER_FORM');
        },
        setLoginForm(context){
            context.commit('SET_ALL_MAIN_PAGES_OFF');
            context.commit('SET_IS_LOGIN_FORM');
        },
        setFavourite(context){
            context.commit('SET_ALL_MAIN_PAGES_OFF');
            context.commit('SET_IS_FAVOURITE');
        }
    }
});