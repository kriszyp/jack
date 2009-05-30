---
layout: default
title: jsgi & jack
---

JSGI & Jack
===========

JSGI is a webserver interface for JavaScript inspired by Ruby's Rack ([http://rack.rubyforge.org/](http://rack.rubyforge.org/)) and Python's WSGI ([http://www.wsgi.org/](http://www.wsgi.org/)).

Jack is an implementation of JSGI compatible handlers (to connect to web servers), middleware (to intercept and manipulate requests to add functionality), and utilities (to make using JSGI easier).

### Homepage

* [http://jackjs.org/](http://jackjs.org/)

### Source & Download

* [http://github.com/tlrobinson/jack/](http://github.com/tlrobinson/jack/)
* [http://github.com/tlrobinson/narwhal/](http://github.com/tlrobinson/narwhal/)

### Mailing list

* [http://groups.google.com/group/jack-js](http://groups.google.com/group/jack-js)

### IRC

* \#jack-js on irc.freenode.net
* \#serverjs on irc.freenode.net (unofficial)


JSGI Specification
------------------

View the [JSGI specification](http://jackjs.org/jsgi-spec.html).


Example JSGI Application
------------------------

    function(env) { return [200, {"Content-Type":"text/html"}, ["Hello world"]]; }


JSGI vs. Rack
-------------

JSGI applications are simply functions, rather than objects that respond to the "call" method. The body must have a `forEach` method which yields objects which have a `toByteString` method, as opposed to Strings.


JSGI vs. WSGI
-------------

WSGI uses a `start_response` function to set the HTTP status code and headers, rather than returning them in an array. JSGI is similar to WSGI 2.0: [http://www.wsgi.org/wsgi/WSGI_2.0](http://www.wsgi.org/wsgi/WSGI_2.0).


Contributors
------------

* Tom Robinson
* Kris Kowal
* George Moschovitis


Acknowledgments
---------------

This software was influenced by Rack, written by Christian Neukirchen.

[http://rack.rubyforge.org/](http://rack.rubyforge.org/)


License
-------

Copyright (c) 2009 Thomas Robinson <[tlrobinson.net](http://tlrobinson.net/)\>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
