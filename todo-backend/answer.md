# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

A `db.json` file is useful for learning and small demos, but it is not suitable for real-world applications.

**Limitations of file-based storage:**

- **Performance:**  
  Every read or write operation requires reading the entire file into memory and writing it back. As data grows, response time becomes slow.

- **Scalability:**  
  File-based storage does not handle large datasets or multiple users efficiently. It cannot scale horizontally or vertically like proper databases.

- **Concurrency Issues:**  
  If multiple users try to access or modify the file at the same time, data corruption can occur because file locking is limited.

- **Reliability:**  
  If the server crashes while writing to the file, data can be lost or corrupted. There is no automatic recovery mechanism.

- **No Advanced Features:**  
  Features like indexing, transactions, rollback, authentication, and backup are not available.

Because of these limitations, `db.json` is only suitable for practice projects, not production systems.

---

## 2. Ideal characteristics of a database system (apart from storage)

A database system does much more than just store data. An ideal database should have the following characteristics:

- **Performance:**  
  It should retrieve and update data quickly, even when handling large volumes of data.

- **Concurrency:**  
  Multiple users should be able to access and modify data at the same time without conflicts or data loss.

- **Reliability:**  
  The database should ensure data is not lost due to crashes or failures.

- **Data Integrity:**  
  Rules such as constraints and validations should ensure that stored data is accurate and consistent.

- **Scalability:**  
  The system should handle growth in data and users without a major drop in performance.

- **Fault Tolerance:**  
  Even if part of the system fails, the database should continue to function or recover automatically.

These features make databases suitable for real-world applications.

---

## 3. Types of databases and their use cases

Databases are mainly classified into two types:

### a) Relational Databases (SQL)

Relational databases store data in tables with rows and columns and use structured schemas.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use cases:**
- Banking systems
- Student management systems
- Inventory and billing systems
- Applications requiring strong data consistency and relationships

They are best when data structure is fixed and relationships between data are important.

---

### b) Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats such as documents, key-value pairs, or graphs.

**Examples:** MongoDB, Firebase, Cassandra, Redis

**Use cases:**
- Social media applications
- Real-time chat applications
- IoT systems
- Big data and analytics platforms

They are best when handling large-scale, unstructured, or rapidly changing data.

---

## Conclusion

Modern applications often choose databases based on performance needs, data structure, and scalability requirements. Relational and NoSQL databases are selected depending on the nature of the problem being solved.
