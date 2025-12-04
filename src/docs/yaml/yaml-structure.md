---
title: "YAML Structure"
date: "2025-12-04"
parent: "yaml"
order: 10
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-structure"]
---

In YAML, we can add multiple directives or documents in a single file. Before we do that, we are going to add some additional structural options. So while using a YAML if we want to know the start of a file, we will supply three initial dashes at the top of a file.

Example:

```yaml
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
```

For these single directives or a single document file, these three dashes are optional. If we are creating multiple document streams, these three dashes are mandatory. There are two ways where we can use these triple dashes.

In the above example, we have our host information for phl-42, but what if we want to add another Philadelphia host i.e., phl-43. So instead of creating a second host of YAML file, we will actually add three more dashes at the end of the above YAML file. After these three dashes, we can continue on to supply the additional host information.

```yaml
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
---
host: phl-43
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "4"
```

So now we have phl-43. Now we can supply our datacenter information. Under that, we added location, cab and cab_unit as Philadelphia, 13, and this time the cab_unit is 4. Three dashes separate our directives.

We can keep doing this for as long as we need. If we want to go ahead and add one more host information about Philadelphia i.e., phl-44. We can keep going and adding our documents and directives.

```yaml
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
---
host: phl-43
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "4"
---
host: phl-44
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "5"
```

Now we add all the data that we want to add. Beyond just triple dashes, we also have the option to use triple dotes. Now, beyond just applying information about our Philadelphia host, we also want to add information about our Helsinka host.

When we add three dots in place of three dashes, these three dots will provide the signal about the end of this directive or this entire collection by closing the data stream. So after three dots, we are actually adding three dashes to open up another document and then we supply additional information that is necessary directly related to our Philadelphia host, but we will add in the end of the information that we are supplying.

```yaml
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
---
host: phl-43
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "4"
---
host: hel-13
datacenter:
  location: Helsinka
  cab: "9"
  cab_unit: "2"
```

So instead of supplying the information of our Philadelphia host, we will supply the information about Helsinka host 13, i.e., hel-13. Now we can go ahead and supply whatever information we want to add. So we add datacenter, and under that we add location, cab, and cab_unit as Helsinka, 9, and 2.

Now we can keep going and adding Helsinka host many time we need it or we can go ahead and end the stream with three dots.

```yaml
host: phl-42
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "3"
---
host: phl-43
datacenter:
  location: Philadelphia
  cab: "13"
  cab_unit: "4"
---
host: hel-13
datacenter:
  location: Helsinka
  cab: "9"
  cab_unit: "2"
---
host: hel-14
datacenter:
  location: Helsinka
  cab: "9"
  cab_unit: "1"
```

In the above example, we add one more information about Helsinka host i.e., hel-14, and end the stream with three dots.

Often we are using YAML, especially for configuration and configurations files, we notice that the three dashes and three dots separators are entirely optional.
