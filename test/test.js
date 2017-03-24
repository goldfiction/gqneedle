/**
 * Created by happy on 3/24/17.
 */


var assert=require('assert');
var request=require('./../main.js');


var o={
    url:"http://apple.com/"
};

it('should be able to request a simple page',function(done){
    request(o).then(function(o){
        assert(o.result.indexOf("apple.com")!==-1);
        done(o.error);
    })
});
