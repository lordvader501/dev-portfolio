<template lang="">
  <Card style="width: 18rem; overflow: hidden" class="">
    <template #header>
        <NuxtImg :alt="title + ' image'" :src="image" />
    </template>
<template #title>
      <h5 class="leading-6">{{ title }}</h5>
    </template>
<template #content>
        <p class="m-0 mb-2 text-sm leading-4 line-clamp-5">
            {{ content }}
        </p>
        <div>
          <p class="text-xs font-bold mb-1">Tech Stack</p>
          <div>
            <Chip style="padding-inline: 12px; padding-block:3px" v-for="(skill,index) in skills" :key="skill" :label="skill" class="mr-2 text-[10px] font-bold !text-black leading-tight tracking-widest" :class="{'!bg-orange-200': index%5 === 0, '!bg-cyan-300': index%5===1, ' !bg-indigo-300': index%5===2, '!bg-rose-300': index%5===3, '!bg-gray-400': index%5===4}" />             
          </div>
        </div>
    </template>
<template #footer>
        <div class="flex gap-4 mt-1">
            <NuxtLink :to="details_url" class="w-full">
                <Button label="Show Details" v-tooltip.top="'View project details'"  text raised size="small" class="w-full !bg-black" />
            </NuxtLink>
            <NuxtLink v-if="live_url" :to="live_url">
                <Button icon="pi pi-link" v-tooltip.top="'View it live'"  raised text rounded class="!bg-black" size="small" />
            </NuxtLink>
            <NuxtLink :to="gh_url">
                <Button icon="pi pi-github" v-tooltip.top="'Github link'"  raised text rounded class="!bg-black" size="small" />
            </NuxtLink>
        </div>
    </template>
</Card>
</template>
<script setup>
let props = defineProps({
  title: String,
  image: String,
  content: String,
  gh_url: String,
  live_url: String,
  details_url: String,
  skills: Array
});
const skillLength = props.skills.length;
</script>
<style>
.p-card-body {
  background: rgb(16, 185, 129);
  height: 100%;
  justify-content: space-between;
}
</style>