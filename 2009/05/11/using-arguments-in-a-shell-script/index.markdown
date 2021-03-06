<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Using Arguments in a Shell Script</title>
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
               <h1>Using Arguments in a Shell Script</h1>
         </div>
         <p>Within 5 seconds of looking at a shell script I'm usually opening a new file in my text editor to re-write the ugliness into something that makes more visual sense.  To me at least python is highly preferable.</p>
<p>Still I use shell scripts all the time to batch a group of commonly used sequential executions, or to abbreviate a commonly used but lengthy commands.</p>
<p>Today I looked into going one step further into the complexities of shell scripts, probably my last step for a while, and discovered how to handle arguments.</p>
<p>The inspiring work case was in using Django manager to run tests for the different apps</p>
<pre><code>./manage.py test --settings test_settings &lt;optional app names&gt;
</code></pre>
<p>The following script will check if an argument exists and if it does it will use the argument in the tests command.</p>
<pre><code>if [ -n "$1" ]
# Test whether command-line argument is present (non-empty).
then
 ./manage.py test --settings test_settings $1
else
 ./manage.py test --settings test_settings
fi
</code></pre>
<p>Notice that $1 refers to the first argument ($0 refers to the name of the executable and $5 refers to the 5th argument).</p>
<p>Save the file as 'test' and then modify it as an executable</p>
<pre><code>chmod +x test
</code></pre>
<p>And now I can run the tests on their own</p>
<pre><code>./test
</code></pre>
<p>or with an argument app</p>
<pre><code>./test auth_user
</code></pre>
<h5>Expanding</h5>
<p>Note that the above example has a limitation of only dealing with the first argument and seems a bit redundant.  The entire script can indeed be shortened to</p>
<pre><code>./manage.py test --settings test_settings $@
</code></pre>
<p>As $@ represents all arguments after $0.</p>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>