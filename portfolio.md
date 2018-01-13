---
layout: largepage
title: "Portfolio"
permalink: /portfolio/
---

<link rel="stylesheet" href="/css/bootstrap.min.css">
<div class="wrapper" style="margin-top: 4em; margin-bottom: 4em;">
    <h1 class="title">Portfolio</h1>  
  <p class="description">Take a look at some projects that I've been working on recently. They are not related to my academic research and are done during my free time.</p>
</div>

<div class="portfolio-container-header" >

    <div class="row">
    {% for post in site.categories.portfolio %}
        <div class="card-container col-sm-6 col-md-4">
          <a class="portfolio-hred" href="{{ post.url | prepend: site.baseurl }}">
          <div class="portfolio-preview" style="background-image: url({{ post.image }});">
          <div class="portfolio-meta">
            <h1 style="color: {{post.frontcolor}}">{{post.title}}</h1>
            <p style="color: {{post.frontcolor}}" >{{post.description}}</p>
          </div>
          </div>
          </a>
        </div>
    {% endfor %}
    </div>
</div>


