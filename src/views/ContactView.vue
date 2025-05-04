<script setup lang="ts">
import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Form data
const name = ref('');
const email = ref('');
const phone = ref('');
const subject = ref('');
const message = ref('');

// Form status
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

// Form submission handler
const submitForm = async () => {
  if (!name.value || !email.value || !message.value) {
    submitError.value = 'Please fill in all required fields.';
    return;
  }
  
  isSubmitting.value = true;
  submitError.value = '';
  
  try {
    // Use Firebase to store the contact form submission
    const db = getFirestore();
    await addDoc(collection(db, 'contactMessages'), {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
      createdAt: new Date()
    });
    
    // Reset form
    name.value = '';
    email.value = '';
    phone.value = '';
    subject.value = '';
    message.value = '';
    
    submitSuccess.value = true;
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    submitError.value = 'There was an error submitting your message. Please try again.';
    console.error('Error submitting form:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <!-- Contact Hero Section -->
    <section class="bg-primary text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl max-w-3xl mx-auto">Get in touch with our team to discuss your training needs or IT solutions requirements.</p>
        </div>
      </div>
    </section>

    <!-- Contact Information and Form -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
            <p class="text-gray-600 mb-8">Have questions about our training programs or IT solutions? Our team is here to help. Contact us using the information below or fill out the form, and we'll get back to you as soon as possible.</p>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start">
                <div class="text-accent mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-primary">Email</h3>
                  <p class="text-gray-600">jarvees.infotech@gmail.com</p>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="flex items-start">
                <div class="text-accent mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-primary">Phone</h3>
                  <p class="text-gray-600">Contact us via email</p>
                </div>
              </div>
              
              <!-- Address -->
              <div class="flex items-start">
                <div class="text-accent mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-primary">Address</h3>
                  <p class="text-gray-600">Rh -06, Reelicon fremount hills<br>Ambegaon Bk 411046</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-primary mb-4">Connect With Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-accent transition duration-300">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-accent transition duration-300">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-accent transition duration-300">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            
            <!-- Success Message -->
            <div v-if="submitSuccess" class="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              <strong class="font-bold">Success!</strong>
              <span class="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
            </div>
            
            <!-- Error Message -->
            <div v-if="submitError" class="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong class="font-bold">Error!</strong>
              <span class="block sm:inline"> {{ submitError }}</span>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  ref="nameInput"
                  v-model="name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
                  required
                >
              </div>
              
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
                  required
                >
              </div>
              
              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="phone" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
              </div>
              
              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="subject" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
              </div>
              
              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea 
                  id="message" 
                  v-model="message" 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
                  required
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <div>
                <button 
                  type="submit" 
                  class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
                  :disabled="isSubmitting"
                >
                  <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- SAP Expertise Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-primary mb-4">Our SAP Expertise</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">Delivering comprehensive SAP solutions and training to transform your business.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- SAP Implementation -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">SAP Implementation</h3>
            <p class="text-gray-600">Expert implementation of SAP solutions tailored to your business needs, ensuring seamless integration and optimal performance.</p>
          </div>
          
          <!-- SAP Training -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">SAP Training Programs</h3>
            <p class="text-gray-600">Comprehensive training programs designed to build expertise in SAP modules, from basics to advanced implementations.</p>
          </div>
          
          <!-- SAP Consulting -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">SAP Consulting</h3>
            <p class="text-gray-600">Strategic consulting services to help you maximize your SAP investment and optimize business processes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our services.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- FAQ Item 1 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-primary mb-2">What SAP modules do you provide training for?</h3>
            <p class="text-gray-600">We offer comprehensive training across core SAP modules including SAP ERP, SAP FICO, SAP MM, SAP SD, and SAP HCM. Our programs cater to both beginners and experienced professionals.</p>
          </div>
          
          <!-- FAQ Item 2 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-primary mb-2">How can I start my SAP implementation journey?</h3>
            <p class="text-gray-600">Begin by contacting us through the form above. Our experts will assess your business requirements and provide a tailored SAP implementation strategy that aligns with your goals.</p>
          </div>
          
          <!-- FAQ Item 3 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-primary mb-2">What makes your SAP training unique?</h3>
            <p class="text-gray-600">Our training combines theoretical knowledge with hands-on practical experience. We focus on real-world scenarios and provide personalized attention to ensure optimal learning outcomes.</p>
          </div>
          
          <!-- FAQ Item 4 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-primary mb-2">Do you offer post-implementation support?</h3>
            <p class="text-gray-600">Yes, we provide comprehensive post-implementation support including system optimization, user training, and ongoing maintenance to ensure your SAP solution continues to deliver value.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss your training needs or IT solutions requirements.</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center">
              Contact Us Now
            </button>
        </div>
      </div>
    </section>
  </div>
</template>