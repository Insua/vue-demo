<template>
    <div>
        <p v-for="tel in telephone">{{ tel | newtel }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                telephone : [
                    10000000000,
                    10000000001,
                    10000000002,
                    10000000003,
                    10000000004,
                    10000000005,
                    10000000006,
                    10000000007,
                    10000000008,
                    10000000009,
                    10000000000,
                ]
            }
        },
        filters: {
            newtel (value) {
                if(!value)
                {
                    return '';
                }
                value = value.toString().substr(7,4);
                value = '*'.repeat(7) + value;
                let endMember = value.substr(-1,1);
                if(endMember % 2)
                {
                    value = value + '中奖';
                }
                else
                {
                    value = value+ '谢谢参与';
                }
                return value;
            }
        }
    }
</script>

<style>

</style>