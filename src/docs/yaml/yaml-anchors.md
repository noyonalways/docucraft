---
title: "YAML Anchors"
date: "2025-12-04"
parent: "yaml"
order: 12
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-anchors"]
---

In this section, we are going to learn how to utilize Anchors. It allows us to store and reuse data within our YAML file. When we enter data into our YAML file, we might find that some data or an entire collection of data gets reused throughout the file, as shown below:

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
---
host: phl-43
datacenter:
  location: ! PHL Philadelphia
  cab: !!str 13
  cab_unit: !!str 4
```

In the above example, the Philadelphia location and roles are reused in the phl-42 host and phl-43 host. Instead of copying and pasting all of the same roles into every single server that serves our word press host. We can set an anchor that will put in all of the roles of the word press host, and then automatically add them into any line that contains the reference anchor.

Let's go ahead and write some of this to see action. So if we want to set up an anchor, instead of trying to type our Philadelphia location every time, we reference Philadelphia in our PHL and our full datacenters. We will substitute the plain old tag, as shown in example 1, and replace the exclamation point(!) with the end(&) symbol. The & symbol is used to set an anchor. So later we go to the bottom of our phl-43 host data, and remove the location where we have manually typed the name Philadelphia and just reference our Philadelphia line with astrict(\*) PHL, as shown in the following example:

```yaml
%TAG ! tag:hostsdata:phl:
---
host: phl-42
datacenter:
  location: &PHL Philadelphia
  cab: !!str 13
  cab_unit: !!str 3
roles:
  - webserver
  - wp_database
---
host: phl-43
datacenter:
  location: *PHL
  cab: !!str 13
  cab_unit: !!str 4
```

However, we don't have to limit ourselves to our anchor referencing a single line. So we will go back to the example of roles. Where we have our roles information, i.e., this is a web server and word press database. So it is safe to assume that this is a word press host. So we want to set a tag so that every word press host can use these roles. So after the colon and a white space, we add & symbol and then wphost in line with the roles data. We can also add &wphost on the next line of a role. Either way, this is going to put everything in this collection of the webserver and wp_database information.

```yaml
%TAG ! tag:hostsdata:phl:
---
host: phl-42
datacenter:
  location: &PHL Philadelphia
  cab: !!str 13
  cab_unit: !!str 3
roles: &wphost
  - webserver
  - wp_database
---
host: phl-43
datacenter:
  location: *PHL
  cab: !!str 13
  cab_unit: !!str 4
```

In the above example, we don't have any roles added to the second host definition, i.e., **phl-43**. So if we go ahead and add our roles file and if whatever reason our **phl-43** host forwards the same information as our **phl-42** host, then we can go ahead and reference this with just \***wphost**. Now when the data is parsed, it is going to put in the **webserver** and **wp_database** list from the instance of the **wphost anchor**.

```yaml
%TAG ! tag:hostsdata:phl:
---
host: phl-42
datacenter:
  location: &PHL Philadelphia
  cab: !!str 13
  cab_unit: !!str 3
roles: &wphost
  - webserver
  - wp_database
---
host: phl-43
datacenter:
  location: *PHL
  cab: !!str 13
  cab_unit: !!str 4
roles: *wphost
```

In the above example, we will notice when using this, i.e., if we reuse the name of the **anchor** later on the file, it will work in the same way as we are using a **variable** in most programming languages. It will reassign the value of that anchor to whatever the **new value** is.

If we assign **&PHL** tag to **phl-43** host, the location under **phl-43** host is not going to be the **Philadelphia** from the instance at the top. It is going to be the same as the host key that is **phl-43**.

```yaml
%TAG ! tag:hostsdata:phl:
---
host: phl-42
datacenter:
  location: &PHL Philadelphia
  cab: !!str 13
  cab_unit: !!str 3
roles: &wphost
  - webserver
  - wp_database
---
host: &PHL phl-43
datacenter:
  location: *PHL
  cab: !!str 13
  cab_unit: !!str 4
roles: *wphost
```
