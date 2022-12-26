<template>
  
  <Navbar/>


  <router-view/>
</template>

<script lang="ts">
import Navbar from '../src/components/shared/Navbar.vue';
export default{
  components:{
    Navbar
  }
}

</script>
