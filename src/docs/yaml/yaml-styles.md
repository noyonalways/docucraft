---
title: "YAML Styles"
date: "2025-12-04"
parent: "yaml"
order: 6
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-styles"]
---

There are two types of styles in which we can write the YAML.

- Block styles
- Flow styles

## Block Style

We previously had seen the block style. Block style is less compact and better for humans. Traditional YAML makes it easy for humans to look at
the file, scan it down, and see what's going on.

Example

```yaml
name: Noyon Rahman
info:
  location: Gazipur
  age: 21
languages:
  - JavaScript
  - TypeScript
  - Python
```

In the above example, the first line shows a **key-value mapping**. Here, we use a colon for key-value pairs. The key is `name`, and the value is **Noyon Rahman**. The second line shows a **key-value mapping indentation**. It has an indentation under the **info**. The two values under `info` are part of `info` mapping. They are associated with each other because they have two space indents before the actual key that is `location` and `age`. The `languages` key shows a **list indentation**. It has indentation because it has a list under the `languages`. It contains the dashes to indicate that it is a list, not just a key-value.

## Flow Style

Flow style is an extension of JSON. It is used to allow YAML and JSON to work together. Flow style is less human-readable, but sometimes they are better for the computer that processing our YAML. Flow style is used to fold the long line of content.

Example

```yaml
name: Noyon Rahman
info: { location: Gazipur, age: 21 }
languages: [JavaScript, TypeScript, Python]
```

Instead of sub-line our `location` and `age` information into indent lines under the `info` key, we have a set of curly brackets, and we define our key: value pairs in those brackets. Similarly, we define an array into a square bracket. It also allows a different use of tag and anchors in our YAML, which we define later.
