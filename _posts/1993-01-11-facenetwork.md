---
layout: portfolio
title:  "Face to network"
date:   1993-01-11
author: Edward Laurence
categories: portfolio
description: "Converting an image to a network representation has never been so easy."
image: "/assets/portfolio/facenetwork/home.png"
frontcolor: white
---

<div class="container">
	<div class="screenshot-image">
		<img src="/assets/portfolio/facenetwork/glasses.png" style="">	
	</div>
</div>



<div class="wrapper">


<b class="gray-box"> The code is right <a href="https://github.com/laurencee9/GRGImage">here.</a></b>


<h1>{{ page.title }}</h1>

This project is inspired by the work made by the people of <a href="http://macfang.net">Macfang</a>: when your mouse goes over an image, it is transformed into a network. One thing led to another, I found myself coding this exact same thing. With my coworker Charles, we've built from ground up a Python algorithm based on random geometrical graphs. 


<h3>How it works</h3>
The algorithm proceeds as follows:
<ol>
  <li>Take the image and get the intensity of each pixel.</li>
  <li>We then choose random pixels proportionally to their intensities.</li>
  <li>We connect the chosen pixels with <i>k</i> closer neighbors.</li>
  <li>The network is illustrated in the most artistic manner.</li>
</ol>
In practice, we have to tweak a little bit the algorithm. First, we choose images with background and dark objects so that the chosen pixels will be located on the desired objects. Next, we add a contrast parameter which gives more weights to the intense pixel. Using this, we can see sharp dark contours like glasses and eyes. 


<div class="inline-note with-shadow">
	<b>Editorial note</b>
	<br>
	<span>In 2017, we were introduced to the designer and developer who inspired us ( See <a href="http://macfang.net">Macfang</a> ). They told us that they have discovered that the people of <a href="https://www.netsci2018.com"> Netsci </a> were doing the same thing without referring to them. It is not clear if the people of Netsci were magically inspired but it is fair to say the people at Macfang have done a far better work.
	</span>

</div>

</div>




<div class="container">
	<div class="screenshots-container">
		<div class="row">
			<div class="col-sm-4 col-xs-6 screenshot-image ">
				<img src="/assets/portfolio/facenetwork/edward.png" >	
			</div>
			<div class="col-sm-4 col-xs-6 screenshot-image ">
				<img src="/assets/portfolio/facenetwork/charles.png" >	
			</div>
			<div class="col-sm-4 col-xs-6 screenshot-image ">
				<img src="/assets/portfolio/facenetwork/guillaume.png" >	
			</div>
			<div class="col-sm-4 col-xs-6 screenshot-image ">
				<img src="/assets/portfolio/facenetwork/xavier.png" >	
			</div>
			<div class="col-sm-4 col-xs-6 screenshot-image ">
				<img src="/assets/portfolio/facenetwork/vincent.png" >	
			</div>
			<div class="col-sm-4 col-xs-6 screenshot-image ">
				<img src="/assets/portfolio/facenetwork/patrick.png" >	
			</div>
			<div class="col-md-6 screenshot-meta">
				<b>Coworkers</b>
				<hr class="small-line">
				<span class="screenshot-subtitle">These guys were my benchmark for the algorithm. The photos have been taken with a soft background so we don't have to premodify the image. Note the shadow drawn by the algorithm, it gives a little depth impression. Each image has roughly 20000 edges. </span>
			</div>
		</div>
	</div>
</div>



<div class="container">

<div class="screenshots-container">
	<div class="row">
		<div class="screenshot-image">
			<img src="/assets/portfolio/facenetwork/zebra.png" class="with-shadow" style="">	
		</div>
		<div class="screenshot-meta">
			<b>Zebra</b>
			<hr class="small-line">
			<span class="screenshot-subtitle">No animal is better suited for this network mode. Its high contrast makes it the perfect model. Credit photo <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@elijahhenderson?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Elijah Henderson"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Elijah Henderson</span></a></span>
		</div>
	</div>
</div>

</div>

<hr>

<div class="wrapper">

<b class="gray-box"> <a href="https://github.com/laurencee9/GRGImage">See on github</a></b>
<h3>Programming languages and development</h3>
<table cellspacing="0" cellpadding="0" class="table-about">
  <tr>
    <th>Network generation</th> <th>Image creation</th>
  </tr>
  <tr>
  	<td>C++ (winner)</td><td>Gnuplot (winner)</td>
  </tr>
  <tr>
  	<td>Python (too slow to compute) </td><td>D3.js (complicated to save the network)</td>
  </tr>
  <tr>
  	<td></td><td>Python (too slow for large images)</td>
  </tr>

</table>

<!-- 
<h3>Comments on the code</h3>

The first attempt in Python was a fail. The code was taking about 10 minutes to generate a 5k edges network. So we a serie of upgrade before translating it to C++.
<br><br>
First, the major bottleneck was choosing the pixels. Suppose you want to choose 20 pixels from a 100 pixels image. But you also want to choose then proportionally to the intensity of the pixel. The brute force method would be to sum the total intensity of the image and then parse the image and remove the pixel intensity. When you total intensity becomes negative, you choose this pixel. But you would need to rerun this 20 times to choose 20 pixels. Their must be a better approach. Let's say that that the sum of all intensities is <i>S</i>. What are the odds that a pixel of intensity <i>i</i> is not choosen? It is equal to <i>1-i/S</i>.


 -->









</div>

