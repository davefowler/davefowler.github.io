<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Electric Fence on OS X</title>
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
               <h1>Electric Fence on OS X</h1>
         </div>
         <p>I recently suspected the dreaded buffer overrun in a project I'm hacking for work.  These can be a huge pain to find, especially if your code has a considerable amount of mallocs and fails irregularly.  After dismissing the urge to just write it all in python (wasn't practical for the application) I decided to learn a malloc debugging tool.</p>
<p>I was excited to learn that macs come with their own malloc debuger, entitled Malloc Debugger.  How handy!  Through several attempts to use it on my application however I kept getting the same error.</p>
<p><em>Unable to read malloc information from (null)</em></p>
<p>I'm probably just missing some libraries to include that would have been had I been using Xcode.  Instead I was compiling with g++ -g.</p>
<p>Anyway, I eventually checked out <a href="http://linux.softpedia.com/get/Programming/Debuggers/Electric-Fence-3305.shtml">Electric Fence</a> (efence) and had decent results.  It didn't compile right away, you have to comment out line 33 of page.c as stated in <a href="http://lists.apple.com/archives/xcode-users/2005/Oct/msg00791.html">this mailing list</a>.</p>
<p>Copy the compiled library libefence.a to /usr/lib/ and re-compile your application with the flag -lefence.</p>
<p>Upon execution it will spit out problems you have in your malloc code and die if there was a buffer overrun.  Its a great tool to turn on while you work as you'll be informed of any overwrites as you're developing.  Not after the whole thing is done and quitting at odd times :).</p>
<p>Dave</p>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>