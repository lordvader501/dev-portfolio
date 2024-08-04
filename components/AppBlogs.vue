<template>
  <div id="blogs" class="py-14">
    <Heading title="BLOGS" />
    <div class="mt-16 flex gap-5">
      <BlogCard v-for="(item, index) in blogsList" :key="index" :title="item.title" :image="item.image"
        :content="item.content" :link="item.link" />
    </div>
  </div>
</template>
<script setup>
import { blogsList } from "~/utils";
import Heading from "./base/text/Heading";
import BlogCard from "./base/cards/BlogCard.vue";
</script>