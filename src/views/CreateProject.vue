<template>
  <div>
    <Header />

    <ProjectList title="Your Projects" source="projects" :list="projectStore.ownProjects" />

    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProjectList from '../components/ProjectList.vue'
import { useProjectStore } from '../stores/projectStore';
import { useDocumentStore } from '../stores/documentStore';
import { mapStores } from 'pinia'

export default {
  components: {
    Header,
    ProjectList,
    Footer
  },
  computed: {
    ...mapStores(useProjectStore, useDocumentStore)
  }
}
</script>
