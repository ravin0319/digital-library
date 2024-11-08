<template>
  <div class="DocumentViewer container mx-auto mt-10" v-if="document">
    <h2 class="text-xl mb-4">{{ document.title }} - {{ document.projectTitle }}</h2>
    <div v-html="document.document" class="border p-4 bg-gray-50"></div>
  </div>
</template>

<script lang="ts">
import { useDocumentStore } from '../stores/documentStore';
import { mapStores } from 'pinia'

export default {
  data() {
    return {
      document: null
    }
  },
  computed: {
    ...mapStores(useDocumentStore)
  },
  methods: {
    getDocument() {
      const document = this.documentStore.ownDocuments.filter((item) => {
        return item.documentId == this.$route.params.id;
      });
      this.document = document[0]

    }
  },
  mounted() {

    if (this.$route.params.id) {
      this.getDocument(this.$route.params.id);
    }

  }
}
</script>
