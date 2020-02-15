<template>
    <div class="w-full flex flex-col">
        <img src="" alt="">
        <span>{{ title }}</span>
        <span>sub title</span>
        <button>click me</button>
    </div>
</template>

<script>
import MammutCard from "@/components/MammutCard.vue";

export default {
  name: "mamnutMen",
  components: {
    MammutCard,
  },
  props: ['title'],
}
</script>

