var posts=["2024/09/20/hello-world/","2024/10/02/随笔/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };