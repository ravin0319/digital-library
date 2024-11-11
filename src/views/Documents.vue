<template>
  <div>
    <Header></Header>

    <ProjectList title="Your Documents" source="documents" :list="getOwnDocuments()" />

    <ProjectList title="Shared Documents" source="documents" :list="getSharedDocuments()" />

    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProjectList from '../components/ProjectList.vue'
import { useMainStore } from '../stores/mainStore';
import { mapStores } from 'pinia'

export default {
  components: {
    Header,
    ProjectList,
    Footer
  },
  computed: {
    ...mapStores(useMainStore)
  },
  methods: {
    getOwnDocuments() {
      if (!this.mainStore.ownProjects) {
        return []
      }

      const documents = [], projects = this.mainStore.ownProjects;

      for (let index = 0; index < projects.length; index++) {

        for (let j = 0; j < projects[index].documents.length; j++) {
          documents.push({
            title: projects[index].documents[j].title,
            documentId: projects[index].documents[j].documentId,
            document: projects[index].documents[j].document,
            projectTitle: projects[index].title,
            projectId: projects[index].projectId
          })
        }

      }

      return documents

    },
    getSharedDocuments() {

      if (!this.mainStore.sharedProjects) {
        return []
      }

      const documents = [], projects = this.mainStore.sharedProjects;

      for (let index = 0; index < projects.length; index++) {

        for (let j = 0; j < projects[index].documents.length; j++) {
          documents.push({
            title: projects[index].documents[j].title,
            documentId: projects[index].documents[j].documentId,
            document: projects[index].documents[j].document,
            projectTitle: projects[index].title,
            projectId: projects[index].projectId
          })
        }

      }

      return documents

    }
  }
}
</script>
