<template>
    <div class="home">
        <header>
            <p>主页>商品管理>商品分类</p>
            <el-button type="primary">添加</el-button>
        </header>
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            align='left'
            :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
              type="index">
            </el-table-column>
            <el-table-column
              label="ID"
              sortable
              :sort-method="changesort"
              width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="分类名"
              width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
    </div>
</template>
<script>

    export default {
        data(){
            return {
                 tableData: [{
          date: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
            }
        },
        methods: {
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          },
          changesort(a,b){
            return a-b
          },
          getData(){
            this.$axios.post('/api/type',{

            }).then(res=>{
                console.log(res.data)
            })
          }
        },
        created(){
            this.getData();
        }

    }
</script>
<style scoped>
    header{height:120px;text-align:left;padding-left:20px;}
    header p {margin:20px 0}
    
</style>