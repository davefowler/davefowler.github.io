<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Simple MySQLdb Example</title>
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
               <h1>Simple MySQLdb Example</h1>
         </div>
         <p>MySQLdb is a python interface to MySQL.  I wrote the following simple script for some database tests and thought it might be handy to others looking for tutorials or examples.</p>
<p>It simply connects to MySQL, drops and creates a database called 'testdb', makes a table called 'waves' with columns 'sin', 'cos', 'tan', and 'date' and fills the table with a thousand data points of the trig functions performed on the date in 5 minute intervals leading up to the current date.</p>
<p>The code and comments I think are fairly straight forward, so I will just paste and link to the <a href="http://dpaste.com/hold/40714/">text version</a>.</p>
<pre><code>DATABASE_HOST = "localhost"
DATABASE_USER = "root"
DATABASE_NAME = "testdb"
DATABASE_PASSWD = "YOUR PASSWORD HERE"
DATABASE_PORT = 3306

import MySQLdb

# Connect to the Database
db=MySQLdb.connect(host=DATABASE_HOST,user=DATABASE_USER,
 passwd=DATABASE_PASSWD, port=int(DATABASE_PORT))

# Make the database cursor
cursor = db.cursor()

# Drop and create the database
cursor.execute("drop database %s; create database %s;" % (DATABASE_NAME, DATABASE_NAME))

# Re connect to database using db=DATABASE_NAME
db=MySQLdb.connect(host=DATABASE_HOST,user=DATABASE_USER,
 passwd=DATABASE_PASSWD, db=DATABASE_NAME, port=int(DATABASE_PORT))
cursor = db.cursor()

# Create the table for the wave data
from math import sin, cos, tan
cursor.execute("""CREATE TABLE waves (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
sin FLOAT,
cos FLOAT,
tan FLOAT,
date INT);
""")

# Insert the sine wave data
from datetime import datetime

def STAMP( dt ):
 """ turns a python datetime object into a unix time stamp (seconds) """
 import time
 return int(time.mktime( dt.timetuple() ))

now = STAMP( datetime.now() )
five_mins = 60*5

sql = "INSERT INTO waves (sin, cos, tan, date) VALUES (%s, %s, %s, %s);"

# Insert the data into the table
for i in range(1000):
 s = now - i*five_mins
 cursor.execute(sql % ( sin(s), cos(s), tan(s), s ))
</code></pre>
<p>I really need to get some <a href="http://dpaste.com/hold/40714/">syntax highlighting</a>...  More documentation on MySQLdb can be found <a href="http://mysql-python.sourceforge.net/MySQLdb.html">here</a>.  If you have any questions leave them in the comments.</p>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>