<template>
    
    <div class="buggy-navbar ">
      <div class="container">

        <b-navbar toggleable="lg" class="d-flex justify-content-between">
          <b-navbar-brand href="#">Buggy</b-navbar-brand>
      
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <RouterLink class="navbar-collapse-item" to="/">Home</RouterLink>
              <RouterLink class="navbar-collapse-item" to="/users">Users</RouterLink>
            </b-navbar-nav>
          </b-collapse>
    
        </b-navbar>
      </div>
    </div>
  </template>
  <script lang="ts">
export default{
    name:'Navbar'
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  $navbarColor: #eeeeee;
  $fontSize: 14px;
  .buggy-navbar {
    background-color: $navbarColor;
    .navbar-collapse {
      flex-grow: unset;
      &-item {
        margin-left: 15px;
        text-decoration: none;
        color: black;
        &:hover {
          color: #1abc9c;
        }
      }
    }
  }
  </style>