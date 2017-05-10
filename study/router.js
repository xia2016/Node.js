/**
 * Created by Simon on 2017/3/24.
 */
var  optfile  =  require('./models/optfile');
function  getRecall(req,res){
    res.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});
    function  recall(data){
        res.write(data);
        res.end('');//不写则没有http协议尾
    }
    return  recall;
}
module.exports={
    login:function(req,res){
        recall=getRecall(req,res);
        optfile.readfile('../views/login.html',recall);
    },
    zhuce:function(req,res){
        recall=getRecall(req,res);
        optfile.readfile('./views/zhuce.html',recall);
    },
    writefile:function (req, res, recall) {
        function recall(data) {
            res.write(data);
            res.end('');//不写则没有http协议尾
        }
        optfile.writefile('./views/one.txt','我的写入文件',recall)
    },
    showImg:function(req,res){
        res.writeHead(200,    {'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/pig.jpg',res);
    }
}

/*module.exports={
    login:function(req,res){
        res.write("我是login方法");
    },
    zhuce:function(req,res){
        res.write("我是注册方法");
    }
}*/
