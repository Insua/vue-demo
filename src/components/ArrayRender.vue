<template>
    <div>
        <ul>
            <li v-for="(item,index) in memberList" @click="memberDetail(index)">
                <span>{{ item.custName }}</span>
                <span>{{ item.age }}</span>
                <span>{{ item.joinTime }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created () {
            //模拟初始化时ajax得到的数据
            this.memberList = [
                {custName: 'test1',age: 20,joinTime: "2014-01-02",custId: 1},
                {custName: 'test2',age: 21,joinTime: "2014-01-02",custId: 2},
                {custName: 'test3',age: 22,joinTime: "2014-01-02",custId: 3},
                {custName: 'test4',age: 23,joinTime: "2014-01-02",custId: 4},
            ]
        },
        data () {
            return {
                memberList: []
            }
        },
        methods: {
            memberDetail(index) {
                sessionStorage.custId = this.memberList[index].custId;
            }
        }
    }
</script>

<style>

</style>