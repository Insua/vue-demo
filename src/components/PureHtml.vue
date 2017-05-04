<template>
    <div>
        <p v-html="html"></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                html: `<span style="color: red;">显示为红字</span>`
            }
        }
    }
</script>

<style>

</style>