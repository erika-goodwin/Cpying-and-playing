<template>
  <div class=" bg-gray-100 h-full flex flex-col over">
    <div class="flex mx-auto w-2/3 mt-12">
      <div class=" w-64">
        <img class=" w-32 h-32 rounded-full mx-auto" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="SpaceX">
      </div>
      <div class=" flex-col flex justify-start w-3/5">
        <div class=" inline-flex items-center">
          <h2 class=" font-medium text-2xl">spacex</h2>
          <font-awesome-icon class=" text-blue-500 ml-2" icon="check-circle"></font-awesome-icon>
          <button class=" bg-blue-500 text-white font-bold capitalize mx-4 px-2 h-8 rounded">follow</button>
        </div>
        <div class=" flex justify-start mt-4">
         <span class=" font-bold">272</span>
         <span class=" ml-1">posts</span>
         <span class=" font-bold ml-6">5.3m</span>
         <span class=" ml-1">followers</span>
         <span class=" font-bold  ml-6">4</span>
         <span class=" ml-1">following</span>
        </div>
        <div class="flex flex-col text-left mt-4">
          <spam class=" font-bold">SpaceX</spam>
          <p>
          SpaceX designs, manufactures and launches the world's most advanced rockets and spacecraft
          </p>
          <a href="https://www.spacex.com" target="_blank" class="font-bold text-blue-800">spacex.com</a>
        </div>
      </div>
    </div>

    <div class="flex mx-auto w-2/3 mt-12 text-gray-600 justify-center text-sm border-t ">
      <a href="" class="text-black border-t border-black pt-4 flex items-baseline">
        <font-awesome-icon class=" ml-2 text-xs" icon="th"></font-awesome-icon>
        <span class=" uppercase ml-1 tracking-widest">posts</span>
      </a>
      <a href="" class=" pt-4 ml-10 flex items-baseline">
        <font-awesome-icon class=" ml-2 text-xs" icon="user-tag"></font-awesome-icon>
        <span class="uppercase ml-1 tracking-widest">tagged</span>
      </a>
    </div>
    <div class="flex flex-col mx-auto mt-4">
      <div v-for="i in 5" :key="i" class="flex flex-row mb-6">
      <img class=" w-64 h-64" src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="">
      <img class=" w-64 h-64 mx-6" src="https://images.unsplash.com/photo-1484600316566-2f7b7e1c8236?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="">
      <img class=" w-64 h-64" src="https://images.unsplash.com/photo-1515270518065-784188b61729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "instagram",
};
</script>
