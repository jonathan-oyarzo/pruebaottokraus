import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    user: null
  },
  getters: {
    enviandoCursos(state){
      return state.cursos;
    },
    enviandoUser(state){
      return state.user;
    }
  },
  mutations: {
    mutandoCursos(state,cursosLocal){
      state.cursos = cursosLocal;
    },
    mutandoUserLocal(state,userData){
      state.user = userData;
    }
  },
  actions: {
    dataUser({commit}, usuario){
           commit('mutandoUser', usuario);
    },
    
    datosProductos({commit}){

      firebase.firestore().collection('productos').onSnapshot((res)=>{
        let datos = [];
        res.forEach(element =>{
          console.log(element.data(),element.id);

          datos.push({
            idDoc: element.id,
           codigo: element.codigo,
           nombre: element.data().nombre,
           stock: element.data().stock,
           precio: element.data().precio,

         })
        })
        commit('mutandoProductosDb', datos);

      },error => console.error(error))

      
       
       
    },

    borrandoProducto(context, id){
         firebase.firestore().collection('productos').doc(id).delete()
         .then(()=> console.log('eliminado')).catch(error => console.error(error));
    },

    editandoProducto(context,codigo){
       firebase.firestore().collection('productos').doc(codigo).update({
         


       })
    }

  },

 
  modules: {
  }
})