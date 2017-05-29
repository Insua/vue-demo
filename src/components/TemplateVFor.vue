<template>
    <div>
        <template v-for="item in list">
            <p>{{ item.content }}</p>
            <img :src="item.img" alt="">
            <p class="divider"></p>
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: [
                    {content: 'insua',img: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
                    {content: 'xeneizes',img: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/img/richanglogo168_24.png'},
                ]
            }
        }
    }
</script>

<style>
    body,html{
        width: 100%;
        height: 100%;
    }
    .divider{
        width: 100%;
        height: 1px;
        background: black;
    }
</style>