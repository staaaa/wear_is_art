import {createStore} from 'vuex'

export default createStore({
    state:{
        isTitlePage:true,
        isAddNewOffert:false,
    },
    getters:{
        getIsTitlePage(state){
            return state.isTitlePage;
        },
        getIsAddNewOffert(state){
            return state.isAddNewOffert;
        }
    },
    mutations:{
        SET_TITLE_PAGE(state){
            state.isTitlePage = true;
            state.isAddNewOffert = false;
        },
        SET_ADD_NEW_OFFERT(state){
            state.isTitlePage = false;
            state.isAddNewOffert = true;
        },
    },
    actions:{
        setTitlePage (context) {
            context.commit('SET_TITLE_PAGE')
        },
        setAddNewOffert (context) {
            context.commit('SET_ADD_NEW_OFFERT')
        },
    }
});