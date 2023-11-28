<template>
	<div>
		<h1 class="text-3xl font-bold text-cyan">index</h1>
		<NuxtLink class="no-underline" to="/layout/home">首页</NuxtLink>
		<br />
		<NuxtLink class="no-underline" to="/jsx">jsx</NuxtLink>
		<br />
		<NuxtLink class="no-underline" to="/demo">demo</NuxtLink>
		<br />
		<NuxtLink class="no-underline" to="/test">test</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: 'Nuxt-首页',
	meta: [{ name: 'description', content: 'Nuxt Demo首屏页面' }]
})
</script>

<style></style>
