<template>
    <div class="">
        <p>{{msg}}欢迎界面</p>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        mounted:function(){
            this.post();
        },
        components:{

        },
        methods:{
            post:function(){
                this.$http.post('/reqxml', {action:'41950',Account:'777777',password:'777777'},{emulateJSON:true}).then((response) => {
                // 响应成功回调
                console.log(response)
            }, (response) => {
                // 响应错误回调
                console.log(response)
            });
            },
        },
    }
</script>
