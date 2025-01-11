

//////////// ハンバーガーメニュー ////////////
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


//////////// カバー  Slick ////////////

$('.carousel').slick({
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  fade: true,
  adaptiveHeight: true, // スライドに応じて高さを自動調整
  infinite: true, // 無限ループを許可
  slidesToShow: 1,
  slidesToScroll: 1,
});


//////////// コース案内  SmartTab ////////////
$('#smarttab').smartTab({
  selected: 0,            // 初期表示するタブ (0は最初のタブ)
  enableUrlHash: false     // URLのハッシュを使わない
});

$('.nav-link').click(function (e) {
  e.preventDefault();

  // 全てのタブとタブコンテンツから active クラスを削除
  $('.nav-link').removeClass('active');
  $('.tab-pane').removeClass('active');

  // クリックされたタブと対応するコンテンツに active クラスを追加
  $(this).addClass('active');
  $($(this).attr('href')).addClass('active');
});


//////////// 3つの特色 左・右からフェードインさせる ////////////
// 左からフェードインする要素
$('.fadeInLeft').each(function () {
  var $element = $(this); // 要素を変数に格納

  $element.waypoint(function (direction) {
    if (direction === 'down') {
      $element.addClass('animate__animated animate__fadeInLeft'); // アニメーションを追加
      this.destroy(); // アニメーションが1回だけ発動するように
    }
  }, { offset: '50%' }); // 画面の50%で発火
});

// 右からフェードインする要素
$('.fadeInRight').each(function () {
  var $element = $(this); // 要素を変数に格納

  $element.waypoint(function (direction) {
    if (direction === 'down') {
      $element.addClass('animate__animated animate__fadeInRight'); // アニメーションを追加
      this.destroy(); // アニメーションが1回だけ発動するように
    }
  }, { offset: '50%' }); // 画面の50%で発火
});


//////////// よくあるご質問 アコーディオン ////////////
// アコーディオンのタイトルがクリックされたら
$('.accordion_title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(e.target).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});


// 三角形の動き
$(function () {
  $(".accordion_title").on('click', function () {
    $(this).toggleClass("open");
  });
});

// $(document).ready(function() {
//   $('.accordion_title').on('click', function () {
//     // アコーディオンタイトルの次にある .accordion_text を取得
//     var content = $(this).next('.accordion_text');

//     // 他のアコーディオンが開かれている場合は閉じる
//     $('.accordion_text').not(content).slideUp().removeClass('active');

//     // 現在のアコーディオンをトグルする
//     content.slideToggle().toggleClass('active');

//     // 現在のアコーディオンタイトルに open クラスをトグルする
//     $(this).toggleClass('open');
//   });
// });
