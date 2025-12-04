---
title: "YAML Tags"
date: "2025-12-04"
parent: "yaml"
order: 13
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-tags"]
---

In this section, we are going to learn how to use tags within our YAML files. So tags can use one of three purposes within a YAML file that is described below:

- We can utilize tags to set a custom URI (universal resource indicator), which is used to reference our tags.
- We can also use them to set local tags. Local tag is a tag that is relevant only to the existing YAML file. If we include a local tag in the body of our file, that tag will also be tagged on to the end of a universal resource indicator (URI).
- We can also use tags to set the data type. In the previous examples, we can manually set the cab and cab_unit using quotation marks.

## Set a URI:

We don't need these URI tags for any configuration management or just configuration file settings that were using YAML. However, if we are using YAML as a data store for an application we are creating, the URI tags are useful. URI tags are useful if we use conjunction or JYAML or whatever YAML API is available with our programming language. The custom URI that we want to set ends up in the metadata area of our host file or any YAML file. So the URI will set above our three-dot start document indicators. We first define a URI tag by adding the % (percent sign) and Tag indicator, and then we can go ahead and add an exclamation point (!), which is going to work as a prefix to the local tag.

### Syntax

```yaml
%TAG ! prefix
```

Now we set the prefix to our URI. In this case, we will set our prefix as tag:hostsdata:phl: described below:

```yaml
%TAG ! tag:hostsdata:phl:
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

## Set a Local Tag

Now we go ahead and set a local tag to our document. To do this, we are using the Philadelphia location. We assign the exclamation point(!) and PHP tag before Philadelphia, which denotes that we are working in location Philadelphia. Now when we reference this, we will call it tag:hostsdata:phl:PHL. That's all we will do to set a local tag, and then we will be able to reference the tag.

```yaml
%TAG ! tag:hostsdata:phl:
---
host: phl-42
datacenter:
  location: ! PHL Philadelphia
  cab: "13"
  cab_unit: "3"
roles:
  - webserver
  - wp_database
```

## Set Datatype

We can also utilize a tag to change the functionality of how are parser read our YAML. Now we set our cab and cab_unit to string without using quotes because YAML does not involve quotes (""). Using tags, we can change the data type. To do this, we will use two exclamation points(!!), after that, we go ahead and set our data type, which in this case is str means string. We can also change it into different data types like sequence, mapping, etc. When we are working in a specific language like Python, Ruby, then that language or that program has an additional set of data type tags we can reference.

```yaml
%TAG ! tag:hostsdata:phl:
---
host: phl-42
datacenter:
  location: ! PHL Philadelphia
  cab: !!str 13
  cab_unit: !!str 3
roles:
  - webserver
  - wp_database
```
