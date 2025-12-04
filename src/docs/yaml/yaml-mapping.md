---
title: "YAML Mapping"
date: "2025-12-04"
parent: "yaml"
order: 7
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-mapping"]
---

In this section, we will write proper YAML. YAML mappings are also known as associative arrays, hash tables, key: value pairs, or collection. In mapping, the name of two keys can't be the same. There are four types of mapping:

- Simple mapping
- Sequence mapping
- Nested mapping
- Mixed mapping

## Simple Mapping

In simple mapping, we will provide a key in the first part, and then separate with a colon and space. It is necessary to use a space. We will put each member of the list on a new line if we want to add a keyed list(dictionary) on our document, in this example, we have a host key, and the host's value is phl-42. We also have a key student, and the name of student is harry.

Example:

```yaml
repo: learning-yaml
student: noyon
```

In a single key: value mapping, we will change the above YAML into flow style. So we will use double quotes to show the value of key. When we evaluate the above YAML example in python, we will get the following:

```yaml
repo: "learning-yaml"
student: "noyon"
```

## Sequence in a Mapping

We can map the value of the key in sequence. In the following example, we have a key languages and a list under languages. It contains the dashes to indicate that it is a list, not just a key-value.

Example

```yaml
student: noyon
languages:
  - JavaScript
  - TypeScript
  - Python
```

In sequence key: value mapping, we will change the above YAML into flow style. So we have to use square brackets to show the list of languages, and we also have to use commas between all languages. We will add all these in a single line. When we evaluate the above example, we will get the following:

```yaml
student: "noyon"
languages: [JavaScript, TypeScript, Python]
```

## Nested Mapping

We can nest our mapping within each other. In the following example, we have a key info, and under info we have three key: value pairs. The first one is location for the value Gazipur. The second one is age for value 21. The third one is email for value noyonrahman@gmail.com.

```yaml
name: Noyon Rahman
info:
  location: Gazipur
  age: 21
  email: noyonrahman@gmail.com
```

In the nested key: value mapping, we will change the above YAML into flow style. So we have to use curly brackets, and we also have to use commas between our additional values. We will add all these in a single line as follows:

```yaml
name: "Noyon Rahman"
info: { location: Gazipur, age: 21, email: noyonrahman@gmail.com }
```

## Mixed mapping

In mixed mapping, we have an assortment of mapping and sequences as values.

Example

```yaml
student: Noyon Rahman
details:
  email: noyonrahman2003@gmail.com
  phone: +88017********
more:
  - subject1
  - subject2
```

When we evaluate the above YAML example, we will get the following:

```yaml
student1: "Noyon Rahman"
details: { email: noyonrahman2003@gmail.com, phone: +88017******** }
more: [subject1, subject2]
```
