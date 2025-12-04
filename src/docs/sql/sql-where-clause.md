---
title: "SQL WHERE Clause"
date: "2025-12-04"
parent: "sql"
order: 6
author: Noyon Rahman
category: sql
tags: ["sql", "sql-where-clause"]
---

### The SQL WHERE Clause

The `WHERE` clause is used to filter records.

It is used to extract only those records that fulfill a specified condition.

**Example**

Select all customers from Mexico:

```sql
SELECT * FROM CustomersWHERE Country='Mexico';
```

### Syntax

```sql
SELECT column1, column2,
FROM table_name
WHERE condition;
```

**Note:** The `WHERE` clause is not only used in `SELECT` statements, it is also used in `UPDATE`, `DELETE`, etc.!

### Text Fields vs. Numeric Fields

SQL requires single quotes around text values (most database systems will also allow double quotes).

However, numeric fields should not be enclosed in quotes:

Example:

```sql
SELECT * FROM Customers
WHERE CustomerID=1;
```

### Operators in The WHERE Clause

You can use other operators than the `=` operator to filter the search.

**Example**

Select all customers with a CustomerID greater than 80:

```sql
SELECT * FROM Customers
WHERE CustomerID > 80;
```

The following operators can be used in the `WHERE` clause:

| Operator | Description                                                                     | Example                                                                             |
| -------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| =        | Equal                                                                           | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_equal_to)      |
| >        | Greater than                                                                    | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_greater_than)  |
| <        | Less than                                                                       | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_less_than)     |
| >=       | Greater than or equal                                                           | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_greater_than2) |
| <=       | Less than or equal                                                              | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_less_than2)    |
| <>       | Not equal. **Note:** In some versions of SQL this operator may be written as != | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_not_equal_to)  |
| BETWEEN  | Between a certain range                                                         | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_between)       |
| LIKE     | Search for a pattern                                                            | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_like)          |
| IN       | To specify multiple possible values for a column                                | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in)            |
