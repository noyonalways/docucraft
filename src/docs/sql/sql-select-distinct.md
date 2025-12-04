---
title: "SQL SELECT DISTINCT Statement"
date: "2025-12-04"
parent: "sql"
order: 5
author: Noyon Rahman
category: sql
tags: ["sql", "sql-select-distinct"]
---

### The SQL SELECT DISTINCT Statement

The `SELECT DISTINCT` statement is used to return only distinct (different) values.

**Example**

Select all the different countries from the "Customers" table:

```sql
SELECT DISTINCT Country FROM Customers;
```

Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.

### Syntax

```sql
SELECT DISTINCT column1, column2, FROM table_name;
```

### Count Distinct

By using the `DISTINCT` keyword in a function called `COUNT`, we can return the number of different countries.

```sql
SELECT COUNT(DISTINCT Country) FROM Customers;
```

**Note: The** COUNT(DISTINCT *column_name*) is not supported in Microsoft Access databases.

Here is a workaround for MS Access:

**Example**

```sql
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);
```
