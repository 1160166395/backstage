<template>
    <div class="home">
        <header>修改密码</header>
        <label>当前密码<el-input v-model="keyword" type="password" placeholder="当前密码"></el-input></label><br>
        <label>新密码<el-input v-model="newPsw" type="password" placeholder="新密码"></el-input></label><br>
        <label>确认新密码<el-input v-model="newPsws" type="password" placeholder="确认新密码"></el-input></label>
        <el-row>
          <el-button type="primary">确认修改</el-button>
        </el-row>
    </div>
</template>
<script>

    export default {
        data(){
            return {
                keyword:'',
                newPsw:'',
                newPsws:''
            }
        },
        created(){
            
        }
    }
</script>
<style scoped>
    .home {text-align: left;width: 80%;}
    header {line-height: 60px;padding-left: 15px;border-bottom: 1px solid #ccc;}
    label {margin: 25px 0 0 25px;display: inline-block;width: 320px;overflow: hidden;line-height: 40px;}
    .el-input {width: 200px;float: right;}
    .el-row {margin: 25px 0 0 25px;}
</style>