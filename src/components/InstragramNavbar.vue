<template>
  <div class=" h-20 w-2/3 mx-auto flex items-center justify-between">
    <div class=" inline-flex items-center">
      <font-awesome-icon class=" text-black text-2xl" :icon="['fab', 'instagram']"></font-awesome-icon>
      <img class=" h-10 border-l border-black ml-4 pl-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="">
    </div>
    <div>
      <div class="bg-gray-100 border border-gray-300 rounded justify-center flex items-center px-4 py-1">
        <font-awesome-icon class=" text-sm text-gray-400" icon="search"></font-awesome-icon>
        <input type="text" class="mx-2 focus:outline-none bg-gray-100" placeholder="search">
        <!-- <font-awesome-icon class=" text-gray-300" icon="search"></font-awesome-icon>
        <span class="text-gray-500">serch</span> -->
      </div>
    </div>
    <div>
      <router-link to="instagramFeed">Feed</router-link>
      <button class=" bg-blue-500 text-white font-bold capitalize mx-2 px-2 h-8 py-1 rounded text-sm">log in</button>
      <button class=" text-blue-500 font-bold capitalize mx-2 px-2 h-8 rounded text-sm">sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstragramNavbar",
};
</script>
