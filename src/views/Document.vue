<template>
  <div>
    <Header />

    <DocumentViewer v-if="this.view" />
    <DocumentCreator v-else />

    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'

import DocumentCreator from '../components/DocumentCreator.vue';
import DocumentViewer from '../components/DocumentViewer.vue';

import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    DocumentCreator,
    DocumentViewer,
    Footer
  },
  data() {
    return {
      view: true
    }
  },
  methods: {

  },
  mounted() {

    if (this.$route.fullPath.includes("create-document")) {

      this.view = false
    } else if (this.$route.params.projectId && this.$route.params.documentId) {
      this.view = true
    }

  }
}
</script>
