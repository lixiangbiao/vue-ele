<template>
    <div class="bg">
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form" label-width="80px">
                        <div>
                            <el-checkbox v-model="form.nameChecked"></el-checkbox>
                                <el-form-item label="姓名">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                        </div>
                        <div>
                            <el-checkbox v-model="form.mobileChecked"></el-checkbox>
                            <el-form-item label="手机号">
                                    <el-input v-model="form.mobile" ></el-input>
                            </el-form-item>
                        </div>

                        <div>
                            <el-checkbox v-model="form.PracticeNoChecked"></el-checkbox>
                            <el-form-item label="执业编号">
                                    <el-input v-model="form.PracticeNo"></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-checkbox v-model="form.departmentChecked"></el-checkbox>
                                <el-form-item label="部门">
                                <el-select v-model="form.department" placeholder="请选择部门">
                                    <el-option label="常州营业部" value="0"></el-option>
                                    <el-option label="上海营业部" value="1"></el-option>
                                    <el-option label="杭州营业部" value="2"></el-option>
                                    <el-option label="南京营业部" value="3"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div>
                            <el-button type="primary" v-on:click="querys">查询</el-button>
                        </div>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form" label-width="80px">
                        <div>
                            <el-checkbox v-model="form.accountChecked"></el-checkbox>
                                <el-form-item label="登录账户">
                                    <el-input v-model="form.account"></el-input>
                                </el-form-item>
                        </div>
                        <div>
                            <el-checkbox v-model="form.accountStatesChecked"></el-checkbox>
                            <el-form-item label="账户状态">
                                <el-select v-model="form.accountStates" placeholder="请选择活动区域">
                                    <el-option label="正常" value="0"></el-option>
                                    <el-option label="锁定" value="1"></el-option>
                                    <el-option label="冻结" value="2"></el-option>
                                    <el-option label="非正常" value="3"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>

                        <div>
                            <el-checkbox v-model="form.roleChecked"></el-checkbox>
                            <el-form-item label="角色">
                                <el-select v-model="form.role" placeholder="请选择活动区域">
                                    <el-option label="理财师" value="0"></el-option>
                                    <el-option label="分析师" value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div>
                            <el-checkbox v-model="form.positionChecked"></el-checkbox>
                                <el-form-item label="职位">
                                    <el-input v-model="form.position"></el-input>
                                </el-form-item>
                        </div>
                    </el-form>
                </div>
            </el-col>

            <el-col>
            <el-table :data="tableData3" border style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="date" label="日期" width="120">
                    <!-- <template scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .bg{background: #ffffff;padding: 10px 20px;}
    .el-form-item{display: inline-block;}
    .el-form-item__label{text-align: left;}
    .el-input,.el-select{width: 250px}
</style>
<script>
   import service_often from '../service/service_often'
    export default{
        data(){
            return{
                StartPos:'1',
                pagecount:'3',
                form:{
                    nameChecked: false,
                    name:'',
                    mobileChecked:false,
                    mobile:'',
                    PracticeNoChecked:false,
                    PracticeNo:'',
                    departmentChecked:false,
                    department:'',
                    accountChecked:false,
                    account:'',
                    accountStatesChecked:false,
                    accountStates:'',
                    roleChecked:false,
                    role:'',
                    positionChecked:false,
                    position:''
                },
                tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
            }
        },
        components:{

        },
        methods:{
            querys(){
              var obj = {
                    action:41978,
                    StartPos: this.StartPos,
                    MaxCount: this.pagecount
                };
              service_often.require41978(obj)
                .then((send)=>{
                  console.log(send)
                })

            },
            query:function(){
                var obj = {
                    action:41978,
                    StartPos: this.StartPos,
                    MaxCount: this.pagecount
                };
                this.$http.post('/reqxml', obj,{emulateJSON:true}).then((response) => {
                        // 响应成功回调
                        console.log(response)
                        let data =  response.data.GRID0;
                        let tableData=[];
                        for(let i = 0 ;i<data.length;i++){
                            let tData = data[i].split("|");
                            tableData.push({
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX],
                                name:tData[response.data.ANCHORNAMEINDEX]
                            })
                        }

                        this.tableData3= tableData
                        // for (let val of data) {
                        //     let tData =
                        //     console.log( val );
                        // }
                    }, (response) => {
                        // 响应错误回调
                        console.log(response)
                    });
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
