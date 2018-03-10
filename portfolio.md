---
layout: largepage
title: "Portfolio"
permalink: /portfolio/
---

<link rel="stylesheet" href="/css/bootstrap.min.css">
<div class="wrapper" style="margin-top: 4em; margin-bottom: 4em;">
    <h1 class="title">Portfolio</h1>  
  <p class="description">Take a look at my latest projects. Most of them are not related to my academic research and are done during my free time.</p>
</div>

<div class="portfolio-container-header center-block" >
    <div class="row">
    {% for post in site.categories.portfolio %}
        <div class="card-container col-sm-6 col-md-6">
          <div class="card-inside center-block">
            <a class="portfolio-hred" href="{{ post.url | prepend: site.baseurl }}">
            <img src="{{ post.image }}" class="portfolio-image">
            <div class="portfolio-meta">
              <h1>{{post.title}}</h1>
              <p>{{post.description}}</p>
            </div>
            </a>
          </div>
        </div>
    {% endfor %}
    </div>
</div>


