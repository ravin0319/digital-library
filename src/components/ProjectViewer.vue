<template>
  <div class="ProjectList container mx-auto mt-5">

    <div class="ProjectList__title--search--wrapper">

      <div class="ProjectList__title">{{ title }} - {{ filteredList.length }}</div>

      <div class="ProjectList__search">
        <input type="text" v-model="searchQuery" placeholder="Search..." @input="filterList" />
      </div>
      <div class="ProjectList__share">



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
              Share Project
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

    <div class="ProjectList__list-wrapper">

      <div class="ProjectList__list flex flex-col bg-white border shadow-sm rounded-xl cursor-pointer"
        v-for="(item, index) in filteredList" :key="index">
        <RouterLink
          :to="source === 'projects' ? '/project/' + item.projectId : `/project/${item.projectId}/document/` + item.documentId"
          class="text-sm/6 font-semibold text-gray-900">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-gray-500" v-if="item.documents">
              {{ item.documents.length }} <span>{{ item.documents.length <= 1 ? "Document" : "Documents" }}</span>
                  available under this project
            </p>
            <RouterLink :to="`/project/${item.projectId}/create-document`" v-if="item.documents"
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Create a Document
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </RouterLink>
          </div>
          <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4">
            <p class="mt-1 text-sm text-gray-500">
              Last updated on 07/11/2024
            </p>
          </div>
        </RouterLink>

      </div>

    </div>

    <div class="text-sm text-neutral-400 text-center" v-if="filteredList.length === 0">No results found!</div>

  </div>
</template>
<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  name: 'ItemsList',
  data() {
    return {
      searchQuery: '',
      filteredList: this.list,
    }
  },
  watch: {
    list(newList) {
      this.filteredList = newList;
    },
  },
  props: {
    source: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    filterList() {
      const query = this.searchQuery.toLowerCase();
      this.filteredList = this.list.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.ProjectList {
  height: 100%;
  width: 100%;

  &__title--search--wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      border: 1px solid #ccc;
      padding: 5px 10px;
      border-radius: 8px;
      width: 300px;
    }

    input:focus {
      outline: none;
    }
  }

  &__title {
    font-size: 22px;
    font-weight: 500;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }

  &__list-wrapper {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }

  &__list {
    flex-grow: 1;
    margin: 10px;
  }
}
</style>
