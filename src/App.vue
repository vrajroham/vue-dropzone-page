<template>
<div class="app">
  <div class="header">
  <header-bar></header-bar>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
         <ul class="list-group" >
            <router-link to="/" class="list-group-item"> <i class="fa fa-home"></i> Home</router-link>
            <router-link to="/get-started" class="list-group-item"><i class="fa fa-star"></i> Get Started </router-link>  
            <router-link to="/props" class="list-group-item"><i class="fa fa-envelope"></i> Props </router-link>  
            <router-link to="/methods" class="list-group-item"><i class="fa fa-flask"></i> Methods </router-link>  
            <router-link to="/events" class="list-group-item"><i class="fa fa-bullhorn"></i> Events </router-link>  
            <router-link to="/examples" class="list-group-item"><i class="fa fa-clone"></i> Examples </router-link>  
        </ul>
        <hr>
        <a href="https://github.com/vrajroham">Documented by vrajroham</a>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <!-- <div class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/vrajroham">Designed and Documented with <i class="fa fa-heart"></i> by @vrajroham</a> </p>
    </div>
  </div> -->
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  components: {
    HeaderBar
  },
  name: 'app'
}
</script>

<style>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
@import 'https://fonts.googleapis.com/css?family=Raleway:100,600';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css';
html, body {
      background-color: #fff;
      color: #636000;
      font-family: 'Raleway', sans-serif;
      font-weight: 100;
      height: 100vh;
      margin: 0;
  }
   a {
      color: #636b6f;
      padding: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
  }
  p {
      color: #636b6f;
      padding: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .2rem;
      text-decoration: none;
  }
  p > strong{
    color: #fff;
    font-size: 15px;
    background-color: #0aa;
    padding: 3px;
  }
  .title{
      color: #0aa;
      font-size: 15px;
      font-weight: bold;
      padding: 3px;
      text-transform: uppercase;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 60px;
    background-color: #f5f5f5;
  }
  .container  .text-muted {
    margin: 20px 0;
  }
</style>
