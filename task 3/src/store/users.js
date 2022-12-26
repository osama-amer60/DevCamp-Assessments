import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    showList: true,
    usersList: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : Array(),
      updatedUser:null,
      indexUpdatedUser:null,
  }),
  actions: {
    updateShowList() {
      this.showList = this.showList ? false : true;
    },
    addUser(user) {
      this.usersList.push(user)
      localStorage.setItem('users',JSON.stringify(this.usersList))
    },
    deleteUser(index){
      this.usersList.splice(index,1)
      localStorage.setItem('users',JSON.stringify(this.usersList))

    },
    updateUser(index){
      this.updatedUser = this.usersList[index]
      this.indexUpdatedUser = index
      this.showList= false  
    },

    displayUpdatedUser(formData){
      this.usersList[this.indexUpdatedUser] = formData
      localStorage.setItem('users',JSON.stringify(this.usersList))
      
    },
    resetUpdatedUser(){
      this.updatedUser = null
    }
  },
});
