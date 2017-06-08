<template>
    <div>
        <my-article v-for="item in artList" :art-list="item" :key="item.name"></my-article>
    </div>
</template>

<script>
    import myArticle from "./MyArticle.vue"

    export default {
        components: {
            myArticle
        },
        created () {
            this.artList = [
                { name : 'xxx',startTime: '1小时前',content: 'aaaa',good: 1},
                { name : 'yyy',startTime: '2小时前',content: 'bbb',good: 2},
                { name : 'zzz',startTime: '3小时前',content: 'ccc',good: 3}
            ]
        },
        data () {
            return {
                artList: []
            }
        }
    }
</script>

<style>

</style>