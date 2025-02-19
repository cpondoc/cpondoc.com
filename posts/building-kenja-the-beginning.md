---
title: "Building Kenja: Navigating the Idea Maze"
date: "2024-08-18"
excerpt: "How me and a couple of friends started a software project."
---

During my senior year of undergrad, I tried starting a startup with a [couple](https://www.linkedin.com/in/jobr2024/) [of](https://www.linkedin.com/in/joseph-guman/) [friends](https://www.linkedin.com/in/travis-senf-bb3b27168/). While we were ultimately unsuccessful, I learned a lot in the process and wanted to jot down some thoughts. In particular, this post will cover the beginning, from ideation to picking a direction for us to build.

This piece is the first in a planned series recapping the overall experience.

# The Beginning
My friends and I had always thought about building a startup. I know: it’s not a unique thought, especially not at Stanford. Still: after spending summers working at larger software companies, we wanted to have a bit more agency and impact with our work. We had also done successful research projects in the past, so we felt as though building our own business was a logical first step.

We finally got a chance to build as part of [CS 210](https://stanford.edu/class/cs210/index.html), a class where you get to build projects alongside corporate partners (and a class I would highly recommend for any Stanford CS student). Our team’s strengths were aligned around machine learning and systems, and all of us had done some form of research with a short stint as a software engineer at a big company. As we started brainstorming initial ideas, there were two categories we had in mind.

## Machine Learning…
Our first ideas were around building machine learning infrastructure, specifically MLOps. This category made a lot of sense for us: given our experience deploying ML systems in industry and academia, we had an opinionated view on what tools were out there and what gaps needed to be filled. In fact, a lot of our ideas came from problems we had solved at previous companies/research:
- An initial idea we had was around detecting fake images generated by diffusion models, like DALLE and Stable Diffusion. The Joeys and I had previously [published research](https://openreview.net/pdf/ec4914ddf4cc39b7407d8119f6bdf679f7918d92.pdf) on this topic, and given that text-to-image models only continued to get better, any company that dealt with some sort of image data could potentially benefit.
- Another idea came out of a proposed project during my time at Splunk: synthetic data. Now popularized by the likes of [AlphaGeometry](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/), we thought about building a platform that could help turn natural language queries into datasets developers could use for fine-tuning, supervised learning, and even just general testing of software. Once again, synthetic data felt like a straightforward value add: all tailwinds pointed towards enterprises increasingly adopting AI and LLMs, and despite some research pointing towards potential [model degradation](https://en.wikipedia.org/wiki/Model_collapse) from synthetic data, results were not conclusive enough.

Looking back, we were a bit hesitant to build a company in the ML space. Even now, **there’s a lot of noise around tooling, and there were -- and continue to be -- many questions about value accrual**. For instance: does all value flow to the model providers? What about the race of incumbents versus newcomers, especially when a lot of internal teams could build homegrown MLOps solutions? Finally: what about the ease of switching between open-source tools and frameworks (i.e. changing between GPT-4 and Claude is a matter of switching an API key)? Overall, we were unconvinced we could find an idea with a moat, so while we kept an open mind, we tried exploring some other ideas.

## …and Everything Else
After brainstorming around ML, we decided to poke our heads into just about everything else. There were, of course, obvious challenges: investigating an industry that you know nothing about meant that you had to be willing to become an expert and learn a lot in just a short amount of time. Nonetheless, it also meant that were could look at certain industries with a brand new perspective and without too preconceived notions.

One industry that we thought about looking into was agriculture, especially regarding the application of big data. After some insightful conversations, though, we found that despite growing interest in the space, we were still a bit too early. In other words: the space was not mature enough to merit a large total addressable market (TAM). Then, we went to the tried and true method of asking our families and friends about problems they had. We got a lot of good places to start: patent law search, automation of medical forms, and others. However, the one idea that truly caught our attention centered around wine.

# Lessons from the Wine Industry
After Guman talked with one of his family friends up in Napa, our attention shifted towards building a B2B marketplace where vineyards and wineries could connect to buy wine. The needs on both sides were simple: vineyards and wineries were smaller shops looking for new clients, and restaurants were desperate to find new wines to add to their lists. We also felt like our connections up in Napa, as well as the depth of the Stanford network, would allow us to quickly learn, iterate, and pilot our product. The market was mature enough and had a large size, and we also figured that our ML chops could help us build a differentiator: an incredibly strong recommendation algorithm. With enough conviction, we set sail on the idea, starting off with some needfinding.

To our surprise, most folks in the wine space that we chatted with – whether Stanford alumni or family friend connections – were more than happy to talk about their experiences. While we were rather unstructured in our methods of poking and testing for a desperate need for the project, our conversation, coupled with our own market research and a quick prototype, ultimately made us realize that the wine tech space would be a slippery slope. We had three main takeways from our initial needfinding.

![68747470733a2f2f692e6962622e636f2f34386e3276634d2f736f6d6d656c69657264656d6f2e706e67](https://bear-images.sfo2.cdn.digitaloceanspaces.com/chrispondoc-1724042452.png)

## The Wine Space was Difficult
We found the wine space to be generally hard. There's a lot of regulation, and each state has its own laws about how distribution works. Especially in California, there are magnitudes more vineyards compared to distributors. Given the amount of manpower and cost required to set up a relationship with a vineyard, most distributors, then, only work with larger vineyards. Most people also don't buy wine online, but in person.

## Imbalanced Need in the Marketplace
We also found that restaurants traditionally had a stronger need for our marketplace compared to vineyards. While starting a vineyard is hard, starting a restaurant is even harder, and many of these places wanted an almost 40% markdown from the prices vineyards sell their wines. It also didn't seem hard for wines to get themselves into restaurants as a result of this dynamic. Thus, going into the future -- and as a result of larger tailwinds, such as the pandemic -- most revenue seems to be in the direct-to-consumer (D2C) space as opposed to more B2B.

## An Emphasis on Recommendation
Finally, we found that our concept of a recommendation algorithm was a hit. Even outside of demoing our platform to different users, we found that some folks even nudged towards the concept of recommendation (one person even mentioned how he wanted a "Pandora for wine") without us prompting them to do so.

# Deciding on the First Iteration of Kenja
After synthesizing our learnings, we decided we were back at square one: wine was just a tough place to play. However, we still had a valuable insight around the idea of recommendation. From here, we took a step back and decided to connect the dots:
- Despite the multitude of existing search algorithms and social media platforms, **recommendations for new things seemed to be something everyone wanted**. Nobody had it perfect, and there was also a clear connection to ROI (if you provide better recommendations, more people will click on your ads/watch your posts/buy your products, so everyone wins).
- There was – and continues to be – a huge technical inflection point: large language models. While Google was good at matching keywords and short sentences to website links, platforms like Perplexity and ChatGPT can literally take any amount of gibberish you give it and spit out a reasonable answer. The productization and availability of these models, alongside better tooling around embeddings and compute, made these technologies more potent than ever before.

Putting these two ideas together, we decided to pivot just slightly from our idea: rather than focusing on just wine, why not empower users to search and shop for just about any item on the internet? Thus, Kenja was born: think of a modern-day Wirecutter or Consumer Reports, but built to curate items at scale. At the end of Winter quarter, this was the direction we decided to build in.

