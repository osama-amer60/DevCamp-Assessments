<template>
  <div class="add-users my-5">
    <b-form @submit="submitForm">
      <b-form-group id="input-group-1" label="First Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          placeholder="Enter Your First name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          placeholder="Enter Your Last name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          placeholder="Enter Your age"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="E-mail:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.email"
          placeholder="Enter Your email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">{{ updatedUser ? 'Update User' : 'Submit' }}</b-button>
      <!-- <b-button v-if="!updatedUser" type="submit" variant="primary" @click="getFormData(),updateShowList()">Submit</b-button> -->
      <!-- <b-button v-else type="submit" variant="danger" @click.prevent="update()">Update User</b-button> -->
    </b-form>

  </div>
</template>

<script lang="ts">
import { useUsersStore } from '@/store/users';
import { mapActions , mapState} from 'pinia';

interface form {
  firstName: string;
  lastName: string;
  age?: number | null;
  email: string;
}

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
      },
    };
  },  
  methods:{
  ...mapActions(useUsersStore,['updateShowList','addUser','displayUpdatedUser','resetUpdatedUser']),
  getFormData(){
    this.addUser(this.form)
  },
  submitForm(event: any) {
    if ( this.updatedUser ) {
      this.displayUpdatedUser(this.form)
      this.resetUpdatedUser()
    } else {
      this.addUser(this.form);
    }
    this.updateShowList();
  }
},
computed:{
  ...mapState(useUsersStore,['updatedUser']),
},
mounted() {
    // console.log(this.updatedUser);
    if (this.updatedUser) {
      this.form = this.updatedUser      
    }    
}
}
</script>

<style scoped></style>
