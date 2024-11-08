<template>

  <div class="LoginForm">
    <div class="flex items-center justify-center mb-20">
      <img alt="Digital Library" class="logo" src="@/assets/logo.png" />
    </div>
    <div class="flex items-center justify-center">
      <form @submit.prevent="handleLogin" class="w-1/3 bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl mb-4">Login</h2>
        <div class="mb-4">
          <label for="username" class="block">Username:</label>
          <input type="text" v-model="username" class="w-full border rounded p-2">
        </div>
        <div class="mb-4">
          <label for="password" class="block">Password:</label>
          <input type="password" v-model="password" class="w-full border rounded p-2">
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';

const username = ref('tester@test.com');
const password = ref('password');
const userStore = useUserStore();
const router = useRouter();

function handleLogin() {

  userStore.login(username.value, password.value);

  if (userStore.isAuthenticated) {
    router.push('/');
  }
}
</script>
<style scoped>
.LoginForm {
  margin: 5rem;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
  height: 100%;
  width: 250px;
}
</style>
