<template>
  <div class="DocumentCreator container mx-auto mt-10" v-if="document">
    <h2 class="text-xl mb-4">Create a Document under Project - {{ document.title }}</h2>
    <input type="text" v-model="documentTitle" class="w-full border rounded p-2 mb-5" placeholder="Document Title">
    <textarea v-model="htmlContent" class="w-full border p-2 h-32"></textarea>
    <h3 class="text-lg mt-4">Preview:</h3>
    <div v-html="htmlContent" class="border p-4 bg-gray-50 mt-2"></div>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full mt-5" @click="createDocument">Create</button>
  </div>
</template>

<script lang="ts">
import { useDocumentStore } from '../stores/documentStore';
import { useProjectStore } from '../stores/projectStore';
import { mapStores } from 'pinia'

export default {
  data() {
    return {
      document: null,
      htmlContent: null,
      documentTitle: null
    }
  },
  computed: {
    ...mapStores(useDocumentStore, useProjectStore)
  },
  methods: {
    getProject() {
      const document = this.projectStore.ownProjects.filter((item) => {
        return item.projectId == this.$route.params.id;
      });
      this.document = document[0]
      console.log(this.document);

    },
    createDocument() {

      this.documentStore.ownDocuments.push({
        title: this.documentTitle,
        document: this.htmlContent,
        projectTitle: this.document.title,
        projectId: this.document.projectId,
        documentId: 333,
      })

      this.htmlContent = null
      this.documentTitle = null

    }
  },
  mounted() {

    if (this.$route.fullPath.includes("create-document")) {
      this.getProject(this.$route.params.id);
      return
    }

    if (this.$route.params.id) {
      this.getDocument(this.$route.params.id);
    }

  }
}
</script>
