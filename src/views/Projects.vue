<template>
  <div>
    <Header></Header>

    <ProjectList title="Your Projects" source="projects" :list="projectStore.ownProjects" />

    <ProjectList title="Shared Projects" source="projects" :list="projectStore.sharedProjects" />

    <Footer />
  </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue'
import ProjectList from '../components/ProjectList.vue';
import { useProjectStore } from '../stores/projectStore';
import { mapStores } from 'pinia';

export default {
  components: {
    Header,
    ProjectList,
    Footer
  },
  computed: {
    ...mapStores(useProjectStore)
  }
}
</script>
