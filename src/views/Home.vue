<template>
  <div>
    <div class=" flex flex-row justify-center items-center">
      <font-awesome-icon class="text-pink-500 text-3xl" icon="heart"></font-awesome-icon>
      <h1 class=" ml-2 font-bold text-3xl">My projects</h1>
    </div>
    <nav class="mt-6 flex flex-col items-center font-bold">
      <div class="item-start">
        <router-link :to="{ name: 'instagram' }" class="flex items-center hover:text-purple-600 ">
          <font-awesome-icon class=" fill-current text-black text-2xl" :icon="['fab', 'instagram']"></font-awesome-icon>
          <span class="ml-2 capitalize text-xl">instagram</span>
        </router-link>
        <router-link :to="{ name: 'apple' }" class="flex items-center hover:text-gray-600">
          <font-awesome-icon class=" text-black text-2xl" :icon="['fab', 'apple']"></font-awesome-icon>
            <span class="ml-2 capitalize text-xl">apple</span>
        </router-link>
        <router-link :to="{ name: 'mammut' }" class="flex items-center hover:text-gray-600">
          <font-awesome-icon class=" text-black text-2xl" :icon="['fas', 'mountain']"></font-awesome-icon>
            <span class="ml-2 capitalize text-xl">mammut</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
