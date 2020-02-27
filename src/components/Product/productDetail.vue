<template>
    <div>
        <div class="content"  >
            <img v-for="(item, i) in pdimg" :key="i" :src="item">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pdimg:[
                    require("../../assets/images/pdetail01.jpg"),
                    require("../../assets/images/pdetail02.jpg"),
                    require("../../assets/images/pdetail03.jpg"),
                    require("../../assets/images/pdetail04.jpg"),
                    require("../../assets/images/pdetail05.jpg"),
                    require("../../assets/images/pdetail06.jpg"),
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    img {
        width: 100%;
    }
}
</style>