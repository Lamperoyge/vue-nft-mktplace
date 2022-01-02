<template>
  <nav
    class="sticky top-0 z-50 px-4 py-5 bg-white items-center flex justify-between text-black"
  >
    <router-link to="/">
      <div class="cursor-pointer flex lg:w-6/12 relative">
        <img
          class="w-full"
          src="/logo.png"
          alt="MustMake Logo Black Background"
        />
      </div>
    </router-link>
    <ul class="hidden lg:flex w-6/12 justify-center">
      <li v-for="item in config" :key="item.title">
        <div class="relative">
          <router-link :to="item.path">
            <span class="uppercase py-4 px-4 font-bold text-lg">{{
              item.title
            }}</span>
          </router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>
