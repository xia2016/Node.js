/**
 * Created by Simon on 2017/3/23.
 */

function User(id,name,age) {
    this.id=id;
    this.name=name;
    this.age=age;
    this.enter=function () {
        console.log(this.name+"进入图书馆");
    }
}
module.exports  =  User;
