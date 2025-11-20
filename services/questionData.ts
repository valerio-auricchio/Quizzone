import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is working with two tables. Each of these tables is displayed below in its entirety. The data engineer runs the following query to join these tables together: Which of the following will be returned by the above query?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 1,
    topic: "General",
    questionText: "T o p i c 1 A data organization leader is upset about the data analysis team’s reports being different from the data engineering team’s reports. The leader believes the siloed nature of their organization’s data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?",
    options: [
      { id: "A", text: "Both teams would autoscale their work as data size evolves" },
      { id: "B", text: "Both teams would use the same source of truth for their work" },
      { id: "C", text: "Both teams would reorganize to report to the same department" },
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" },
      { id: "E", text: "Both teams would respond more quickly to ad-hoc requests" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 2,
    topic: "SQL",
    questionText: "T o p i c 1 Which of the following benefits is provided by the array functions from Spark SQL?",
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 2,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes a scenario in which a data team will want to utilize cluster pools?",
    options: [
      { id: "A", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "B", text: "An automated report needs to be made reproducible." },
      { id: "C", text: "An automated report needs to be tested to identify errors." },
      { id: "D", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "E", text: "An automated report needs to be runnable by all stakeholders." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 3,
    topic: "General",
    questionText: "T o p i c 1 Which of the following is hosted completely in the control plane of the classic Databricks architecture?",
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "JDBC data source" },
      { id: "C", text: "Databricks web application" },
      { id: "D", text: "Databricks Filesystem" },
      { id: "E", text: "Driver node" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 4,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following benefits of using the Databricks Lakehouse Platform is provided by Delta Lake?",
    options: [
      { id: "A", text: "The ability to manipulate the same data using a variety of languages" },
      { id: "B", text: "The ability to collaborate in real time on a single notebook" },
      { id: "C", text: "The ability to set up alerts for query failures" },
      { id: "D", text: "The ability to support batch and streaming workloads" },
      { id: "E", text: "The ability to distribute complex data operations" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 5,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following describes the storage organization of a Delta table?",
    options: [
      { id: "A", text: "Delta tables are stored in a single file that contains data, history, metadata, and other attributes." },
      { id: "B", text: "Delta tables store their data in a single file and all metadata in a collection of files in a separate location." },
      { id: "C", text: "Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes." },
      { id: "D", text: "Delta tables are stored in a collection of files that contain only the data stored within the table." },
      { id: "E", text: "Delta tables are stored in a single file that contains only the data stored within the table." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 6,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following code blocks will remove the rows where the value in column age is greater than 25 from the existing Delta table my _ and save the updated table? table",
    options: [
      { id: "A", text: "SELECT * FROM my _ table WHERE age > 25;" },
      { id: "B", text: "UPDATE my _ table WHERE age > 25;" },
      { id: "C", text: "DELETE FROM my _ table WHERE age > 25;" },
      { id: "D", text: "UPDATE my _ table WHERE age <= 25;" },
      { id: "E", text: "DELETE FROM my _ table WHERE age <= 25;" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 7,
    topic: "General",
    questionText: "T o p i c 1 Which tool is used by Auto Loader to process data incrementally?",
    options: [
      { id: "A", text: "Checkpointing" },
      { id: "B", text: "Spark Structured Streaming" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Unity Catalog" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 7,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has realized that they made a mistake when making a daily update to a table. They need to use Delta time travel to restore the table to a version that is 3 days old. However, when the data engineer attempts to time travel to the older version, they are unable to restore the data because the data files have been deleted. Which of the following explains why the data files are no longer present?",
    options: [
      { id: "A", text: "The VACUUM command was run on the table" },
      { id: "B", text: "The TIME TRAVEL command was run on the table" },
      { id: "C", text: "The DELETE HISTORY command was run on the table" },
      { id: "D", text: "The OPTIMIZE command was nun on the table" },
      { id: "E", text: "The HISTORY command was run on the table" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 8,
    topic: "General",
    questionText: "T o p i c 1 Which of the following commands will return the number of null values in the member _id column?",
    options: [
      { id: "A", text: "SELECT count(member _id) FROM my _ table;" },
      { id: "B", text: "SELECT count(member _id) - count _ null(member _id) FROM my _ table;" },
      { id: "C", text: "SELECT count _if(member _id IS NULL) FROM my _ table;" },
      { id: "D", text: "SELECT null(member _id) FROM my _ table;" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 8,
    topic: "General",
    questionText: "T o p i c 1 Which of the following Git operations must be performed outside of Databricks Repos?",
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Push" },
      { id: "D", text: "Clone" },
      { id: "E", text: "Merge" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 9,
    topic: "General",
    questionText: "T o p i c 1 Which of the following data lakehouse features results in improved data quality over a traditional data lake?",
    options: [
      { id: "A", text: "A data lakehouse provides storage solutions for structured and unstructured data." },
      { id: "B", text: "A data lakehouse supports ACID-compliant transactions." },
      { id: "C", text: "A data lakehouse allows the use of SQL queries to examine data." },
      { id: "D", text: "A data lakehouse stores data in open formats." },
      { id: "E", text: "A data lakehouse enables machine learning and artificial Intelligence workloads." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 10,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
    options: [
      { id: "A", text: "Spark SQL Table" },
      { id: "B", text: "View" },
      { id: "C", text: "Delta Table" },
      { id: "D", text: "Temporary view" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 10,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. Which of the following is an advantage of using Databricks Repos over the Databricks Notebooks versioning?",
    options: [
      { id: "A", text: "Databricks Repos automatically saves development progress" },
      { id: "B", text: "Databricks Repos supports the use of multiple branches" },
      { id: "C", text: "Databricks Repos allows users to revert to previous versions of a notebook" },
      { id: "D", text: "Databricks Repos provides the ability to comment on specific changes" },
      { id: "E", text: "Databricks Repos is wholly housed within the Databricks Lakehouse Platform" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 11,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has left the organization. The data team needs to transfer ownership of the data engineer’s Delta tables to a new data engineer. The new data engineer is the lead engineer on the data team. Assuming the original data engineer no longer has access, which of the following individuals must be the one to transfer ownership of the Delta tables in Data Explorer?",
    options: [
      { id: "A", text: "Databricks account representative" },
      { id: "B", text: "This transfer is not possible" },
      { id: "C", text: "Workspace administrator" },
      { id: "D", text: "New lead data engineer" },
      { id: "E", text: "Original data engineer" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 12,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data analyst has created a Delta table sales that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following commands could the data engineering team use to access sales in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "There is no way to share data between PySpark and SQL." },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table('sales')" },
      { id: "E", text: "spark.table('sales')" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 13,
    topic: "General",
    questionText: "T o p i c 1 Which of the following commands will return the location of database customer360?",
    options: [
      { id: "A", text: "DESCRIBE LOCATION customer360;" },
      { id: "B", text: "DROP DATABASE customer360;" },
      { id: "C", text: "DESCRIBE DATABASE customer360;" },
      { id: "D", text: "ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user'};" },
      { id: "E", text: "USE DATABASE customer360;" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 14,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to create a new table containing the names of customers that live in France. They have written the following command: A senior data engineer mentions that it is organization policy to include a table property indicating that the new table includes personally identifiable information (PII). Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "There is no way to indicate whether a table contains PII." },
      { id: "B", text: "'COMMENT PII'" },
      { id: "C", text: "TBLPROPERTIES PII" },
      { id: "D", text: "COMMENT 'Contains PII'" },
      { id: "E", text: "PII" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 15,
    topic: "General",
    questionText: "T o p i c 1 What is stored in the Databricks customer's cloud account?",
    options: [
      { id: "A", text: "Databricks web application" },
      { id: "B", text: "Cluster management metadata" },
      { id: "C", text: "Notebooks" },
      { id: "D", text: "Data" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 15,
    topic: "SQL",
    questionText: "T o p i c 1 Which of the following benefits is provided by the array functions from Spark SQL?",
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" },
      { id: "E", text: "An ability to work with an array of tables for procedural automation" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 16,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following commands can be used to write data into a Delta table while avoiding the writing of duplicate records?",
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "IGNORE" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" },
      { id: "E", text: "INSERT" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 17,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is designing a data pipeline. The source system generates files in a shared directory that is also used by other processes. As a result, the files should be kept as is and will accumulate in the directory. The data engineer needs to identify which files are new since the previous run in the pipeline, and set up the pipeline to only ingest those new files with each run. Which of the following tools can the data engineer use to solve this problem?",
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Delta Lake" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Auto Loader" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 17,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to apply custom logic to string column city in table stores for a specific use case. In order to apply this custom logic at scale, the data engineer wants to create a SQL user-defined function (UDF). Which of the following code blocks creates this SQL UDF?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 18,
    topic: "SQL",
    questionText: "T o p i c 1 A data analyst has a series of queries in a SQL program. The data analyst wants this program to run every day. They only want the final query in the program to run on Sundays. They ask for help from the data engineering team to complete this task. Which of the following approaches could be used by the data engineering team to complete this task?",
    options: [
      { id: "A", text: "They could submit a feature request with Databricks to add this functionality." },
      { id: "B", text: "They could wrap the queries using PySpark and use Python’s control flow system to determine when to run the final query." },
      { id: "C", text: "They could only run the entire program on Sundays." },
      { id: "D", text: "They could automatically restrict access to the source table in the final query so that it is only accessible on Sundays." },
      { id: "E", text: "They could redesign the data model to separate the data used in the final query into a new table." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 19,
    topic: "General",
    questionText: "T o p i c 1 A data engineer runs a statement every day to copy the previous day’s sales into the table transactions. Each day’s sales are in their own file in the location '/transactions/raw'. Today, the data engineer runs the following command to complete this task: After running the command today, the data engineer notices that the number of records in table transactions has not changed. Which of the following describes why the statement might not have copied any new records into the table?",
    options: [
      { id: "A", text: "The format of the files to be copied were not included with the FORMAT_OPTIONS keyword." },
      { id: "B", text: "The names of the files to be copied were not included with the FILES keyword." },
      { id: "C", text: "The previous day’s file has already been copied into the table." },
      { id: "D", text: "The PARQUET file format does not support COPY INTO." },
      { id: "E", text: "The COPY INTO statement requires the table to be refreshed to view the copied rows." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 20,
    topic: "General",
    questionText: "T o p i c 1 In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
    options: [
      { id: "A", text: "When the location of the data needs to be changed" },
      { id: "B", text: "When the target table is an external table" },
      { id: "C", text: "When the source is not a Delta table" },
      { id: "D", text: "When the target table cannot contain duplicate records" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 20,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to create a table in Databricks using data from their organization’s existing SQLite database. They run the following command: Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "org.apache.spark.sql.jdbc" },
      { id: "B", text: "autoloader" },
      { id: "C", text: "DELTA" },
      { id: "D", text: "sqlite" },
      { id: "E", text: "org.apache.spark.sql.sqlite" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 21,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to create a table in Databricks using data from their organization’s existing SQLite database. They run the following command: Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "org.apache.spark.sql.jdbc" },
      { id: "B", text: "autoloader" },
      { id: "C", text: "org.apache.spark.sql.sqlite" },
      { id: "D", text: "sqlite" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 21,
    topic: "General",
    questionText: "T o p i c 1 A data engineering team has two tables. The first table march_ transactions is a collection of all retail transactions in the month of March. The _ second table april transactions is a collection of all retail transactions in the month of April. There are no duplicate records between the tables. _ Which of the following commands should be run to create a new table all transactions that contains all records from march_ transactions and _ april transactions without duplicate records? _",
    options: [
      { id: "A", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ INNER JOIN SELECT * FROM april transactions; _" },
      { id: "B", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ UNION SELECT * FROM april transactions; _" },
      { id: "C", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ OUTER JOIN SELECT * FROM april transactions; _" },
      { id: "D", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ INTERSECT SELECT * from april transactions; _" },
      { id: "E", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ MERGE SELECT * FROM april transactions;" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 22,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs access to a table new _ they do not know who the table owner is. table, but they do not have the correct permissions. They can ask the table owner for permission, but Which of the following approaches can be used to identify the owner of new _ table?",
    options: [
      { id: "A", text: "Review the Permissions tab in the table's page in Data Explorer" },
      { id: "B", text: "There is no way to identify the owner of the table" },
      { id: "C", text: "Review the Owner field in the table's page in Data Explorer" },
      { id: "D", text: "Review the Owner field in the table's page in the cloud storage solution" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 22,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer only wants to execute the final block of a Python program if the Python variable day _ review _ period is True. _ of week is equal to 1 and the Python variable Which of the following control flow statements should the data engineer use to begin this conditionally executed code block?",
    options: [
      { id: "A", text: "if day _" },
      { id: "B", text: "if day _" },
      { id: "C", text: "if day _" },
      { id: "D", text: "if day _" },
      { id: "E", text: "if day _ _ of week = 1 and review _ period: _ of week = 1 and review _ period = 'True': _ of week == 1 and review _ period == 'True': _ of week == 1 and review _ period: _ of week = 1 & review _ period: = 'True':" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 23,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer is attempting to drop a Spark SQL table my _ They run the following command: table. The data engineer wants to delete all table metadata and data. DROP TABLE IF EXISTS my _ table - While the object no longer appears when they run SHOW TABLES, the data files still exist. Which of the following describes why the data files still exist and the metadata files were deleted?",
    options: [
      { id: "A", text: "The table’s data was larger than 10 GB" },
      { id: "B", text: "The table’s data was smaller than 10 GB" },
      { id: "C", text: "The table was external" },
      { id: "D", text: "The table did not have a location" },
      { id: "E", text: "The table was managed" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 24,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to create a data entity from a couple of tables. The data entity must be used by other data engineers in other sessions. It also must be saved to a physical location. Which of the following data entities should the data engineer create?",
    options: [
      { id: "A", text: "Database" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" },
      { id: "E", text: "Table" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 25,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is maintaining a data pipeline. Upon data ingestion, the data engineer notices that the source data is starting to have a lower level of quality. The data engineer would like to automate the process of monitoring the quality level. Which of the following tools can the data engineer use to solve this problem?",
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Data Explorer" },
      { id: "C", text: "Delta Lake" },
      { id: "D", text: "Delta Live Tables" },
      { id: "E", text: "Auto Loader" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 26,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer and data analyst are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
    options: [
      { id: "A", text: "The pipeline will need to be written entirely in Python" },
      { id: "B", text: "The pipeline will need to stop using the medallion-based multi-hop architecture" },
      { id: "C", text: "The pipeline will need to be written entirely in SQL" },
      { id: "D", text: "The pipeline will need to use a batch source in place of a streaming source" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 26,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Production mode using the Continuous Pipeline Mode. Assuming previously unprocessed data exists and all definitions are valid, what is the expected outcome after clicking Start to update the pipeline?",
    options: [
      { id: "A", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." },
      { id: "B", text: "All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused." },
      { id: "C", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped." },
      { id: "D", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated." },
      { id: "E", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 27,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineer has a Job that has a complex run schedule, and they want to transfer that schedule to other Jobs. Rather than manually selecting each value in the scheduling form in Databricks, which of the following tools can the data engineer use to represent and submit the schedule programmatically?",
    options: [
      { id: "A", text: "pyspark.sql.types.DateType" },
      { id: "B", text: "datetime" },
      { id: "C", text: "pyspark.sql.types.TimestampType" },
      { id: "D", text: "Cron syntax" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 27,
    topic: "Streaming",
    questionText: "T o p i c 1 In order for Structured Streaming to reliably track the exact progress of the processing so that it can handle any kind of failure by restarting and/or reprocessing, which of the following two approaches is used by Spark to record the offset range of the data being processed in each trigger?",
    options: [
      { id: "A", text: "Checkpointing and Write-ahead Logs" },
      { id: "B", text: "Structured Streaming cannot record the offset range of the data being processed in each trigger." },
      { id: "C", text: "Replayable Sources and Idempotent Sinks" },
      { id: "D", text: "Write-ahead Logs and Idempotent Sinks" },
      { id: "E", text: "Checkpointing and Idempotent Sinks" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 28,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data analyst has developed a query that runs against Delta table. They want help from the data engineering team to implement a series of tests to ensure the data returned by the query is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following operations could the data engineering team use to run the query and operate with the results in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.sql" },
      { id: "D", text: "spark.table" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 28,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes the relationship between Gold tables and Silver tables?",
    options: [
      { id: "A", text: "Gold tables are more likely to contain aggregations than Silver tables." },
      { id: "B", text: "Gold tables are more likely to contain valuable data than Silver tables." },
      { id: "C", text: "Gold tables are more likely to contain a less refined view of data than Silver tables." },
      { id: "D", text: "Gold tables are more likely to contain more data than Silver tables." },
      { id: "E", text: "Gold tables are more likely to contain truthful data than Silver tables." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 29,
    topic: "General",
    questionText: "T o p i c 1 A data organization leader is upset about the data analysis team’s reports being different from the data engineering team’s reports. The leader believes the siloed nature of their organization’s data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?",
    options: [
      { id: "A", text: "Both teams would respond more quickly to ad-hoc requests" },
      { id: "B", text: "Both teams would use the same source of truth for their work" },
      { id: "C", text: "Both teams would reorganize to report to the same department" },
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 29,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes the relationship between Bronze tables and raw data?",
    options: [
      { id: "A", text: "Bronze tables contain less data than raw data files." },
      { id: "B", text: "Bronze tables contain more truthful data than raw data." },
      { id: "C", text: "Bronze tables contain aggregates while raw data is unaggregated." },
      { id: "D", text: "Bronze tables contain a less refined view of data than raw data." },
      { id: "E", text: "Bronze tables contain raw data with a schema applied." },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 30,
    topic: "Streaming",
    questionText: "T o p i c 1 Which Structured Streaming query is performing a hop from a Silver table to a Gold table?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 30,
    topic: "General",
    questionText: "T o p i c 1 Which of the following tools is used by Auto Loader process data incrementally?",
    options: [
      { id: "A", text: "Checkpointing" },
      { id: "B", text: "Spark Structured Streaming" },
      { id: "C", text: "Data Explorer" },
      { id: "D", text: "Unity Catalog" },
      { id: "E", text: "Databricks SQL" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 31,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The cade block used by the data engineer is below: If the data engineer only wants the query to execute a micro-batch to process data every 5 seconds, which of the following lines of code should the data engineer use to fill in the blank?",
    options: [
      { id: "A", text: "trigger('5 seconds')" },
      { id: "B", text: "trigger()" },
      { id: "C", text: "trigger(once='5 seconds')" },
      { id: "D", text: "trigger(processingTime='5 seconds')" },
      { id: "E", text: "trigger(continuous='5 seconds')" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 32,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid _ timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW What is the expected behavior when a batch of data containing data that violates these constraints is processed?",
    options: [
      { id: "A", text: "Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table." },
      { id: "B", text: "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log." },
      { id: "E", text: "Records that violate the expectation cause the job to fail." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 33,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following describes when to use the CREATE STREAMING LIVE TABLE (formerly CREATE INCREMENTAL LIVE TABLE) syntax over the CREATE LIVE TABLE syntax when creating Delta Live Tables (DLT) tables using SQL?",
    options: [
      { id: "A", text: "CREATE STREAMING LIVE TABLE should be used when the subsequent step in the DLT pipeline is static." },
      { id: "B", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed incrementally." },
      { id: "C", text: "CREATE STREAMING LIVE TABLE is redundant for DLT and it does not need to be used." },
      { id: "D", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed through complicated aggregations." },
      { id: "E", text: "CREATE STREAMING LIVE TABLE should be used when the previous step in the DLT pipeline is static." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 34,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has joined an existing project and they see the following query in the project repository: CREATE STREAMING LIVE TABLE loyal _customers AS SELECT customer _id - FROM STREAM(LIVE.customers) WHERE loyalty _ level = 'high'; Which of the following describes why the STREAM function is included in the query?",
    options: [
      { id: "A", text: "The STREAM function is not needed and will cause an error." },
      { id: "B", text: "The data in the customers table has been updated since its last run." },
      { id: "C", text: "The customers table is a streaming live table." },
      { id: "D", text: "The customers table is a reference to a Structured Streaming query on a PySpark DataFrame." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 34,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is designing a data pipeline. The source system generates files in a shared directory that is also used by other processes. As a result, the files should be kept as is and will accumulate in the directory. The data engineer needs to identify which files are new since the previous run in the pipeline, and set up the pipeline to only ingest those new files with each run. Which of the following tools can the data engineer use to solve this problem?",
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Delta Lake" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Data Explorer" },
      { id: "E", text: "Auto Loader" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 35,
    topic: "General",
    questionText: "T o p i c 1 How can Git operations must be performed outside of Databricks Repos?",
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Clone" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 35,
    topic: "Streaming",
    questionText: "T o p i c 1 Which of the following Structured Streaming queries is performing a hop from a Silver table to a Gold table?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 36,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has three tables in a Delta Live Tables (DLT) pipeline. They have configured the pipeline to drop invalid records at each table. They notice that some data is being dropped due to quality concerns at some point in the DLT pipeline. They would like to determine at which table in their pipeline the data is being dropped. Which of the following approaches can the data engineer take to identify the table that is dropping the records?",
    options: [
      { id: "A", text: "They can set up separate expectations for each table when developing their DLT pipeline." },
      { id: "B", text: "They cannot determine which table is dropping the records." },
      { id: "C", text: "They can set up DLT to notify them via email when records are dropped." },
      { id: "D", text: "They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics." },
      { id: "E", text: "They can navigate to the DLT pipeline page, click on the “Error” button, and review the present errors." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 37,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has a single-task Job that runs each morning before they begin working. After identifying an upstream data issue, they need to set up another task to run a new notebook prior to the original task. Which of the following approaches can the data engineer use to set up the new task?",
    options: [
      { id: "A", text: "They can clone the existing task in the existing Job and update it to run the new notebook." },
      { id: "B", text: "They can create a new task in the existing Job and then add it as a dependency of the original task." },
      { id: "C", text: "They can create a new task in the existing Job and then add the original task as a dependency of the new task." },
      { id: "D", text: "They can create a new job from scratch and add both tasks to run concurrently." },
      { id: "E", text: "They can clone the existing task to a new Job and then edit it to run the new notebook." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 38,
    topic: "SQL",
    questionText: "T o p i c 1 An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query. For the first week following the project’s release, the manager wants the query results to be updated every minute. However, the manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week of the project’s release. Which of the following approaches can the engineering team use to ensure the query does not cost the organization any money beyond the first week of the project’s release?",
    options: [
      { id: "A", text: "They can set a limit to the number of DBUs that are consumed by the SQL Endpoint." },
      { id: "B", text: "They can set the query’s refresh schedule to end after a certain number of refreshes." },
      { id: "C", text: "They cannot ensure the query does not cost the organization money beyond the first week of the project’s release." },
      { id: "D", text: "They can set a limit to the number of individuals that are able to manage the query’s refresh schedule." },
      { id: "E", text: "They can set the query’s refresh schedule to end on a certain date in the query scheduler." },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 39,
    topic: "General",
    questionText: "T o p i c 1 A data engineering team has two tables. The first table march_ transactions is a collection of all retail transactions in the month of March. The _ second table april transactions is a collection of all retail transactions in the month of April. There are no duplicate records between the tables. _ Which of the following commands should be run to create a new table all transactions that contains all records from march_ _ april transactions without duplicate records? transactions and _",
    options: [
      { id: "A", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ INNER JOIN SELECT * FROM april transactions; _" },
      { id: "B", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ UNION SELECT * FROM april transactions; _" },
      { id: "C", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ OUTER JOIN SELECT * FROM april transactions; _" },
      { id: "D", text: "CREATE TABLE all transactions AS SELECT * FROM march_ transactions _ INTERSECT SELECT * from april transactions;" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 39,
    topic: "SQL",
    questionText: "T o p i c 1 A data analysis team has noticed that their Databricks SQL queries are running too slowly when connected to their always-on SQL endpoint. They claim that this issue is present when many members of the team are running small queries simultaneously. They ask the data engineering team for help. The data engineering team notices that each of the team’s queries uses the same SQL endpoint. Which of the following approaches can the data engineering team use to improve the latency of the team’s queries?",
    options: [
      { id: "A", text: "They can increase the cluster size of the SQL endpoint." },
      { id: "B", text: "They can increase the maximum bound of the SQL endpoint’s scaling range." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." },
      { id: "E", text: "They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to “Reliability Optimized.”" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 40,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary. Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
    options: [
      { id: "A", text: "They can ensure the dashboard’s SQL endpoint matches each of the queries’ SQL endpoints." },
      { id: "B", text: "They can set up the dashboard’s SQL endpoint to be serverless." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can reduce the cluster size of the SQL endpoint." },
      { id: "E", text: "They can ensure the dashboard’s SQL endpoint is not one of the included query’s SQL endpoint." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 41,
    topic: "Workflows",
    questionText: "T o p i c 1 In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?",
    options: [
      { id: "A", text: "When another task needs to be replaced by the new task" },
      { id: "B", text: "When another task needs to successfully complete before the new task begins" },
      { id: "C", text: "When another task has the same dependency libraries as the new task" },
      { id: "D", text: "When another task needs to use as little compute resources as possible" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 41,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?",
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." },
      { id: "B", text: "They can set up an Alert with a new email alert destination." },
      { id: "C", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "D", text: "They can set up an Alert with one-time notifications." },
      { id: "E", text: "They can set up an Alert without notifications." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 42,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following must be specified when creating a new Delta Live Tables pipeline?",
    options: [
      { id: "A", text: "A key-value pair configuration" },
      { id: "B", text: "At least one notebook library to be executed" },
      { id: "C", text: "A path to cloud storage location for the written data" },
      { id: "D", text: "A location of a target database for the written data" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 42,
    topic: "Workflows",
    questionText: "T o p i c 1 A single Job runs two notebooks as two separate tasks. A data engineer has noticed that one of the notebooks is running slowly in the Job’s current run. The data engineer asks a tech lead for help in identifying why this might be the case. Which of the following approaches can the tech lead use to identify why the notebook is running slowly as part of the Job?",
    options: [
      { id: "A", text: "They can navigate to the Runs tab in the Jobs UI to immediately review the processing notebook." },
      { id: "B", text: "They can navigate to the Tasks tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "C", text: "They can navigate to the Runs tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "D", text: "There is no way to determine why a Job task is running slowly." },
      { id: "E", text: "They can navigate to the Tasks tab in the Jobs UI to immediately review the processing notebook." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 43,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which of the following actions can the data engineer perform to improve the start up time for the clusters used for the Job?",
    options: [
      { id: "A", text: "They can use endpoints available in Databricks SQL" },
      { id: "B", text: "They can use jobs clusters instead of all-purpose clusters" },
      { id: "C", text: "They can configure the clusters to be single-node" },
      { id: "D", text: "They can use clusters that are from a cluster pool" },
      { id: "E", text: "They can configure the clusters to autoscale for larger data sizes" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 44,
    topic: "General",
    questionText: "T o p i c 1 A new data engineering team team. has been assigned to an ELT project. The new data engineering team will need full privileges on the database customers to fully manage the project. Which of the following commands can be used to grant full permissions on the database to the new data engineering team?",
    options: [
      { id: "A", text: "GRANT USAGE ON DATABASE customers TO team;" },
      { id: "B", text: "GRANT ALL PRIVILEGES ON DATABASE team TO customers;" },
      { id: "C", text: "GRANT SELECT PRIVILEGES ON DATABASE customers TO teams;" },
      { id: "D", text: "GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;" },
      { id: "E", text: "GRANT ALL PRIVILEGES ON DATABASE customers TO team;" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 45,
    topic: "General",
    questionText: "T o p i c 1 A new data engineering team has been assigned to work on a project. The team will need access to database customers in order to see what tables already exist. The team has its own group team. Which of the following commands can be used to grant the necessary permission on the entire database to the new team?",
    options: [
      { id: "A", text: "GRANT VIEW ON CATALOG customers TO team;" },
      { id: "B", text: "GRANT CREATE ON DATABASE customers TO team;" },
      { id: "C", text: "GRANT USAGE ON CATALOG team TO customers;" },
      { id: "D", text: "GRANT CREATE ON DATABASE team TO customers;" },
      { id: "E", text: "GRANT USAGE ON DATABASE customers TO team;" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 46,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is running code in a Databricks Repo that is cloned from a central Git repository. A colleague of the data engineer informs them that changes have been made and synced to the central Git repository. The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which of the following Git operations does the data engineer need to run to accomplish this task?",
    options: [
      { id: "A", text: "Merge" },
      { id: "B", text: "Push" },
      { id: "C", text: "Pull" },
      { id: "D", text: "Commit" },
      { id: "E", text: "Clone" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 47,
    topic: "General",
    questionText: "T o p i c 1 Which of the following is a benefit of the Databricks Lakehouse Platform embracing open source technologies?",
    options: [
      { id: "A", text: "Cloud-specific integrations" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Ability to scale storage" },
      { id: "D", text: "Ability to scale workloads" },
      { id: "E", text: "Avoiding vendor lock-in" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 48,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer only wants to execute the final block of a Python program if the Python variable day _ review _ period is True. _ of week is equal to 1 and the Python variable Which of the following control flow statements should the data engineer use to begin this conditionally executed code block?",
    options: [
      { id: "A", text: "if day _" },
      { id: "B", text: "if day _" },
      { id: "C", text: "if day _" },
      { id: "D", text: "if day _ _ of _ of _ of _ of week = 1 and review _ period: week = 1 and review _ period = 'True': week = 1 & review _ period: = 'True': week == 1 and review _ period:" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 48,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which of the following locations can the data engineer review their permissions on the table?",
    options: [
      { id: "A", text: "Databricks Filesystem" },
      { id: "B", text: "Jobs" },
      { id: "C", text: "Dashboards" },
      { id: "D", text: "Repos" },
      { id: "E", text: "Data Explorer" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 49,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes a scenario in which a data engineer will want to use a single-node cluster?",
    options: [
      { id: "A", text: "When they are working interactively with a small amount of data" },
      { id: "B", text: "When they are running automated reports to be refreshed as quickly as possible" },
      { id: "C", text: "When they are working with SQL within Databricks SQL" },
      { id: "D", text: "When they are concerned about the ability to automatically scale with larger data" },
      { id: "E", text: "When they are manually running reports with a large amount of data" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 50,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes the relationship between Bronze tables and raw data?",
    options: [
      { id: "A", text: "Bronze tables contain less data than raw data files." },
      { id: "B", text: "Bronze tables contain more truthful data than raw data." },
      { id: "C", text: "Bronze tables contain raw data with a schema applied." },
      { id: "D", text: "Bronze tables contain a less refined view of data than raw data." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 50,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has been given a new record of data: id STRING = 'a1' rank INTEGER = 6 rating FLOAT = 9.4 Which of the following SQL commands can be used to append the new record to an existing Delta table my _ table?",
    options: [
      { id: "A", text: "INSERT INTO my _ table VALUES ('a1', 6, 9.4)" },
      { id: "B", text: "my _ table UNION VALUES ('a1', 6, 9.4)" },
      { id: "C", text: "INSERT VALUES ( 'a1' , 6, 9.4) INTO my _ table" },
      { id: "D", text: "UPDATE my _ table VALUES ('a1', 6, 9.4)" },
      { id: "E", text: "UPDATE VALUES ('a1', 6, 9.4) my _ table" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 51,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has realized that the data files associated with a Delta table are incredibly small. They want to compact the small files to form larger files to improve performance. Which of the following keywords can be used to compact the small files?",
    options: [
      { id: "A", text: "REDUCE" },
      { id: "B", text: "OPTIMIZE" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" },
      { id: "E", text: "VACUUM" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 52,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has realized that they made a mistake when making a daily update to a table. They need to use Delta time travel to restore the table to a version that is 3 days old. However, when the data engineer attempts to time travel to the older version, they are unable to restore the data because the data files have been deleted. Which of the following explains why the data files are no longer present?",
    options: [
      { id: "A", text: "The VACUUM command was run on the table" },
      { id: "B", text: "The TIME TRAVEL command was run on the table" },
      { id: "C", text: "The DELETE HISTORY command was run on the table" },
      { id: "D", text: "The OPTIMIZE command was nun on the table" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 52,
    topic: "Delta Lake",
    questionText: "T o p i c 1 In which of the following file formats is data from Delta Lake tables primarily stored?",
    options: [
      { id: "A", text: "Delta" },
      { id: "B", text: "CSV" },
      { id: "C", text: "Parquet" },
      { id: "D", text: "JSON" },
      { id: "E", text: "A proprietary, optimized format specific to Databricks" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 53,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to apply custom logic to string column city in table stores for a specific use case. In order to apply this custom logic at scale, the data engineer wants to create a SQL user-defined function (UDF). Which of the following code blocks creates this SQL UDF?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 53,
    topic: "General",
    questionText: "T o p i c 1 Which of the following is stored in the Databricks customer's cloud account?",
    options: [
      { id: "A", text: "Databricks web application" },
      { id: "B", text: "Cluster management metadata" },
      { id: "C", text: "Repos" },
      { id: "D", text: "Data" },
      { id: "E", text: "Notebooks" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 54,
    topic: "General",
    questionText: "T o p i c 1 Which of the following can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
    options: [
      { id: "A", text: "None of these" },
      { id: "B", text: "Data lake" },
      { id: "C", text: "Data warehouse" },
      { id: "D", text: "All of these" },
      { id: "E", text: "Data lakehouse" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 55,
    topic: "SQL",
    questionText: "T o p i c 1 An engineering manager uses a Databricks SQL query to monitor ingestion latency for each data source. The manager checks the results of the query every day, but they are manually rerunning the query each day and waiting for the results. Which of the following approaches can the manager use to ensure the results of the query are updated each day?",
    options: [
      { id: "A", text: "They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL." },
      { id: "B", text: "They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL." },
      { id: "C", text: "They can schedule the query to refresh every 1 day from the query's page in Databricks SQL." },
      { id: "D", text: "They can schedule the query to run every 12 hours from the Jobs UI." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 55,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data architect has determined that a table of the following format is necessary: Which of the following code blocks uses SQL DDL commands to create an empty Delta table in the above format regardless of whether a table already exists with this name?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 56,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer has a Python notebook in Databricks, but they need to use SQL to accomplish a specific task within a cell. They still want all of the other cells to use Python without making any changes to those cells. Which of the following describes how the data engineer can use SQL within a cell of their Python notebook?",
    options: [
      { id: "A", text: "It is not possible to use SQL in a Python notebook" },
      { id: "B", text: "They can attach the cell to a SQL endpoint rather than a Databricks cluster" },
      { id: "C", text: "They can simply write SQL syntax in the cell" },
      { id: "D", text: "They can add %sql to the first line of the cell" },
      { id: "E", text: "They can change the default language of the notebook to SQL" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 57,
    topic: "SQL",
    questionText: "T o p i c 1 Which of the following SQL keywords can be used to convert a table from a long format to a wide format?",
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" },
      { id: "E", text: "WHERE" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 58,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
    options: [
      { id: "A", text: "Parquet files can be partitioned" },
      { id: "B", text: "CREATE TABLE AS SELECT statements cannot be used on files" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Parquet files have the ability to be optimized" },
      { id: "E", text: "Parquet files will become Delta tables" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 59,
    topic: "Delta Lake",
    questionText: "T o p i c 1 The Delta transaction log for the ‘students’ tables is shown using the ‘DESCRIBE HISTORY students’ command. A Data Engineer needs to query the table as it existed before the UPDATE operation listed in the log. Which command should the Data Engineer use to achieve this? (Choose two.)",
    options: [
      { id: "A", text: "SELECT * FROM students@v4" },
      { id: "B", text: "SELECT * FROM students TIMESTAMP AS OF ‘2024-04-22T 14:32:47.000+00:00’" },
      { id: "C", text: "SELECT * FROM students FROM HISTORY VERSION AS OF 3" },
      { id: "D", text: "SELECT * FROM students VERSION AS OF 5" },
      { id: "E", text: "SELECT * FROM students TIMESTAMP AS OF ‘2024-04-22T 14:32:58.000+00:00’" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 59,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
    options: [
      { id: "A", text: "Spark SQL Table" },
      { id: "B", text: "View" },
      { id: "C", text: "Database" },
      { id: "D", text: "Temporary view" },
      { id: "E", text: "Delta Table" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 60,
    topic: "General",
    questionText: "T o p i c 1 Which method should a Data Engineer apply to ensure Workflows are being triggered on schedule?",
    options: [
      { id: "A", text: "Scheduled Workflows require an always-running cluster, which is more expensive but reduces processing latency." },
      { id: "B", text: "Scheduled Workflows process data as it arrives at configured sources." },
      { id: "C", text: "Scheduled Workflows can reduce resource consumption and expense since the cluster runs only long enough to execute the pipeline." },
      { id: "D", text: "Scheduled Workflows run continuously until manually stopped." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 60,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data analyst has developed a query that runs against Delta table. They want help from the data engineering team to implement a series of tests to ensure the data returned by the query is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following operations could the data engineering team use to run the query and operate with the results in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.sql" },
      { id: "D", text: "There is no way to share data between PySpark and SQL." },
      { id: "E", text: "spark.table" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 61,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to access the view created by the sales team, using a shared cluster. The data engineer has been provided usage permissions on the catalog and schema. In order to access the view created by sales team. What are the minimum permissions the data engineer would require in addition?",
    options: [
      { id: "A", text: "Needs SELECT permission on the VIEW and the underlying TABL" },
      { id: "E", text: "" },
      { id: "B", text: "Needs SELECT permission only on the VIEW" },
      { id: "C", text: "Needs ALL PRIVILEGES on the VIEW" },
      { id: "D", text: "Needs ALL PRIVILEGES at the SCHEMA level" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 61,
    topic: "General",
    questionText: "T o p i c 1 Which of the following commands will return the number of null values in the member _id column?",
    options: [
      { id: "A", text: "SELECT count(member _id) FROM my _ table;" },
      { id: "B", text: "SELECT count(member _id) - count _ null(member _id) FROM my _ table;" },
      { id: "C", text: "SELECT count _if(member _id IS NULL) FROM my _ table;" },
      { id: "D", text: "SELECT null(member _id) FROM my _ table;" },
      { id: "E", text: "SELECT count _ null(member _id) FROM my _ table;" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 62,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees in table stores. The custom logic should create a new column exp _employees that is an array of all of the employees with more than 5 years of experience for each row. In order to apply this custom logic at scale, the data engineer wants to use the FILTER higher-order function. Which of the following code blocks successfully completes this task?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 63,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Identify the impact of ON VIOLATION DROP ROW and ON VIOLATION FAIL UPDATE for a constraint violation. A data engineer has created an ETL pipeline using Delta Live table to manage their company travel reimbursement detail, they want to ensure that the if the location details has not been provided by the employee, the pipeline needs to be terminated. How can the scenario be implemented?",
    options: [
      { id: "A", text: "CONSTRAINT valid _" },
      { id: "B", text: "CONSTRAINT valid _" },
      { id: "C", text: "CONSTRAINT valid _" },
      { id: "D", text: "CONSTRAINT valid _ location EXPECT (location = NULL) location EXPECT (location != NULL) ON VIOLATION FAIL UPDATE location EXPECT (location != NULL) ON DROP ROW location EXPECT (location != NULL) ON VIOLATION FAIL" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 63,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer has a Python variable table_ name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_ name. They have the following incomplete code block: ____(f'SELECT customer _id, spend FROM {table_ name}') Which of the following can be used to fill in the blank to successfully complete the task?",
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" },
      { id: "E", text: "spark.sql" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 64,
    topic: "General",
    questionText: "T o p i c 1 Identify a scenario to use an external table. A Data Engineer needs to create a parquet bronze table and wants to ensure that it gets stored in a specific path in an external location. Which table can be created in this scenario?",
    options: [
      { id: "A", text: "An external table where the location is pointing to specific path in external location." },
      { id: "B", text: "An external table where the schema has managed location pointing to specific path in external location." },
      { id: "C", text: "A managed table where the catalog has managed location pointing to specific path in external location." },
      { id: "D", text: "A managed table where the location is pointing to specific path in external location." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 64,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has created a new database using the following command: CREATE DATABASE IF NOT EXISTS customer360; In which of the following locations will the customer360 database be located?",
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "More information is needed to determine the correct response" },
      { id: "E", text: "dbfs:/user/hive/database" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 65,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Data engineer and data analysts are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
    options: [
      { id: "A", text: "The pipeline can have different notebook sources in SQL & Python" },
      { id: "B", text: "The pipeline will need to be written entirely in SQL" },
      { id: "C", text: "The pipeline will need to use a batch source in place of a streaming source" },
      { id: "D", text: "The pipeline will need to be written entirely in Python" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 65,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer is attempting to drop a Spark SQL table my _ table and runs the following command: DROP TABLE IF EXISTS my _ table; After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. Which of the following describes why all of these files were deleted?",
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table's data was larger than 10 GB" },
      { id: "D", text: "The table was external" },
      { id: "E", text: "The table did not have a location" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 66,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which of the following code blocks can the data engineer use to complete this task?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 67,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is below: The data engineer only wants the query to process all of the available data in as many batches as required. Which line of code should the data engineer use to fill in the blank?",
    options: [
      { id: "A", text: "trigger(availableNow=True)" },
      { id: "B", text: "trigger(processingTime= “once”)" },
      { id: "C", text: "trigger(continuous= “once”)" },
      { id: "D", text: "trigger(once=True)" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 67,
    topic: "General",
    questionText: "T o p i c 1 In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
    options: [
      { id: "A", text: "When the location of the data needs to be changed" },
      { id: "B", text: "When the target table is an external table" },
      { id: "C", text: "When the source table can be deleted" },
      { id: "D", text: "When the target table cannot contain duplicate records" },
      { id: "E", text: "When the source is not a Delta table" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 68,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is working with two tables. Each of these tables is displayed below in its entirety. The data engineer runs the following query to join these tables together: Which of the following will be returned by the above query?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 69,
    topic: "General",
    questionText: "T o p i c 1 What can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Data lake" },
      { id: "C", text: "Data warehouse" },
      { id: "D", text: "Data lakehouse" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 69,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to create a table in Databricks using data from a CSV file at location /path/to/csv. They run the following command: Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "None of these lines of code are needed to successfully complete the task" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" },
      { id: "E", text: "FROM 'path/to/csv'" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 70,
    topic: "Delta Lake",
    questionText: "T o p i c 1 In a healthcare provider organization using Delta Lake to store electronic health records (EHRs) , a data analyst needs to analyze a snapshot of the patient _ records table from two weeks ago before some recent data corrections were applied. What approach should the Data Engineer take to allow the analyst to query that specific prior version?",
    options: [
      { id: "A", text: "Truncate the table to remove all data, then reload the data from two weeks ago into the truncated table for the analyst to query." },
      { id: "B", text: "Identify the version number corresponding to two weeks ago from the Delta transaction log, share that version number with the analyst to query using VERSION AS OF syntax, or export that version to a new Delta table for the analyst to query." },
      { id: "C", text: "Restore the table to the version from two weeks ago using the RESTORE command, and have the analyst query the restored table." },
      { id: "D", text: "Use the VACUUM command to remove all versions of the table older than two weeks, then the analyst can query the remaining version." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 70,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is below: If the data engineer only wants the query to process all of the available data in as many batches as required, which of the following lines of code should the data engineer use to fill in the blank?",
    options: [
      { id: "A", text: "processingTime(1)" },
      { id: "B", text: "trigger(availableNow=True)" },
      { id: "C", text: "trigger(parallelBatch=True)" },
      { id: "D", text: "trigger(processingTime='once')" },
      { id: "E", text: "trigger(continuous='once')" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 71,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Which of the following describes why Auto Loader inferred all of the columns to be of the string type?",
    options: [
      { id: "A", text: "There was a type mismatch between the specific schema and the inferred schema" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "Auto Loader only works with string data" },
      { id: "D", text: "All of the fields had at least one null value" },
      { id: "E", text: "Auto Loader cannot infer the schema of ingested data" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 72,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Development mode using the Continuous Pipeline Mode. Assuming previously unprocessed data exists and all definitions are valid, what is the expected outcome after clicking Start to update the pipeline?",
    options: [
      { id: "A", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated." },
      { id: "B", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist until the pipeline is shut down." },
      { id: "C", text: "All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused." },
      { id: "D", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing." },
      { id: "E", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 73,
    topic: "General",
    questionText: "T o p i c 1 Which of the following data workloads will utilize a Gold table as its source?",
    options: [
      { id: "A", text: "A job that enriches data by parsing its timestamps into a human-readable format" },
      { id: "B", text: "A job that aggregates uncleaned data to create standard summary statistics" },
      { id: "C", text: "A job that cleans data by removing malformatted records" },
      { id: "D", text: "A job that queries aggregated data designed to feed into a dashboard" },
      { id: "E", text: "A job that ingests raw data from a streaming source into the Lakehouse" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 74,
    topic: "General",
    questionText: "T o p i c 1 Which two components function in the DB platform architecture’s control plane? (Choose two.)",
    options: [
      { id: "A", text: "Virtual Machines" },
      { id: "B", text: "Compute Orchestration" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "Compute" },
      { id: "E", text: "Unity Catalog" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 74,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which of the following must be specified when creating a new Delta Live Tables pipeline?",
    options: [
      { id: "A", text: "A key-value pair configuration" },
      { id: "B", text: "The preferred DBU/hour cost" },
      { id: "C", text: "A path to cloud storage location for the written data" },
      { id: "D", text: "A location of a target database for the written data" },
      { id: "E", text: "At least one notebook library to be executed" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 75,
    topic: "General",
    questionText: "T o p i c 1 Identify how the count _if function and the count where x is null can be used Consider a table random _ values with below data. What would be the output of below query? select count _if(col > 1) as count _a. count(*) as count _ b.count(col1) as count _c from random _ values col1 0 1 2 NULL - 2 3",
    options: [
      { id: "A", text: "3 6 5" },
      { id: "B", text: "4 6 5" },
      { id: "C", text: "3 6 6" },
      { id: "D", text: "4 6 6" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 75,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has joined an existing project and they see the following query in the project repository: CREATE STREAMING LIVE TABLE loyal _customers AS SELECT customer _id - FROM STREAM(LIVE.customers) WHERE loyalty _ level = 'high'; Which of the following describes why the STREAM function is included in the query?",
    options: [
      { id: "A", text: "The STREAM function is not needed and will cause an error." },
      { id: "B", text: "The table being created is a live table." },
      { id: "C", text: "The customers table is a streaming live table." },
      { id: "D", text: "The customers table is a reference to a Structured Streaming query on a PySpark DataFrame." },
      { id: "E", text: "The data in the customers table has been updated since its last run." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 76,
    topic: "General",
    questionText: "T o p i c 1 Which of the following describes the type of workloads that are always compatible with Auto Loader?",
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "Machine learning workloads" },
      { id: "C", text: "Serverless workloads" },
      { id: "D", text: "Batch workloads" },
      { id: "E", text: "Dashboard workloads" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 77,
    topic: "Workflows",
    questionText: "T o p i c 1 Differentiate between all-purpose clusters and jobs clusters. A data engineering team has created a python notebook to load data from cloud storage, this job has been tested and now needs to be scheduled in production. Which would be the best cluster to be used in this case?",
    options: [
      { id: "A", text: "All purpose cluster" },
      { id: "B", text: "Any Unity Catalog-enabled cluster" },
      { id: "C", text: "Jobs Cluster" },
      { id: "D", text: "Serverless SQL warehouse" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 77,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer and data analyst are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
    options: [
      { id: "A", text: "None of these changes will need to be made" },
      { id: "B", text: "The pipeline will need to stop using the medallion-based multi-hop architecture" },
      { id: "C", text: "The pipeline will need to be written entirely in SQL" },
      { id: "D", text: "The pipeline will need to use a batch source in place of a streaming source" },
      { id: "E", text: "The pipeline will need to be written entirely in Python" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 78,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer is using the following code block as part of a batch ingestion pipeline to read from a composable table: Which of the following changes needs to be made so this code block will work when the transactions table is a stream source?",
    options: [
      { id: "A", text: "Replace predict with a stream-friendly prediction function" },
      { id: "B", text: "Replace schema(schema) with option ('maxFilesPerTrigger', 1)" },
      { id: "C", text: "Replace 'transactions' with the path to the location of the Delta table" },
      { id: "D", text: "Replace format('delta') with format('stream')" },
      { id: "E", text: "Replace spark.read with spark.readStream" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 79,
    topic: "Streaming",
    questionText: "T o p i c 1 Which of the following queries is performing a streaming hop from raw data to a Bronze table?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
      { id: "E", text: "" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 80,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid _ timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION FAIL UPDATE What is the expected behavior when a batch of data containing data that violates these constraints is processed?",
    options: [
      { id: "A", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "B", text: "Records that violate the expectation cause the job to fail." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log." },
      { id: "E", text: "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 81,
    topic: "General",
    questionText: "T o p i c 1 Which of the following statements regarding the relationship between Silver tables and Bronze tables is always true?",
    options: [
      { id: "A", text: "Silver tables contain a less refined, less clean view of data than Bronze data." },
      { id: "B", text: "Silver tables contain aggregates while Bronze data is unaggregated." },
      { id: "C", text: "Silver tables contain more data than Bronze tables." },
      { id: "D", text: "Silver tables contain a more refined and cleaner view of data than Bronze tables." },
      { id: "E", text: "Silver tables contain less data than Bronze tables." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 82,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineering team has noticed that their Databricks SQL queries are running too slowly when they are submitted to a non-running SQL endpoint. The data engineering team wants this issue to be resolved. Which of the following approaches can the team use to reduce the time it takes to return results in this scenario?",
    options: [
      { id: "A", text: "They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to 'Reliability Optimized.'" },
      { id: "B", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "C", text: "They can increase the cluster size of the SQL endpoint." },
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." },
      { id: "E", text: "They can increase the maximum bound of the SQL endpoint's scaling range." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 83,
    topic: "General",
    questionText: "T o p i c 1 A new data engineering team team has been assigned to an ELT project. The new data engineering team will need full privileges on the table sales to fully manage the project. Which command can be used to grant full permissions on the database to the new data engineering team?",
    options: [
      { id: "A", text: "GRANT ALL PRIVILEGES ON TABLE sales TO team;" },
      { id: "B", text: "GRANT SELECT CREATE MODIFY ON TABLE sales TO team;" },
      { id: "C", text: "GRANT SELECT ON TABLE sales TO team;" },
      { id: "D", text: "GRANT ALL PRIVILEGES ON TABLE team TO sales;" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 83,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineer has a Job that has a complex run schedule, and they want to transfer that schedule to other Jobs. Rather than manually selecting each value in the scheduling form in Databricks, which of the following tools can the data engineer use to represent and submit the schedule programmatically?",
    options: [
      { id: "A", text: "pyspark.sql.types.DateType" },
      { id: "B", text: "datetime" },
      { id: "C", text: "pyspark.sql.types.TimestampType" },
      { id: "D", text: "Cron syntax" },
      { id: "E", text: "There is no way to represent and submit this information programmatically" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 84,
    topic: "Workflows",
    questionText: "T o p i c 1 Which of the following approaches should be used to send the Databricks Job owner an email in the case that the Job fails?",
    options: [
      { id: "A", text: "Manually programming in an alert system in each cell of the Notebook" },
      { id: "B", text: "Setting up an Alert in the Job page" },
      { id: "C", text: "Setting up an Alert in the Notebook" },
      { id: "D", text: "There is no way to notify the Job owner in the case of Job failure" },
      { id: "E", text: "MLflow Model Registry Webhooks" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 85,
    topic: "General",
    questionText: "T o p i c 1 A new data engineering team has been assigned to work on a project. The team will need access to database customers in order to see what tables already exist. The team has its own group team. Which command can be used to grant the necessary permission on the entire database to the new team?",
    options: [
      { id: "A", text: "GRANT VIEW ON CATALOG customers TO team;" },
      { id: "B", text: "GRANT CREATE ON DATABASE customers TO team;" },
      { id: "C", text: "GRANT USAGE ON CATALOG team TO customers;" },
      { id: "D", text: "GRANT USAGE ON DATABASE customers TO team;" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 85,
    topic: "SQL",
    questionText: "T o p i c 1 An engineering manager uses a Databricks SQL query to monitor ingestion latency for each data source. The manager checks the results of the query every day, but they are manually rerunning the query each day and waiting for the results. Which of the following approaches can the manager use to ensure the results of the query are updated each day?",
    options: [
      { id: "A", text: "They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL." },
      { id: "B", text: "They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL." },
      { id: "C", text: "They can schedule the query to refresh every 1 day from the query's page in Databricks SQL." },
      { id: "D", text: "They can schedule the query to run every 1 day from the Jobs UI." },
      { id: "E", text: "They can schedule the query to run every 12 hours from the Jobs UI." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 86,
    topic: "SQL",
    questionText: "T o p i c 1 An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query. For the first week following the project’s release, the manager wants the query results to be updated every minute. However, the manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week of the project’s release. Which approach can the engineering team use to ensure the query does not cost the organization any money beyond the first week of the project’s release?",
    options: [
      { id: "A", text: "They can set a limit to the number of DBUs that are consumed by the SQL Endpoint." },
      { id: "B", text: "They can set the query’s refresh schedule to end after a certain number of refreshes." },
      { id: "C", text: "They can set the query’s refresh schedule to end on a certain date in the query scheduler." },
      { id: "D", text: "They can set a limit to the number of individuals that are able to manage the query’s refresh schedule." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 86,
    topic: "Workflows",
    questionText: "T o p i c 1 In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?",
    options: [
      { id: "A", text: "When another task needs to be replaced by the new task" },
      { id: "B", text: "When another task needs to fail before the new task begins" },
      { id: "C", text: "When another task has the same dependency libraries as the new task" },
      { id: "D", text: "When another task needs to use as little compute resources as possible" },
      { id: "E", text: "When another task needs to successfully complete before the new task begins" },
    ],
    correctAnswerId: "E",
    explanation: "Correct Answer is E. (Extracted from PDF)"
  },
  {
    id: 87,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to a data analytics dashboard for a retail use case. The job has a Databricks SQL query that returns the number of store-level records where sales is equal to zero. The data engineer wants their entire team to be notified via a messaging webhook whenever this value is greater than 0. Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of stores with $0 in sales is greater than zero?",
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." },
      { id: "B", text: "They can set up an Alert with a new email alert destination." },
      { id: "C", text: "They can set up an Alert with one-time notifications." },
      { id: "D", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "E", text: "They can set up an Alert without notifications." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 88,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer wants to schedule their Databricks SQL dashboard to refresh every hour, but they only want the associated SQL endpoint to be running when it is necessary. The dashboard has multiple queries on multiple datasets associated with it. The data that feeds the dashboard is automatically processed using a Databricks Job. Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
    options: [
      { id: "A", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "B", text: "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint." },
      { id: "C", text: "They can reduce the cluster size of the SQL endpoint." },
      { id: "D", text: "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints." },
      { id: "E", text: "They can set up the dashboard's SQL endpoint to be serverless." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 89,
    topic: "Unity Catalog",
    questionText: "T o p i c 1 Which two conditions are applicable for governance in Databricks Unity Catalog? (Choose two.)",
    options: [
      { id: "A", text: "You can have more than 1 metastore within a databricks account console but only 1 per region." },
      { id: "B", text: "Both catalog and schema must have a managed location in Unity Catalog provided metastore is not associated with a location" },
      { id: "C", text: "You can have multiple catalogs within metastore and 1 catalog can be associated with multiple metastore" },
      { id: "D", text: "If catalog is not associated with location, it’s mandatory to associate schema with managed locations" },
      { id: "E", text: "If metastore is not associated with location, it’s mandatory to associate catalog with managed locations" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 89,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs access to a table new _ they do not know who the table owner is. table, but they do not have the correct permissions. They can ask the table owner for permission, but Which of the following approaches can be used to identify the owner of new _ table?",
    options: [
      { id: "A", text: "Review the Permissions tab in the table's page in Data Explorer" },
      { id: "B", text: "All of these options can be used to identify the owner of the table" },
      { id: "C", text: "Review the Owner field in the table's page in Data Explorer" },
      { id: "D", text: "Review the Owner field in the table's page in the cloud storage solution" },
      { id: "E", text: "There is no way to identify the owner of the table" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 90,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary. Which approach can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
    options: [
      { id: "A", text: "They can ensure the dashboard’s SQL endpoint matches each of the queries’ SQL endpoints." },
      { id: "B", text: "They can set up the dashboard’s SQL endpoint to be serverless." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can ensure the dashboard’s SQL endpoint is not one of the included query’s SQL endpoint." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 90,
    topic: "General",
    questionText: "T o p i c 1 A new data engineering team team has been assigned to an ELT project. The new data engineering team will need full privileges on the table sales to fully manage the project. Which of the following commands can be used to grant full permissions on the database to the new data engineering team?",
    options: [
      { id: "A", text: "GRANT ALL PRIVILEGES ON TABLE sales TO team;" },
      { id: "B", text: "GRANT SELECT CREATE MODIFY ON TABLE sales TO team;" },
      { id: "C", text: "GRANT SELECT ON TABLE sales TO team;" },
      { id: "D", text: "GRANT USAGE ON TABLE sales TO team;" },
      { id: "E", text: "GRANT ALL PRIVILEGES ON TABLE team TO sales;" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 91,
    topic: "General",
    questionText: "T o p i c 1 Which data lakehouse feature results in improved data quality over a traditional data lake?",
    options: [
      { id: "A", text: "A data lakehouse stores data in open formats." },
      { id: "B", text: "A data lakehouse allows the use of SQL queries to examine data." },
      { id: "C", text: "A data lakehouse provides storage solutions for structured and unstructured data." },
      { id: "D", text: "A data lakehouse supports ACID-compliant transactions." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 92,
    topic: "General",
    questionText: "T o p i c 1 In which scenario will a data team want to utilize cluster pools?",
    options: [
      { id: "A", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "B", text: "An automated report needs to be runnable by all stakeholders." },
      { id: "C", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "D", text: "An automated report needs to be made reproducible." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 93,
    topic: "General",
    questionText: "T o p i c 1 What is hosted completely in the control plane of the classic Databricks architecture?",
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "Databricks web application" },
      { id: "C", text: "Driver node" },
      { id: "D", text: "Databricks Filesystem" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 94,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. What is an advantage of using Databricks Repos over the Databricks Notebooks versioning?",
    options: [
      { id: "A", text: "Databricks Repos allows users to revert to previous versions of a notebook" },
      { id: "B", text: "Databricks Repos is wholly housed within the Databricks Data Intelligence Platform" },
      { id: "C", text: "Databricks Repos provides the ability to comment on specific changes" },
      { id: "D", text: "Databricks Repos supports the use of multiple branches" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 95,
    topic: "General",
    questionText: "T o p i c 1 What is a benefit of the Databricks Lakehouse Architecture embracing open source technologies?",
    options: [
      { id: "A", text: "Avoiding vendor lock-in" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Ability to scale workloads" },
      { id: "D", text: "Cloud-specific integrations" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 96,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which location can the data engineer review their permissions on the table?",
    options: [
      { id: "A", text: "Jobs" },
      { id: "B", text: "Dashboards" },
      { id: "C", text: "Catalog Explorer" },
      { id: "D", text: "Repos" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 97,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is running code in a Databricks Repo that is cloned from a central Git repository. A colleague of the data engineer informs them that changes have been made and synced to the central Git repository. The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which Git operation does the data engineer need to run to accomplish this task?",
    options: [
      { id: "A", text: "Clone" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Push" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 98,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which file format is used for storing Delta Lake Table?",
    options: [
      { id: "A", text: "CSV" },
      { id: "B", text: "Parquet" },
      { id: "C", text: "JSON" },
      { id: "D", text: "Delta" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 99,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data architect has determined that a table of the following format is necessary: Which code block is used by SQL DDL command to create an empty Delta table in the above format regardless of whether a table already exists with this name?",
    options: [
      { id: "A", text: "CREATE OR REPLACE TABLE table_ name ( employeeId STRING, startDate DATE, avgRating FLOAT )" },
      { id: "B", text: "CREATE OR REPLACE TABLE table_ name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA" },
      { id: "C", text: "CREATE TABLE IF NOT EXISTS table_ name ( employeeId STRING, startDate DATE, avgRating FLOAT )" },
      { id: "D", text: "CREATE TABLE table_ name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 100,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has been given a new record of data: id STRING = 'a1' rank INTEGER = 6 rating FLOAT = 9.4 Which SQL commands can be used to append the new record to an existing Delta table my _ table?",
    options: [
      { id: "A", text: "INSERT INTO my _ table VALUES ('a1', 6, 9.4)" },
      { id: "B", text: "INSERT VALUES ('a1', 6, 9.4) INTO my _ table" },
      { id: "C", text: "UPDATE my _ table VALUES ('a1', 6, 9.4)" },
      { id: "D", text: "UPDATE VALUES ('a1', 6, 9.4) my _ table" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 101,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has realized that the data files associated with a Delta table are incredibly small. They want to compact the small files to form larger files to improve performance. Which keyword can be used to compact the small files?",
    options: [
      { id: "A", text: "OPTIMIZE" },
      { id: "B", text: "VACUUM" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 102,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to create a data entity from a couple of tables. The data entity must be used by other data engineers in other sessions. It also must be saved to a physical location. Which of the following data entities should the data engineer create?",
    options: [
      { id: "A", text: "Table" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 103,
    topic: "General",
    questionText: "T o p i c 1 A data engineer runs a statement every day to copy the previous day’s sales into the table transactions. Each day’s sales are in their own file in the location '/transactions/raw'. Today, the data engineer runs the following command to complete this task: After running the command today, the data engineer notices that the number of records in table transactions has not changed. What explains why the statement might not have copied any new records into the table?",
    options: [
      { id: "A", text: "The format of the files to be copied were not included with the FORMAT_OPTIONS keyword." },
      { id: "B", text: "The COPY INTO statement requires the table to be refreshed to view the copied rows." },
      { id: "C", text: "The previous day’s file has already been copied into the table." },
      { id: "D", text: "The PARQUET file format does not support COPY INTO." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 104,
    topic: "Delta Lake",
    questionText: "T o p i c 1 Which command can be used to write data into a Delta table while avoiding the writing of duplicate records?",
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 105,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data analyst has created a Delta table sales that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL. Which command could the data engineering team use to access sales in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "spark.table('sales')" },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table('sales')" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 106,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has created a new database using the following command: CREATE DATABASE IF NOT EXISTS customer360; In which location will the customer360 database be located?",
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "dbfs:/user/hive/database" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 107,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer is attempting to drop a Spark SQL table my _ table and runs the following command: DROP TABLE IF EXISTS my _ table; After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. What is the reason behind the deletion of all these files?",
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table did not have a location" },
      { id: "D", text: "The table was external" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 108,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to create a table in Databricks using data from a CSV file at location /path/to/csv. They run the following command: Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "FROM 'path/to/csv'" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 109,
    topic: "General",
    questionText: "T o p i c 1 What is a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
    options: [
      { id: "A", text: "Parquet files can be partitioned" },
      { id: "B", text: "Parquet files will become Delta tables" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Parquet files have the ability to be optimized" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 110,
    topic: "SQL",
    questionText: "T o p i c 1 Which SQL keyword can be used to convert a table from a long format to a wide format?",
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 111,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer has a Python variable table_ name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_ name. They have the following incomplete code block: ____(f'SELECT customer _id, spend FROM {table_ name}') What can be used to fill in the blank to successfully complete the task?",
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.sql" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 112,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is working with two tables. Each of these tables is displayed below in its entirety. The data engineer runs the following query to join these tables together:",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 113,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees in table stores. The custom logic should create a new column exp _employees that is an array of all of the employees with more than 5 years of experience for each row. In order to apply this custom logic at scale, the data engineer wants to use the FILTER higher-order function. Which code block successfully completes this task?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 114,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which code block can the data engineer use to complete this task?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 115,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is below: Which line of code should the data engineer use to fill in the blank if the data engineer only wants the query to execute a micro-batch to process data every 5 seconds?",
    options: [
      { id: "A", text: "trigger('5 seconds')" },
      { id: "B", text: "trigger(continuous='5 seconds')" },
      { id: "C", text: "trigger(once='5 seconds')" },
      { id: "D", text: "trigger(processingTime='5 seconds')" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 116,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is maintaining a data pipeline. Upon data ingestion, the data engineer notices that the source data is starting to have a lower level of quality. The data engineer would like to automate the process of monitoring the quality level. Which of the following tools can the data engineer use to solve this problem?",
    options: [
      { id: "A", text: "Auto Loader" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Delta Lake" },
      { id: "D", text: "Delta Live Tables" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 117,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has three tables in a Delta Live Tables (DLT) pipeline. They have configured the pipeline to drop invalid records at each table. They notice that some data is being dropped due to quality concerns at some point in the DLT pipeline. They would like to determine at which table in their pipeline the data is being dropped. Which approach can the data engineer take to identify the table that is dropping the records?",
    options: [
      { id: "A", text: "They can set up separate expectations for each table when developing their DLT pipeline." },
      { id: "B", text: "They can navigate to the DLT pipeline page, click on the “Error” button, and review the present errors." },
      { id: "C", text: "They can set up DLT to notify them via email when records are dropped." },
      { id: "D", text: "They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 118,
    topic: "Streaming",
    questionText: "T o p i c 1 What is used by Spark to record the offset range of the data being processed in each trigger in order for Structured Streaming to reliably track the exact progress of the processing so that it can handle any kind of failure by restarting and/or reprocessing?",
    options: [
      { id: "A", text: "Checkpointing and Write-ahead Logs" },
      { id: "B", text: "Replayable Sources and Idempotent Sinks" },
      { id: "C", text: "Write-ahead Logs and Idempotent Sinks" },
      { id: "D", text: "Checkpointing and Idempotent Sinks" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 119,
    topic: "General",
    questionText: "T o p i c 1 What describes the relationship between Gold tables and Silver tables?",
    options: [
      { id: "A", text: "Gold tables are more likely to contain aggregations than Silver tables." },
      { id: "B", text: "Gold tables are more likely to contain valuable data than Silver tables." },
      { id: "C", text: "Gold tables are more likely to contain a less refined view of data than Silver tables." },
      { id: "D", text: "Gold tables are more likely to contain truthful data than Silver tables." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 120,
    topic: "Delta Lake",
    questionText: "T o p i c 1 What describes when to use the CREATE STREAMING LIVE TABLE (formerly CREATE INCREMENTAL LIVE TABLE) syntax over the CREATE LIVE TABLE syntax when creating Delta Live Tables (DLT) tables using SQL?",
    options: [
      { id: "A", text: "CREATE STREAMING LIVE TABLE should be used when the subsequent step in the DLT pipeline is static." },
      { id: "B", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed incrementally." },
      { id: "C", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed through complicated aggregations." },
      { id: "D", text: "CREATE STREAMING LIVE TABLE should be used when the previous step in the DLT pipeline is static." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 121,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Production mode using the Continuous Pipeline Mode. What is the expected outcome after clicking Start to update the pipeline assuming previously unprocessed data exists and all definitions are valid?",
    options: [
      { id: "A", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." },
      { id: "B", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing." },
      { id: "C", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped." },
      { id: "D", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 122,
    topic: "General",
    questionText: "T o p i c 1 Which type of workloads are compatible with Auto Loader?",
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "Machine learning workloads" },
      { id: "C", text: "Serverless workloads" },
      { id: "D", text: "Batch workloads" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 123,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Why has Auto Loader inferred all of the columns to be of the string type?",
    options: [
      { id: "A", text: "Auto Loader cannot infer the schema of ingested data" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "Auto Loader only works with string data" },
      { id: "D", text: "All of the fields had at least one null value" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 124,
    topic: "General",
    questionText: "T o p i c 1 Which statement regarding the relationship between Silver tables and Bronze tables is always true?",
    options: [
      { id: "A", text: "Silver tables contain a less refined, less clean view of data than Bronze data." },
      { id: "B", text: "Silver tables contain aggregates while Bronze data is unaggregated." },
      { id: "C", text: "Silver tables contain more data than Bronze tables." },
      { id: "D", text: "Silver tables contain less data than Bronze tables." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 125,
    topic: "Streaming",
    questionText: "T o p i c 1 Which query is performing a streaming hop from raw data to a Bronze table?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 126,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid _ timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW What is the expected behavior when a batch of data containing data that violates these constraints is processed?",
    options: [
      { id: "A", text: "Records that violate the expectation cause the job to fail." },
      { id: "B", text: "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 127,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which action can the data engineer perform to improve the start up time for the clusters used for the Job?",
    options: [
      { id: "A", text: "They can use endpoints available in Databricks SQL" },
      { id: "B", text: "They can use jobs clusters instead of all-purpose clusters" },
      { id: "C", text: "They can configure the clusters to autoscale for larger data sizes" },
      { id: "D", text: "They can use clusters that are from a cluster pool" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 128,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer has a single-task Job that runs each morning before they begin working. After identifying an upstream data issue, they need to set up another task to run a new notebook prior to the original task. Which approach can the data engineer use to set up the new task?",
    options: [
      { id: "A", text: "They can clone the existing task in the existing Job and update it to run the new notebook." },
      { id: "B", text: "They can create a new task in the existing Job and then add it as a dependency of the original task." },
      { id: "C", text: "They can create a new task in the existing Job and then add the original task as a dependency of the new task." },
      { id: "D", text: "They can create a new job from scratch and add both tasks to run concurrently." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 129,
    topic: "Workflows",
    questionText: "T o p i c 1 A single Job runs two notebooks as two separate tasks. A data engineer has noticed that one of the notebooks is running slowly in the Job’s current run. The data engineer asks a tech lead for help in identifying why this might be the case. Which approach can the tech lead use to identify why the notebook is running slowly as part of the Job?",
    options: [
      { id: "A", text: "They can navigate to the Runs tab in the Jobs UI to immediately review the processing notebook." },
      { id: "B", text: "They can navigate to the Tasks tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "C", text: "They can navigate to the Runs tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "D", text: "They can navigate to the Tasks tab in the Jobs UI to immediately review the processing notebook." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 130,
    topic: "SQL",
    questionText: "T o p i c 1 A data analysis team has noticed that their Databricks SQL queries are running too slowly when connected to their always-on SQL endpoint. They claim that this issue is present when many members of the team are running small queries simultaneously. They ask the data engineering team for help. The data engineering team notices that each of the team’s queries uses the same SQL endpoint. Which approach can the data engineering team use to improve the latency of the team’s queries?",
    options: [
      { id: "A", text: "They can increase the cluster size of the SQL endpoint." },
      { id: "B", text: "They can increase the maximum bound of the SQL endpoint’s scaling range." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 131,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which approach can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?",
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." },
      { id: "B", text: "They can set up an Alert with a new email alert destination." },
      { id: "C", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "D", text: "They can set up an Alert with one-time notifications." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 132,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A company uses Delta Sharing to collaborate with partners across different cloud providers and geographic regions. What will result in additional costs due to cross-region or egress fees?",
    options: [
      { id: "A", text: "Sharing data within the same cloud provider and region" },
      { id: "B", text: "Transferring data via Delta Sharing across clouds and across different geographic regions" },
      { id: "C", text: "Accessing Delta Sharing data using a VPN within the same data center" },
      { id: "D", text: "Utilizing Delta Sharing for internal data analytics within a single cloud environment" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 133,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer is writing a script that is meant to ingest new data from cloud storage. In the event of the Schema change, the ingestion should fail. It should fail until the changes downstream source can be found and verified as intended changes. Which command will meet the requirements?",
    options: [
      { id: "A", text: "failOnNewColumns" },
      { id: "B", text: "none" },
      { id: "C", text: "rescue" },
      { id: "D", text: "addNewColumns" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 134,
    topic: "SQL",
    questionText: "T o p i c 1 Which SQL code snippet will correctly demonstrate a Data Definition Language (DDL) operation used to create a table?",
    options: [
      { id: "A", text: "CREATE TABLE employees ( id INT, name STRING );" },
      { id: "B", text: "DROP TABLE employees;" },
      { id: "C", text: "ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);" },
      { id: "D", text: "INSERT INTO employees (id, name) VALUES (1 'Alice');" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 135,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer is working in a Databricks notebook to design and manage a batch ETL pipeline. The engineer is writing SQL and Python code to clean data, transform it, and join large datasets from different sources. The engineer wants to organize these steps into a structured process that can be run regularly and scheduled as part of a data pipeline. Which Databricks notebook feature is applicable in the use case?",
    options: [
      { id: "A", text: "Real-time streaming support" },
      { id: "B", text: "Collaborative editing" },
      { id: "C", text: "Task workflows and job scheduling" },
      { id: "D", text: "Notebook version control" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 136,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineer needs to develop integration tests for an ETL process and deploy a version-controlled, packaged workflow into production using an external job scheduler. Which tool should the data engineer use for this job?",
    options: [
      { id: "A", text: "Databricks Connect" },
      { id: "B", text: "Databricks Asset Bundles" },
      { id: "C", text: "Databricks Command Line Interface" },
      { id: "D", text: "Databricks Software Development Kit" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 137,
    topic: "General",
    questionText: "T o p i c 1 Which Databricks asset bundle format is valid?",
    options: [
      { id: "A", text: "resources: jobs: hello-job: name: hello-job tasks: - task_key: hello-task existing_cluster _id: 1234-567890-abcde123 notebook_ notebook_ path: ./hello.py task:" },
      { id: "B", text: "'resources':{ 'jobs':{ 'name':'hello-job', 'tasks':{ 'task_key:'hello-task', 'existing_cluster _id':'1234-567890-abcde123', 'notebook_ 'notebook_ path': '.hello.py' } } } task':{" },
      { id: "C", text: "configuration = { 'resources':{ 'jobs':{ 'name':'hello-job', 'tasks':{ 'task_key:'hello-task', 'existing_cluster _id':'1234-567890-abcde123', 'notebook_ task':{ 'notebook_ path': '.hello.py' } } } }" },
      { id: "D", text: "resources { jobs { name = 'hello-job' tasks{ task_key = 'hello-task' existing_cluster _id = '1234-567890-abcde123' notebook_ notebook_ path = '.hello.py' } } } } task{" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 138,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer needs to ingest from both streaming and batch sources for a firm that relies on highly accurate data. Occasionally, some of the data picked up by the sensors that provide a streaming input are outside the expected parameters. If this occurs, the data must be dropped, but the stream should not fail. Which feature of Delta Live Tables meets this requirement?",
    options: [
      { id: "A", text: "Change Data Capture" },
      { id: "B", text: "Error Handling" },
      { id: "C", text: "Monitoring" },
      { id: "D", text: "Expectations" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 139,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has inherited a Databricks pipeline from a previous team. The pipeline is missing SLAs and costs more than the allotted budget. On analysis, it is noted that the cluster is not being fully utilized, and the dataset is getting skewed. How should the data engineer resolve this issue?",
    options: [
      { id: "A", text: "Use coalesce() on the dataset to merge partitions and reduce skew." },
      { id: "B", text: "Increase the number of executors for the job." },
      { id: "C", text: "Repartition the dataset to have it be more optimally spread across all nodes." },
      { id: "D", text: "Increase the executor memory for the job." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 140,
    topic: "General",
    questionText: "T o p i c 1 An organization is looking for an optimized storage layer that supports ACID transactions and schema enforcement. Which technology should the organization use?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Cloud File Storage" },
      { id: "D", text: "Data lake" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 141,
    topic: "General",
    questionText: "What are the transformations typically included in building the Bronze layer?",
    options: [
      { id: "A", text: "Include columns Load date/time, process ID" },
      { id: "B", text: "Business rules and transformations" },
      { id: "C", text: "Perform extensive data cleansing" },
      { id: "D", text: "Aggregate data from multiple sources" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 142,
    topic: "SQL",
    questionText: "T o p i c 1 An organization has data stored across multiple external systems, including MySQL, Amazon Redshift, and Google BigQuery. The data engineer wants to perform analytics without ingesting directly into Databricks, ensuring unified governance and minimizing data duplication. Which feature of Databricks enables querying these external data sources while maintaining centralized governance?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Lakehouse Federation" },
      { id: "C", text: "MLflow" },
      { id: "D", text: "Databricks Connect" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 143,
    topic: "Unity Catalog",
    questionText: "T o p i c 1 An organization needs to share a dataset stored in its Databricks Unity Catalog with an external partner who uses a different data platform that is not Databricks. The goal is to maintain data security and ensure the partner can access the data efficiently. . Which method should the data engineer use to securely share the dataset with the external partner?",
    options: [
      { id: "A", text: "Using Delta Sharing with the open sharing protocol" },
      { id: "B", text: "Exporting data as CSV files and emailing them" },
      { id: "C", text: "Using a third-party API to access the Delta table" },
      { id: "D", text: "Databricks-to-Databricks Sharing" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 144,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer streams customer orders into a Kafka topic (orders_ engineer needs to ingest the data from Kafka brokers to DLT using Databricks. topic) and is currently writing the ingestion script of a DLT pipeline. The data What is the correct code for ingesting the data?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 145,
    topic: "General",
    questionText: "T o p i c 1 A global retail company sells products across multiple categories (e.g., Electronics, Clothing) and regions (e.g., North, South, East, West). The sales team has provided the data engineer with a PySpark dataframe named sales_ df as below and the team wants the data engineer to analyze the sales data to help them make strategic decisions. Calculate the total sales amount for each product category and store the results in a new dataframe called category _sales. What will generate the expected result of category _sales?",
    options: [
      { id: "A", text: "category _sales = sales_ df.groupBy('category').agg(sum('sales_amount').alias('total _sales_amount'))" },
      { id: "B", text: "category _sales = sales_ df.sum('sales_amount').groupBy('category').alias('total _sales_amount'))" },
      { id: "C", text: "category _sales = sales_ df.agg(sum('sales_amount').groupBy('category').alias('total _sales_amount'))" },
      { id: "D", text: "category _sales = sales_ df.groupBy('region').agg(sum('sales_amount').alias('total _sales_amount'))" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 146,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer is designing an ETL pipeline to process both streaming and batch data from multiple sources. The pipeline must ensure data quality, handle schema evolution, and provide easy maintenance. The team is considering using Delta Live Tables (DLT) in Databricks to achieve these goals. They want to understand the key features and benefits of DLT that make it suitable for this use case. Why is Delta Live Tables (DLT) an appropriate choice?",
    options: [
      { id: "A", text: "Automatic data quality checks, built-in support for schema evolution, and declarative pipeline development" },
      { id: "B", text: "Manual schema enforcement, high operational overhead, and limited scalability" },
      { id: "C", text: "Requires custom code for data quality checks, no support for streaming data, and complex pipeline maintenance" },
      { id: "D", text: "Supports only batch processing, no data versioning, and high infrastructure costs" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 147,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer is attempting to write Python and SQL in the same command cell and is running into an error. The engineer thought that it was possible to use a Python variable in a select statement. Why does the command fail?",
    options: [
      { id: "A", text: "Databricks supports language interoperability in the same cell but only between Scala and SQL." },
      { id: "B", text: "Databricks supports multiple languages but only one per notebook." },
      { id: "C", text: "Databricks supports one language per cell." },
      { id: "D", text: "Databricks supports language interoperability but only if a special character is used." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 148,
    topic: "Python",
    questionText: "T o p i c 1 Which compute option should be chosen in a scenario where small-scale ad-hoc Python scripts need to be run at high frequency and should wind down quickly after these queries have finished running?",
    options: [
      { id: "A", text: "All-purpose Cluster" },
      { id: "B", text: "Job Cluster" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "SQL Warehouse" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 149,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer is working on a personal laptop and needs to perform complex transformations on data stored in a Delta Lake on cloud storage. The engineer decides to use Databricks Connect to interact with Databricks clusters and work in their local IDE. How does Databricks Connect enable the engineer to develop, test, and debug code seamlessly on their local machine while interacting with Databricks clusters?",
    options: [
      { id: "A", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using a specific IDE that is required by Databricks" },
      { id: "B", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code only through Databricks’ own web interface" },
      { id: "C", text: "By allowing direct execution of Spark jobs from the local machine without needing a network connection" },
      { id: "D", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using their preferred IDE" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 150,
    topic: "General",
    questionText: "T o p i c 1 A company sells products across multiple categories (e.g., Electronics, Clothing) and regions. The sales team has provided you with a PySpark dataframe named sales_ df as below, and the team wants the data engineer to analyze the sales data to help make strategic decisions. Calculate the total sales amount for each region and store the results in a new dataframe called region _sales. Given the expected result: Which code will generate the expected result?",
    options: [
      { id: "A", text: "region _sales = sales_ df.groupBy('category').sum('sales_amount').alias('total _sales_amount')" },
      { id: "B", text: "region _sales = sales_ df.groupBy('region').agg(sum('sales_amount').alias('total _sales_amount'))" },
      { id: "C", text: "region _sales = sales_ df.sum('sales_amount').groupBy('region').alias('total _sales_amount')" },
      { id: "D", text: "region _sales = sales_ df.agg(sum('sales_amount').groupBy('region').alias('total _sales_amount'))" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 151,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A Data Engineer is building a simple data pipeline using Delta Live Tables (DLT) in Databricks to ingest customer data. The raw customer data is stored in a cloud storage location in JSON format. The task is to create a DLT pipeline that reads the raw JSON data and writes it into a Delta table for further processing. Which code snippet will correctly ingest the raw JSON data and create a Delta table using DLT?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 152,
    topic: "General",
    questionText: "T o p i c 1 A data engineering team is using Kafka to capture event data and then ingest it into Databricks. The team wants to be able to see these historical events. Medallion architecture is already in place. The team wants to be mindful of costs. Where should this historical event data be stored?",
    options: [
      { id: "A", text: "Gold" },
      { id: "B", text: "Silver" },
      { id: "C", text: "Bronze" },
      { id: "D", text: "Raw layer" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 153,
    topic: "Workflows",
    questionText: "T o p i c 1 What is the maximum output supported by a job cluster to ensure a notebook does not fail?",
    options: [
      { id: "A", text: "25MBs" },
      { id: "B", text: "10MBs" },
      { id: "C", text: "30MBs" },
      { id: "D", text: "15MBs" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 154,
    topic: "General",
    questionText: "Which two items are characteristics of the Gold Layer? (Choose two.)",
    options: [
      { id: "A", text: "Historical lineage" },
      { id: "B", text: "Raw Data" },
      { id: "C", text: "Normalised" },
      { id: "D", text: "De-normalised" },
      { id: "E", text: "Read-optimized" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 155,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer has developed an ETL that produce a Delta managed table with liquid clustering feature activated as output. Several consumers are having issues regarding time delay when reading this table. How could the Data Engineer be sure about the OPTIMIZE command has been executed explicitly?",
    options: [
      { id: "A", text: "Check the system table system.storage.predictive_ optimization _ operations_history" },
      { id: "B", text: "Use SHOW TABLES EXTENDED to check the partitions columns used" },
      { id: "C", text: "Use DESCRIBE DETAIL table to see the file size and number of files for the table" },
      { id: "D", text: "Use DESCRIBE HISTORY table to check if exists any OPTIMIZE operation" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 156,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is reviewing the documentation on audit logs in Databricks for compliance purposes and needs to understand the format in which audit logs output events. How are events formatted in Databricks audit logs?",
    options: [
      { id: "A", text: "In Databricks, audit logs output events in a JSON format." },
      { id: "B", text: "In Databricks, audit logs output events in a CSV format." },
      { id: "C", text: "In Databricks, audit logs output events in an XML format." },
      { id: "D", text: "In Databricks, audit logs output events in a plain text format." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 157,
    topic: "Python",
    questionText: "T o p i c 1 A Python file is ready to go into production and the client wants to use the cheapest but most efficient type of cluster possible. The workload is quite small, only processing 10GBs of data with only simple joins and no complex aggregations or wide transformations. Which cluster meets the requirement?",
    options: [
      { id: "A", text: "Interactive cluster" },
      { id: "B", text: "Job cluster with spot instances enabled" },
      { id: "C", text: "Job cluster with spot instances disabled" },
      { id: "D", text: "Job cluster with Photon enabled" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 158,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer is working on a Databricks project that utilizes cloud storage. The data engineer wants to load several JSON files from containers on a storage account as soon as the file arrives within the storage account. Which syntax should the data engineer follow to first load the files into a dataframe and check that it is working as expected using Python?",
    options: [
      { id: "A", text: "df = spark.read.json('input/path')" },
      { id: "B", text: "df = spark.readStream.format('cloud').option('json').load('/input/path')" },
      { id: "C", text: "df = spark.readStream.format('json'.load('input/path')" },
      { id: "D", text: "df = spark.readStream.format('cloudFiles').option('cloudFiles.format', 'json').load('/input/path')" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 159,
    topic: "General",
    questionText: "T o p i c 1 A data engineer team has decided to implement a new data platform on Databricks and is currently deciding how to store each kind of data on each data layer. What is the appropriate layer and data pairing for medallion architecture?",
    options: [
      { id: "A", text: "Silver Layer - Raw data from deposit account application" },
      { id: "B", text: "Bronze Layer - Summary of cash deposit amount for each country and city" },
      { id: "C", text: "Silver Layer - Cleansed master customer data" },
      { id: "D", text: "Gold Layer - Deduplicated money transfer transaction" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 160,
    topic: "Streaming",
    questionText: "T o p i c 1 A data engineer is processing ingested streaming tables and needs to filter out NULL values in the order _ table orders_ raw and store the results in a new table orders_ valid using DLT. datetime column from the raw streaming Which code snippet should the data engineer use?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 161,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer is managing a data pipeline in Databricks, where multiple Delta tables are used for various transformations. The team wants to track how data flows through the pipeline, including identifying dependencies between Delta tables, notebooks, jobs, and dashboards. The data engineer is utilizing the Unity Catalog lineage feature to monitor this process. How does Unity Catalog’s data lineage feature support the visualization of relationships between Delta tables, notebooks, jobs, and dashboards?",
    options: [
      { id: "A", text: "Unity Catalog lineage visualizes dependencies between Delta tables, notebooks, and jobs, but does not provide column-level tracing or relationships with dashboards." },
      { id: "B", text: "Unity Catalog lineage only supports visualizing relationships at the table level and does not extend to notebooks, jobs, or dashboards." },
      { id: "C", text: "Unity Catalog lineage provides an interactive graph that tracks dependencies between tables and notebooks but excludes any job-related dependencies or dashboard visualizations." },
      { id: "D", text: "Unity Catalog provides an interactive graph that visualizes the dependencies between Delta tables, notebooks, jobs, and dashboards, while also supporting column-level tracking of data transformations." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 162,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to conduct Exploratory Analysis on data residing in a database that is within the company’s custom-defined network in the cloud. The data engineer is using SQL for this task. Which type of SQL Warehouse will enable the data engineer to process large numbers of queries quickly and cost-effectively?",
    options: [
      { id: "A", text: "Serverless compute for notebooks" },
      { id: "B", text: "Pro SQL Warehouse" },
      { id: "C", text: "Classic SQL Warehouse" },
      { id: "D", text: "Serverless SQL Warehouse" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 163,
    topic: "Unity Catalog",
    questionText: "T o p i c 1 A data engineer is configuring Unity Catalog in Databricks and needs to assign a role to a user who should have the ability to grant and revoke privileges on various data objects within a specific schema, but should not have read/write access over the schema or its objects. Which role should the data engineer assign to this user?",
    options: [
      { id: "A", text: "Table Owner" },
      { id: "B", text: "Catalog Owner" },
      { id: "C", text: "Schema Owner" },
      { id: "D", text: "USE catalog/schema privilege on the schema" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 164,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer is debugging a Python notebook in Databricks that processes a dataset using PySpark. The notebook fails with an error during a DataFrame transformation. The engineer wants to inspect the state of variables, such as the input DataFrame and intermediate results, to identify where the error occurs. Which tool should the engineer use to debug the notebook and inspect the values of variables like DataFrames?",
    options: [
      { id: "A", text: "Use the Databricks CLI to download and analyze driver logs for detailed error messages" },
      { id: "B", text: "Use the Python Notebook Interactive Debugger to set breakpoints and inspect variable values in real-time" },
      { id: "C", text: "Use the Ganglia UI to monitor cluster resource usage and identify hardware issues" },
      { id: "D", text: "Use the Spark UI to analyze the execution plan and identify stages where the job failed" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 165,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to create an external table in Databricks that references data stored in an Azure Data Lake Storage (ADLS) location. The goal is to enable Databricks to access and query this external data without moving it into the Databricks-managed storage. Which step should the data engineer take to successfully create the external table?",
    options: [
      { id: "A", text: "Use the CREATE MANAGED TABLE statement and specify the LOCATION clause with the path to the external data." },
      { id: "B", text: "CREATE UNMANAGED TABLE statement without specifying a LOCATION clause." },
      { id: "C", text: "Use the CREATE TABLE statement and specify the LOCATION clause with the path to the external data." },
      { id: "D", text: "CREATE EXTERNAL TABLE statement without specifying a LOCATION clause." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 166,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is developing a small proof of concept in a notebook. When running the entire notebook, the Cluster usage spikes. The data engineer wants to keep the development requirements and get real-time results. Which Cluster meets these requirements?",
    options: [
      { id: "A", text: "All Purpose Cluster with autoscaling" },
      { id: "B", text: "Job Cluster with Photon enabled and autoscaling" },
      { id: "C", text: "Job Cluster with autoscaling enabled" },
      { id: "D", text: "All-Purpose Cluster with a large fixed memory size" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 167,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to process SQL queries on a large dataset with fluctuating workloads. The workload requires automatic scaling based on the volume of queries, without the need to manage or provision infrastructure. The solution should be cost-efficient and charge only for the compute resources used during query execution. Which compute option should the data engineer use?",
    options: [
      { id: "A", text: "Databricks SQL Analytics" },
      { id: "B", text: "Databricks Runtime for ML" },
      { id: "C", text: "Databricks Jobs" },
      { id: "D", text: "Serverless SQL Warehouse" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 168,
    topic: "General",
    questionText: "T o p i c 1 What is the functionality of AutoLoader in Databricks?",
    options: [
      { id: "A", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling both batch and streaming data with support for schema evolution." },
      { id: "B", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling batch and streaming data with no support for schema evolution." },
      { id: "C", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling only streaming data with no support for schema evolution." },
      { id: "D", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling batch data with support for schema evolution." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 169,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A company is collaborating with a partner that does not use Databricks but needs access to a large historical dataset stored in Delta format. The data engineer needs to ensure that the partner can access the data securely, without the need for them to set up an account, and with read-only access. How should the data be shared?",
    options: [
      { id: "A", text: "Share the dataset by exporting it to a CSV file and manually transferring the file to the partner’s system." },
      { id: "B", text: "Grant your partner access to your Databricks workspace and assign them full write permissions to the Delta table, enabling them to modify the dataset." },
      { id: "C", text: "Share the dataset using Unity Catalog, ensuring that both teams have full write access to the data within the same organization." },
      { id: "D", text: "Share the dataset using Delta Sharing, which allows your partner to access the data using a secure, read-only URL without requiring a Databricks account, ensuring that they cannot modify the data." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 170,
    topic: "Delta Lake",
    questionText: "A data engineer is using the Databricks OPTIMIZE command on a Delta table. What happens when OPTIMIZE is run twice on the same table with the same data?",
    options: [
      { id: "A", text: "It has no effect because it is idempotent." },
      { id: "B", text: "It changes the number of tuples per file significantly." },
      { id: "C", text: "It further reduces file sizes by re-clustering the data." },
      { id: "D", text: "It triggers a full liquid clustering process." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 171,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer at a company that uses Databricks with Unity Catalog needs to share a collection of tables with an external partner who also uses a Databricks workspace enabled for Unity Catalog. The data engineer decides to use Delta Sharing to accomplish this. What is the first piece of information the data engineer should request from the external partner to set up Delta Sharing?",
    options: [
      { id: "A", text: "The IP address of their Databricks workspace" },
      { id: "B", text: "The name of their Databricks cluster" },
      { id: "C", text: "The sharing identifier of their Unity Catalog metastore" },
      { id: "D", text: "Their Databricks account password" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 172,
    topic: "General",
    questionText: "T o p i c 1 A Databricks workflow fails at the last stage due to an error in a notebook. This workflow runs daily. The data engineer fixes the mistake and wants to rerun the pipeline. This workflow is very costly and time-intensive to run. Which action should the data engineer do in order to minimise downtime and cost?",
    options: [
      { id: "A", text: "Re-run the entire workflow" },
      { id: "B", text: "Repair run" },
      { id: "C", text: "Restart the cluster" },
      { id: "D", text: "Switch to another cluster" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 173,
    topic: "General",
    questionText: "T o p i c 1 An organization has implemented a data pipeline in Databricks and needs to ensure it can scale automatically based on varying workloads without manual cluster management. The goal is to meet the company’s Service Level Agreements (SLAs) , which require high availability and minimal downtime, while Databricks automatically handles resource allocation and optimization. Which approach fulfills these requirements?",
    options: [
      { id: "A", text: "Deploy Job Clusters with fixed configurations, dedicated to specific tasks, without automatic scaling." },
      { id: "B", text: "Use Spot Instances to allocate resources dynamically while minimizing costs, with potential interruptions." },
      { id: "C", text: "Use Interactive Clusters in Databricks, adjusting cluster sizes manually based on workload demands." },
      { id: "D", text: "Use Serverless compute in Databricks to automatically scale and provision resources with minimal manual intervention." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 174,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has been provided a PySpark DataFrame named df with columns product and revenue. The data engineer needs to compute complex aggregations to determine each product’s total revenue, average revenue, and transaction count. Which code snippet should the data engineer use?",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
      { id: "D", text: "" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 175,
    topic: "General",
    questionText: "T o p i c 1 A Databricks single-task workflow fails at the last task due to an error in a notebook. The data engineer fixes the mistake in the notebook. What should the data engineer do to rerun the workflow?",
    options: [
      { id: "A", text: "Repair the task" },
      { id: "B", text: "Rerun the pipeline" },
      { id: "C", text: "Restart the cluster" },
      { id: "D", text: "Switch the cluster" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 176,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to provide access to a group named manufacturing-team. The team needs privileges to create tables in the quality schema. Which set of SQL commands will grant a group named manufacturing-team to create tables in a schema named production with the parent catalog named manufacturing with the least privileges?",
    options: [
      { id: "A", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
      { id: "B", text: "GRANT USE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
      { id: "C", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
      { id: "D", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 177,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has written a function in a Databricks Notebook to calculate the population of bacteria in a given medium. Analysts use this function in the notebook and sometimes provide input arguments of the wrong data type, which can cause errors during execution. Which Databricks feature will help the data engineer quickly identify if an incorrect data type has been provided as input?",
    options: [
      { id: "A", text: "The Spark User interface has a debug tab that contains the variables that are used in this session." },
      { id: "B", text: "The Databricks debugger enables breakpoints that will raise an error if the wrong data type is submitted." },
      { id: "C", text: "The Databricks debugger enables the use of a variable explorer to see at a glance the value of the variables." },
      { id: "D", text: "The Data Engineer should add print statements to find out what the variable is." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 178,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineer is inspecting an ETL pipeline based on a Pyspark job that consistently encounters performance bottlenecks. Based on developer feedback, the data engineer assumes the job is low on compute resources. To pinpoint the issue, the data engineer observes the Spark UI and finds out the job has a high CPU time vs Task time. Which course of action should the data engineer take?",
    options: [
      { id: "A", text: "High CPU time vs Task time means an under-utilized cluster. The data engineer may need to repartition data to spread the jobs more evenly throughout the cluster." },
      { id: "B", text: "High CPU time vs Task time means efficient use of cluster and no change needed" },
      { id: "C", text: "High CPU time vs Task time means a CPU over-utilized job. The data engineer may need to consider executor and core tuning or resizing the cluster" },
      { id: "D", text: "High CPU time vs Task time means over-utilized memory and the need to increase parallelism" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 179,
    topic: "General",
    questionText: "T o p i c 1 A data engineer needs to parse only png files in a directory that contains files with different suffixes. Which code should the data engineer use to achieve this task?",
    options: [
      { id: "A", text: "df = spark.readStream.format('cloudFiles') \ .option('cloudFiles.format', 'binaryFile') \ .append('/*.png')" },
      { id: "B", text: "df = spark.readstream. format('cloudFiles') \ .option('cloudFiles.format', 'binaryFile') \ .option('pathGlobfilter', '*.png') \ .load( )" },
      { id: "C", text: "df = spark.readStream.format('cloudFiles') \ .option('cloudFiles.format', 'binaryFile') \ .option('pathGlobfilter', '*.png') \ .append()" },
      { id: "D", text: "df = spark.readstream.format('cloudFiles') \ .option('cloudFiles.format', 'binaryFile') \ .load('/*.png')" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 180,
    topic: "General",
    questionText: "Which languages are supported by Serverless compute clusters? (Choose two.)",
    options: [
      { id: "A", text: "SQL" },
      { id: "B", text: "Python" },
      { id: "C", text: "R" },
      { id: "D", text: "Scala" },
      { id: "E", text: "Java" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 181,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer is developing an ETL process based on Spark SQL. The execution fails. The data engineer checks the Spark UI and can see the ERRORS as follows: 'java.lang.OutofMemoryError: Java heap space' Which two corrective actions should the data engineer perform to resolve this issue? (Choose two.)",
    options: [
      { id: "A", text: "Narrow the filters in order to collect less data in the query" },
      { id: "B", text: "Upsize the worker nodes and activate autoshuffle partitions" },
      { id: "C", text: "Upsize the driver node and deactivate autoshuffle partitions" },
      { id: "D", text: "Cache the dataset in order to boost the query performance" },
      { id: "E", text: "Fix the shuffle partitions to 50 to ensure the allocation" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 182,
    topic: "Streaming",
    questionText: "T o p i c 1 A Data Engineer is designing Bronze layer in Databricks Medallion Architecture. The raw data is collected from multiple sources (Clickstream in JSON, Transactions in CSV). The task is to design the Bronze layer of the Medallion Architecture to ingest and store this raw data for further processing. Which operation applies to the Bronze layer?",
    options: [
      { id: "A", text: "Ingest raw data without transformations, preserving original schemas, and store in Delta format." },
      { id: "B", text: "Clean and standardize raw data by removing null values and enforcing schemas." },
      { id: "C", text: "Apply complex business logic to enrich raw data with customer segmentation labels." },
      { id: "D", text: "Aggregate and transform source data to calculate daily sales performance metrics." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 183,
    topic: "General",
    questionText: "What is the primary function of the Silver layer in the Databricks medallion architecture?",
    options: [
      { id: "A", text: "Store historical data solely for auditing purposes" },
      { id: "B", text: "Aggregate and enrich data for business analytics" },
      { id: "C", text: "Validate, clean, and deduplicate data for further processing" },
      { id: "D", text: "Ingest raw data in its original state" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 184,
    topic: "SQL",
    questionText: "T o p i c 1 A data engineer needs to combine sales data from an on-premises PostgreSQL database with customer data in Azure Synapse for a comprehensive report. The goal is to avoid data duplication and ensure up-to-date information. How should the data engineer achieve this using Databricks?",
    options: [
      { id: "A", text: "Export data from both sources to CSV files and upload them to Databricks" },
      { id: "B", text: "Use Lakehouse Federation to query both data sources directly" },
      { id: "C", text: "Manually synchronize data from both sources into a single database" },
      { id: "D", text: "Develop custom ETL pipelines to ingest data into Databricks" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 185,
    topic: "Python",
    questionText: "T o p i c 1 A data engineer is working in a Python notebook on Databricks to process data, but notices that the output is not as expected. The data engineer wants to investigate the issue by stepping through the code and checking the values of certain variables during execution. Which tool should the data engineer use to inspect the code execution and variables in real-time?",
    options: [
      { id: "A", text: "Cluster Logs" },
      { id: "B", text: "Job Execution Dashboard" },
      { id: "C", text: "Python Notebook Interactive Debugger" },
      { id: "D", text: "SQL Analytics" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 186,
    topic: "General",
    questionText: "T o p i c 1 A data engineer has inherited a Databricks pipeline from a previous team. The pipeline is missing its SLAs, and an initial investigation has identified memory spills in Spark. These increased runtimes are also driving up costs. The data engineer needs to reduce the runtime without significantly increasing costs. What should the data engineer do first to address this issue?",
    options: [
      { id: "A", text: "Tweak the 'spark.sql.shuffle.partitions' configuration." },
      { id: "B", text: "Enable autoscaling in the cluster to match the requirements" },
      { id: "C", text: "Use a photon enabled execution engine." },
      { id: "D", text: "Ensure the cluster uses memory optimized node types." },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 187,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer is facing performance bottlenecks in an e-commerce transactions Delta table. The table is a managed Unity Catalog table, and it uses partitioning and Z-ordering in its data layout scheme. The predictive optimization for Unity Catalog tables is also enabled. The table has a frequently changing query filter, and the data engineer does not observe a benefit of the Data Layout or the Predictive Optimization. How should the data engineer fix the data layout bottlenecks?",
    options: [
      { id: "A", text: "Re-write the Data Layout with Liquid Clustering and cluster by the Z-Ordered columns." },
      { id: "B", text: "Enable Delta Caching so that query results can be read through caches." },
      { id: "C", text: "Tweak the Z-Order columns and run OPTIMIZE manually." },
      { id: "D", text: "Switch the Data layout from Partition+Z-Ordering to Automatic Liquid Clustering." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 188,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer needs to optimize the data layout and query performance for an e-commerce transactions Delta table. The table is partitioned by date' a date column which helps with time-based queries but does not optimize searches on user statistics 'customer _id', a high- 'purchase_ cardinality column. The table is usually queried with filters on 'customer _id' within specific date ranges, but since this data is spread across multiple files in each partition, it results in full partition scans and increased runtime and costs. How should the data engineer optimize the Data Layout for efficient reads?",
    options: [
      { id: "A", text: "Alter table implementing liquid clustering on 'customer _id' while keeping the existing partitioning." },
      { id: "B", text: "Alter the table implementing liquid clustering by 'customer _id' and 'purchase_ date'." },
      { id: "C", text: "Alter the table to partition by 'customer _id'." },
      { id: "D", text: "Enable delta caching on the cluster so that frequent reads are cached for performance." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 189,
    topic: "General",
    questionText: "T o p i c 1 What is the structure of an Asset Bundle?",
    options: [
      { id: "A", text: "A Docker image containing runtime environments and the source code of the assets" },
      { id: "B", text: "A compressed archive (ZIP) that solely contains workspace assets without any accompanying metadata" },
      { id: "C", text: "A single plain text file enumerating the names of assets to be migrated to a new workspace" },
      { id: "D", text: "A YAML configuration file that specifies the artifacts, resources, and configurations for the project" },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 190,
    topic: "General",
    questionText: "T o p i c 1 A data engineer is maintaining an ETL pipeline code with a GitHub repository linked to their Databricks account. The data engineer wants to deploy the ETL pipeline to production as a databricks workflow. Which approach should the data engineer use?",
    options: [
      { id: "A", text: "Databricks Asset Bundles (DAB) + GitHub Integration" },
      { id: "B", text: "Maintain workflow _config.json and deploy it using Databricks CLI" },
      { id: "C", text: "Maintain workflow _config.json and deploy it using Terraform" },
      { id: "D", text: "Manually create and manage the workflow in UI" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 191,
    topic: "General",
    questionText: "T o p i c 1 A data engineer works for an organization that must meet a stringent Service Level Agreement (SLA) that demands minimal runtime errors and high availability for its data processing pipelines. The data engineer wants to avoid the operational overhead of managing and tuning clusters. Which architectural solution will meet the requirements?",
    options: [
      { id: "A", text: "Use an auto-scaling cluster configured and monitored by the user." },
      { id: "B", text: "Implement a hybrid approach with scheduled batch jobs on custom cloud VMs." },
      { id: "C", text: "Deploy a dedicated, manually managed cluster optimized by in-house IT staff." },
      { id: "D", text: "Utilize Databricks serverless compute that automatically optimizes resources and abstracts cluster management." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 192,
    topic: "General",
    questionText: "T o p i c 1 A data engineer wants to reduce costs and optimize cloud spending. The data engineer has decided to use Databricks Serverless for lowering cloud costs while maintaining existing SLAs. What is the first step in migrating to Databricks Serverless?",
    options: [
      { id: "A", text: "Legacy Ingestion pipelines that include ingestion from sources API’s, files, JDBC/ODBC connections" },
      { id: "B", text: "A frequently running and efficient Python-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog" },
      { id: "C", text: "A frequently running and efficient Scala-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog" },
      { id: "D", text: "Low frequency BI Dashboarding and Adhoc SQL Analytics" },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
  {
    id: 193,
    topic: "Workflows",
    questionText: "T o p i c 1 A data engineering project involves processing large batches of data on a daily schedule using ETL. The jobs are resource-intensive and vary in size, requiring a scalable, cost-efficient compute solution that can automatically scale based on the workload. Which compute approach will satisfy the needs described?",
    options: [
      { id: "A", text: "Job Cluster" },
      { id: "B", text: "Dedicated Cluster" },
      { id: "C", text: "All-Purpose Cluster" },
      { id: "D", text: "Databricks SQL Serverless" },
    ],
    correctAnswerId: "A",
    explanation: "Correct Answer is A. (Extracted from PDF)"
  },
  {
    id: 194,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer is configuring Delta Sharing for a multi-team project where teams from different departments will need to access shared data. The data engineer has successfully created a Unity Catalog metastore and is now setting up the Delta Share. The goal is to ensure that internal teams can access the shared data with full permissions, while external partners can only read the data. Which action should the Data Engineer take to configure the sharing correctly?",
    options: [
      { id: "A", text: "Create a Delta Share, set up a secure access URL for internal teams and external partners, and distribute the URL to provide them access to the shared data." },
      { id: "B", text: "Create a Delta Share, add the internal team's tables and views, and assign READ/WRITE permissions to both external partners and internal teams." },
      { id: "C", text: "Assign READ permissions to external partners through the Delta Share and READ/WRITE permissions to internal teams, and ensure the correct tables and views are shared." },
      { id: "D", text: "Grant READ permissions to external partners and READ/WRITE permissions to internal teams through the Delta Share." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 195,
    topic: "General",
    questionText: "T o p i c 1 A data engineer manages multiple external tables linked to various data sources. The data engineer wants to manage these external tables efficiently and ensure that only the necessary permissions are granted to users for accessing specific external tables. How should the data engineer manage access to these external tables?",
    options: [
      { id: "A", text: "Set up Azure Blob Storage permissions at the container level, allowing access to all external tables." },
      { id: "B", text: "Create a single user role with full access to all external tables and assign it to all users." },
      { id: "C", text: "Grant permissions on the Databricks workspace level, which will automatically apply to all external tables." },
      { id: "D", text: "Use Unity Catalog to manage access controls and permissions for each external table individually." },
    ],
    correctAnswerId: "D",
    explanation: "Correct Answer is D. (Extracted from PDF)"
  },
  {
    id: 196,
    topic: "General",
    questionText: "T o p i c 1 An organization plans to share a large dataset stored in a Databricks workspace on AWS with a partner organization whose Databricks workspace is hosted on Azure. The data engineer wants to minimize data transfer costs while ensuring secure and efficient data sharing. Which strategy will reduce data egress costs associated with cross-cloud data sharing?",
    options: [
      { id: "A", text: "Migrating the dataset to Cloudflare R2 object storage before sharing" },
      { id: "B", text: "Configure VPN connection between AWS and Azure for faster data sharing" },
      { id: "C", text: "Using Delta Sharing without any additional configurations" },
      { id: "D", text: "Sharing data via pre-signed URLs without monitoring egress costs" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 197,
    topic: "Unity Catalog",
    questionText: "T o p i c 1 A data engineer is setting up access control in Unity Catalog and needs to ensure that a group of data analysts can query tables but not modify data. Which permission should the data engineer grant to the data analysts?",
    options: [
      { id: "A", text: "ALL PRIVILEGES" },
      { id: "B", text: "MODIFY" },
      { id: "C", text: "SELECT" },
      { id: "D", text: "INSERT" },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 198,
    topic: "General",
    questionText: "T o p i c 1 What Databricks feature can be used to check the data sources and tables used in a workspace?",
    options: [
      { id: "A", text: "Use the lineage feature to visualize a graph that highlights where the table is used only in reports." },
      { id: "B", text: "Use the lineage feature to visualize a graph that highlights where the table is used only in notebooks." },
      { id: "C", text: "Use the lineage feature to visualize a graph that shows all dependencies, including where the table is used in notebooks, other tables, and reports." },
      { id: "D", text: "Do not use the lineage feature as it only tracks activity from the last 3 months and will not provide full details on dependencies." },
    ],
    correctAnswerId: "C",
    explanation: "Correct Answer is C. (Extracted from PDF)"
  },
  {
    id: 199,
    topic: "Delta Lake",
    questionText: "T o p i c 1 A data engineer is getting a partner organization up to speed with Databricks account. Both the teams share some business use cases. The data engineer has to share some of your Unity-Catalog managed delta tables and the notebook jobs creating those tables with the partner organization. How can the data engineer seamlessly share the required information?",
    options: [
      { id: "A", text: "Zip all the code and share via email and allow data ingestion from your data lake" },
      { id: "B", text: "Share required datasets and notebooks via Delta Sharing. Manage permissions via Unity Catalog." },
      { id: "C", text: "Data and Notebooks can be shared simply using Unity Catalog." },
      { id: "D", text: "Share access to codebase via Github and allow them to ingest datasets from your Datalake." },
    ],
    correctAnswerId: "B",
    explanation: "Correct Answer is B. (Extracted from PDF)"
  },
];
