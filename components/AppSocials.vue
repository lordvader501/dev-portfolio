<template>
  <div class="flex flex-col fixed left-1 top-1/2 -translate-y-1/2 z-50">
    <NuxtLink to="https://www.linkedin.com/in/shauryamdubey" target="_blank" aria-label="linkedin">
      <Button icon="pi pi-linkedin" v-tooltip="'LinkedIn'" link="" size="large" class="socials" />
    </NuxtLink>
    <NuxtLink to="https://www.github.com/lordvader501" target="_blank" aria-label="github">
      <Button icon="pi pi-github" v-tooltip="'Github'" link="" size="large" class="socials" />
    </NuxtLink>
    <NuxtLink to="https://x.com/ShauryamDubey" target="_blank" aria-label="twitter">
      <Button icon="pi pi-twitter" v-tooltip="'Twitter'" link="" size="large" class="socials" />
    </NuxtLink>
    <NuxtLink to="mailto:dubeyshauryam@gmail.com" target="_blank" aria-label="mail">
      <Button icon="pi pi-envelope" v-tooltip="'Email'" link="" size="large" class="socials" />
    </NuxtLink>
  </div>
</template>
<script>
export default {

};
</script>
<style>
.socials>.p-button-icon {
  font-size: 28px !important;
}
</style>