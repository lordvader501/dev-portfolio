<template>
  <div id="projects" class="py-14">
    <Heading title="PROJECTS" />
    <div class="mt-16 flex gap-5">
      <ProjectCard v-for="(item, index) in projectList" :key="index" :title="item.title" :image="item.image"
        :content="item.content" :gh_url="item.gh_url" :live_url="item.live_url" :details_url="item.details_url"
        :skills="item.skills" />
    </div>
  </div>
</template>
<script setup>
import { projectList } from "~/utils";
import Heading from "./base/text/Heading";
import ProjectCard from "./base/cards/ProjectCard";
</script>