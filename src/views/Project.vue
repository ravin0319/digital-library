<template>
  <div>
    <Header></Header>

    <ProjectViewer v-if="project" :title="project.title" source="documents" :list="documents" />

    <Footer />
  </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue'
import ProjectViewer from '../components/ProjectViewer.vue';
import { useMainStore } from '../stores/mainStore';
import { mapStores } from 'pinia';

export default {
  components: {
    Header,
    ProjectViewer,
    Footer
  },
  data() {
    return {
      project: null,
      documents: []
    }
  },
  computed: {
    ...mapStores(useMainStore)
  },
  methods: {
    findObjectById(id) {
      return this.mainStore.ownProjects.find(item => item.projectId === id) || this.mainStore.sharedProjects.find(item => item.projectId === id);
    },
    getDocumentsByProjectId() {

      const project = this.findObjectById(Number(this.$route.params.projectId));

      this.project = project;

      this.documents = this.project.documents;


    },
  },
  mounted() {

    this.getDocumentsByProjectId();

  }
}
</script>
