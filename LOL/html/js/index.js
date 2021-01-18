// 导航栏
document.addEventListener('DOMContentLoaded', function () {
    let nav = document.querySelector('.nav');
    let nav_move = document.querySelector('.nav_move');
    for (let i = 1; i < nav.children[0].children.length; i++) {
        nav.children[0].children[i].dataset.id = 'nav_ul1_li';
    }
    var nav_move_content = [
        ['游戏下载', '新手执引', '资料库', '云顶之奕', '攻略中心', '开发者基地', '海克斯战利品库', '英雄联盟宇宙'],
        ['点券重置', '道具城', '周边商城', 'LOL桌游', '网吧特权', '电竞小说', '作者入驻计划'],
        ['官方社区', '视频中心', '官方论坛', '官方微信', '官方微博', '玩家创作馆', '玩家服务', 'LOL组队专区'],
        ['LPL职业联赛', 'LDL发展联赛', '全球总决赛', '城市英雄争霸赛', '全明星赛', '德玛西亚杯', '全国高校联赛', '云顶之弈公开赛'],
        ['联系客服', '专区系统', '封号查询', '账户注销', '信誉分系统', '服务状态查询', '秩序殿堂', '峡谷之巅']
    ];
    for (let i = 0; i < nav_move.children.length; i++) {
        nav_move_content[i].forEach((item) => {
            let li = NewElement.li();
            let a = NewElement.a();
            a.setAttribute('herf', '#');
            a.innerText = item;
            li.appendChild(a)
            nav_move.children[i].appendChild(li);
            // console.log(a);
        });
    }

});

// 首页轮播图
document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelector('#banner');
    const banner = banners.children[0];
    const banner_ul = banner.children[0];
    const title = document.querySelector('.title');
    const spans = title.children;
    move();
    banner.onmouseenter = function () {
        clearInterval(timer);
        title.onmousemove = function (e) {
            for (let i = 0; i < spans.length; i++) {
                if (spans[i] === e.target) {
                    spans[i].className = 'selected';
                    banner_ul.style.marginLeft = -820 * i + 'px';
                } else {
                    spans[i].className = '';
                }

            }
            // e.target.className = 'selected';
        }
    }
    banner.onmouseleave = function () {
        move();
    }

    function move() {
        var idx = 0;
        for (let i = 0; i < spans.length; i++) {
            if (spans[i].className === 'selected') {
                idx = i;
            }
        }
        spans[idx].className = 'selected';
        var left = idx * 820;
        timer = setInterval(() => {
            left += 820;
            idx++;
            if (left >= 4100) {
                left = 0;
                idx = 0;
            }
            for (let i = 0; i < spans.length; i++) {
                if (i === idx) {
                    spans[i].className = 'selected';
                } else {
                    spans[i].className = '';
                }
            }
            banner_ul.style.marginLeft = -left + 'px';
        }, 2000)
    }
});

// 首页新闻
document.addEventListener('DOMContentLoaded', function () {
    let newsIdx = document.querySelector('.news_idx');
    let ul = newsIdx.children[0];
    let newsCont = document.querySelector('.news_cont');
    let ul2 = newsCont.children[0];
    let arr = ['综合', '公告', '赛事', '攻略', '社区'];
    arr.map(function (item) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = item;
        a.href = '#'
        li.appendChild(a)
        ul.appendChild(li);
    });

    let obj = ['2021臻心之礼', {
        span: '赛事',
        a: '2021LPL春季赛赛程及开票信息、现场防疫措施公布',
        time: '01-03'
    }, {
        span: '新闻',
        a: '云顶之弈命运之轮季中更新（下篇）',
        time: '01-03'
    }, {
        span: '其他',
        a: '/开发者：回顾2020年',
        time: '12-30'
    }, {
        span: '视频',
        a: '2020LPL全明星周末主题曲《挺身而出》GALA乐队版MV...',
        time: '12-29'
    }, {
        span: '视频',
        a: '三分钟带你玩转2020LPL全明星周末',
        time: '12-29'
    }, {
        span: '赛事',
        a: '2020LPL全明星周末1月1日正式重启',
        time: '12-29'
    }];

    obj.forEach(function (item, idx) {
        let li = document.createElement('li');
        if (idx == 0) {
            let a = document.createElement('a');
            a.href = '#';
            a.innerText = item;
            li.appendChild(a)
            a.className = 'news_cont_no1'
        } else {
            let span = document.createElement('span');
            span.innerText = item.span;
            if (item.span === '赛事') {
                span.className = 'news_cont_saishi';
            } else if (item.span === '新闻' || item.span === '其他') {
                span.className = 'news_cont_xinwen';
            } else if (item.span === '视频') {
                span.className = 'news_cont_shipin';
            }
            let a = document.createElement('a');
            a.href = '#'
            a.innerText = item.a;
            let time = document.createElement('span');
            time.innerText = item.time;
            li.appendChild(span);
            li.appendChild(a);
            li.appendChild(time);
        }
        ul2.appendChild(li);
    })
});