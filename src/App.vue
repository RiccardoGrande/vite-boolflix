<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store'
export default {
  components: {
    AppMain,
    AppHeader
  },
  data() {
    return {
      store
    }
  }
}


</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
</style>
