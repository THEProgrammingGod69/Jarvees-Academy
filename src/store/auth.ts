import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../firebase/config'
import type { User } from 'firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Initialize auth state
  auth.onAuthStateChanged((userData) => {
    user.value = userData
  })

  // Sign in
  const signIn = async (email: string, password: string) => {
    loading.value = true
    error.value = null
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  // Sign up
  const signUp = async (email: string, password: string) => {
    loading.value = true
    error.value = null
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
    } catch (e: any) {
      error.value = e.message
    }
  }

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    logout
  }
})