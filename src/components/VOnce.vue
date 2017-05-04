<template>
    <div>
        <p v-once>hello world</p>
        <button @click="world='insua'">改变world值</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                world: 'world'
            }
        }
    }

</script>

<style>

</style>