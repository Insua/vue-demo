<template>
    <div>
        <span>{{ artList.name }}</span>
        <span>{{ artList.startTime }}</span>
        <span>{{ artList.content }}</span>
        <span>{{ artList.good }}</span>
    </div>
</template>

<script>
    export default {
        props: ['artList']
    }
</script>

<style>

</style>