<template>
  <div class="w-full">
    Men
    <div class="md:flex">
      <mammut-card class="h-1/2 bg-green-200" title="nantoka" subTitle="penuts" buttonText="Click ME" image="https://images.unsplash.com/photo-1489323172546-0b2a0baeebfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"></mammut-card>
      <mammut-card title="hellokitty" subTitle="penuts" buttonText="Click !!!" image="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></mammut-card>
      <mammut-card title="penuts" subTitle="penuts" buttonText="Click HERE" image="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></mammut-card>
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
