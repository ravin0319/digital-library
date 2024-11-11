<template>
  <div>
    <Header></Header>

    <ProjectList title="Your Projects" source="projects" :list="mainStore.ownProjects" />

    <ProjectList title="Shared Projects" source="projects" :list="mainStore.sharedProjects" />

    <Footer />
  </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue'
import ProjectList from '../components/ProjectList.vue';
import { useMainStore } from '../stores/mainStore';
import { mapStores } from 'pinia';

export default {
  components: {
    Header,
    ProjectList,
    Footer
  },
  computed: {
    ...mapStores(useMainStore)
  }
}
</script>
