---
title: "YAML Comments"
date: "2025-12-04"
parent: "yaml"
order: 11
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-comments"]
---

If we are familiar with any coding language, data serialization language, or programming language, we know why we talk about comments yet. In YAML, Commenting works in Splash and many other languages.

At the comment, we have to add an octothorpe or a hashtag and a whitespace. Whitespace means a space, a tab, or any spacing between the octothorpe and actual comments. Comments can be placed on their own line. So, we are going to add Philly DC Host Data at the top of the file.

Example:

```yaml
# Philly DC Host Data
---
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
roles:
  - webserver
  - wp_database
```

We can also add inline comments, so we are going to supply the reference id or reference name of Philadelphia, i.e., PHL at the end of Philadelphia. When we add an inline comment, they do have to come at the end of the line. We cannot add any more information about our location here. Because once we add the octothorpe, everything that comes after that is just for us. Whenever human opens the file and take a look at the file, which goes to show us that any information we add to comments should just be for the humans reading. No actual information that a computer is going to need or need to be processed should be added after an octothorpe. The example of the inline comment is as follows:s

Example

```yaml
# Philly DC Host Data
---
host: phl-42
datacenter:
  location: Philadelphia # Reference ID: PHL
  cab: "13"
  cab_unit: "3"
roles:
  - webserver
  - wp_database
```

One more thing we are going to discuss is blank lines. The example of a blank line is as follows:

```yaml
# Philly DC Host Data
---
host: phl-42
datacenter:
  location: Philadelphia # Reference ID: PHL
  #
  cab: "13"
  cab_unit: "3"
roles:
  - webserver
  - wp_database
```

The space between location and cab is just going to be written as a comment. It is not going to particular interrupt anything.

There are wrong ways to use comments, which we are going to understand using the two examples.

Example 1:

```yaml
#Philly DC Host Data
---
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
```

When we see the above example, we can see that the issue is that there is no actual space between the octothorpe and the comment. So when the user is processing our YAML, it is going to know that this is a comment and infect it's more likely that we are going to experience an error with that "after octothorpe no space Philly DC Host Data".

Example 2:

```yaml
#Philly DC Host Data
---
host: phl-42
datacenter:
  location: "Philadelphia #
Reference ID: PHL"
  cab: "13"
  cab_unit: "3"
```

In the above example, if we look at our location data, we do have an octothorpe there, and it does continue to the end, but since for whatever reason, our Philadelphia value is quoted. So the inline comment is going to be included in the quoted string. So there are some easier mistakes we can make while commenting.
