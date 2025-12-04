---
title: "YAML Sequences"
date: "2025-12-04"
parent: "yaml"
order: 8
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-sequences"]
---

In this section, we are going to discuss sequences. Sequences can also be known as lists, arrays.

Along with mapping, YAML can also be considered as a collection. In YAML, the collection is represented with proper sequence styles.

Example 1:

```yaml
roles:
  - frontend
  - backend
```

The first example shows the collection. It contains a list under roles.

Example 2:

```yaml
host: Noyon Rahman
info:
  location: Gazipur
  age: 21
  phone: +88017********
```

The info mapping, location, age, and phone are also a collection. So, if something indented and all indented together at the same work, this is considered a single collection. So, we have terminology that defines that how list within YAML works.

If we see a list in YAML, they will probably be combined with mapping. So, we will discuss the **mapping of sequences**. The mapping of sequences works if at the end of our file of example 2, we provide roles then we provide anything under roles in list form. This process is known as the mapping of sequences.

Example 3:

```yaml
host-php-42
datacenter:
  location: canada
  cab: 13
  cab_unit: 3
roles:
  - webserver
  - wp_database
```

In the above example, we have roles. Now assume that host-php-42 is a webserver and that webserver has wp_database(Wordpress database). So, we have two roles here, the webserver and the wp_database.

If we have a mapping of sequences, we also have a sequence of mappings or even a sequence of sequences. So, if we want to see the sequence of mapping, we will adapt our location, cab, and cab_unit in this. Instead of starting two spaces before the location, we will first apply a dash and a single space before the location. Similar to key: value pairs, space is non-optional. So, we have dash and space, and under that, we have a list of mapping. There are also other ways to provide sequences.

Sequences can't be blank, and they also can't be nested without mapping. The following example shows what we should not do in YAML:

```yaml
- playbooks
  - wordpress
  -
  - mysql
```

The above example has a list of playbooks. But this list has a lack of colon. The colon is missing, that's why we will not be able to run this YAML file. We also would not able to use it because our second item is completely blank. If we want to consider the second blank item, we have to add two quotes, which are shown as follows:

```yaml
- playbooks
  - wordpress
  - ""
  - mysql
```

Similar to mapping, we also have an option to provide a flow style version of a sequence. So, if we want to adapt roles into flow style, instead of using curly brackets around them, we will use square brackets. We have to provide a comma in between our two values. We also have to remove the brackets and bring it all up on the same line. So, we are going to convert example 1 into flow style as follows:

```yaml
roles: [webserver, wp_database]
```

In this file, we actually write a pretty typical YAML file using just two basic YAML features: mapping, sequences, and combination of mapping and sequences.
