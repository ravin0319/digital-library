<template>
  <div class="DocumentCreator container mx-auto mt-10" v-if="project">
    <h2 class="text-xl mb-4">Create a Document under Project - {{ project.title }}</h2>
    <input type="text" v-model="documentTitle" class="w-full border rounded p-2 mb-5" placeholder="Document Title">

    <div class="DocumentCreator__choices mb-5">
      <div v-for="(selection, index) in choice.selections" class="DocumentCreator__choice">
        <input type="radio" :id="selection.id" :value="selection.selectionId" v-model="choice.selected">

        <label>
          {{ selection.description }}
        </label>
      </div>

    </div>

    <textarea v-if="choice.selected == 1" placeholder="Paste HTML Tags and Content..." v-model="htmlContent"
      class="w-full border p-2 h-32"></textarea>

    <Editor v-else v-model="value" editorStyle="height: 320px" />

    <h3 class="text-lg mt-4">Preview:</h3>
    <div v-html="choice.selected == 1 ? htmlContent : value" class="border p-4 bg-gray-50 mt-2"></div>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full mt-5" @click="createDocument">Create</button>
  </div>
</template>

<script lang="ts">
import Editor from 'primevue/editor';
import { useMainStore } from '../stores/mainStore';
import { mapStores } from 'pinia'

export default {
  components: {
    Editor
  },
  data() {
    return {
      project: null,
      document: null,
      htmlContent: null,
      documentTitle: null,
      value: '',
      choice: {
        "id": 1,
        "selected": 2,
        "selections": [
          {
            "selectionId": 2,
            "description": "Type Document from Scratch"
          },
          {
            "selectionId": 1,
            "description": "Paste HTML Tags and Content"
          },
        ]
      }
    }
  },
  computed: {
    ...mapStores(useMainStore)
  },
  methods: {
    findObjectById(id) {
      return this.mainStore.ownProjects.find(item => item.projectId === id);
    },
    getProject() {

      const project = this.findObjectById(Number(this.$route.params.projectId));

      const indexOfProject = this.mainStore.ownProjects.findIndex(item => item.projectId === Number(this.$route.params.projectId));

      this.project = project;

      this.indexOfProject = indexOfProject;

    },
    createDocument() {

      this.mainStore.ownProjects[this.indexOfProject].documents.push({
        title: this.documentTitle,
        document: this.choice.selected == 1 ? this.htmlContent : this.value,
        documentId: this.mainStore.ownProjects[this.indexOfProject].documents.length + 1,
      })

      this.htmlContent = null
      this.documentTitle = null

      this.$router.push({ path: '/' })

    }
  },
  mounted() {

    this.getProject();

  }
}
</script>
<style lang="scss" scoped>
.DocumentCreator {
  &__choices {
    display: flex;
  }

  &__choice {

    label {
      padding-left: 5px;
      margin-right: 10px;
    }
  }
}
</style>
