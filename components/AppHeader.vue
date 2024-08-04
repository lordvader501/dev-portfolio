<template>
  <header class="fixed z-10 top-0 w-full">
    <nav class="flex justify-evenly items-center h-16" sizes="64px">
      <NuxtImg src="/logo.png" alt="logo" width="64" height="64" />
      <div class="border rounded-full p-2 bg-white">
        <NuxtLink v-for="(item, index) in navlinks" :key="index" :to="item.href" class="px-3 py-1 text-center"
          :class="{ 'rounded-full bg-emerald-400': $route.fullPath === item.href, 'text-black': $route.fullPath !== item.href }">
          {{ item.name }}</NuxtLink>
      </div>

      <div class="flex gap-2 items-center">
        <ClientOnly>
          <Button :icon="{ 'pi pi-sun': !isDarkTheme, 'pi pi-moon': isDarkTheme }" severity="secondary"
            @click="toggleColorScheme()" class="!border-2 !border-gray-500" size="small" />
        </ClientOnly>
        <Button aria-label="Resume" label="Resume" size="small" />
      </div>
    </nav>
  </header>
</template>
<script setup>
import Button from 'primevue/button';
const resumeLink = "";
const { $theme } = useNuxtApp();
let isDarkTheme = ref(true);
const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/#blogs" },
  { name: "Contact", href: "/#contact" },
];

if (import.meta.client && $theme.getTheme('theme') === 'dark') {
  document.querySelector('html').classList.add('my-app-dark');
}
if (import.meta.client && $theme.getTheme('theme') === 'light') {
  document.querySelector('html').classList.remove('my-app-dark');
  isDarkTheme.value = false;
}
// if(import.meta.client && $theme.getTheme('theme') === undefined) {
//   document.querySelector('html').classList.remove('my-app-dark');
//   $theme.setTheme('light')
// }
function toggleColorScheme() {
  //   const result = window.matchMedia('(prefers-color-scheme: dark)');
  // console.log(result.matches); // TRUE if the user prefers dark mode

  const element = document.querySelector('html');
  element.classList.toggle('my-app-dark');
  localStorage.setItem('theme', element.classList.contains('my-app-dark') ? 'dark' : 'light');
  isDarkTheme.value = element.classList.contains('my-app-dark');
}
</script>
<style lang=""></style>
