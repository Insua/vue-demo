<template>
    <div>
        <a :href="href">href</a>
        <p :id="id">id</p>
        <img :src="src" alt="图片">
        <button :disabled="disabled">按钮</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: 2,
                href: 'http://www.baidu.com',
                src: 'https://cn.vuejs.org/images/logo.png',
                disabled: true
            }
        }
    }
</script>

<style>

</style>