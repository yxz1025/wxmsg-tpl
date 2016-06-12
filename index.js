//微信模版消息API封装
var Q = require('q');
var request = require('request');

function WxMsgTpl(opts) {
  this.opts = opts || {};
  this.access_token = this.opts.access_token || "";
};

//设置所属行业
/**
 * args object {"industry_id1": 1, "industry_id2": 4}
 *https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=ACCESS_TOKEN
 */
WxMsgTpl.prototype.setIndustry = function(args) {
  var deferred = Q.defer();
  if (typeof args === 'undefined' || args == "" || args == null) {
    throw new Error('args is not illegal');
  }
  var options = {
    url: "https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=" + this.access_token,
    form: JSON.stringify(args)
  };
  request.post(options, function(err, response, data) {
    if (err) {
      deferred.reject(err);
    } else {
      data = JSON.parse(data);
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};

/*
*获取设置的行业信息
*https://api.weixin.qq.com/cgi-bin/template/get_industry?access_token=ACCESS_TOKEN
*/
WxMsgTpl.prototype.getIndustry = function () {
  var deferred = Q.defer();
  var url = "https://api.weixin.qq.com/cgi-bin/template/get_industry?access_token=" + this.access_token;
  request(url, function(err, response, data){
    if (err) {
      deferred.reject(err);
    } else {
      data = JSON.parse(data);
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};

/*
*从行业模板库选择模板到帐号后台，获得模板ID的过程可在MP中完成。为方便第三方开发者，提供通过接口调用的方式来获取模板ID
*args {"template_id_short": "TM00015"}
*/
WxMsgTpl.prototype.getTemplateId = function (args) {
  var deferred = Q.defer();
  if (typeof args === 'undefined' || args == "" || args == null) {
    throw new Error('args is not illegal');
  }
  var options = {
    url: "https://api.weixin.qq.com/cgi-bin/template/api_add_template?access_token=" + this.access_token,
    form: JSON.stringify(args)
  };
  request.post(options, function(err, response, data) {
    if (err) {
      deferred.reject(err);
    } else {
      data = JSON.parse(data);
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};

/*
*发送模板消息
* body 数据:
*/
// {
//      "touser":"OPENID",
//      "template_id":"ngqIpbwh8bUfcSsECmogfXcV14J0tQlEpBO27izEYtY",
//      "url":"http://weixin.qq.com/download",
//      "data":{
//              "first": {
//                  "value":"恭喜你购买成功！",
//                  "color":"#173177"
//              },
//              "keynote1":{
//                  "value":"巧克力",
//                  "color":"#173177"
//              },
//              "keynote2": {
//                  "value":"39.8元",
//                  "color":"#173177"
//              },
//              "keynote3": {
//                  "value":"2014年9月22日",
//                  "color":"#173177"
//              },
//              "remark":{
//                  "value":"欢迎再次购买！",
//                  "color":"#173177"
//              }
//      }
//  }
WxMsgTpl.prototype.sendMessage = function (args) {
  var deferred = Q.defer();
  if (typeof args === 'undefined' || args == "" || args == null) {
    throw new Error('args is not illegal');
  }
  var options = {
    url: "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" + this.access_token,
    form: JSON.stringify(args)
  };
  request.post(options, function(err, response, data) {
    if (err) {
      deferred.reject(err);
    } else {
      data = JSON.parse(data);
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};
module.exports = WxMsgTpl;
