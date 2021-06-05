import { createStore } from 'vuex';
import { auth } from "../utils/firebase";

export default createStore({
  state: {
    user: undefined
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    }
  },
  actions: {
    reloadUser({commit}){
      console.log("Estamos en actions/reloadUser");
      auth.onAuthStateChanged((user) => {
       commit("setUser", {...user});
      });
    }
  },
  modules: {
  }
})
