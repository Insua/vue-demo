<template>
    <table>
        <template>
            <tr>
                <td v-for="(value,key,index) in memberDetail">{{ key }}</td>
            </tr>
            <tr>
                <td v-for="(value,key,index) in memberDetail">{{ value }}</td>
            </tr>
        </template>
    </table>
</template>

<script>
    export default{
        created () {
            this.memberDetail = {
                name: 'insua',
                age: 20,
                address: 'xxx省yy市',
                tel: '18604760666'
            }
        },
        data () {
            return {
                memberDetail: {}
            }
        }
    }
</script>

<style>
    body,html{
        width: 100%;
        height: 100%
    }
    .divider{
        width: 100%;
        height: 1px;
        background: black;
    }
</style>