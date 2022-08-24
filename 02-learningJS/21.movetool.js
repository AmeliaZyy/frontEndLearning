//try to creat a function can be used afterwards
//1.we need an obj; 2.attr要执行的动画的方式 3.target 4.speed +right -left 5.callback在动画执行完毕之后执行回调函数
function move(obj, attr, target, speed, callback) {
    //clear the last interval
    clearInterval(obj.timer);

    //get current position
    var current = parseInt(getStyle(obj, "left"));
    //还要自己判断speed该是多少 麻烦，还是让它自己判断吧
    if (current > target) {
        speed = -speed;
    }

    //set a interval 让他们自己保存自己的定时器返回值
    obj.timer = setInterval(function () {
        //get original left of box1
        //but we want this to be useful to more condition, so it cannot be "offsetLeft", it should be a more variable value
        //getStyle has its unit, so we need to remove that and convert it into a int
        var oldValue = parseInt(getStyle(obj, attr));

        //add on oldv
        var newValue = oldValue + speed;

        //向左移动时，speed负数，newva不能小于target
        //向右移动，speed是正数，newv加着加着别大于target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }

        //give new value to box1
        obj.style[attr] = newValue + "px";

        //make it stop after 800px
        if (newValue == target) {
            clearInterval(obj.timer);
            //动画执行完毕,调用回调函数 有才调没有就不掉
            callback && callback();

        }

    }, 30);

}

function getStyle(obj, name) {
    if (window.getComputedStyle) {
        //normal browser has this function
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8 has no getCompSty()
        return obj.currentStyle[name];
    }
}


//定义一个函数，用来向一个元素中添加指定的class属性值
function addClass(obj,cn){
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
    
}

function hasClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);

}

function removeClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg,"")
}

function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }else{
        addClass(obj,cn);
    }
}