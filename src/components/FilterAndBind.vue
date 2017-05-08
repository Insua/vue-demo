<template>
    <div>
        <a v-for="(url,index) in urlList" :href="url.url | getquery(url.name,url.age)">{{ url.url }}<br/></a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                urlList: [
                    {url: 'http://www.baidu.com',name: 'baidu',age: 18},
                    {url: 'http://www.google.com',name: 'google',age: 20}
                ]
            }
        },
        filters: {
            getquery(value,name,age){
                if(!value)
                {
                    return '';
                }
                return `${value}?name=${name}&age=${age}`;
            }
        }
    }
</script>

<style>

</style>