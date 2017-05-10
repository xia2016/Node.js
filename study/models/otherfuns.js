/**
 * Created by Simon on 2017/3/23.
 */

/*
function fun2(res) {
    console.log("我是fun2");
    res.write("我是fun2");
}
module.exports  =  fun2;  //只支持一个函数
*/

module.exports= {
    fun2: function (res) {
        console.log("woshi fun2");
        res.write("woshi fun2");
    },
    fun3: function (res) {
        console.log("woshi fun3");
        res.write("woshi fun3");
    }
}