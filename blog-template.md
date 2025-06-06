# Blog Content Guidelines

Welcome to the blog content guidelines! This document will help you create consistent, high-quality, and SEO-friendly articles for our platform.

---

## 1. SEO Best Practices

* **Headlines (H1, H2, H3):**
    * **H1 (Title):** Automatically generated from the 'Title' field in the CMS. Ensure it's clear, descriptive, and contains your primary keyword. There should only be one H1 per article.
    * **H2s (Subheadings):** Use H2s to break up your content into digestible sections. Include secondary keywords where natural.
    * **H3s (Sub-subheadings):** Use H3s to further organize content within H2 sections.
    * **Markdown Syntax:**
        ```markdown
        # My Awesome Blog Post (H1 - Title field in CMS)

        ## Section 1: Introduction (H2)
        ### A Quick Overview (H3)

        ## Section 2: Deep Dive (H2)
        ```

* **Meta Description (Excerpt field in CMS):**
    * Keep it under 160 characters.
    * Summarize the article engagingly.
    * Include your main keyword.
    * Aim for a compelling call to action if appropriate.

* **Keywords:**
    * Naturally integrate your target keywords throughout the article.
    * Avoid keyword stuffing. Focus on readability first.
    * Use variations and related terms.

---

## 2. Content Layout Expectations

* **Paragraphs:** Keep paragraphs relatively short (3-5 sentences) for readability.
* **Lists:** Use bullet points or numbered lists for easy-to-scan information.
    * Markdown Syntax:
        ```markdown
        * Item 1
        * Item 2
        * Item 3

        1. First step
        2. Second step
        3. Third step
        ```
* **Bold & Italic:** Use sparingly for emphasis.
    * Markdown Syntax: `**bold text**` and `*italic text*`
* **Images:** Ensure your `coverImage` is high-resolution and relevant. If adding images within the body (once supported), ensure they are optimized for web (compressed).
* **Readability:** Aim for a conversational tone. Use active voice.

---

## 3. Link Formatting and Interlinking Rules

* **Internal Links:** Link to other relevant articles on our blog or pages on our website whenever it makes sense and adds value for the reader. This helps SEO and user navigation.
    * Markdown Syntax: `[Anchor Text](URL)`
    * Example: `Check out our [guide on Next.js setup](/blog/nextjs-setup).`
* **External Links:** If linking to external resources, ensure they are reputable and add value.
    * Markdown Syntax: `[External Resource Name](https://example.com)`
    * Always ensure external links open in a new tab/window for better user experience. (Note: Markdown alone doesn't directly support `target="_blank"`, but your rendering engine might add it if configured, or you'll need to manually add HTML if direct external linking within Markdown is enabled and needs this.)
* **Anchor Text:** Use descriptive anchor text (the visible part of the link) instead of generic phrases like "click here."

---

## 4. General Tips

* **Proofread:** Always proofread your content for typos, grammatical errors, and clarity.
* **Tone:** Maintain a consistent brand voice.
* **Originality:** Ensure all content is original and not plagiarized.