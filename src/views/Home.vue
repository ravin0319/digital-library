<template>
  <div>
    <Header />

    <Analytics></Analytics>

    <ProjectList title="Your Documents" source="documents" :list="documentStore.ownDocuments" />

    <ProjectList title="Your Projects" source="projects" :list="projectStore.ownProjects" />

    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'
import Analytics from '../components/Analytics.vue'
import ProjectList from '../components/ProjectList.vue'
import { useProjectStore } from '../stores/projectStore';
import { useDocumentStore } from '../stores/documentStore';
import { mapStores } from 'pinia'

export default {
  components: {
    Header,
    Analytics,
    ProjectList,
    Footer
  },
  computed: {
    ...mapStores(useProjectStore, useDocumentStore)
  }
}
</script>
