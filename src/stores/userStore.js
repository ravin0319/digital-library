// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(username, password) {
      if (username === 'tester@test.com' && password === 'password') {
        this.isAuthenticated = true;
        this.user = { username };
      } else {
        alert('Invalid credentials');
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    }
  }
});
