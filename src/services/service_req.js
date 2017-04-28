/**
 * Created by will on 2017/3/15.
 * 
 * VueResource请求处理
 */

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

class service_req{
  getData(obj){
    return new Promise((resolve,reject)=>{
      Vue.http({
          method:'post',
          url:'/reqxml',
          body:obj,
          emulateJSON: true,
        }
      ).then((response) => {
        // 响应成功回调
        //console.log(response)
        resolve(response.data);
      }, (response) => {
        // 响应错误回调
        //console.log(response)
      });
    })
  }
}

export default new service_req()
