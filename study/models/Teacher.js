/**
 * Created by Simon on 2017/3/24.
 */
var User = require("./User");
function Teacher(id, name, age) {
    User.apply(this,[id,name,age]);
    this.teach=function (res) {
        res.write(this.name+"讲课");
    }
}
module.exports  =  Teacher;