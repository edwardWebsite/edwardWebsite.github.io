---
layout: post
title:  "Deep learning project"
date:   2018-06-20
author: Edward Laurence
categories: post
description: ""
---

During the semester of winter 2018, I've taken a deep learning course that covers fully connected and convolutional networks, state-of-the-art architectures and regulations mechanisms, recurrent networks, natural language processing, GAN, and miscellaneous topics. For the final assignment, we have chosen to construct our own dataset by scraping Unsplash website and to infer the EXIF metadata of the images (final paper and image below). The final paper is not published. We have learned so much, particularly that the learning can only be as good as the dataset. 

If you have an interest in the 19000 images dataset or in the code, feel free to send me an <a href="mailto:edward.laurence.1@ulaval.ca">email</a>.
<!--more-->

<b>Final assignment summary:</b><br>
<i>
We used deep convolutional networks to estimate the camera settings, lens aperture, ISO sensibility and exposure time, known as the EXIF metadata solely based on the pixels of the photos. The training has been performed on a novel dataset of 19 000 high quality photos labeled with the camera settings. The results indicated that deep convolutionnal networks have trouble solving the task and achieving high accuracy. We find that the general low performances we obtained are due to the dataset corruption, some class imbalances and possibly the lack of information in the picture alone.
</i>


<b class="gray-box"><a href="/assets/posts/Deeplearning/doc.pdf">Paper</a></b>

<hr>
<div class="screenshots-container">
	<div class="row">
		<div class="col-sm-12 screenshot-image ">
			 <img src="/assets/posts/Deeplearning/bw_panel.png" title="">	
		</div>
		<div class="col-md-6 screenshot-meta">
			<b>Best and worst inferences</b>
			<hr class="small-line">
			<span class="screenshot-subtitle">
Display of the top 5 best (top) and top 5 worst (bottom) predicted examples of the model in the test dataset. Underneath each picture is shown in the form of pie charts the probability distribution of the three bins of each setting given by the model. Light blue indicates low setting, medium blue for medium setting and dark blue for high setting. The largest portion of the chart corresponds to the predictions and the colors of the center display the targeted settings. </span>
		</div>
	</div>
</div>







<!-- <div class="wrapper">
	<div class="inline-note with-shadow">
		<b>About SIAM</b>
		<br>
		<span>
		</span>
	</div>
</div> -->