<template>
  <div>
    <instragram-navbar/>
    <router-view />
  </div>
</template>

<script>
import InstragramNavbar from "@/components/InstragramNavbar.vue";

export default {
  components: {
    InstragramNavbar,
  }
}
</script>
