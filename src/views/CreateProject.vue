<template>
  <div>
    <Header></Header>

    <div class="createProject container mx-auto mt-10">
      <h1>Create a New Project</h1>
      <input type="text" v-model="projectTitle" class="w-full border rounded p-2 mb-5" placeholder="Project Title">

      <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full mt-5"
        @click="createProject">Create</button>
    </div>

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
  data() {
    return {
      projectTitle: null
    }
  },
  computed: {
    ...mapStores(useMainStore)
  },
  methods: {
    createProject() {

      if (!this.projectTitle) {
        return
      }

      this.mainStore.ownProjects.push({
        title: this.projectTitle,
        projectId: this.mainStore.ownProjects.length + 1,
        documents: []
      })

      this.$router.push({ path: '/' })

    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
</style>
