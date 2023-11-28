<template>
	<div>
		<!--		<Title />
    <Title2 />-->
		<button @click="flag = !flag">切换</button>
		<button @click="count++">count: {{ count }}</button>
		<p :style="{ color: flag ? 'red' : 'blue' }">home</p>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'layout'
})
const flag = ref(false)
const count = ref(0)
// const Title = () => (flag ? <h1>标题</h1> : <h2>二级标题</h2>)
// const Title2 = <h1>标题2</h1>
</script>

<style></style>
