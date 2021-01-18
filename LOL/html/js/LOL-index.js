document.addEventListener('DOMContentLoaded', function () {
    let nav = document.querySelector('.nav');
    let nav_move = document.querySelector('.nav_move');
    for (let i = 1; i < nav.children[0].children.length; i++) {
        nav.children[0].children[i].dataset.id = 'nav_ul1_li';
    }
    var nav_move_content = [
        ['游戏下载', '新手执引', '资料库', '云顶之奕', '攻略中心', '开发者基地', '海克斯战利品库', '英雄联盟宇宙'],['点券重置','道具城','周边商城','LOL桌游','网吧特权','电竞小说','作者入驻计划'],['官方社区','视频中心','官方论坛','官方微信','官方微博','玩家创作馆','玩家服务','LOL组队专区'],['LPL职业联赛','LDL发展联赛','全球总决赛','城市英雄争霸赛','全明星赛','德玛西亚杯','全国高校联赛','云顶之弈公开赛'],['联系客服','专区系统','封号查询','账户注销','信誉分系统','服务状态查询','秩序殿堂','峡谷之巅']
    ];
    for (let i = 0; i < nav_move.children.length; i++) {
        nav_move_content[i].forEach((item)=>{
            let li = NewElement.li();
            let a = NewElement.a();
            a.setAttribute('herf','#');
            a.innerText = item;
            li.appendChild(a)
            nav_move.children[i].appendChild(li);
            // console.log(a);
        });
    }
   
});

document.addEventListener('DOMContentLoaded',function(){
    const banners = document.querySelector('#banner');
    const banner = banners.children[0];
    const banner_ul = banner.children[0];
    setInterval(function(){
        console.log(666);
        banner_ul.style.marginLeft = -820+'px';
    },1000)
   
});