<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      Interface Web TP2 VR
      <v-spacer></v-spacer>
      <v-btn 
        v-if="this.$store.state.token"
        @click="logout()"
      >
        Log out
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.commit('setToken', null);
      this.$router.push('/')
    }
  }
}
</script>