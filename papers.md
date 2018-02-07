---
layout: notitle
title: "Publications"
permalink: /publications/
custom_js:
 - d3.v4.min
 - d3_static_graph
---

<div class="article-list">
  {% assign sorted = (site.data.publications | sort) %}
  {% for type_ash in sorted %}
  {% assign type = type_ash[1] %}
    <h3>{{ type.title }}</h3>
    <span class="subtitle">{{ type.subtitle }}</span>
    <!-- <hr class="medium-line"> -->
    <ul class="default">
      {% for member in type.members %}
      <li>
        <div class="article-div">
          <span class="article-year">{{member.year}}</span>
          <span class="article-title">{{member.title}}</span>
          <span class="article-subtitle">{{member.subtitle}}</span>
          <span class="article-authors">{{member.authors}}</span>
          <span class="article-ref">{{member.ref}}</span>
          <br>
          {% if member.pdfurl %}<a class="publication-link" href="{{member.pdfurl}}">PDF</a>{% endif %}
          {% if member.fulltext %}<a class="publication-link" href="{{member.fulltext}}">Full text</a>{% endif %}
          {% if member.arxiv %}<a class="publication-link" href="{{member.arxiv}}">arXiv</a>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

