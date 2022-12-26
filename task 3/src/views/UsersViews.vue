<template>
  <div class="container text-center users-list mt-5">
    <UsersVue v-if="showList"/>
    <AddUsers v-else/>

    <b-button variant="primary" class="mt-3" v-if="showList" @click="updateShowList">Add New User</b-button>
  </div>
</template>

<script lang="ts">
import AddUsers from '@/components/users/AddUsers.vue';
import UsersVue from '@/components/users/Users.vue';

import {useUsersStore} from '@/store/users'
import { mapActions, mapState } from 'pinia';


// interface users {
// firstName: string;
// lastName: string;
// age?: number | null;
// email: string;
// }

export default{
name:'UsersViews',
    components:{
      UsersVue,
      AddUsers
    },
    computed:{
      ...mapState(useUsersStore,['showList'])
    },
    methods:{
      ...mapActions(useUsersStore,['updateShowList']),
    },

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
