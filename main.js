/**
 * Created by happy on 3/24/17.
 */

var needle =require('needle');
var doq=require('gqdoq');

var request=function(o,cb){
    o.method= o.method||"get";
    o.url= o.url||"/";
    o.params= o.params||{};
    o.options= o.options||{};
    o.options.follow_max=10;
    needle.request(o.method, o.url, o.params, o.options, function(e,r,b){
        o.statusCode=r.statusCode;
        o.result=JSON.stringify(b,null,2);
        cb(e,o);
    });
};

var q_request=function(o){
    o=o||{};
    o.query=request;
    return doq(o);
};

module.exports=q_request;
