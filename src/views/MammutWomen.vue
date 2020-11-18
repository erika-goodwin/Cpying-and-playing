<template>
    <div class="bg-pink-300 w-full">
        Women
        <div class="flex">
            <mammut-card title="Jacket" class="bg-pink-200"></mammut-card>
            <mammut-card title="Bagpack" class="bg-blue-200"></mammut-card>
            <mammut-card title="Gears" class="bg-green-200"></mammut-card>
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