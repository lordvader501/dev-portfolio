<template>
  <AppHeader>
      <SignoutButton />
  </AppHeader>
  <main class="max-w-[1157px] m-auto px-3 md:px-10">
    <slot />
  </main>
</template>
<script>
import AppHeader from "../components/AppHeader";
import SignoutButton from "../components/Auth/SignoutButton"
export default {
  components: {
    AppHeader,
    SignoutButton
  },
};
</script>