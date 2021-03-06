<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Initialize Django Tests</title>
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
               <h1>Initialize Django Tests</h1>
         </div>
         <p>I use a lot of <a href="http://docs.djangoproject.com/en/dev/topics/testing/#writing-doctests">doctests</a> for apps that all need to work on a set of initialized data.  I was hoping that there would be some kind of hook in Django for this but there is not.</p>
<p>I could switch all of the doctests to unittests and use <a href="http://docs.djangoproject.com/en/dev/topics/testing/#fixture-loading">fixtures</a> but that would be a lot of work and I prefer doctests.  I could also go through and paste some sort of init command at the beginning of each test that would ensure the data was loaded or do the loading but that's just plain bad practice.</p>
<p>I came up with a method of creating a 'testsetup' app that is always run before the other apps ensuring that whatever that app configures or loads into the database will be run first before any other apps preform their tests.  Here's how you can do it too.</p>
<p>First create a 'testsetup' app and edit its tests.py file</p>
<pre><code>./manage.py startapp testsetup
open testsetup/tests.py

__test__ = {"initialize tests": """

&gt;&gt;&gt; your init code here

""" }
</code></pre>
<p>In the test.py file you can load the database, prime the cache, or setup whatever else you need initialized.  Then add the 'testapp' as the first app to your settings.py</p>
<pre><code>INSTALLED_APPS = (

'testsetup',

...

)
</code></pre>
<p>Now whenever you run</p>
<pre><code>./manage.py test
</code></pre>
<p>It will first run the tests for the 'testssetup' script and everything will be primed.  If that's the only kind of test you run then that's all you'll need.  You're done with this tutorial.</p>
<p>But if you run app level tests (ie. ./manage.py test someapp anotherapp ) then the above solution is not enough.  To ensure the testsuite is run before these apps we'll make our own TEST_RUNNER.  Create a file called 'testrunner.py' with the following source.</p>
<pre><code>def run_tests(test_labels, verbosity=1, interactive = True, extra_tests=[]):
print "Given these test_labels", test_labels
print "With these extra_test", extra_tests

from django.test.simple import run_tests as django_run_tests
if test_labels:
# Make sure 'testsetup' is run first
tl = ['testsetup']
tl.extend(list(test_labels))
test_labels = tuple(tl)
print "Testing these apps:", test_labels

django_run_tests(test_labels, verbosity, interactive, extra_tests)
</code></pre>
<p>and then in your settings.py file set the TEST_RUNNER variable</p>
<pre><code>TEST_RUNNER = 'testrunner.run_tests'
</code></pre>
<p>This script simply wraps the django test runner to ensure that the testsetup app is tested before any other apps are.  It basically makes the django test runner think that you're running ./manage.py test testsetup someapp when you actually run ./manage.py test someapp.</p>
<h3>Proposal</h3>
<p>A note to the community: I think it'd be great if the Django settings.py included a TEST_INIT variable which allowed you to point to a function that would be executed immediately before the first test was run.  The hook would make the setup process for doctests much easier.</p>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>