<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Testing AJAX Requests in Django</title>
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
               <h1>Testing AJAX Requests in Django</h1>
         </div>
         <p>Django has a really handy function on the request object that will determine if the request was an AJAX request (an XMLHttpRequest).</p>
<pre><code>request.is_ajax()
</code></pre>
<p>It simply checks whether the HTTP_X_REQUESTED_WITH header is equal to 'XMLHttpRequest', a standard that's supported by most javascript libraries.  You can read more about it and see the list of supporting frameworks <a href="http://docs.djangoproject.com/en/dev/ref/request-response/#django.http.HttpRequest.is_ajax">here</a>.</p>
<p>It'd be great if the Django client had a simple client.ajax request in addition to its client.post and client.get requests, but alas it doesn't.  The tests can still be done however by changing the HTTP_X_REQUESTED_WITH header when sending  your test requests.</p>
<blockquote>
<blockquote>
<blockquote>
<p>from django.test.client import Client
client = Client()</p>
<p>client.post("http://example.com", {"foo": "bar"}, **{'HTTP_X_REQUESTED_WITH': 'XMLHttpRequest'})</p>
</blockquote>
</blockquote>
</blockquote>
<p>From there its fairly straight forward to create your own .ajax wrapper if you'd like.</p>
<p>Now you have no excuse for not having complete tests for all of your XMLHttpRequests :).</p>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>