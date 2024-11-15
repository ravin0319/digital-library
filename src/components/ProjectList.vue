<template>
  <div class="ProjectList container mx-auto mt-5">

    <div class="ProjectList__title--search--wrapper">
      <div class="ProjectList__title">{{ title }} - {{ filteredList.length }}</div>
      <div class="ProjectList__search">
        <input type="text" v-model="searchQuery" placeholder="Search..." @input="filterList" />
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
            <p v-else>
              Project: {{ item.projectTitle }}
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
      border-bottom: 1px solid #ccc;
      margin-right: 10px;
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
