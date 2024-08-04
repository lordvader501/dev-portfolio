<template>
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
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <NuxtLink :to="link" class="w-full">
          <Button label="Show Blog" v-tooltip.top="'View project details'" text raised size="small"
            class="w-full !bg-black" />
        </NuxtLink>
      </div>
    </template>
  </Card>
</template>
<script setup>
defineProps({
  title: String,
  image: String,
  content: String,
  link: String
});
</script>
<style>
.p-card-body {
  background: rgb(16, 185, 129);
  height: 100%;
  justify-content: space-between;
}
</style>