---
title: "Building Kenja: Adventures in Information Retrieval"
date: "2024-09-08"
excerpt: "Exploring the challenges and solutions in building an AI search system."
---

# Introduction 
This post is the second in a series about my time building Kenja, a startup focused around AI search for e-commerce. Whereas the first piece covered navigating the idea maze, this piece will go in-depth on our technical approach and the many iterations of our search algorithm.

# Framing the Problem
Kenja focused on helping shoppers search for items using natural language. After much debate – which will be the focus of a future blog post – we focused on the B2B problem, which meant that instead of crawling the general Internet for items for user queries, we focused on answering questions based on a store’s product catalog.

From our research and user discovery, business would provide us data in the form of a structured table (i.e., in the form of a CSV file, relational database, etc.). Each row would contain a SKU, and each column would correspond to the various properties of the item (e.g., name, description, color, and more). To validate our value proposition, we used data from SUPost – best described as the Stanford version of Craigslist – for our demos and benchmark, although we acknowledge that catalogs can have drastically different data.

Thus, the problem would take as input the data above as well as a natural language description, and would output the rows corresponding to the items that best fit with the user’s query. There are several ways of tackling this problem: TableQA and text-to-SQL come to mind. Ultimately, we decided to tackle this by using Retrieval Augmented Generation (RAG), and built our own custom pipeline based on several engineering experiments.

# The Find-and-Filter (FAF) Algorithm
The core algorithm behind our retrieval pipeline was known as find-and-filter (FAF). The key idea was to continue to take the large state space of candidates and prune them down until we had only a small number of candidates, which we could then use as a prompt to a downstream language model.

The idea was as follows: first, let the business owner pick the top 3 most relevant columns in the structured table. Empirically, we often found that attributes such as the item description, title, and any tag-related columns were best. Then, we would pre-process all of the data and create embeddings for each item and for each feature, saving them in a vector store.

During runtime, we would then embed the user’s query and find the most relevant matches based on one of the features (i.e., say, the top 10% of matches, although this is a tunable hyperparameter). We would subsequently compare the user’s query to the embeddings for these candidates but for a second feature, pruning out of even more candidates. After doing this for another layer, we would then have a solid 5-10 candidates, which we would then give to a language model to decide and output the best possible options.

In experimenting with our classmates, we found that our retrieval algorithm was quite strong at handling more verbose natural language queries that you would supply to the likes of ChatGPT. However, despite nudging people to use this type of search, users often still opted for traditional keyword-based search. Given that features such as the description could be quite long, using embedding similarity for these queries often lead to unmeaningful results, even with relevant results were contained within the dataset. Ultimately, given that we were unable to essentially be “backwards-compatible,” we took a step back and thought about a way to introduce our new functionality without sacrificing what people were used to.

# An Attempt at Hybrid Search
We knew that the issue with our search results was that we were unable to match queries that had one or two specific keywords. Thus, we went with the dumbest possible solution for a hybrid approach: why not embed some heuristic based strictly on the nouns from a query?

The idea: in addition to pre-processing the three most important features self-identified by the business owner, collate all of the content across the columns, extract the nouns, and concatenate those words into a singular string to embed. Then, on runtime, do the exact same with the query, and in addition to the candidates produced by the three layers of FaF, also do similarity search across the noun embeddings and give those as more options to the language model (in case they weren’t already surfaced).

This ended up improving our results, and we feel like the reason why was because we were able to cover both angles of search. Namely: FaF could help find the candidates that were a good fit based on description and semantic, while the noun extraction would help us find more objectively good matches based on the explicit query. We would then pass off the heavy lifting to the LLM, allowing it to determine which of the candidates would be a better match.

# A Hodgepodge of Observations and Learnings
Overall, given our limited time, we felt as though we did a good job at coming up with a strong approach to information retrieval, especially by leveraging state-of-the-art language models. Looking back, there’s a lot of things we learned and observed along the way that I felt would be relevant if we were to go back and try things again:

## Referencing Existing Literature
I think something we could’ve done a bit better would be referencing existing literature a lot more often. Our approach was certainly more piecemeal and leaned on our strengths as engineers. However, moving forward, I would’ve tried to find some way to make sure our group was closer to literature while still shipping fast. Not only is this true from a macro point of view – for instance, looking at existing approaches to hybrid search, such as BM-25 – but also for the more granular details – a notable example was in picking the right similarity function, which ended up also being a huge boost in our search results.

## Productionizing ML Pipeline
I wish our team would’ve explored further the opportunities for better productionization of our ML pipelines. Our retrieval process was overall quite slow, and while this ultimately wasn’t because of FaF, I’m curious about the improvements we could’ve reached by using cloud architecture to instead serve a smaller model for prompting as opposed to making API calls to ChatGPT.

## Defining Better Evaluations
With more time, defining more structured evaluations for our algorithm’s performance would’ve been a good way to iteratively benchmark process. While iterating based on feedback from users is always the right approach, we could’ve done more to proactive test with different inputs and get a gauge for quality before demoing our application in the wild. This is, assuredly, an open question, but would’ve been an interesting contribution.

# Conclusion
And that about does it! We hope this piece can be helpful for applied AI folks who are doing their own tinkering around RAG. The last piece in this series will be around wrapping up all of the loose ends: after going through ideas and building out our ML systems, what happened with the startup? More on that in a future post

