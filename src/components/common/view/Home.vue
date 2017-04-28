<template>
        <el-row id="container">
            <el-col :span="24" class="main">
                <aside class="left">
                    <el-menu default-active="2" class="el-menu-vertical-demo left">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>人员及角色管理</template>
                            <el-menu-item index="1-1"><router-link to="/password">密码修改</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link to="/mobile">手机号码修改</router-link></el-menu-item>
                            <el-menu-item index="1-3"><router-link to="/personManage">人员管理</router-link></el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2"><i class="el-icon-setting"></i>导航二</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                    </el-menu>
                </aside>
                <section class="right">
                    <div class="right-top">
                        <p><span class="right-title">人员管理</span></p>
                    </div>
                    <el-col :span="24">
                        <router-view></router-view>
                    </el-col>
                </section>
            </el-col>

        </el-row>
</template>
<style>
    #container{
        background: #1D75A7;
        position: absolute;
        top:0;
        bottom: 0;
        width:100%
    }
    .main{
        background: #1D75A7;
        position: absolute;
        top:0;
        bottom: 0;
        overflow:hidden;
    }
    .main .left{
        width:230px
    }
    .main .right{
        background: #EBF3FB;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 230px;
        overflow-y: scroll;
        padding: 0 20px 20px;
    }
    .right .right-top{height: 40px;line-height: 40px}
    .right .right-title{height: 20px;line-height: 20px;background: #FFCC00;display: inline-block;color: #CC3300;padding: 2px 10px;border-radius: 10px;}
</style>