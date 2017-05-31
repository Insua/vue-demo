<template>

</template>

<script>
    export default {
        data () {
            return {
                stories: []
            }
        },
        created () {
            this.$http.get('/zhihu-daily-latest').then(function(response)
            {
                console.log(response.data);
            })
        }
    }
</script>

<style>

</style>