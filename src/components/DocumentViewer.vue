<template>
  <div class="DocumentViewer container mx-auto mt-5" v-if="document">

    <div class="DocumentViewer__title-share">
      <div class="project-card">
        <div class="project-name">{{ document.title }}</div>
        <div class="document-name">{{ project.title }}</div>
      </div>

      <div class="DocumentViewer__share">
        <button
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span
              className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Edit
            </span>
          </div>
          <span
            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>

        <button
          className="ml-2 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span
              className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Delete
            </span>
          </div>
          <span
            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>

        <button
          className="ml-2 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span
              className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Share Document
            </span>
            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <span
            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
    </div>

    <div v-html="document.document" class="border p-4 bg-gray-50"></div>
  </div>
</template>

<script lang="ts">
import { useMainStore } from '../stores/mainStore';
import { mapStores } from 'pinia'

export default {
  data() {
    return {
      document: null,
      project: null
    }
  },
  computed: {
    ...mapStores(useMainStore)
  },
  methods: {
    findObjectById(id) {
      return this.mainStore.ownProjects.find(item => item.projectId === id) || this.mainStore.sharedProjects.find(item => item.projectId === id);
    },
    getDocument() {

      const project = this.findObjectById(Number(this.$route.params.projectId));
      this.project = project;
      const document = project.documents.find(item => item.documentId === Number(this.$route.params.documentId));
      this.document = document;

    },
  },
  mounted() {

    if (this.$route.params.projectId && this.$route.params.documentId) {
      this.getDocument();
    }

  }
}
</script>
<style lang="scss" scoped>
.DocumentViewer {


  &__title-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}



.project-card {
  padding-bottom: 20px;
  max-width: 300px;
  transition: box-shadow 0.3s ease;
}

.project-name {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.document-name {
  font-size: 18px;
  color: #666;
}
</style>
