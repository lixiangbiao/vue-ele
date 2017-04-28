/**
 * Created by will on 2017/3/15.
 * 常用请求列表
 * 
 */
import service_req from '../../../services/service_req'
class service_often{
  require41978(obj){
    let oSendData={
      action:'41978'
    }
    $.extend(oSendData,obj);
    return new Promise((resolve,reject)=>{
      service_req.getData(oSendData)
        .then((data)=>{
          if(!data){
            return resolve(data);
          }else{
            resolve(data)
          }
        })
    })
  }
}
export default new service_often()
