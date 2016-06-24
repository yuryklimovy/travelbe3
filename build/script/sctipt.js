$(function() {

  var $post = $('.post');
  var postItem = 0;


  function list() {
   $post.eq(0).addClass('post--active');

 }

 $('.navigation__left').click(function() {
   postItem++;
   if(postItem >= $post.length){
     postItem = 0;
   }

   $post.removeClass('post--active');
   $post.eq(postItem).addClass('post--active');

 });

 $('.navigation__right').click(function() {
   postItem--;
   if(postItem < 0){
     postItem = ($post.length - 1);
   }
    $post.removeClass('post--active');
    $post.eq(postItem).addClass('post--active');
 });

 list();
});
