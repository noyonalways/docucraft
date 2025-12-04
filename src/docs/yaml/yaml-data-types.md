---
title: "YAML Data Types"
date: "2025-12-04"
parent: "yaml"
order: 5
author: Noyon Rahman
category: yaml
tags: ["yaml", "yaml-data-types"]
---

YAML has three types of data types:

- Scalar
- List
- Dictionary

## Scalar data type:

Scalar is a simple data type. In YAML, scalar means a simple value for a key. The value of the scalar can be integer, float, Boolean, and string. Scalar data types are classified into two data types:

1. Numeric Data type
2. String

### Numeric Data type

There are three types of numeric data type:

- Integer
- Floating point numbers
- Booleans

1. An **Integer data type** can be decimal, octal, or hexadecimal.

For example:

```yaml
age: 12345
octalexample: 012345
hexaexample: 0x12d4
```

Here, the hex value is indicated by 0x, and octal value is indicated by leading zero. When we run this document on our python script, the following output will be generated:

```yaml
age: 12345
octalexample: 9946
hexaexample: 4820
```

2. The **Floating-point value** can be fixed and exponential

For example:

```yaml
height: 180.0
exp: 12.3015e+05
```

When we evaluate the above entity, we will get the following:

```yaml
height: 180.0
exp: 1230150.0
```

3. A **Boolean value** can be True/False or Yes/No or On/Off.

For example:

```yaml
boolenval1: True
booleanval2: False
fan: On
light: Off
```

### String

YAML strings are Unicode. In the following example, we are going to define a simple string, without using quotes.

Example:

```yaml
str1: this is a normal string
```

When we process this, the following output will be generated:

```yaml
str1: this is a normal string
```

Now, we will define a string with an escape sequence. The following string contains a special character (anything other than alphanumeric), so it contains double-quotes.

```yaml
str1: "the cost is 390\n"
str2: the cost is 390\n
```

When we process this, the following output will be generated:

```yaml
str1: the cost is 390
str2: the cost is 390\n
```

During the YAML file, we can set the value of a data variable to be null. Later, we can write a program to change the value of null to any other value.

```yaml
str1: null
str2: ~
```

Our program processes this as:

```yaml
str1: none
str2: none
```

> In YAML, we can write a multi-line string in a single line using > symbol. In this, a newline character(\n) will be ignored.

Example:

```yaml
str: >
  this is a multi-line string it  
  spans more than one  
  line
```

The above string will interpret without the new lines as follows:

```yaml
str: this is a multi-line string it spans more than one line
```

> In YAML, we can write multi-line string in a newline using \| symbol. In this, the newline character(\n) will be included.

Example:

```yaml
str: |
  this is a multi-line string it  
  spans more than one  
  line
```

So we see the new lines where they are in the document as follows:

```yaml
str : this is a multi-line string it
spans more than one
line
```

## Lists:

We can define the list in a single line as follows:

```yaml
items: [6, 7, 8, 9, 10]
name: [six, seven, eight, nine, ten]
```

This style is known as block style. We can put the above list in multiple lines as follows:

```yaml
items:
  - 6
  - 7
  - 8
name:
  - "six"
  - "seven"
  - "eight"
  - "nine"
```

This style is known as flow style. A list that contains complex objects needs multiple lines.

```yaml
items:
  - values:
      value1:
      value2:
      value3:
  - other values:
      key: value
```

> Any number of valid YAML values can contain by an array. But the value of a list can't be the same type.

## Dictionaries

If we want to write a complex YAML file which holds the complex data structure, we will use dictionaries. It is a collection of key: value pairs and each of the key: value pairs can be nested with a lot of options.

Example 1:

```yaml
student1: "noyon"
hobbies:
  - music
  - reading
  - traveling
```

In the above example, student is the first key, and john is the value. Hobbies are the second key, but it is nested, which means it contains a list of values. The value of the key can again be a key: value pair, which we will see in the next example.

Example 2:

```yaml
student2:
  fatherName: "William"
  motherName: "Marry"
  subjectDetails:
    subject1: 70
    subject2: 100
```

The subjectDetails shows a key, and the value of this key is a list of key: value pairs. fatherName, motherName, and subjectName are the keys. Where subjectName key contains a list of key: value pairs and subject1 and subject2 are the keys for values 70 and 100.
