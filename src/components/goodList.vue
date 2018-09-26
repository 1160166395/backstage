<template>
    <div class="home">
        <header>
            <label for="good">关键字</label>
            <el-input v-model="input" placeholder="请输入商品名称" id.native="good"></el-input>
            <span>商品分类</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" plain></el-button>
        </header>
        <div class='box'>
        <el-button type="primary">添加</el-button>
        <el-button type="primary">删除</el-button>
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            align='left'
            :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
              type="selection"
              width="55">
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
        <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
        </div>
        </div>
    </div>
</template>
<script>

    export default {
        data(){
            return {
                input:'',
                 options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }],
                value: '',
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
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          changesort(a,b){
            return a-b
          }  
        },
    }
</script>
<style scoped>
    header{
        padding:20px 40px;
        border-bottom:1px solid #ccc;
        margin:0 10px 20px 10px;
        width:100%;
    }
    .el-input{
        width:200px;
        padding:10px 20px 10px 10px;
    }
    .el-select{
        padding:10px;
    }
    .box{
        padding-left:20px;
    }
</style>