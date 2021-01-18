
jQuery(($) => {
    $bannerList = $('.bannerList');
    $bannerIdx = $('.banner_idx');
    $banner = $('#banner');
    var idx = 0;
    var timer;
    $($bannerIdx.children()[idx]).css('background', '#58bc58')
    $($bannerList.children()[idx]).css({
        'z-index': 1,
        'opacity': 1
    });

    // 轮播图代码
    lbt();
    $banner.on('mouseover', () => {
        clearInterval(timer);
    }).on('mouseout', () => {
        lbt();
    })

    // 显示轮播图
    function imgshow() {
        for (let i = 0; i < 5; i++) {
            if (idx === i) {
                $($bannerList.children()[i]).animate({
                    'opacity': 1
                }).css('z-index', 1);
                $($bannerIdx.children()[i]).css('background', '#58bc58')
            } else {
                $($bannerList.children()[i]).animate({
                    'opacity': 0
                }).css('z-index', 0);
                $($bannerIdx.children()[i]).css('background', '#ccc')
            }
        }
    }

    // 定时器
    function lbt() {
        timer = setInterval(() => {
            if (idx === 5) {
                idx = 0;
            }
            imgshow();
            idx++;
        }, 2000)
    }
    // 轮播图代码结束

    // 左右箭头按钮调整轮播图
    var $arrow_left = $('.arrow_left');
    var $arrow_right = $('.arrow_right');
    $arrow_left.on('click', (e) => {
        e.preventDefault();
        idx--;
        if (idx === -1) {
            idx = 4
        }
        imgshow();
    });
    $arrow_right.on('click', (e) => {
        e.preventDefault();
        idx++;
        if (idx === 5) {
            idx = 0
        }
        imgshow();
    })
    // 结束! 左右箭头按钮调整轮播图

    // 点击轮播图内圆圈显示对应下标图片
    $bannerIdx.on('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'SPAN') {
            idx = e.target.dataset.id - 1;
            imgshow();
        }
    })
    // 结束! 点击轮播图内圆圈显示对应下标图片

    // 房子列表
    var $main1 = $('.main1');
    var $main2 = $('.main2');
    var $main3 = $('.main3');
    $.get('http://localhost:1013/api/index.php', (data) => {
        let _data = JSON.parse(data);
        let main1_house = [];
        let main2_house = [];
        let main3_house = [];
        for (let i = 0; i < 6; i++) {
            main1_house.push(_data.data[i]);
        }
        for (let i = 6; i < 12; i++) {
            main2_house.push(_data.data[i]);
        }
        for (let i = 12; i < 18; i++) {
            main3_house.push(_data.data[i]);
        }
        $main1.html(main1_house.map((item) => {
            return `<div class="house"><div class="house_img"><img src="${item.imgurl}"></div><div class="house_txt"><span>在售</span><span>${item.name}</span><span>${item.address}</span></div><div class="price"><p><span>均价:</span><span>${item.price}元/m²</span></p><p><span>精装</span><span>高层</span></p></div><a href="#" class="dijia">查低价</a></div>`
        }))
        $main2.html(main1_house.map((item) => {
            return `<div class="house"><div class="house_img"><img src="${item.imgurl}"></div><div class="house_txt"><span>在售</span><span>${item.name}</span><span>${item.address}</span></div><div class="price"><p><span>均价:</span><span>${item.price}元/m²</span></p><p><span>精装</span><span>高层</span></p></div><a href="#" class="dijia">查低价</a></div>`
        }))
        $main3.html(main1_house.map((item) => {
            return `<div class="house"><div class="house_img"><img src="${item.imgurl}"></div><div class="house_txt"><span>在售</span><span>${item.name}</span><span>${item.address}</span></div><div class="price"><p><span>均价:</span><span>${item.price}元/m²</span></p><p><span>精装</span><span>高层</span></p></div><a href="#" class="dijia">查低价</a></div>`
        }))

    })
    // 房子列表结束

    // $(document).scroll(function(){
    //     console.log($(window).scrollTop());
    //     if($(window).scrollTop()>=320){
    //         $('.go_top').animate({'opacity':1});
    //     }else{
    //         $('.go_top').animate({'opacity':0})
    //     }
    // })
    $('.go_top').on('click',()=>{
        console.log(666);
        $('.go_top').animate({'opacity':1});
    })
   
})