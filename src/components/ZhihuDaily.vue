<template>
    <div>
        <template v-for="s in stories">
            <p>{{ s.title }}</p>
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                stories: []
            }
        },
        created () {
            this.$http.get('/latest').then(function(response)
            {
                this.stories = response.data.stories;
            })
        }
    }
</script>

<style>

</style>