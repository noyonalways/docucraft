---
title: "Basic YAML Syntax"
date: "2025-12-04"
parent: "yaml"
order: 4
author: Noyon Rahman
category: yaml
tags: ["yaml", "basic-yaml-syntax"]
---

A YAML format primarily uses three node types:

1. **Maps/Dictionaries:** - (YAML calls it mapping) The content of a mapping node is an unordered set of key/value node pairs, with the restriction that each of the keys is unique. YAML places no further restrictions on the nodes.
2. **Arrays/Lists::** - (YAML calls them sequences) The content of a sequence node is an ordered series of zero or more nodes. In particular, a sequence may contain the same node more than once. It could even contain itself.
3. **Literals:** (Strings, numbers, boolean, etc.) The content of a scalar node is an opaque datum that can be presented as a series of zero or more Unicode characters.

| Character | Functionality                                   |
| --------- | ----------------------------------------------- |
| :         | It is used to describe the mapping value.       |
| -         | It describes the entry of the block sequence.   |
| '         | It describes the entry of flow collection.      |
| ?         | It is used to describe the mapping key.         |
| !         | It describes the tag a node                     |
| &         | It describes the anchor property of a node      |
| #         | It is used to describe the comments             |
| >         | It is used to describe the folded block scalar. |
| {         | It is used to start the mapping of flow         |
| }         | t is used to end the mapping of flow.           |
| [         | It is used to start the sequence of flow        |
| ]         | It is used to end the sequence of flow          |
| %         | It describes the use of directives.             |
| \*        | It is used to describe the alias node.          |
