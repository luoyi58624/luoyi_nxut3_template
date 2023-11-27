<template>
  <div>
    index
    <NuxtLink to="/home">首页</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Nuxt-首页',
  meta: [{ name: 'description', content: 'Nuxt Demo首屏页面' }]
})
</script>

<style>

</style>