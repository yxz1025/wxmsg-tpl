# wxmsg-tpl
微信模版消息，微信jssdk

### 1 、微信模版消息发送，公众号必须为认证的服务号，开通模版消息流程如下：
    (1)、设置模版标题和模版内容，模版内容类型如下格式：
    {{result.DATA}}\n\n领奖金额:{{withdrawMoney.DATA}}\n领奖  时间:{{withdrawTime.DATA}}\n银行信息:{{cardInfo.DATA}}\n到账时间:  {{arrivedTime.DATA}}\n{{remark.DATA}}
    
### 2 、发送消息：
    var WxMsgTpl = require("wxmsg-tpl");
    var opt = {
        access_token: "access_token"
    };
    var msgTpl = new WxMsgTpl(opt);
    var body = {
           "touser":"OPENID",
           "template_id":"ngqIpbwh8bUfcSsECmogfXcV14J0tQlEpBO27izEYtY",
           "url":"http://weixin.qq.com/download",            
           "data":{
                   "first": {
                       "value":"恭喜你购买成功！",
                       "color":"#173177"
                   },
                   "keynote1":{
                       "value":"巧克力",
                       "color":"#173177"
                   },
                   "keynote2": {
                       "value":"39.8元",
                       "color":"#173177"
                   },
                   "keynote3": {
                       "value":"2014年9月22日",
                       "color":"#173177"
                   },
                   "remark":{
                       "value":"欢迎再次购买！",
                       "color":"#173177"
                   }
           }
       }
    msgTpl.sendMessage(body).then(function(data){
        console.log(data);
    });
