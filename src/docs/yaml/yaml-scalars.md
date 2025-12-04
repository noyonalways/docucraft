---
title: "YAML Scalars"
date: "2025-12-04"
parent: "yaml"
order: 9
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-scalars"]
---

In this section, we are going to discuss about scalars. We already learned mapping and sequences. While using mapping and sequences, we already used scalars. Scalars are a string, a number, or Boolean. White space is permitted in YAML.

Example 1:

```yaml
host: php-42
datacenter:
  location: Las Vegas
  cab: 13
  cab_unit: 3
```

In the above example, Las Vegas is valid, just like Canada. We don't need to put Las Vegas in quotes to make it a string.

We will use single quotes or double quotes to convert a non-sting scalar into a string scalar. In example 1, the values 13 and 3 are plain numbers. They are not considered strings. But it is possible to convert these numbers into strings. We can either use single quotes around them or double quotes around them to convert them into strings.

Example 2:

```yaml
host: php-42
datacenter:
  location: Canada
  cab: "13"
  cab_unit: "3"
```

The difference between single quotes and double quotes is double quotes allow **escape sequences**.

Example 3:

```yaml
host: php-42
datacenter:
  location: Canada
  cab: "13\n"
  cab_unit: '3\n'
```

When we process the above example:

```yaml
host: php-42
datacenter:
  location: Canada
  cab: 13
  cab_unit: 3\n
```

That means double quotes consider **\n** as a new line, and single quotes consider it as a normal text. Scalars mean one individual piece of content. So the location key itself a scalar, Canada value itself also a scalar. So mapping is essentially used to assign one scalar to another.

If we want to add a value that happens to be longer and need to spend across multiple lines, there are two different symbols which allow for multiple lines. The first one is |, and the second one is >.

> In YAML, we can write a multi-line string in a newline using \| symbol. In this, the newline character(\n) will be **included**.

Example 4:

```yaml
downtime_sch: |
  2019-07-29 - kernel upgrade  
  2020-05-12 - security fix
```

In the above example, we have a downtime_sch key, and then we have a \| symbol, which indicates that it is going to be multiple lines. Now under that, we have a date for a kernel upgrade in the first line, and we have a date for security fix in the second line. When we process the above example, we will see the new lines where they are in the document as follows:

```yaml
downtime_sch:
2019-07-29 - kernel upgrade
2020-05-12 - security fix
```

> In YAML, we can write a multi-line string in a single line using > symbol. In this, a newline character(\n) will be **ignored**.

Example 5:

```yaml
comments: >
  Experiencing high I/O  
  since 2019-04-29.  
  Currently investigating
```

We have a comment line, and then we have a >(closing angular brackets). Now under that, we can type any comment that we want. We have written Experiencing high I/O in the first line, since 2019-04-29 in the second line, and Currently investigating in the third line. When we process the above example, it will interpret without the new lines as follows

```yaml
comments: Experiencing high I/O since 2019-04-29. Currently investigating
```

During the YAML file, we can set the value of a data variable to be null. Later, we can write a program to change the value of null to any other value.

```yaml
str1: null
str2: ~
```

Our program processes this as follows:

```yaml
str1: none
str2: none
```
