<template>
    <div class="home">
        <mt-search v-model="keyword"></mt-search>
        <router-view><router-view/>
    </div>
</template>
<script>

    export default {
        data(){
            return {
                items:[],
                keyword:''
            }
        },
        created(){
            
        }
    }
</script>
<style scoped>
    
</style>