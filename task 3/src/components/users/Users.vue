<template>
  <div>
    <div class="users-list mt-5">
      <h2>Users List</h2>
     
      <table v-if="usersList.length" class="w-100 table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(user, i) in usersList" :key="i">
            <tr>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.email }}</td>
              <td><b-button variant="success" @click.prevent="updateUser(i)">update</b-button></td>
              <td><b-button variant="danger" @click.prevent="deleteUser(i)">delete</b-button></td>
            </tr>
          </template>
        </tbody>
      </table>
      <p v-else-if="usersList.length === 0">No users found...</p>
    </div>
  </div>
</template>

<script lang="ts">
import {useUsersStore} from '@/store/users'
import { mapActions, mapState } from 'pinia';
export default {
  name: "users",

computed:{
  ...mapState(useUsersStore,['usersList'])
},
methods:{
  ...mapActions(useUsersStore,['deleteUser','updateUser'])
}

};
</script>       
