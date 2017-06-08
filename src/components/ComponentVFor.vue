<template>
    <div>
        <my-article v-for="item in artList" :art-list="item" :key="item.id"></my-article>
        <button @click="push">添加文章</button>
        <button @click="pop">尾部去除一篇文章</button>
        <button @click="unshift">在头部加入一条数据</button>
        <button @click="shift">在头部去除一条数据</button>
        <button @click="reverse">把所有数据进行反转</button>
        <button @click="clear">清除所有数据</button>
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
                { id: 1,name : 'xxx',startTime: '1小时前',content: 'aaa',good: 1},
                { id: 2,name : 'yyy',startTime: '2小时前',content: 'bbb',good: 2},
                { id: 3,name : 'zzz',startTime: '3小时前',content: 'ccc',good: 3}
            ]
        },
        data () {
            return {
                artList: []
            }
        },
        methods: {
            push () {
                this.artList.push({
                    id: 4,
                    name: '&&&',
                    startTime: '4小时前',
                    content: 'ddd',
                    good: 4
                })
            },
            pop () {
                this.artList.pop();
            },
            shift () {
                this.artList.shift();
            },
            unshift () {
                this.artList.unshift({
                    name: '&&&',
                    age: 40
                })
            },
            reverse () {
                this.artList.reverse();
            },
            clear () {
                this.artList = [];
            }
        }
    }
</script>

<style>

</style>