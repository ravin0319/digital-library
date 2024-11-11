<template>
  <div class="bg-gray-100">
    <div class="container mx-auto flex flex-wrap gap-x-4 gap-y-12 px-4 py-20 lg:px-20 justify-between">
      <div class="flex w-72">
        <div
          class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
          <div class="p-3">
            <div
              class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="pt-1 text-right">
              <p class="text-sm font-light capitalize">Your Projects</p>
              <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">{{ this.mainStore.ownProjects.length }}
              </h4>
            </div>
          </div>
          <hr class="opacity-50" />
          <div class="p-4">
            <p class="font-light">Shared with <span class="text-sm font-bold text-green-600">34 </span>users</p>
          </div>
        </div>
      </div>
      <div class="flex w-72">
        <div
          class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
          <div class="p-3">
            <div
              class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="pt-1 text-right">
              <p class="text-sm font-light capitalize">Your Documents</p>
              <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">125</h4>
            </div>
          </div>
          <hr class="opacity-50" />
          <div class="p-4">
            <p class="font-light">Shared with <span class="text-sm font-bold text-green-600">34 </span>users</p>
          </div>
        </div>
      </div>
      <div class="flex w-72">
        <div
          class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
          <div class="p-3">
            <div
              class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="pt-1 text-right">
              <p class="text-sm font-light capitalize">Notifications</p>
              <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">6</h4>
            </div>
          </div>
          <hr class="opacity-50" />
          <div class="p-4">
            <p class="font-light">view all notifications</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useMainStore } from '../stores/mainStore';
import { mapStores } from 'pinia'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapStores(useMainStore)
  }
}
</script>
