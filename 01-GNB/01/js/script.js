$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300; //0.3초

    // 메뉴에 마우스가 들어왔을 떄
    // .stop:현재 진행중인 애니메이션 즉시 중지
    $menu.on("mouseenter", function () {
        $(this).find($submenu).stop().slideDown(duration);
        $(this).addClass("on");
    });
    // 메뉴에 마우스가 나갔왔을 떄
    $menu.on("mouseleave", function () {
        $submenu.stop().slideUp(duration);
        $(this).removeClass("on");
    });
});
