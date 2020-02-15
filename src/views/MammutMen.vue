<template>
  <div class="bg-blue-200 w-full">
    Men
    <div class="flex">
      <mammut-card class="bg-green-200" title="nantoka"></mammut-card>
      <mammut-card title="hellokitty"></mammut-card>
      <mammut-card title="penuts"></mammut-card>
      <!-- <mammut-card title="snoopy"></mammut-card> -->
    </div>
  </div>
</template>


<script>
import MammutCard from "@/components/MammutCard.vue";

export default {
name: "mamnutMen",
  components: {
    MammutCard,
  }
}
</script>
