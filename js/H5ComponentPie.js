// 饼图组件对象
var H5ComponentPie = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);

    // 绘制网格线
    var w = cfg.width;
    var h = cfg.height;

    // 加入一个画布 --> 背景层
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);


    var draw = function (per) {

    }
    draw(.5);
    component.on('onLoad', function () {
        // 折线图生长动画
        var s = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function () {
                s += 0.01;
                draw(s);
            }, i * 10 + 500)
        }
    });
    component.on('onLeave', function () {
        // 折线图生长动画
        var s = 1;
        for (var i = 0; i < 100; i++) {
            setTimeout(function () {
                s -= 0.01;
                draw(s);
            }, i * 10 + 500)
        }
    });

    return component;
}