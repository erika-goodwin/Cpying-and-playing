<template>
    <div class="m-4 w-full flex flex-col bg-local relative">
      <img v-if="image" class="object-cover w-full h-full" :src="image" alt="background image">
      <div class="p-4 flex flex-col justify-between items-center absolute text-white font-bold text-4xl top-0 left-0 bottom-0 right-0 w-full h-1/2 z-20">
        <div class="flex flex-col">
        <span>{{ title }}</span>
        <span class="text-lg">{{ subTitle }}</span>
        </div>
        <button class="border-2 border-white text-white px-3 hover:bg-white hover:text-gray-800">{{ buttonText }}</button>
      </div>
    </div>
</template>

<script>
import MammutCard from "@/components/MammutCard.vue";

export default {
  name: "mamnutMen",
  components: {
    MammutCard,
  },
  props: ['title', 'image', 'subTitle', 'buttonText'],
}
</script>

