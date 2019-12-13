/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function () {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      $('[rel="icon"]').attr('href', "/images/failure-32.ico");
      $('[rel="shortcut icon"]').attr('href', "/images/failure-32.ico");
      document.title = '要经常回来看看呦~';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/images/favicon-32.ico");
      $('[rel="shortcut icon"]').attr('href', "/images/favicon-32.ico");
      document.title = '欢迎回来~';
      titleTime = setTimeout(function () {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}
