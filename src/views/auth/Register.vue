<template>
  <GuestLayout>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create new account</h2>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-4" @submit.prevent="submit">
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900">Full Name</label>
          <div class="mt-2">
            <input type="text" name="name" id="name" required="" v-model="data.name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <template v-if="errors.name?.length">
            <span v-for="(msg, i) in errors.name" :key="i" class="text-red-500 text-sm italic">
              {{ msg }}
            </span>
          </template>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
          <div class="mt-2">
            <input type="email" name="email" id="email" autocomplete="email" required="" v-model="data.email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <template v-if="errors.email?.length">
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
            <input type="password" name="password" id="password" required="" v-model="data.password"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          <template v-if="errors.password?.length">
            <span v-for="(msg, i) in errors.password" :key="i" class="text-red-500 text-sm italic">
              {{ msg }}
            </span>
          </template>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password_confirmation" class="block text-sm/6 font-medium text-gray-900">Repeat Password</label>
          </div>
          <div class="mt-2">
            <input type="password" name="password_confirmation" id="password_confirmation" required=""
              v-model="data.password_confirmation"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Create a Account
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ ' ' }}
        <RouterLink :to="{ name: 'login' }" class="font-semibold text-indigo-600 hover:text-indigo-500">
          Login from here
        </RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>
<script setup>
import GuestLayout from '@/components/GuestLayout.vue';
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';

const data = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const errors = reactive({
  name: [],
  email: [],
  password: [],
});

const auth = useAuthStore();

const submit = () => {
  auth.register(data.value, errors);
};
</script>