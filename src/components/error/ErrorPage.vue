<template>
    <div id="ErrorPage">
        <el-image :src="src"></el-image>
    </div>
</template>

<script>
    import ErrorImage from '@/assets/image/auth_error.png';

    export default {
        name: "ErrorPage",
        data() {
            return {
                src: ErrorImage
            }
        }
    }
</script>

<style scoped>

</style>
