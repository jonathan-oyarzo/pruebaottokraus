<template>
  <v-app>
    
<thenavbar/>
    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import thenavbar from '@/components/thenavbar.vue';

export default {
  name: 'App',
  components: {
    thenavbar
  },
  mounted() {
this.$store.dispatch('listajuguetedb');   
  },
};
</script>
