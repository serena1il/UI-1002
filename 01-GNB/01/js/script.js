$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");

    // 메뉴에 마우스가 들어왔을 떄
    $menu.on("mouseenter", function () {
        $submenu.slideDown();
    });
    // 메뉴에 마우스가 나갔왔을 떄
    $menu.on("mouseleave", function () {
        $submenu.slideUp();
    });
});
