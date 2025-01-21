export const posts = [
  {
    title: "Building Kenja: Adventures in Information Retrieval",
    date: "January 15, 2024",
    slug: "building-kenja-adventures-in-information-retrieval",
    excerpt: "Exploring the challenges and solutions in building an advanced information retrieval system.",
    content: `
      <p>
        Information retrieval (IR) is a fascinating field that combines elements of computer science, linguistics, and cognitive psychology. In this post, I'll share my experience building Kenja, an IR system designed to make information discovery more intuitive and efficient.
      </p>
      
      <h2>The Challenge</h2>
      <p>
        When we started building Kenja, we faced several key challenges:
        <ul>
          <li>How to effectively index and search through large amounts of unstructured data</li>
          <li>Creating a ranking system that truly understands user intent</li>
          <li>Balancing precision and recall in search results</li>
        </ul>
      </p>

      <h2>Our Approach</h2>
      <p>
        We decided to implement a hybrid approach combining traditional IR techniques with modern machine learning methods. This included:
        <ul>
          <li>Vector space modeling for document representation</li>
          <li>BERT-based semantic search</li>
          <li>Custom ranking algorithms</li>
        </ul>
      </p>
    `,
  },
  {
    title: "Building Kenja: The Beginning",
    date: "January 1, 2024",
    slug: "building-kenja-the-beginning",
    excerpt: "The story of how Kenja started and our initial vision for the project.",
    content: `
      <p>
        Every project has its origin story, and Kenja is no different. What started as a simple idea to improve how we interact with information has evolved into something much more ambitious.
      </p>

      <h2>The Genesis</h2>
      <p>
        The idea for Kenja came from a simple observation: despite having access to more information than ever before, finding exactly what we need when we need it remains surprisingly difficult. We wanted to change that.
      </p>

      <h2>Initial Goals</h2>
      <p>
        Our initial goals were straightforward:
        <ul>
          <li>Create a more intuitive way to search through information</li>
          <li>Develop a system that learns from user interactions</li>
          <li>Build something that could scale with growing information needs</li>
        </ul>
      </p>
    `,
  },
  {
    title: "Tutorial: Oxford Comma Detection with Machine Learning",
    date: "December 15, 2023",
    slug: "tutorial-oxford",
    excerpt: "A step-by-step guide to building an Oxford comma detector using NLP and machine learning.",
    content: `
      <p>
        In this tutorial, we'll build a machine learning model that can detect whether a sentence uses the Oxford comma. This is a fun way to explore natural language processing while solving a real (if somewhat niche) problem.
      </p>

      <h2>What is the Oxford Comma?</h2>
      <p>
        The Oxford comma, also known as the serial comma, is the comma used before the conjunction (usually "and" or "or") in a list of three or more items. For example:
        <ul>
          <li>With Oxford comma: "I love cats, dogs, and birds"</li>
          <li>Without Oxford comma: "I love cats, dogs and birds"</li>
        </ul>
      </p>

      <h2>Building the Detector</h2>
      <p>
        Our approach will involve:
        <ul>
          <li>Text preprocessing and tokenization</li>
          <li>Feature extraction using spaCy</li>
          <li>Training a simple classifier</li>
          <li>Evaluating the results</li>
        </ul>
      </p>
    `,
  },
]

