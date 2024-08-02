<template>
  <div class="relative top-0 max-h-[1000px] h-[100vh] flex justify-center items-center lg:flex-row flex-col-reverse">
    <div class="flex flex-col gap-3 border-2 p-10 rounded-lg bg-black/5">
      <h3 class="text-center font-bold text-2xl text-emerald-400">Sign In</h3>
      <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText v-model="username" placeholder="Username" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-key"></i>
        </InputGroupAddon>
        <Password placeholder="Password" v-model="password" :feedback="false" toggleMask/>
      </InputGroup>
      <Button label="Sign in" class="w-full" @click="signinUser()" />
    </div>
  </div>
</template>
<script setup>
const username = ref("")
const password = ref("")
async function signinUser(){
  if (!!username.value && !!password.value) return

}
</script>