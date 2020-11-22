<template>
    <div class="loading">
        <img
            width="150"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606060007509&di=c6fea454c0fdc512acf6eea4385dca67&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc67bcdfe10d5201067157ff7376414c6a9f9900437c69-EndxN7_fw658"
            alt
        />
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component'

    @Options({
        props: {}
    })

    export default class Loading extends Vue {

    }
</script>

<style lang="scss" scoped>
.loading {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
}
</style>
