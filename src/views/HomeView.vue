<script setup>
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
    </div>
  </header>
  <main>
    <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-7">
        <div class="text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Data to enrich your
            online business</h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non
            deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink :to="{name: 'login'}"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Login
            </RouterLink>
            <RouterLink :to="{name: 'register'}" class="text-sm/6 font-semibold text-gray-900">Register <span aria-hidden="true">→</span></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
