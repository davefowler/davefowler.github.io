<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title></title>
  <meta name="description" content="">
  <meta name="author" content="Dave Fowler">

  <!--  Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="">

    <link rel="shortcut icon" href="/favicon.ico">
  
    <link rel="stylesheet" href="/media/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/media/bootstrap/css/bootstrap-responsive.css">
  <style>
    .header h3 { color: #ccc; }
    .hero-unit { background-image:url('/media/images/hero.jpg'); }
  </style>
  
    
  </head>
<body id="pin">
    <div class="container">
            <div id="main" role="main">
          <header class="banner clearfix">
          <div class='header'>
                <div class="row">
                  <div class="span5">
                    <h3>ThingsILearned <small>By Dave Fowler</small></h3>                  </div>
                  <div class="span3">
                                                            <nav >
    <ul class='breadcrumb'>
                <li>
            <a title="Home Page"
                class="button white"
                href="/">
                Home
            </a>
                              <span class="divider">/</span>        </li>        <li>
            <a title="Things I Learned"
                class="button white"
                href="/things/">
                Things
            </a>
                              <span class="divider">/</span>        </li>        <li>
            <a title="About"
                class="button white"
                href="/about">
                About
            </a>
                                      </li>    </ul>
</nav>
                                        </ul>
                  </div>
                </div>
              </div>          </header>
          <section class="content">
          
<style>
.comments {
    margin-top: 50px;
}
#commenthr {
    margin-top: 50px;
}
</style>

<div class="row">
     <div class="span8">
         <article class="thing">
         <div class='page-header'>
               <h1></h1>
         </div>
         <p>/<em> this is for Megan's almostathirdgrader site </em>/</p>
<p>var youtubelink = jQuery('object param[name="movie"]').val();
var youtubecode = youtubelink.match(/\/v\/(.*)\?/)[1];
var thumbnail = 'http://img.youtube.com/vi/' + youtubecode + '/0.jpg';
var button = '<a href="//pinterest.com/pin/create/button/?url='+escape(window.location.href)+'&media=' + escape(thumbnail) + '&description=' + escape(document.title) + '" data-pin-do="buttonPin" data-pin-config="above"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>'</p>
<p>jQuery(document).ready(function() {
  jQuery('object').append(
    '<p>'+ button + '</p>'
  )
});</p>         </article>
     </div>
</div>
<hr id="commenthr">
<div class="row comments">
  <div class="span8">
    <div id="disqus_thread"></div>
    <script type="text/javascript">
      /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'thingsilearned'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
  </div>
</div>

          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
  <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-2253461-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>
</html>