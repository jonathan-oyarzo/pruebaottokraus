<template>
  <v-container>
    <h2 class="my-6 text-center display-3">Lista de Juguetes</h2>
    <div v-if="mostrar">
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(Juguetes,index) in enviandoJuguetes" :key="index">
          <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
            <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(Juguetes,index) in enviandoJuguetes" :key="index">
          <v-card max-width="400" class="mx-auto">
              <v-img max-height="200px" max-width="300px" class="mx-auto" :src="Juguetes.imagen"></v-img>
              <v-card-text class="fondoCardText">
                <v-card-title class="">
                  <p class="ml-3">
                    {{Juguetes.nombre}}
                  </p>
                </v-card-title>
              <div class="font-weight-bold ml-8 mb-2">
                Información
              </div>
              <v-timeline align-top dense>
                <v-timeline-item color="deep-purple lighten-1" small>
                  <div>
                    <div class="font-weight-normal">
                      Precio: <strong>{{ Juguetes.Precio }}</strong>
                    </div>
                    <div>Stock: {{ Juguetes.Stock }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ListaJuguetes',
  data() {
    return {
      mostrar: true,
    }
  },
  computed: {
    ...mapGetters(['envianJuguetes'])
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  mounted() {
    setTimeout(() =>{
      this.mostrar = false;
    },3000)
  },
 
  }

</script>

<style lang="scss" scoped>
  .fondoCardText{
    background-color: rgba(226, 224, 224, 0.651) !important;
  }
</style>