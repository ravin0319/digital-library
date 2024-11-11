// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Documents from '../views/Documents.vue'
import CreateProject from '../views/CreateProject.vue'
import Project from '../views/Project.vue'
import Document from '../views/Document.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/documents', component: Documents },
  { path: '/create-project', component: CreateProject },
  { path: '/project/:projectId', component: Project },
  { path: '/project/:projectId/create-document', component: Document },
  { path: '/project/:projectId/document/:documentId', component: Document },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
