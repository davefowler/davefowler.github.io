<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Dynamically Calling Fancybox from Javascript</title>
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
<body id="index">
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
                href="/things">
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
          <div class="row">
     <div class="span8">
         <article class="thing">
         <div class='page-header'>
               <h1>Dynamically Calling Fancybox from Javascript</h1>
         </div>
         <p><a href="http://fancybox.net">Fancybox</a> is a really nice jQuery library for creating lightboxes.  There are a few simple <a href="http://fancybox.net/example">examples</a> and some <a href="http://fancybox.net/howto">documentation</a> on their site but there seems to be no demonstrated method for loading a fancybox dynamically with javascript.  All of their examples require you to embed a link to the lightbox content somewhere in the page source.</p>
<p>The following hack, mostly taken from the method described <a href="http://outburst.jloop.com/2009/08/06/call-fancybox-from-flash/">here</a>, allows you to dynamically any web page into a fancybox straight from javascript.</p>
<p>I've documented the following example which should be fairly straight forward.  Basically it embeds a hidden link, that's controlled by the callFancyBox function.  Make sure you have the right things included and you can simply call</p>
<pre><code>callFancyBox( &lt;your iframed url &gt; );

&lt;html&gt;
&lt;head&gt;

&lt;!--- These are the scripts and styles needed for fancybox to work ---&gt;
&lt;script type="text/javascript" src="http://qwisk.com/sbmedia/scripts/libraries/jquery-1.3.2-mod.js" charset="utf-8"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="http://qwisk.com/sbmedia/scripts/libraries/jquery.fancybox-1.2.6.js" charset="utf-8"&gt;&lt;/script&gt;
&lt;link href="http://qwisk.com/sbmedia/css/jquery.fancybox-1.2.6.css" rel="stylesheet" type="text/css" media="all" /&gt;

&lt;/head&gt;
&lt;body&gt;

&lt;h3&gt; Fancybox Test&lt;/h3&gt;

A fancybox will load in 3 seconds

&lt;!--- Currently fancybox only works on links in your page.  This div hides a link, who's href we change dynamically ---&gt;
&lt;div id="hidden_clicker" style="display:none"&gt;
&lt;a id="hiddenclicker" href="http://asdf.com" &gt;Hidden Clicker&lt;/a&gt;
&lt;/div&gt;

&lt;script type="text/javascript" &gt;

// Register all links with-flash as fancybox's
$(document).ready(function() {
 $("a.overlay-flash").fancybox({
 'padding': 0,
 'zoomOpacity': true,
 'zoomSpeedIn': 500,
 'zoomSpeedOut': 500,
 'overlayOpacity': 0.75,
 'frameWidth': 530,
 'frameHeight': 400,
 'hideOnContentClick': false
 });
});

// This function allows you to call the fancy box from javascript
// origional source: http://outburst.jloop.com/2009/08/06/call-fancybox-from-flash/
function callBoxFancy(my_href) {
var j1 = document.getElementById("hiddenclicker");
j1.href = my_href;
$('#hiddenclicker').trigger('click');
}

// Call the Fancy Box 3 seconds after the page loads
$(document).ready(function() {
 window.setTimeout("callFancyBox('http://google.com');", 3000)
});
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>