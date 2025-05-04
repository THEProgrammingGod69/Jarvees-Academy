import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/training',
      name: 'training',
      component: () => import('../views/TrainingView.vue')
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('../views/SolutionsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/auth/SignupView.vue')
    },
    {
      path: '/training/:id',
      name: 'course-details',
      component: () => import('../views/training/CourseDetailsView.vue'),
      props: true
    },
    {
      path: '/solutions/:id',
      name: 'solution-details',
      component: () => import('../views/solutions/SolutionDetailsView.vue'),
      props: true
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('../views/blog/BlogPostView.vue'),
      props: true
    }
  ]
})

// Navigation guard for protected routes
router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = auth.currentUser

  if (requiresAuth && !isAuthenticated) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router