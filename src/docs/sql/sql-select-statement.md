---
title: "SQL SELECT Statement"
date: "2025-12-04"
parent: "sql"
order: 4
author: Noyon Rahman
category: sql
tags: ["sql", "sql-select-statement"]
---

### The SQL SELECT Statement

The `SELECT` statement is used to select data from a database.

**Example**

Return data from the Customers table:

```sql
SELECT CustomerName, City FROM Customers;
```

### Syntax

```sql
SELECT column1, column2, FROM table_name;
```

Here, column1, column2, ... are the *field names* of the table you want to select data from.

The table_name represents the name of the *table* you want to select data from.
