<template>
    <div class="">
        <p>{{msg}}密码修改</p>
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
            console.log('测试请求');
    //         this.$http.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php").then(function(res){  
    //     console.log(res)  
    // })  
            this.getCustomers()
            this.get()
            //
            this.$http.post("/reqxml",{name:"abc"},{emulateJSON:true}).then(  
            function (res) {  
                // 处理成功的结果  
                console.log(res);  
            },function (res) {  
            // 处理失败的结果  
            }  
        );
    
        },
        components:{

        },
        methods:{
            getCustomers:function(){
                this.$http.post('http://127.0.0.1:84/reqxml', {action:'41950',Account:'777777',password:'777777'},{emulateJSON:true}).then((response) => {
                // 响应成功回调
                console.log(response)
            }, (response) => {
                // 响应错误回调
                console.log(response)
            });
            },

            get:function(){
                this.$http({
                            method:'post',
                            url:'http://127.0.0.1:84/reqxml', 
                            body:{action:'41950',Account:'777777',password:'777777'},
                            emulateJSON: true,
                            }
                    ).then((response) => {
                // 响应成功回调
                console.log(response)
            }, (response) => {
                // 响应错误回调
                console.log(response)
            });
            } 


        }
    }
</script>
