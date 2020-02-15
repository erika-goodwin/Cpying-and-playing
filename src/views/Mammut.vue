<template>
  <div class="h-screen flex flex-col over bg-gray-100">
    <div class="mx-auto w-2/3 items-center justify-center">
      <router-link :to="{ name: 'mammutMen'}">Men</router-link> |
      <router-link :to="{ name: 'mammutWomen'}">Women</router-link> |
      <router-link :to="{ name: 'mammutKids'}">Kids</router-link>
    </div>
    <div class="flex w-full ">
        <router-view></router-view>
    </div>
  </div>
</template>

