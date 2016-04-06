$(function activeLink() {
  $('ul.nav a').filter(function(){
    return this.href==location.href;}).parents("li").addClass('active').siblings().removeClass('active');
  $('ul.nav a').click(function(){
    $(this).parent().parents("li").addClass('active').siblings().removeClass('active');
  });
});
