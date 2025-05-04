import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '../firebase/config'
import { collection, getDocs, doc, getDoc, query, orderBy } from 'firebase/firestore'

export interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  topics: string[]
  price: number
  image?: string
}

export interface Solution {
  id: string
  title: string
  description: string
  features: string[]
  benefits: string[]
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  date: string
  tags: string[]
  image?: string
}

export const useContentStore = defineStore('content', () => {
  const courses = ref<Course[]>([])
  const solutions = ref<Solution[]>([])
  const blogPosts = ref<BlogPost[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Fetch all courses
  const fetchCourses = async () => {
    loading.value = true
    error.value = null
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'))
      courses.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Course[]
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  // Fetch single course
  const fetchCourse = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'courses', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Course
      }
      return null
    } catch (e: any) {
      error.value = e.message
      return null
    } finally {
      loading.value = false
    }
  }

  // Fetch all solutions
  const fetchSolutions = async () => {
    loading.value = true
    error.value = null
    try {
      const querySnapshot = await getDocs(collection(db, 'solutions'))
      solutions.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Solution[]
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  // Fetch single solution
  const fetchSolution = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'solutions', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Solution
      }
      return null
    } catch (e: any) {
      error.value = e.message
      return null
    } finally {
      loading.value = false
    }
  }

  // Fetch blog posts
  const fetchBlogPosts = async () => {
    loading.value = true
    error.value = null
    try {
      const q = query(
        collection(db, 'blog'),
        orderBy('date', 'desc')
      )
      const querySnapshot = await getDocs(q)
      blogPosts.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[]
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  return {
    courses,
    solutions,
    blogPosts,
    loading,
    error,
    fetchCourses,
    fetchCourse,
    fetchSolutions,
    fetchSolution,
    fetchBlogPosts
  }
})