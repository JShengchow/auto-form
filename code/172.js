// ==UserScript==
// @name         自动填写问卷星
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  gaygay!
// @author       JSheng
// @include      *.wjx.cn/jq/*
// @grant        none
// ==/UserScript==

// Your code here...
//问卷ID
var wjUrl = window.location.href;
//计数
var i, index;
if (localStorage.index != null) {
    i = localStorage.index;
} else {
    i = 0;
    localStorage.index = '0';
}

//个人信息
var config = [
    { name: "黄火健", province: "广东", city: "茂名市", area: "茂南区" },
    { name: "钱家俊", province: "广东", city: "佛山市", area: "三水区" },
    { name: "黄伟斌", province: "广东", city: "清远市", area: "连州市" },
    { name: "覃家飞", province: "广东", city: "佛山市", area: "禅城区" },
    { name: "邹献文", province: "广东", city: "惠州市", area: "博罗县" },
    { name: "郭晓峰", province: "广东", city: "揭阳市", area: "惠来县" },
    { name: "林贤", province: "广东", city: "珠海市", area: "香洲区" },
    { name: "詹嘉欣", province: "广东", city: "深圳市", area: "罗湖区" },
    { name: "何柱良", province: "广东", city: "佛山市", area: "顺德区" },
    { name: "叶国豪", province: "广东", city: "广州市", area: "天河区" },
    { name: "谢新荣", province: "广东", city: "佛山市", area: "三水区" },
    { name: "莫离谦", province: "广东", city: "中山市", area: "" },
    { name: "张寅东", province: "广东", city: "惠州市", area: "惠城区" },
    { name: "郑泽鹏", province: "广东", city: "汕头市", area: "潮阳区" },
    { name: "张瑜勃", province: "吉林", city: "吉林市", area: "船营区" },
    { name: "陈伟坚", province: "广东", city: "汕头市", area: "潮南区" },
    { name: "苏钰林", province: "广东", city: "佛山市", area: "南海区" },
    { name: "吴麟明", province: "广东", city: "茂名市", area: "茂南区" },
    { name: "吴森", province: "广东", city: "茂名市", area: "信宜市" },
    { name: "刘国杨", province: "云南", city: "文山壮族苗族自治州", area: "文山市" },
    { name: "陈俊华", province: "广东", city: "汕头市", area: "潮阳区" },
    { name: "张炜宁", province: "广东", city: "梅州市", area: "丰顺县" },
    { name: "郑凯胜", province: "广东", city: "汕头市", area: "潮阳区" },
    { name: "刘建威", province: "广东", city: "惠州市", area: "惠东县" },
    { name: "梁健滔", province: "广东", city: "佛山市", area: "三水区" },
    { name: "杨伊凡", province: "广东", city: "茂名市", area: "茂南区" },
    { name: "许梓煜", province: "广东", city: "揭阳市", area: "普宁市" },
    { name: "李浩宇", province: "广东", city: "汕尾市", area: "陆丰市" },
    { name: "黄锦卓", province: "广东", city: "广州市", area: "黄埔区" },
    { name: "周健声", province: "广东", city: "阳江市", area: "阳春市" },
    { name: "周嘉升", province: "广东", city: "汕尾市", area: "陆丰市" },
    { name: "李志强", province: "广东", city: "茂名市", area: "信宜市" },
    { name: "韩永枫", province: "广东", city: "东莞市", area: "" },
    { name: "廖少境", province: "广东", city: "深圳市", area: "罗湖区" },
    { name: "蔡龙", province: "广东", city: "广州市", area: "黄埔区" },
    { name: "吴桂兴", province: "广东", city: "汕头市", area: "潮南区" },
    { name: "熊永龙", province: "广东", city: "茂名市", area: "信宜市" },
    { name: "蒋正阳", province: "广东", city: "广州市", area: "番禺区" },
    { name: "林虹彤", province: "广东", city: "湛江市", area: "廉江市" },
    { name: "庄瑞彬", province: "广东", city: "茂名市", area: "化州市" },
    { name: "李润川", province: "广东", city: "汕头市", area: "龙湖区" },
    { name: "周建辉", province: "广东", city: "惠州市", area: "博罗县" },
    { name: "钟奕航", province: "广东", city: "东莞市", area: "" },
    { name: "陈晓聪", province: "广东", city: "汕头市", area: "澄海区" },
    { name: "庄焕铭", province: "广东", city: "汕头市", area: "潮阳区" },
    { name: "郑裕乾", province: "广东", city: "揭阳市", area: "惠来县" },
]




function fillin(i) {


    var radio = document.getElementsByClassName('jqRadio');
    var height = document.body.clientHeight;

    //1.填写班级
    radio[9].click();
    //2.填写姓名
    document.getElementById('q2').value = config[i].name;
    console.log(config[i].name, "正在填写");

    //3.住址无变化
    radio[11].click();

    //7.没出去过
    radio[13].click();
    //8.否接触
    radio[17].click();
    //9.健康
    radio[18].click();
    //11.未被隔离
    radio[24].click();

    //点击住区
    document.getElementById('q4_0').click();

    var popTanChu1 = document.getElementById('PDF_c_chezchenz');
    popTanChu1.style.display = 'none';

    var popTanChu2 = document.getElementById('PDF_bg_chezchenz');
    popTanChu2.style.display = 'none';

    var popTanChu3 = document.getElementById('PDF_i_chezchenz');
    popTanChu3.style.display = 'none';

    ///0.5s后填写地址
    setTimeout(
        //简单方法
        function write_addr() {
            if (config[i].area) {
                var address = config[i].province + "-" + config[i].city + "-" + config[i].area;
            } else {
                address = config[i].province + "-" + config[i].city;
            }

            window.parent.setCityBox(address);  //直接调用原网页的js函数
        }, 500);

    //滑动到填写名字底部
    window.scrollTo({
        top: 320,
        behavior: "smooth"
    });

    //滑动到页面底部
    setTimeout(function scrollTObottom() {
        window.scrollTo({
            top: height,
            behavior: "smooth"
        });
    }, 2000);



    //10s后提交 并打开新的问卷
    setTimeout(
        function summit_New() {
            console.log("i=", i)
            i++;
            localStorage.index = i;
            document.getElementById('submit_button').click();
            console.log(config[i - 1].name, "正在提交");
            //如果被检测
            if (document.getElementById('SM_BTN_1') != null) {
                document.getElementById('SM_BTN_1').click();

                setTimeout(function ClickAgain() {
                    //9.健康
                    radio[18].click();
                    //11.未被隔离
                    radio[24].click();
                }, 500);

                setTimeout(function openNew() {
                    window.location.href = wjUrl;
                }, 2500);
            }
            else {
                setTimeout(function openNew() {
                    window.location.href = wjUrl;
                }, 500);
            }
        }, 4000);

}
if (i < config.length) {
    fillin(i);
} else {
    localStorage.clear();
}
