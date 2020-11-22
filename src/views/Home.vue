<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">

    import { Options, Vue } from 'vue-class-component'
    import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

    import api from '../mock/index'

    @Options({
        components: {
            HelloWorld
        }
    })

    export default class Home extends Vue {
        created(): void {
            api.list.get({
                page: 2,
                pageSize: 4
            }).then(res => {
                console.log('====================================')
                console.log(1111, res)
                console.log('====================================')
            })
        }
    }

</script>
