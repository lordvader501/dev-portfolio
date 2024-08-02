<template>
  <Button v-if="isAuthenticated" label="Sign out" @click="signOutUser()" size="small" />
</template>
<script setup>
import Button from 'primevue/button';
let isAuthenticated = false;
if(import.meta.client){
  isAuthenticated = localStorage.getItem('auth') !== null
}
async function signOutUser(){
  localStorage.removeItem('auth')
  await navigateTo('/')
}
</script>
<style lang="">
  
</style>