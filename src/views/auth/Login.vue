<template>
  <GuestLayout>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
          <div class="mt-2">
            <input type="email" 
              name="email" 
              id="email" 
              autocomplete="email" 
              required=""
              v-model="data.email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <template v-if="errors.email && errors.email.length">
            <span v-for="(msg, i) in errors.email" :key="i" class="text-red-500 text-sm italic">
              {{ msg }}
            </span>
          </template>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input type="password" 
              name="password" 
              id="password" 
              autocomplete="current-password" 
              required=""
              v-model="data.password"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <template v-if="errors.password && errors.password.length">
            <span v-for="(msg, i) in errors.password" :key="i" class="text-red-500 text-sm italic">
              {{ msg }}
            </span>
          </template>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        {{ ' ' }}
        <RouterLink :to="{name: 'register'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Create an account</RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>
<script setup>
import GuestLayout from '@/components/GuestLayout.vue';
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';

const data = ref({
  'email': '',
  'password': ''
})

const errors = reactive({
  'email': [],
  'password': []
})

const auth = useAuthStore();

const submit = () => {
  auth.login(data.value, errors);
}

</script>