<template>
  <div>
    <Header></Header>

    <ProjectList title="Your Documents" source="documents" :list="documentStore.ownDocuments" />

    <ProjectList title="Shared Documents" source="documents" :list="documentStore.sharedDocuments" />

    <Footer />
  </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProjectList from '../components/ProjectList.vue'
import { useDocumentStore } from '../stores/documentStore';
import { mapStores } from 'pinia'

export default {
  components: {
    Header,
    ProjectList,
    Footer
  },
  computed: {
    ...mapStores(useDocumentStore)
  }
}
</script>
