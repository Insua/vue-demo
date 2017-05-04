<template>
    <div>
        <p>hello {{ world }}</p>
        <p v-text="'hello' + world"></p>
        <p>{{ `hello ${world}` }}</p>
        <p v-text="`hello ${world}`"></p>
        <button @click="world='insua'">改变world值</button>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                world: "world"
            }
        }
    }

</script>