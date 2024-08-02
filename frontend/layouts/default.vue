<template>
  <AppHeader />
  <main class="max-w-[1157px] m-auto px-3 md:px-10">
    <slot />
  </main>
  <AppFooter />
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style>
.main-containter {
  height: 100vh;
}
</style>
