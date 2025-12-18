import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "Data Lakehouse",
    questionText: "A data organization leader is upset about the data analysis team's reports being different from the data engineering team's reports. The leader believes the siloed nature of their organization's data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?",
    options: [
      { id: "A", text: "Both teams would autoscale their work as data size evolves" },
      { id: "B", text: "Both teams would use the same source of truth for their work" },
      { id: "C", text: "Both teams would reorganize to report to the same department" },
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" },
      { id: "E", text: "Both teams would respond more quickly to ad-hoc requests" }
    ],
    correctAnswerId: "B",
    explanation: "Databricks Lakehouse enables using data as the single source of truth. Duplicating data often results in data silos in organizations."
  },
  {
    id: 2,
    topic: "Spark SQL",
    questionText: "Which of the following benefits is provided by the array functions from Spark SQL?",
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" }
    ],
    correctAnswerId: "D",
    explanation: "Spark SQL array functions are designed to manipulate arrays, which are common in nested or semi-structured data (e.g., JSON). They allow you to query, transform, and flatten arrays without writing custom code."
  },
  {
    id: 3,
    topic: "Compute",
    questionText: "Which of the following describes a scenario in which a data team will want to utilize cluster pools?",
    options: [
      { id: "A", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "B", text: "An automated report needs to be made reproducible." },
      { id: "C", text: "An automated report needs to be tested to identify errors." },
      { id: "D", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "E", text: "An automated report needs to be runnable by all stakeholders." }
    ],
    correctAnswerId: "A",
    explanation: "Cluster pools maintain a set of idle, ready-to-use instances. This reduces cluster start and auto-scaling times, which is critical when a report needs to be refreshed as quickly as possible."
  },
  {
    id: 4,
    topic: "Architecture",
    questionText: "Which of the following is hosted completely in the control plane of the classic Databricks architecture?",
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "JDBC data source" },
      { id: "C", text: "Databricks web application" },
      { id: "D", text: "Databricks Filesystem" },
      { id: "E", text: "Driver node" }
    ],
    correctAnswerId: "C",
    explanation: "The Control Plane manages the workspace, notebook, jobs, and the Web Application. Compute resources (Worker/Driver nodes) reside in the Data Plane."
  },
  {
    id: 5,
    topic: "Delta Lake",
    questionText: "Which of the following benefits of using the Databricks Lakehouse Platform is provided by Delta Lake?",
    options: [
      { id: "A", text: "The ability to manipulate the same data using a variety of languages" },
      { id: "B", text: "The ability to collaborate in real time on a single notebook" },
      { id: "C", text: "The ability to set up alerts for query failures" },
      { id: "D", text: "The ability to support batch and streaming workloads" },
      { id: "E", text: "The ability to distribute complex data operations" }
    ],
    correctAnswerId: "D",
    explanation: "Delta Lake unifies batch and streaming data. You can write streaming data into Delta tables and read from them in batch or streaming mode."
  },
  {
    id: 6,
    topic: "Delta Storage",
    questionText: "Which of the following describes the storage organization of a Delta table?",
    options: [
      { id: "A", text: "Delta tables are stored in a single file that contains data, history, metadata, and other attributes." },
      { id: "B", text: "Delta tables store their data in a single file and all metadata in a collection of files in a separate location." },
      { id: "C", text: "Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes." },
      { id: "D", text: "Delta tables are stored in a collection of files that contain only the data stored within the table." },
      { id: "E", text: "Delta tables are stored in a single file that contains only the data stored within the table." }
    ],
    correctAnswerId: "C",
    explanation: "Delta tables use a distributed storage format (Parquet for data) and a transaction log (_delta_log) to store metadata and history."
  },
  {
    id: 7,
    topic: "Delta SQL",
    questionText: "Which of the following code blocks will remove the rows where the value in column 'age' is greater than 25 from the existing Delta table my_table and save the updated table?",
    options: [
      { id: "A", text: "SELECT * FROM my_table WHERE age > 25;" },
      { id: "B", text: "UPDATE my_table WHERE age > 25;" },
      { id: "C", text: "DELETE FROM my_table WHERE age > 25;" },
      { id: "D", text: "UPDATE my_table WHERE age <= 25;" },
      { id: "E", text: "DELETE FROM my_table WHERE age <= 25;" }
    ],
    correctAnswerId: "C",
    explanation: "The DELETE FROM syntax is used to remove records from a Delta table that match a specific condition."
  },
  {
    id: 8,
    topic: "Auto Loader",
    questionText: "Which tool is used by Auto Loader to process data incrementally?",
    options: [
      { id: "A", text: "Checkpointing" },
      { id: "B", text: "Spark Structured Streaming" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Unity Catalog" }
    ],
    correctAnswerId: "B",
    explanation: "Auto Loader builds upon Spark Structured Streaming to ingest data incrementally."
  },
  {
    id: 9,
    topic: "Time Travel",
    questionText: "A data engineer needs to restore a table to a version 3 days old, but fails because files are missing. Which command likely caused this?",
    options: [
      { id: "A", text: "The VACUUM command was run on the table" },
      { id: "B", text: "The TIME TRAVEL command was run on the table" },
      { id: "C", text: "The DELETE HISTORY command was run on the table" },
      { id: "D", text: "The OPTIMIZE command was run on the table" },
      { id: "E", text: "The HISTORY command was run on the table" }
    ],
    correctAnswerId: "A",
    explanation: "VACUUM permanently deletes data files that are no longer in the current state of the transaction log and are older than the retention threshold."
  },
  {
    id: 10,
    topic: "Git Integration",
    questionText: "Which of the following Git operations must be performed outside of Databricks Repos?",
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Push" },
      { id: "D", text: "Clone" },
      { id: "E", text: "Merge" }
    ],
    correctAnswerId: "E",
    explanation: "While some recent updates allow more git operations, classically Merge (especially with conflicts) is often handled outside or was the limitation compared to Clone/Commit/Push."
  },
  {
    id: 11,
    topic: "Ownership",
    questionText: "A data engineer left the organization. Who must transfer ownership of their Delta tables?",
    options: [
      { id: "A", text: "Databricks account representative" },
      { id: "B", text: "This transfer is not possible" },
      { id: "C", text: "Workspace administrator" },
      { id: "D", text: "New lead data engineer" },
      { id: "E", text: "Original data engineer" }
    ],
    correctAnswerId: "C",
    explanation: "Admins have the privileges to transfer ownership of objects when the original owner cannot."
  },
  {
    id: 12,
    topic: "PySpark",
    questionText: "Which command could the data engineering team use to access the 'sales' table in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "There is no way to share data between PySpark and SQL" },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table('sales')" },
      { id: "E", text: "spark.table('sales')" }
    ],
    correctAnswerId: "E",
    explanation: "spark.table('table_name') returns a DataFrame representing the table."
  },
  {
    id: 13,
    topic: "SQL Commands",
    questionText: "Which command will return the location of database customer360?",
    options: [
      { id: "A", text: "DESCRIBE LOCATION customer360;" },
      { id: "B", text: "DROP DATABASE customer360;" },
      { id: "C", text: "DESCRIBE DATABASE customer360;" },
      { id: "D", text: "ALTER DATABASE customer360 SET..." },
      { id: "E", text: "USE DATABASE customer360;" }
    ],
    correctAnswerId: "C",
    explanation: "DESCRIBE DATABASE provides metadata including the location on the file system."
  },
  {
    id: 14,
    topic: "Table Metadata",
    questionText: "Which line of code fills the blank to include a table comment indicating PII?",
    options: [
      { id: "A", text: "There is no way to indicate..." },
      { id: "B", text: "\"COMMENT PII\"" },
      { id: "C", text: "TBLPROPERTIES PII" },
      { id: "D", text: "COMMENT \"Contains PII\"" },
      { id: "E", text: "PII" }
    ],
    correctAnswerId: "D",
    explanation: "The syntax CREATE TABLE ... COMMENT 'string' is used to add a description."
  },
  {
    id: 15,
    topic: "Architecture",
    questionText: "What is stored in the Databricks customer's cloud account?",
    options: [
      { id: "A", text: "Databricks web application" },
      { id: "B", text: "Cluster management metadata" },
      { id: "C", text: "Notebooks" },
      { id: "D", text: "Data" }
    ],
    correctAnswerId: "D",
    explanation: "In the classic architecture, the Data Plane (where Data resides) is in the customer account."
  },
  {
    id: 16,
    topic: "Delta SQL",
    questionText: "Which command can be used to write data into a Delta table while avoiding duplicate records?",
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "IGNORE" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" },
      { id: "E", text: "INSERT" }
    ],
    correctAnswerId: "C",
    explanation: "MERGE INTO allows upserts (Update/Insert), enabling you to check for existence before inserting to avoid duplicates."
  },
  {
    id: 17,
    topic: "Auto Loader",
    questionText: "A data engineer needs to identify which files are new since the previous run in the pipeline. Which tool should be used?",
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Delta Lake" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Auto Loader" }
    ],
    correctAnswerId: "D",
    explanation: "Auto Loader efficiently identifies and ingests new files from cloud storage."
  },
  {
    id: 18,
    topic: "Orchestration",
    questionText: "A data analyst wants a SQL program to run every day, but the final query only on Sundays. How can this be achieved?",
    options: [
      { id: "A", text: "Submit feature request" },
      { id: "B", text: "Wrap queries using PySpark and use Python's control flow" },
      { id: "C", text: "Only run entire program on Sundays" },
      { id: "D", text: "Restrict access to source table" },
      { id: "E", text: "Redesign data model" }
    ],
    correctAnswerId: "B",
    explanation: "Using PySpark allows for logic like `if datetime.today().weekday() == 6: spark.sql(...)`."
  },
  {
    id: 19,
    topic: "Copy Into",
    questionText: "A COPY INTO command ran but no new records appeared. Why?",
    options: [
      { id: "A", text: "Format options missing" },
      { id: "B", text: "File names missing" },
      { id: "C", text: "The previous day's file has already been copied into the table" },
      { id: "D", text: "Parquet not supported" },
      { id: "E", text: "Table refresh needed" }
    ],
    correctAnswerId: "C",
    explanation: "COPY INTO is idempotent. It keeps track of ingested files and skips them if they have already been processed."
  },
  {
    id: 20,
    topic: "SQL Merge",
    questionText: "When should MERGE INTO be used instead of INSERT INTO?",
    options: [
      { id: "A", text: "When location needs to change" },
      { id: "B", text: "When target is external" },
      { id: "C", text: "When source is not Delta" },
      { id: "D", text: "When the target table cannot contain duplicate records" }
    ],
    correctAnswerId: "D",
    explanation: "MERGE allows for conditional insertion/update to prevent duplicates based on a key."
  },
  {
    id: 21,
    topic: "SQL Union",
    questionText: "How to create a table containing all records from 'march' and 'april' tables without duplicates?",
    options: [
      { id: "A", text: "INNER JOIN" },
      { id: "B", text: "UNION" },
      { id: "C", text: "OUTER JOIN" },
      { id: "D", text: "INTERSECT" },
      { id: "E", text: "MERGE" }
    ],
    correctAnswerId: "B",
    explanation: "UNION (without ALL) combines result sets and removes duplicates."
  },
  {
    id: 22,
    topic: "Permissions",
    questionText: "How to identify the owner of a table 'new_table'?",
    options: [
      { id: "A", text: "Review Permissions tab" },
      { id: "B", text: "No way to identify" },
      { id: "C", text: "Review the Owner field in the table's page in Data Explorer" },
      { id: "D", text: "Review Owner field in cloud storage" }
    ],
    correctAnswerId: "C",
    explanation: "Data Explorer (Catalog Explorer) displays metadata including the Owner."
  },
  {
    id: 23,
    topic: "Managed vs External",
    questionText: "A table was dropped but data files still exist. Why?",
    options: [
      { id: "A", text: "Data > 10GB" },
      { id: "B", text: "Data < 10GB" },
      { id: "C", text: "The table was external" },
      { id: "D", text: "No location" },
      { id: "E", text: "Table was managed" }
    ],
    correctAnswerId: "C",
    explanation: "Dropping an External table removes the metadata from the catalog but leaves the underlying data files in cloud storage intact."
  },
  {
    id: 24,
    topic: "Data Objects",
    questionText: "A data engineer wants to create a data entity that is saved to a physical location and used by others. What should they create?",
    options: [
      { id: "A", text: "Database" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" },
      { id: "E", text: "Table" }
    ],
    correctAnswerId: "E",
    explanation: "Tables store data physically. Views are logical queries."
  },
  {
    id: 25,
    topic: "Data Quality",
    questionText: "Which tool allows automating the process of monitoring data quality levels?",
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Data Explorer" },
      { id: "C", text: "Delta Lake" },
      { id: "D", text: "Delta Live Tables" },
      { id: "E", text: "Auto Loader" }
    ],
    correctAnswerId: "D",
    explanation: "Delta Live Tables (DLT) supports 'Expectations' to define and monitor data quality constraints."
  },
  {
    id: 26,
    topic: "DLT Migration",
    questionText: "Migrating a pipeline to DLT. Which change is needed?",
    options: [
      { id: "A", text: "Pipeline entirely in Python" },
      { id: "B", text: "Stop using medallion architecture" },
      { id: "C", text: "Pipeline entirely in SQL" },
      { id: "D", text: "Use batch source instead of streaming" }
    ],
    correctAnswerId: "D",
    explanation: "Typically, none of these are strictly required (A, B, C are false). However, if the question implies a restriction found in specific legacy contexts, often users selected 'None' or D based on context. In this specific dump context, 'Use a batch source' is often flagged, but modern DLT supports streaming. (Note: Community consensus often points to 'None of these' if available, or specific adjustments. Based on provided text: D is suggested)."
  },
  {
    id: 27,
    topic: "Job Scheduling",
    questionText: "Which tool can be used to represent and submit a schedule programmatically?",
    options: [
      { id: "A", text: "DateType" },
      { id: "B", text: "datetime" },
      { id: "C", text: "TimestampType" },
      { id: "D", text: "Cron syntax" }
    ],
    correctAnswerId: "D",
    explanation: "Cron syntax (Quartz) is used to define complex schedules for Jobs."
  },
  {
    id: 28,
    topic: "PySpark",
    questionText: "Which operation runs a SQL query and operates with results in PySpark?",
    options: [
      { id: "A", text: "SELECT *" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.sql" },
      { id: "D", text: "spark.table" }
    ],
    correctAnswerId: "C",
    explanation: "spark.sql('query') executes a SQL query and returns a DataFrame."
  },
  {
    id: 29,
    topic: "Medallion Architecture",
    questionText: "Which describes the relationship between Bronze tables and raw data?",
    options: [
      { id: "A", text: "Bronze contains less data" },
      { id: "B", text: "Bronze contains more truthful data" },
      { id: "C", text: "Bronze contains aggregates" },
      { id: "D", text: "Bronze contains less refined view" },
      { id: "E", text: "Bronze tables contain raw data with a schema applied" }
    ],
    correctAnswerId: "E",
    explanation: "The Bronze layer is the raw data ingested from source, but stored in Delta format with a schema."
  },
  {
    id: 30,
    topic: "Structured Streaming",
    questionText: "Which query is performing a hop from Silver to Gold?",
    options: [
      { id: "A", text: "readStream.load(raw)" },
      { id: "B", text: "read.load(raw)" },
      { id: "C", text: "readStream table sales -> filter" },
      { id: "D", text: "readStream table sales -> groupBy -> writeStream" }
    ],
    correctAnswerId: "D",
    explanation: "Silver to Gold typically involves Aggregation (groupBy). Raw to Bronze is ingestion. Bronze to Silver is cleaning/filtering."
  },
  {
    id: 31,
    topic: "Streaming Triggers",
    questionText: "Which line of code executes a micro-batch every 5 seconds?",
    options: [
      { id: "A", text: "trigger(\"5 seconds\")" },
      { id: "B", text: "trigger()" },
      { id: "C", text: "trigger(once=\"5 seconds\")" },
      { id: "D", text: "trigger(processingTime=\"5 seconds\")" },
      { id: "E", text: "trigger(continuous=\"5 seconds\")" }
    ],
    correctAnswerId: "D",
    explanation: "processingTime='5 seconds' is the correct syntax for micro-batch intervals."
  },
  {
    id: 32,
    topic: "DLT Expectations",
    questionText: "ON VIOLATION DROP ROW. What happens?",
    options: [
      { id: "A", text: "Dropped and loaded to quarantine" },
      { id: "B", text: "Added and flagged invalid" },
      { id: "C", text: "Dropped from target and recorded in event log" },
      { id: "D", text: "Added and recorded" },
      { id: "E", text: "Job fails" }
    ],
    correctAnswerId: "C",
    explanation: "DROP ROW prevents the record from entering the target table, but the violation is logged."
  },
  {
    id: 33,
    topic: "DLT SQL",
    questionText: "When to use CREATE STREAMING LIVE TABLE?",
    options: [
      { id: "A", text: "When subsequent step is static" },
      { id: "B", text: "When data needs to be processed incrementally" },
      { id: "C", text: "Redundant" },
      { id: "D", text: "Complicated aggregations" },
      { id: "E", text: "Previous step is static" }
    ],
    correctAnswerId: "B",
    explanation: "STREAMING tables in DLT are used for incremental processing (reading from an append-only source)."
  },
  {
    id: 34,
    topic: "DLT Stream",
    questionText: "Why is the STREAM function included in a DLT query?",
    options: [
      { id: "A", text: "Not needed" },
      { id: "B", text: "Data updated since last run" },
      { id: "C", text: "The customers table is a streaming live table" },
      { id: "D", text: "Reference to PySpark" }
    ],
    correctAnswerId: "C",
    explanation: "FROM STREAM(table) turns a table into a streaming source in DLT SQL."
  },
  {
    id: 35,
    topic: "Git Operations",
    questionText: "How can Git operations be performed outside of Databricks Repos?",
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Clone" }
    ],
    correctAnswerId: "C",
    explanation: "Merge (especially complex conflict resolution) often required external tools in earlier versions of Repos."
  },
  {
    id: 36,
    topic: "DLT Debugging",
    questionText: "How to identify which table is dropping records?",
    options: [
      { id: "A", text: "Separate expectations" },
      { id: "B", text: "Cannot determine" },
      { id: "C", text: "Email notification" },
      { id: "D", text: "Navigate to DLT pipeline page, click table, view data quality statistics" },
      { id: "E", text: "Error button" }
    ],
    correctAnswerId: "D",
    explanation: "The DLT UI provides quality metrics per table, showing how many records were dropped vs written."
  },
  {
    id: 37,
    topic: "Job Dependencies",
    questionText: "How to set up a new task to run a new notebook PRIOR to the original task?",
    options: [
      { id: "A", text: "Clone and update" },
      { id: "B", text: "Create new task and add it as dependency of original task" },
      { id: "C", text: "Create new task and add original as dependency of new task" },
      { id: "D", text: "New job" },
      { id: "E", text: "Clone to new job" }
    ],
    correctAnswerId: "B",
    explanation: "If Task A depends on Task B, Task B runs first. Here, the original task must depend on the new task."
  },
  {
    id: 38,
    topic: "SQL Dashboard Cost",
    questionText: "How to ensure query doesn't cost money beyond the first week?",
    options: [
      { id: "A", text: "Limit DBUs" },
      { id: "B", text: "End after X refreshes" },
      { id: "C", text: "Cannot ensure" },
      { id: "D", text: "Limit access" },
      { id: "E", text: "Set refresh schedule to end on a certain date" }
    ],
    correctAnswerId: "E",
    explanation: "The scheduler allows defining an end date/time for the schedule."
  },
  {
    id: 39,
    topic: "SQL Performance",
    questionText: "SQL queries running slowly when many members run small queries simultaneously. Same endpoint.",
    options: [
      { id: "A", text: "Increase cluster size" },
      { id: "B", text: "Increase maximum bound of scaling range" },
      { id: "C", text: "Auto Stop" },
      { id: "D", text: "Serverless" },
      { id: "E", text: "Serverless Reliability" }
    ],
    correctAnswerId: "B",
    explanation: "Concurrency issues are solved by scaling out (adding more clusters), which is controlled by the scaling range (min/max clusters)."
  },
  {
    id: 40,
    topic: "SQL Cost",
    questionText: "Dashboard refresh once per day, minimize running time.",
    options: [
      { id: "A", text: "Match endpoints" },
      { id: "B", text: "Serverless" },
      { id: "C", text: "Turn on Auto Stop" },
      { id: "D", text: "Reduce cluster size" },
      { id: "E", text: "Different endpoints" }
    ],
    correctAnswerId: "C",
    explanation: "Auto Stop terminates the cluster after a period of inactivity, preventing it from running 24/7 for a daily job."
  },
  {
    id: 41,
    topic: "Job Tasks",
    questionText: "When to select a Task in the Depends On field?",
    options: [
      { id: "A", text: "Replace task" },
      { id: "B", text: "When another task needs to successfully complete before the new task begins" },
      { id: "C", text: "Same libraries" },
      { id: "D", text: "Little compute resources" }
    ],
    correctAnswerId: "B",
    explanation: "Dependencies define execution order."
  },
  {
    id: 42,
    topic: "DLT Creation",
    questionText: "Which must be specified when creating a new DLT pipeline?",
    options: [
      { id: "A", text: "Key-value pair" },
      { id: "B", text: "At least one notebook library" },
      { id: "C", text: "Cloud storage path" },
      { id: "D", text: "Target database" }
    ],
    correctAnswerId: "B",
    explanation: "A pipeline requires code to run. The code is defined in notebook libraries (or files)."
  },
  {
    id: 43,
    topic: "Cluster Startup",
    questionText: "Tasks run slowly because clusters take a long time to start. How to improve?",
    options: [
      { id: "A", text: "SQL Endpoints" },
      { id: "B", text: "Job clusters" },
      { id: "C", text: "Single-node" },
      { id: "D", text: "Use clusters from a cluster pool" },
      { id: "E", text: "Autoscale" }
    ],
    correctAnswerId: "D",
    explanation: "Cluster pools keep idle instances ready, significantly reducing startup time."
  },
  {
    id: 44,
    topic: "Grant Privileges",
    questionText: "Command to grant full permissions on database customers to team?",
    options: [
      { id: "A", text: "GRANT USAGE" },
      { id: "B", text: "GRANT ALL PRIVILEGES ON DATABASE team TO customers" },
      { id: "C", text: "GRANT SELECT" },
      { id: "D", text: "GRANT SELECT CREATE..." },
      { id: "E", text: "GRANT ALL PRIVILEGES ON DATABASE customers TO team" }
    ],
    correctAnswerId: "E",
    explanation: "Standard SQL syntax: GRANT ALL PRIVILEGES ON [Object] TO [Principal]."
  },
  {
    id: 45,
    topic: "Permissions",
    questionText: "Team needs access to see what tables exist. Which command?",
    options: [
      { id: "A", text: "GRANT VIEW ON CATALOG" },
      { id: "B", text: "GRANT CREATE" },
      { id: "C", text: "GRANT USAGE ON CATALOG" },
      { id: "D", text: "GRANT CREATE" },
      { id: "E", text: "GRANT USAGE ON DATABASE customers TO team" }
    ],
    correctAnswerId: "E",
    explanation: "USAGE privilege on a database/schema allows users to list/see the objects within it."
  },
  {
    id: 46,
    topic: "Git Sync",
    questionText: "Sync Databricks Repo to get changes from central Git repository.",
    options: [
      { id: "A", text: "Merge" },
      { id: "B", text: "Push" },
      { id: "C", text: "Pull" },
      { id: "D", text: "Commit" },
      { id: "E", text: "Clone" }
    ],
    correctAnswerId: "C",
    explanation: "Pull fetches changes from the remote repository to the local repo."
  },
  {
    id: 47,
    topic: "Open Source",
    questionText: "Benefit of embracing open source technologies?",
    options: [
      { id: "A", text: "Cloud integrations" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Scale storage" },
      { id: "D", text: "Scale workloads" },
      { id: "E", text: "Avoiding vendor lock-in" }
    ],
    correctAnswerId: "E",
    explanation: "Open source formats (like Parquet/Delta) allow data to be read by other tools, preventing lock-in."
  },
  {
    id: 48,
    topic: "Python Logic",
    questionText: "Control flow: if day_of_week is 1 and review_period is True.",
    options: [
      { id: "A", text: "if day_of_week = 1 and review_period:" },
      { id: "B", text: "if day_of_week = 1 and review_period = \"True\":" },
      { id: "C", text: "if day_of_week = 1 & review_period: = \"True\":" },
      { id: "D", text: "if day_of_week == 1 and review_period:" }
    ],
    correctAnswerId: "D",
    explanation: "Python uses `==` for comparison. Booleans can be checked directly."
  },
  {
    id: 49,
    topic: "Single Node",
    questionText: "Scenario for Single Node cluster?",
    options: [
      { id: "A", text: "Working interactively with small amount of data" },
      { id: "B", text: "Automated reports" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Auto scale larger data" },
      { id: "E", text: "Large amount of data" }
    ],
    correctAnswerId: "A",
    explanation: "Single Node clusters eliminate the overhead of distributed computing for small data/single-threaded workloads."
  },
  {
    id: 50,
    topic: "Delta Insert",
    questionText: "SQL command to append new record.",
    options: [
      { id: "A", text: "INSERT INTO my_table VALUES ('a1', 6, 9.4)" },
      { id: "B", text: "UNION" },
      { id: "C", text: "INSERT VALUES INTO" },
      { id: "D", text: "UPDATE" },
      { id: "E", text: "UPDATE VALUES" }
    ],
    correctAnswerId: "A",
    explanation: "Standard SQL `INSERT INTO table VALUES (...)`."
  },
  {
    id: 51,
    topic: "Optimization",
    questionText: "Keyword to compact small files?",
    options: [
      { id: "A", text: "REDUCE" },
      { id: "B", text: "OPTIMIZE" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" },
      { id: "E", text: "VACUUM" }
    ],
    correctAnswerId: "B",
    explanation: "OPTIMIZE triggers file compaction (bin-packing)."
  },
  {
    id: 52,
    topic: "Delta History",
    questionText: "Query table as it existed before update (Version 4). Current is Version 5.",
    options: [
      { id: "A", text: "SELECT * FROM students@v4" },
      { id: "B", text: "SELECT * FROM students TIMESTAMP AS OF..." },
      { id: "C", text: "SELECT * FROM students FROM HISTORY..." },
      { id: "D", text: "SELECT * FROM students VERSION AS OF 5" },
      { id: "E", text: "SELECT * FROM students TIMESTAMP AS OF <later>" }
    ],
    correctAnswerId: "A",
    explanation: "Note: This question asks for TWO answers in some contexts, usually A and B (Timestamp). @v4 syntax or VERSION AS OF 4."
  },
  {
    id: 53,
    topic: "UDF",
    questionText: "Create a SQL UDF.",
    options: [
      { id: "A", text: "CREATE FUNCTION ... RETURNS ... RETURN CASE ..." },
      { id: "B", text: "CREATE UDF ..." },
      { id: "C", text: "CREATE UDF ..." },
      { id: "D", text: "CREATE FUNCTION ... RETURN CASE ..." },
      { id: "E", text: "CREATE UDF ..." }
    ],
    correctAnswerId: "A",
    explanation: "Syntax is CREATE FUNCTION func_name() RETURNS type RETURN expression."
  },
  {
    id: 54,
    topic: "Architecture",
    questionText: "Simplify and unify siloed data architectures.",
    options: [
      { id: "A", text: "None" },
      { id: "B", text: "Data lake" },
      { id: "C", text: "Data warehouse" },
      { id: "D", text: "All" },
      { id: "E", text: "Data lakehouse" }
    ],
    correctAnswerId: "E",
    explanation: "Data Lakehouse combines elements of Data Lakes and Data Warehouses."
  },
  {
    id: 55,
    topic: "SQL Refresh",
    questionText: "Ensure query results are updated each day.",
    options: [
      { id: "A", text: "Schedule every 1 day from SQL endpoint page" },
      { id: "B", text: "Schedule every 12 hours" },
      { id: "C", text: "Schedule the query to refresh every 1 day from the query's page" },
      { id: "D", text: "Schedule from Jobs UI" }
    ],
    correctAnswerId: "C",
    explanation: "Queries can be scheduled directly in the SQL Editor."
  },
  {
    id: 56,
    topic: "Notebooks",
    questionText: "Use SQL within a Python notebook cell.",
    options: [
      { id: "A", text: "Not possible" },
      { id: "B", text: "Attach to SQL endpoint" },
      { id: "C", text: "Write SQL syntax" },
      { id: "D", text: "Add %sql to the first line" },
      { id: "E", text: "Change default language" }
    ],
    correctAnswerId: "D",
    explanation: "Magic commands (%) allow mixing languages in a notebook."
  },
  {
    id: 57,
    topic: "Pivot",
    questionText: "Convert table from long format to wide format.",
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" },
      { id: "E", text: "WHERE" }
    ],
    correctAnswerId: "B",
    explanation: "PIVOT rotates rows into columns."
  },
  {
    id: 58,
    topic: "Parquet",
    questionText: "Benefit of Parquet over CSV for external table.",
    options: [
      { id: "A", text: "Partitioned" },
      { id: "B", text: "Delta tables" },
      { id: "C", text: "Well-defined schema" },
      { id: "D", text: "Optimized" },
      { id: "E", text: "Delta" }
    ],
    correctAnswerId: "C",
    explanation: "Parquet embeds schema, whereas CSV is text-based and requires inference."
  },
  {
    id: 59,
    topic: "Views",
    questionText: "Create relational object, no physical data copy, not used by others sessions.",
    options: [
      { id: "A", text: "Spark SQL Table" },
      { id: "B", text: "View" },
      { id: "C", text: "Delta Table" },
      { id: "D", text: "Temporary view" }
    ],
    correctAnswerId: "D",
    explanation: "Temporary views are session-scoped and do not store physical data."
  },
  {
    id: 60,
    topic: "Workflows",
    questionText: "Ensure Workflows are triggered on schedule.",
    options: [
      { id: "A", text: "Always-running" },
      { id: "B", text: "Process as arrives" },
      { id: "C", text: "Scheduled Workflows (reduce resource consumption)" },
      { id: "D", text: "Run continuously" }
    ],
    correctAnswerId: "C",
    explanation: "Scheduled workflows spin up clusters only when needed, saving cost compared to always-on."
  },
  {
    id: 61,
    topic: "Count Null",
    questionText: "Return number of null values in member_id.",
    options: [
      { id: "A", text: "SELECT count(member_id)" },
      { id: "B", text: "SELECT count - count_null" },
      { id: "C", text: "SELECT count_if(member_id IS NULL)" },
      { id: "D", text: "SELECT null(member_id)" }
    ],
    correctAnswerId: "C",
    explanation: "count_if evaluates a boolean expression."
  },
  {
    id: 62,
    topic: "Higher Order Functions",
    questionText: "Use FILTER function to identify employees with > 5 years exp.",
    options: [
      { id: "A", text: "FILTER (employees, i -> i.years_exp > 5)" },
      { id: "B", text: "SELECT ..." },
      { id: "C", text: "..." },
      { id: "D", text: "..." },
      { id: "E", text: "..." }
    ],
    correctAnswerId: "A",
    explanation: "Lambda syntax `variable -> expression` is used in HOFs."
  },
  {
    id: 63,
    topic: "Constraint",
    questionText: "Ensure location details provided. Terminate if not.",
    options: [
      { id: "A", text: "EXPECT (location = NULL)" },
      { id: "B", text: "EXPECT (location != NULL) ON VIOLATION FAIL UPDATE" },
      { id: "C", text: "ON DROP ROW" },
      { id: "D", text: "ON VIOLATION FAIL" }
    ],
    correctAnswerId: "B",
    explanation: "FAIL UPDATE stops the pipeline on violation."
  },
  {
    id: 64,
    topic: "External Table",
    questionText: "Scenario for external table?",
    options: [
      { id: "A", text: "Store in specific path in external location" },
      { id: "B", text: "Schema managed location" },
      { id: "C", text: "Managed table" },
      { id: "D", text: "Managed table location" }
    ],
    correctAnswerId: "A",
    explanation: "External tables are defined by providing a specific LOCATION path."
  },
  {
    id: 65,
    topic: "Drop Table",
    questionText: "Dropped table, files deleted. Why?",
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "Small data" },
      { id: "C", text: "Large data" },
      { id: "D", text: "External" },
      { id: "E", text: "No location" }
    ],
    correctAnswerId: "A",
    explanation: "Dropping a Managed table deletes both metadata and data."
  },
  {
    id: 66,
    topic: "Python Function",
    questionText: "Function to add two integers.",
    options: [
      { id: "A", text: "function ..." },
      { id: "B", text: "def ... print" },
      { id: "C", text: "def ... x+y" },
      { id: "D", text: "def add_integers(x, y): return x + y" },
      { id: "E", text: "def ..." }
    ],
    correctAnswerId: "D",
    explanation: "Correct Python syntax uses `def` and `return`."
  },
  {
    id: 67,
    topic: "Streaming Trigger",
    questionText: "Process all available data in as many batches as required.",
    options: [
      { id: "A", text: "trigger(availableNow=True)" },
      { id: "B", text: "trigger(processingTime='once')" },
      { id: "C", text: "trigger(continuous='once')" },
      { id: "D", text: "trigger(once=True)" }
    ],
    correctAnswerId: "A",
    explanation: "availableNow=True processes all pending data in multiple micro-batches then stops."
  },
  {
    id: 68,
    topic: "SQL Join",
    questionText: "Left join sales with favorite_stores.",
    options: [
      { id: "A", text: "..." },
      { id: "B", text: "..." },
      { id: "C", text: "Output includes all from left, nulls for non-matching right" },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "C",
    explanation: "Left Join keeps all rows from left table."
  },
  {
    id: 69,
    topic: "CSV Options",
    questionText: "Create table from CSV.",
    options: [
      { id: "A", text: "None" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" },
      { id: "E", text: "FROM path" }
    ],
    correctAnswerId: "B",
    explanation: "USING CSV is the correct syntax for defining the format."
  },
  {
    id: 70,
    topic: "Snapshot Analysis",
    questionText: "Analyze snapshot from two weeks ago. (Time Travel)",
    options: [
      { id: "A", text: "Truncate" },
      { id: "B", text: "Identify version, query using VERSION AS OF" },
      { id: "C", text: "Restore" },
      { id: "D", text: "Vacuum" }
    ],
    correctAnswerId: "B",
    explanation: "Time Travel allows querying old versions without restoring/overwriting."
  },
  {
    id: 71,
    topic: "Auto Loader Schema",
    questionText: "Why did Auto Loader infer all columns as string from JSON?",
    options: [
      { id: "A", text: "Mismatch" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "Only string" },
      { id: "D", text: "Nulls" },
      { id: "E", text: "Cannot infer" }
    ],
    correctAnswerId: "B",
    explanation: "JSON is text-based, so without hints, safe inference is often String."
  },
  {
    id: 72,
    topic: "DLT Development",
    questionText: "DLT Development mode behavior.",
    options: [
      { id: "A", text: "Shut down immediately" },
      { id: "B", text: "Persist until pipeline shut down" },
      { id: "C", text: "Unused" },
      { id: "D", text: "Shut down" },
      { id: "E", text: "All datasets updated... Compute resources persist to allow for additional testing" }
    ],
    correctAnswerId: "E",
    explanation: "Development mode keeps the cluster running to avoid restart overhead during testing iterations."
  },
  {
    id: 73,
    topic: "Medallion Gold",
    questionText: "Which workload utilizes Gold table?",
    options: [
      { id: "A", text: "Enrich timestamps" },
      { id: "B", text: "Aggregate uncleaned" },
      { id: "C", text: "Clean data" },
      { id: "D", text: "Job that queries aggregated data designed to feed into a dashboard" },
      { id: "E", text: "Ingest raw" }
    ],
    correctAnswerId: "D",
    explanation: "Gold layer is for business-level aggregates and dashboards."
  },
  {
    id: 74,
    topic: "Control Plane",
    questionText: "Which two components function in the Control Plane?",
    options: [
      { id: "A", text: "VMs" },
      { id: "B", text: "Compute Orchestration" },
      { id: "C", text: "Serverless" },
      { id: "D", text: "Compute" },
      { id: "E", text: "Unity Catalog" }
    ],
    correctAnswerId: "B",
    explanation: "Backend services like Orchestration and Unity Catalog (Metadata) are in the Control Plane. (Note: Answer BE in dumps)."
  },
  {
    id: 75,
    topic: "Count If",
    questionText: "Output of count_if(col > 1).",
    options: [
      { id: "A", text: "3 6 5" },
      { id: "B", text: "4 6 5" },
      { id: "C", text: "3 6 6" },
      { id: "D", text: "4 6 6" }
    ],
    correctAnswerId: "A",
    explanation: "Calculates count based on condition, count(*), count(col) (non-nulls)."
  },
  {
    id: 76,
    topic: "Auto Loader Workload",
    questionText: "Workloads compatible with Auto Loader?",
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "ML" },
      { id: "C", text: "Serverless" },
      { id: "D", text: "Batch" },
      { id: "E", text: "Dashboard" }
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader is built on Structured Streaming."
  },
  {
    id: 77,
    topic: "Clusters",
    questionText: "Job tested, now needs to be scheduled in production. Best cluster?",
    options: [
      { id: "A", text: "All purpose" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Jobs Cluster" },
      { id: "D", text: "Serverless SQL" }
    ],
    correctAnswerId: "C",
    explanation: "Jobs clusters are cheaper and isolated for scheduled workloads."
  },
  {
    id: 78,
    topic: "Stream Source",
    questionText: "Change batch code to stream.",
    options: [
      { id: "A", text: "Predict" },
      { id: "B", text: "Schema" },
      { id: "C", text: "Path" },
      { id: "D", text: "Format" },
      { id: "E", text: "Replace spark.read with spark.readStream" }
    ],
    correctAnswerId: "E",
    explanation: "spark.read is for batch, spark.readStream is for streaming."
  },
  {
    id: 79,
    topic: "Streaming Hop",
    questionText: "Which query performs streaming hop from Raw to Bronze?",
    options: [
      { id: "A", text: "readStream... writeStream" },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "..." },
      { id: "E", text: "spark.readStream.load(raw)... writeStream" }
    ],
    correctAnswerId: "E",
    explanation: "Raw to Bronze involves reading from raw files (readStream) and writing to a table (writeStream)."
  },
  {
    id: 80,
    topic: "DLT Violation",
    questionText: "ON VIOLATION FAIL UPDATE. Behavior?",
    options: [
      { id: "A", text: "Dropped" },
      { id: "B", text: "Records cause the job to fail" },
      { id: "C", text: "Quarantine" },
      { id: "D", text: "Added and recorded" },
      { id: "E", text: "Flagged" }
    ],
    correctAnswerId: "B",
    explanation: "FAIL UPDATE stops the pipeline immediately upon violation."
  },
  {
    id: 81,
    topic: "Silver vs Bronze",
    questionText: "Relationship between Silver and Bronze?",
    options: [
      { id: "A", text: "Less refined" },
      { id: "B", text: "Aggregates" },
      { id: "C", text: "More data" },
      { id: "D", text: "Silver tables contain a more refined and cleaner view of data than Bronze tables." },
      { id: "E", text: "Less data" }
    ],
    correctAnswerId: "D",
    explanation: "Silver is the 'refined' or 'cleansed' layer."
  },
  {
    id: 82,
    topic: "SQL Startup",
    questionText: "Reduce time to return results when submitted to non-running SQL endpoint?",
    options: [
      { id: "A", text: "Reliability" },
      { id: "B", text: "Auto Stop" },
      { id: "C", text: "Cluster size" },
      { id: "D", text: "Turn on the Serverless feature" },
      { id: "E", text: "Max bound" }
    ],
    correctAnswerId: "D",
    explanation: "Serverless endpoints start up almost instantly compared to classic endpoints."
  },
  {
    id: 83,
    topic: "Grant Table",
    questionText: "Grant full permissions on table sales to team.",
    options: [
      { id: "A", text: "GRANT ALL PRIVILEGES ON TABLE sales TO team;" },
      { id: "B", text: "GRANT SELECT..." },
      { id: "C", text: "GRANT SELECT..." },
      { id: "D", text: "GRANT ALL... team TO sales" }
    ],
    correctAnswerId: "A",
    explanation: "Correct syntax: GRANT ALL PRIVILEGES ON TABLE [name] TO [principal]."
  },
  {
    id: 84,
    topic: "Job Alert",
    questionText: "Notify owner if Job fails.",
    options: [
      { id: "A", text: "Manual" },
      { id: "B", text: "Setting up an Alert in the Job page" },
      { id: "C", text: "Notebook alert" },
      { id: "D", text: "No way" },
      { id: "E", text: "MLflow" }
    ],
    correctAnswerId: "B",
    explanation: "Job UI allows configuring email notifications on success/failure."
  },
  {
    id: 85,
    topic: "Grant Database",
    questionText: "Grant permission on entire database.",
    options: [
      { id: "A", text: "GRANT VIEW" },
      { id: "B", text: "GRANT CREATE" },
      { id: "C", text: "GRANT USAGE CATALOG" },
      { id: "D", text: "GRANT USAGE ON DATABASE customers TO team;" }
    ],
    correctAnswerId: "D",
    explanation: "USAGE on database allows listing/accessing objects within."
  },
  {
    id: 86,
    topic: "SQL Cost",
    questionText: "Minimize total running time/cost for dashboard?",
    options: [
      { id: "A", text: "Limit DBUs" },
      { id: "B", text: "Number of refreshes" },
      { id: "C", text: "Set the query's refresh schedule to end on a certain date" },
      { id: "D", text: "Limit individuals" }
    ],
    correctAnswerId: "C",
    explanation: "Setting an end date prevents indefinite spending."
  },
  {
    id: 87,
    topic: "Alert Webhook",
    questionText: "Notify via messaging webhook.",
    options: [
      { id: "A", text: "Custom template" },
      { id: "B", text: "Email" },
      { id: "C", text: "One-time" },
      { id: "D", text: "Set up an Alert with a new webhook alert destination" },
      { id: "E", text: "Without notifications" }
    ],
    correctAnswerId: "D",
    explanation: "Databricks SQL Alerts support Webhook destinations."
  },
  {
    id: 88,
    topic: "SQL Auto Stop",
    questionText: "Minimize total running time of SQL endpoint.",
    options: [
      { id: "A", text: "Turn on the Auto Stop feature" },
      { id: "B", text: "Matches" },
      { id: "C", text: "Reduce cluster size" },
      { id: "D", text: "Matches" },
      { id: "E", text: "Serverless" }
    ],
    correctAnswerId: "A",
    explanation: "Auto Stop turns off the endpoint when idle."
  },
  {
    id: 89,
    topic: "Governance",
    questionText: "Unity Catalog governance conditions.",
    options: [
      { id: "A", text: "More than 1 metastore..." },
      { id: "B", text: "Catalog schema managed..." },
      { id: "C", text: "Multiple catalogs..." },
      { id: "D", text: "Catalog not associated... schema managed" },
      { id: "E", text: "Metastore not associated... catalog managed" }
    ],
    correctAnswerId: "E",
    explanation: "Note: Answer key often cites AE or AD. Usually E: If metastore has no root storage, catalogs need managed storage."
  },
  {
    id: 90,
    topic: "Grant Table",
    questionText: "Grant full privileges on table sales.",
    options: [
      { id: "A", text: "GRANT ALL PRIVILEGES ON TABLE sales TO team;" },
      { id: "B", text: "GRANT SELECT CREATE" },
      { id: "C", text: "GRANT SELECT" },
      { id: "D", text: "GRANT USAGE" },
      { id: "E", text: "GRANT ALL team to sales" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 91,
    topic: "Data Quality",
    questionText: "Feature improving data quality.",
    options: [
      { id: "A", text: "Open formats" },
      { id: "B", text: "SQL queries" },
      { id: "C", text: "Storage solutions" },
      { id: "D", text: "ACID-compliant transactions" }
    ],
    correctAnswerId: "D",
    explanation: "ACID ensures data integrity."
  },
  {
    id: 92,
    topic: "Cluster Pools",
    questionText: "Scenario for cluster pools.",
    options: [
      { id: "A", text: "Version-controlled" },
      { id: "B", text: "Runnable by all" },
      { id: "C", text: "Refreshed as quickly as possible" },
      { id: "D", text: "Reproducible" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question. Pools reduce start time."
  },
  {
    id: 93,
    topic: "Control Plane",
    questionText: "Hosted completely in control plane.",
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "Databricks web application" },
      { id: "C", text: "Driver node" },
      { id: "D", text: "Filesystem" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 94,
    topic: "Repos",
    questionText: "Advantage of Repos over Notebook versioning.",
    options: [
      { id: "A", text: "Revert" },
      { id: "B", text: "Housed" },
      { id: "C", text: "Comment" },
      { id: "D", text: "Supports multiple branches" }
    ],
    correctAnswerId: "D",
    explanation: "Repos enables full Git branching workflows."
  },
  {
    id: 95,
    topic: "Open Source",
    questionText: "Benefit of open source technologies.",
    options: [
      { id: "A", text: "Avoiding vendor lock-in" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Scale workloads" },
      { id: "D", text: "Cloud-specific" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 96,
    topic: "Permissions",
    questionText: "Where to review permissions on table?",
    options: [
      { id: "A", text: "Jobs" },
      { id: "B", text: "Dashboards" },
      { id: "C", text: "Catalog Explorer" },
      { id: "D", text: "Repos" }
    ],
    correctAnswerId: "C",
    explanation: "Catalog Explorer (Data Explorer) is the UI for permissions."
  },
  {
    id: 97,
    topic: "Git Sync",
    questionText: "Sync repo to get changes.",
    options: [
      { id: "A", text: "Clone" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Push" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 98,
    topic: "File Format",
    questionText: "File format for Delta Lake tables?",
    options: [
      { id: "A", text: "CSV" },
      { id: "B", text: "Parquet" },
      { id: "C", text: "JSON" },
      { id: "D", text: "Delta" }
    ],
    correctAnswerId: "B",
    explanation: "Delta Lake uses Parquet files for data storage."
  },
  {
    id: 99,
    topic: "DDL Create",
    questionText: "Code block to create empty Delta table.",
    options: [
      { id: "A", text: "CREATE OR REPLACE TABLE ..." },
      { id: "B", text: "WITH COLUMNS ... USING DELTA" },
      { id: "C", text: "IF NOT EXISTS" },
      { id: "D", text: "AS SELECT" }
    ],
    correctAnswerId: "A",
    explanation: "Standard DDL. `USING DELTA` is default."
  },
  {
    id: 100,
    topic: "Insert",
    questionText: "Append new record.",
    options: [
      { id: "A", text: "INSERT INTO my_table VALUES ('a1', 6, 9.4)" },
      { id: "B", text: "INSERT VALUES" },
      { id: "C", text: "UPDATE" },
      { id: "D", text: "UPDATE VALUES" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 101,
    topic: "Optimize",
    questionText: "Keyword to compact small files.",
    options: [
      { id: "A", text: "OPTIMIZE" },
      { id: "B", text: "VACUUM" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 102,
    topic: "Physical Location",
    questionText: "Data entity saved to physical location.",
    options: [
      { id: "A", text: "Table" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question. Tables persist data."
  },
  {
    id: 103,
    topic: "Copy Into",
    questionText: "No new records copied. Why?",
    options: [
      { id: "A", text: "Format options" },
      { id: "B", text: "Table refresh" },
      { id: "C", text: "The previous day's file has already been copied" },
      { id: "D", text: "Parquet" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question. Copy Into is idempotent."
  },
  {
    id: 104,
    topic: "Merge",
    questionText: "Write data avoiding duplicates.",
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question."
  },
  {
    id: 105,
    topic: "PySpark Table",
    questionText: "Access sales in PySpark.",
    options: [
      { id: "A", text: "SELECT" },
      { id: "B", text: "spark.table('sales')" },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 106,
    topic: "Database Location",
    questionText: "Location of customer360 database.",
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "dbfs:/user/hive/database" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question. Default location."
  },
  {
    id: 107,
    topic: "Drop Table",
    questionText: "Reason behind deletion of all files.",
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "Small data" },
      { id: "C", text: "No location" },
      { id: "D", text: "External" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 108,
    topic: "Create Table CSV",
    questionText: "Fill blank for CSV table.",
    options: [
      { id: "A", text: "FROM" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 109,
    topic: "Parquet Benefit",
    questionText: "Benefit of Parquet over CSV.",
    options: [
      { id: "A", text: "Partitioned" },
      { id: "B", text: "Delta tables" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Optimized" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question."
  },
  {
    id: 110,
    topic: "Pivot",
    questionText: "Long to wide format.",
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 111,
    topic: "Python SQL",
    questionText: "Run query using table_name variable.",
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.sql" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" }
    ],
    correctAnswerId: "B",
    explanation: "spark.sql accepts a string query."
  },
  {
    id: 112,
    topic: "Join",
    questionText: "Which of the following will be returned by the query (LEFT JOIN)?",
    options: [
      { id: "A", text: "..." },
      { id: "B", text: "..." },
      { id: "C", text: "Left table rows + nulls" },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "C",
    explanation: "Left join returns all rows from left table."
  },
  {
    id: 113,
    topic: "Filter",
    questionText: "Filter array column.",
    options: [
      { id: "A", text: "FILTER (employees, i -> i.years_exp > 5)" },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 114,
    topic: "Python Function",
    questionText: "Add two integers function.",
    options: [
      { id: "A", text: "..." },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "def ... return" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 115,
    topic: "Trigger",
    questionText: "Execute micro-batch every 5 seconds.",
    options: [
      { id: "A", text: "trigger(\"5 seconds\")" },
      { id: "B", text: "trigger(continuous)" },
      { id: "C", text: "trigger(once)" },
      { id: "D", text: "trigger(processingTime=\"5 seconds\")" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 116,
    topic: "Monitor Quality",
    questionText: "Tool to automate monitoring data quality.",
    options: [
      { id: "A", text: "Auto Loader" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Delta Lake" },
      { id: "D", text: "Delta Live Tables" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 117,
    topic: "Identify Dropped",
    questionText: "Identify which table is dropping records.",
    options: [
      { id: "A", text: "Expectations" },
      { id: "B", text: "Error button" },
      { id: "C", text: "Notify" },
      { id: "D", text: "Navigate to DLT pipeline page... view quality statistics" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 118,
    topic: "Checkpointing",
    questionText: "What records offset range?",
    options: [
      { id: "A", text: "Checkpointing and Write-ahead Logs" },
      { id: "B", text: "Replayable" },
      { id: "C", text: "Write-ahead" },
      { id: "D", text: "Checkpointing and Idempotent Sinks" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question. Checkpointing is key."
  },
  {
    id: 119,
    topic: "Gold vs Silver",
    questionText: "Relationship between Gold and Silver.",
    options: [
      { id: "A", text: "Gold more likely to contain aggregations" },
      { id: "B", text: "Valuable" },
      { id: "C", text: "Less refined" },
      { id: "D", text: "Truthful" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 120,
    topic: "DLT Streaming",
    questionText: "When to use CREATE STREAMING LIVE TABLE?",
    options: [
      { id: "A", text: "Static" },
      { id: "B", text: "Incrementally" },
      { id: "C", text: "Aggregations" },
      { id: "D", text: "Static" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 121,
    topic: "DLT Production",
    questionText: "Production mode behavior.",
    options: [
      { id: "A", text: "Shut down" },
      { id: "B", text: "Once" },
      { id: "C", text: "Updated at set intervals... compute resources deployed... terminated when stopped" },
      { id: "D", text: "Once" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question."
  },
  {
    id: 122,
    topic: "Auto Loader",
    questionText: "Workloads compatible with Auto Loader.",
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "ML" },
      { id: "C", text: "Serverless" },
      { id: "D", text: "Batch" }
    ],
    correctAnswerId: "A",
    explanation: "Repeated question."
  },
  {
    id: 123,
    topic: "JSON Schema",
    questionText: "Why inferred as string?",
    options: [
      { id: "A", text: "Cannot infer" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "String" },
      { id: "D", text: "Null" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 124,
    topic: "Silver vs Bronze",
    questionText: "Relationship Silver vs Bronze.",
    options: [
      { id: "A", text: "Less refined" },
      { id: "B", text: "Aggregates" },
      { id: "C", text: "More data" },
      { id: "D", text: "Silver tables contain a more refined and cleaner view of data" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 125,
    topic: "Streaming Hop",
    questionText: "Query performing streaming hop?",
    options: [
      { id: "A", text: "..." },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "readStream... writeStream" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 126,
    topic: "Violation Drop",
    questionText: "ON VIOLATION DROP ROW.",
    options: [
      { id: "A", text: "Fail" },
      { id: "B", text: "Added" },
      { id: "C", text: "Dropped from target and recorded in event log" },
      { id: "D", text: "Added" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question."
  },
  {
    id: 127,
    topic: "Cluster Startup",
    questionText: "Improve startup time.",
    options: [
      { id: "A", text: "Endpoints" },
      { id: "B", text: "Jobs" },
      { id: "C", text: "Autoscale" },
      { id: "D", text: "Use clusters that are from a cluster pool" }
    ],
    correctAnswerId: "D",
    explanation: "Repeated question."
  },
  {
    id: 128,
    topic: "Job Task",
    questionText: "Run new task prior to original.",
    options: [
      { id: "A", text: "Clone" },
      { id: "B", text: "Create new task and add it as dependency of original task" },
      { id: "C", text: "Dependency of new task" },
      { id: "D", text: "New job" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 129,
    topic: "Slow Notebook",
    questionText: "Identify why notebook running slowly.",
    options: [
      { id: "A", text: "Runs tab" },
      { id: "B", text: "Tasks tab" },
      { id: "C", text: "Navigate to Runs tab... click active run" },
      { id: "D", text: "Tasks tab" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question."
  },
  {
    id: 130,
    topic: "SQL Latency",
    questionText: "Improve latency of small queries.",
    options: [
      { id: "A", text: "Cluster size" },
      { id: "B", text: "Increase maximum bound of scaling range" },
      { id: "C", text: "Auto Stop" },
      { id: "D", text: "Serverless" }
    ],
    correctAnswerId: "B",
    explanation: "Repeated question."
  },
  {
    id: 131,
    topic: "Webhook",
    questionText: "Notify via webhook.",
    options: [
      { id: "A", text: "Template" },
      { id: "B", text: "Email" },
      { id: "C", text: "Set up an Alert with a new webhook alert destination" },
      { id: "D", text: "One-time" }
    ],
    correctAnswerId: "C",
    explanation: "Repeated question."
  },
  {
    id: 132,
    topic: "Delta Sharing",
    questionText: "What will result in additional costs due to cross-region or egress fees?",
    options: [
      { id: "A", text: "Sharing data within the same cloud provider and region" },
      { id: "B", text: "Transferring data via Delta Sharing across clouds and across different geographic regions" },
      { id: "C", text: "Accessing Delta Sharing data using a VPN within the same data center" },
      { id: "D", text: "Utilizing Delta Sharing for internal data analytics within a single cloud environment" }
    ],
    correctAnswerId: "B",
    explanation: "Data egress fees apply when data leaves a cloud region or provider."
  },
  {
    id: 133,
    topic: "Auto Loader Schema",
    questionText: "Ingest new data. In event of Schema change, ingestion should fail.",
    options: [
      { id: "A", text: "failOnNewColumns" },
      { id: "B", text: "none" },
      { id: "C", text: "rescue" },
      { id: "D", text: "addNewColumns" }
    ],
    correctAnswerId: "A",
    explanation: "failOnNewColumns causes the stream to fail if unknown columns appear."
  },
  {
    id: 134,
    topic: "DDL Create Table",
    questionText: "Which SQL code snippet will correctly demonstrate a Data Definition Language (DDL) operation used to create a table?",
    options: [
      { id: "A", text: "CREATE TABLE employees (...)" },
      { id: "B", text: "DROP TABLE employees;" },
      { id: "C", text: "ALTER TABLE employees..." },
      { id: "D", text: "INSERT INTO employees..." }
    ],
    correctAnswerId: "A",
    explanation: "CREATE TABLE is a DDL command."
  },
  {
    id: 135,
    topic: "Notebooks",
    questionText: "Organize steps into a structured process that can be run regularly and scheduled.",
    options: [
      { id: "A", text: "Real-time streaming support" },
      { id: "B", text: "Collaborative editing" },
      { id: "C", text: "Task workflows and job scheduling" },
      { id: "D", text: "Notebook version control" }
    ],
    correctAnswerId: "C",
    explanation: "Databricks Workflows allow scheduling notebooks as tasks."
  },
  {
    id: 136,
    topic: "DevOps",
    questionText: "Deploy integration tests and version-controlled workflow using external job scheduler.",
    options: [
      { id: "A", text: "Databricks Connect" },
      { id: "B", text: "Databricks Asset Bundles" },
      { id: "C", text: "Databricks CLI" },
      { id: "D", text: "Databricks SDK" }
    ],
    correctAnswerId: "B",
    explanation: "Databricks Asset Bundles (DABs) are designed for packaging and deploying workflows as code."
  },
  {
    id: 137,
    topic: "Asset Bundles",
    questionText: "Which Databricks asset bundle format is valid?",
    options: [
      { id: "A", text: "resources: jobs: hello-job: ..." },
      { id: "B", text: "JSON format" },
      { id: "C", text: "Configuration object" },
      { id: "D", text: "HCL syntax" }
    ],
    correctAnswerId: "A",
    explanation: "DABs use YAML syntax."
  },
  {
    id: 138,
    topic: "DLT Quality",
    questionText: "Data must be dropped if outside expected parameters, but stream should not fail.",
    options: [
      { id: "A", text: "Change Data Capture" },
      { id: "B", text: "Error Handling" },
      { id: "C", text: "Monitoring" },
      { id: "D", text: "Expectations" }
    ],
    correctAnswerId: "D",
    explanation: "DLT Expectations (ON VIOLATION DROP ROW) handle this logic."
  },
  {
    id: 139,
    topic: "Performance",
    questionText: "Cluster not fully utilized, dataset getting skewed.",
    options: [
      { id: "A", text: "Use coalesce()" },
      { id: "B", text: "Increase executors" },
      { id: "C", text: "Repartition the dataset to have it be more optimally spread across all nodes" },
      { id: "D", text: "Increase memory" }
    ],
    correctAnswerId: "C",
    explanation: "Skew implies uneven data distribution. Repartitioning shuffles data to balance it."
  },
  {
    id: 140,
    topic: "Storage Layer",
    questionText: "Optimized storage layer that supports ACID transactions and schema enforcement.",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Cloud File Storage" },
      { id: "D", text: "Data lake" }
    ],
    correctAnswerId: "A",
    explanation: "Delta Lake adds ACID and schema enforcement to data lakes."
  },
  {
    id: 141,
    topic: "Bronze Layer",
    questionText: "Transformations typically included in Bronze layer?",
    options: [
      { id: "A", text: "Include columns Load date/time, process ID" },
      { id: "B", text: "Business rules" },
      { id: "C", text: "Data cleansing" },
      { id: "D", text: "Aggregate" }
    ],
    correctAnswerId: "A",
    explanation: "Bronze is raw data + metadata (load time, source file) without business logic."
  },
  {
    id: 142,
    topic: "Federation",
    questionText: "Query external data sources (MySQL, Redshift, BigQuery) without ingesting.",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Lakehouse Federation" },
      { id: "C", text: "MLflow" },
      { id: "D", text: "Databricks Connect" }
    ],
    correctAnswerId: "B",
    explanation: "Lakehouse Federation allows querying external systems without data movement."
  },
  {
    id: 143,
    topic: "Data Sharing",
    questionText: "Share dataset with external partner who uses a different data platform.",
    options: [
      { id: "A", text: "Using Delta Sharing with the open sharing protocol" },
      { id: "B", text: "Export CSV" },
      { id: "C", text: "Third-party API" },
      { id: "D", text: "Databricks-to-Databricks" }
    ],
    correctAnswerId: "A",
    explanation: "Delta Sharing is an open protocol for secure data sharing with any platform."
  },
  {
    id: 144,
    topic: "Kafka Ingestion",
    questionText: "Ingest data from Kafka brokers to DLT. Correct code?",
    options: [
      { id: "A", text: "spark.readStream.format('kafka').option('kafka.bootstrap.servers', ...)" },
      { id: "B", text: "cloud_files" },
      { id: "C", text: "STREAM kafka" },
      { id: "D", text: "cloud_files with kafka" }
    ],
    correctAnswerId: "A",
    explanation: "Standard Spark Structured Streaming Kafka syntax is used within DLT python definition."
  },
  {
    id: 145,
    topic: "Aggregations",
    questionText: "Calculate total sales amount for each product category.",
    options: [
      { id: "A", text: "groupBy('category').agg(sum('sales_amount')...)" },
      { id: "B", text: "sum...groupBy" },
      { id: "C", text: "agg...groupBy" },
      { id: "D", text: "groupBy('region')" }
    ],
    correctAnswerId: "A",
    explanation: "PySpark syntax: `groupBy(col).agg(func)`."
  },
  {
    id: 146,
    topic: "DLT Benefits",
    questionText: "Why is Delta Live Tables appropriate for ETL pipeline ensuring data quality?",
    options: [
      { id: "A", text: "Automatic data quality checks, built-in support for schema evolution, declarative pipeline" },
      { id: "B", text: "Manual schema" },
      { id: "C", text: "Custom code" },
      { id: "D", text: "Batch only" }
    ],
    correctAnswerId: "A",
    explanation: "DLT features include expectations (quality), schema evolution, and declarative syntax."
  },
  {
    id: 147,
    topic: "Notebook Languages",
    questionText: "Why does command fail when mixing Python variable in SQL cell without magic?",
    options: [
      { id: "A", text: "Interoperability only Scala/SQL" },
      { id: "B", text: "One language per notebook" },
      { id: "C", text: "Databricks supports one language per cell" },
      { id: "D", text: "Only special character" }
    ],
    correctAnswerId: "C",
    explanation: "A cell has a specific language. You cannot mix Python syntax directly inside a SQL cell without specific widgets or spark.sql()."
  },
  {
    id: 148,
    topic: "Compute Selection",
    questionText: "Small-scale ad-hoc Python scripts, high frequency, wind down quickly.",
    options: [
      { id: "A", text: "All-purpose" },
      { id: "B", text: "Job Cluster" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "SQL Warehouse" }
    ],
    correctAnswerId: "C",
    explanation: "Serverless Compute for notebooks provides instant startup/shutdown, ideal for ad-hoc bursts."
  },
  {
    id: 149,
    topic: "Databricks Connect",
    questionText: "How does Databricks Connect enable local development?",
    options: [
      { id: "A", text: "Local environment mimics runtime" },
      { id: "B", text: "Web interface only" },
      { id: "C", text: "Direct execution" },
      { id: "D", text: "By providing a local environment that mimics the Databricks runtime... using preferred IDE" }
    ],
    correctAnswerId: "D",
    explanation: "Databricks Connect allows local IDEs to run code against Databricks clusters."
  },
  {
    id: 150,
    topic: "Aggregations",
    questionText: "Calculate total sales amount for each region.",
    options: [
      { id: "A", text: "groupBy('category')" },
      { id: "B", text: "groupBy('region').agg(sum('sales_amount').alias('total_sales_amount'))" },
      { id: "C", text: "sum...groupBy" },
      { id: "D", text: "agg...groupBy" }
    ],
    correctAnswerId: "B",
    explanation: "Grouping by region is required to calculate sales per region."
  },
  {
    id: 151,
    topic: "DLT Ingestion",
    questionText: "Ingest raw JSON data into Delta table using DLT.",
    options: [
      { id: "A", text: "..." },
      { id: "B", text: "..." },
      { id: "C", text: "spark.read.json -> return dlt.table" },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "C",
    explanation: "Note: In DLT python, you return a dataframe inside a `@dlt.table` decorated function. `spark.read.json` is batch, `spark.readStream` is stream. Context suggests simple pipeline."
  },
  {
    id: 152,
    topic: "Medallion Arch",
    questionText: "Where should historical event data (Kafka) be stored? Mindful of costs.",
    options: [
      { id: "A", text: "Gold" },
      { id: "B", text: "Silver" },
      { id: "C", text: "Bronze" },
      { id: "D", text: "Raw layer" }
    ],
    correctAnswerId: "C",
    explanation: "Bronze is the landing zone for raw historical data."
  },
  {
    id: 153,
    topic: "Job Cluster Limits",
    questionText: "Maximum output supported by a job cluster to ensure notebook does not fail?",
    options: [
      { id: "A", text: "25MBs" },
      { id: "B", text: "10MBs" },
      { id: "C", text: "30MBs" },
      { id: "D", text: "15MBs" }
    ],
    correctAnswerId: "C",
    explanation: "Notebook output size limit is typically 20-30MB before truncation/error in jobs context."
  },
  {
    id: 154,
    topic: "Gold Layer",
    questionText: "Two items characteristic of Gold Layer.",
    options: [
      { id: "A", text: "Historical lineage" },
      { id: "B", text: "Raw Data" },
      { id: "C", text: "Normalised" },
      { id: "D", text: "De-normalised" },
      { id: "E", text: "Read-optimized" }
    ],
    correctAnswerId: "DE",
    explanation: "Gold tables are typically De-normalized (Star Schema) and Read-optimized for reporting."
  },
  {
    id: 155,
    topic: "Optimize Verification",
    questionText: "How to be sure OPTIMIZE command has been executed?",
    options: [
      { id: "A", text: "System table" },
      { id: "B", text: "SHOW TABLES" },
      { id: "C", text: "DESCRIBE DETAIL" },
      { id: "D", text: "Use DESCRIBE HISTORY table to check if exists any OPTIMIZE operation" }
    ],
    correctAnswerId: "D",
    explanation: "DESCRIBE HISTORY shows the audit log of actions on the table, including OPTIMIZE."
  },
  {
    id: 156,
    topic: "Audit Logs",
    questionText: "How are events formatted in Databricks audit logs?",
    options: [
      { id: "A", text: "JSON format" },
      { id: "B", text: "CSV format" },
      { id: "C", text: "XML format" },
      { id: "D", text: "Plain text" }
    ],
    correctAnswerId: "A",
    explanation: "Databricks audit logs are delivered in JSON format."
  },
  {
    id: 157,
    topic: "Cluster Cost",
    questionText: "Cheapest but most efficient cluster for small production workload (10GB)?",
    options: [
      { id: "A", text: "Interactive" },
      { id: "B", text: "Job cluster with spot instances enabled" },
      { id: "C", text: "Job cluster with spot disabled" },
      { id: "D", text: "Job cluster with Photon" }
    ],
    correctAnswerId: "B",
    explanation: "Job clusters are cheaper than interactive. Spot instances provide further discounts."
  },
  {
    id: 158,
    topic: "Auto Loader",
    questionText: "Load JSON files as soon as they arrive using Python.",
    options: [
      { id: "A", text: "spark.read" },
      { id: "B", text: "spark.readStream.format('cloud')" },
      { id: "C", text: "spark.readStream.format('json')" },
      { id: "D", text: "df = spark.readStream.format(\"cloudFiles\").option(\"cloudFiles.format\", \"json\").load(\"/input/path\")" }
    ],
    correctAnswerId: "D",
    explanation: "The format 'cloudFiles' invokes Auto Loader."
  },
  {
    id: 159,
    topic: "Medallion Architecture",
    questionText: "Appropriate layer and data pairing?",
    options: [
      { id: "A", text: "Silver - Raw" },
      { id: "B", text: "Bronze - Summary" },
      { id: "C", text: "Silver Layer - Cleansed master customer data" },
      { id: "D", text: "Gold - Raw" }
    ],
    correctAnswerId: "C",
    explanation: "Silver layer is for cleansed, filtered, and augmented data."
  },
  {
    id: 160,
    topic: "Streaming Logic",
    questionText: "Filter out NULL values in order_datetime.",
    options: [
      { id: "A", text: "CONSTRAINT valid_date EXPECT (order_datetime IS NOT NULL) ON VIOLATION DROP ROW" },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "A",
    explanation: "In DLT, constraints are used to enforce quality. Dropping the row filters nulls."
  },
  {
    id: 161,
    topic: "Lineage",
    questionText: "How does Unity Catalog lineage support visualization?",
    options: [
      { id: "A", text: "Tables only" },
      { id: "B", text: "No notebooks" },
      { id: "C", text: "No column-level" },
      { id: "D", text: "Unity Catalog provides an interactive graph... supporting column-level tracking" }
    ],
    correctAnswerId: "D",
    explanation: "UC Lineage supports detailed column-level lineage across tables, jobs, notebooks, and dashboards."
  },
  {
    id: 162,
    topic: "SQL Compute",
    questionText: "Exploratory Analysis, large numbers of queries quickly and cost-effectively.",
    options: [
      { id: "A", text: "Serverless notebooks" },
      { id: "B", text: "Pro SQL" },
      { id: "C", text: "Classic SQL" },
      { id: "D", text: "Serverless SQL Warehouse" }
    ],
    correctAnswerId: "D",
    explanation: "Serverless SQL Warehouses start instantly and scale automatically, ideal for ad-hoc/exploratory work."
  },
  {
    id: 163,
    topic: "Unity Catalog Roles",
    questionText: "Role to grant/revoke privileges but not have read/write access?",
    options: [
      { id: "A", text: "Table Owner" },
      { id: "B", text: "Catalog Owner" },
      { id: "C", text: "Schema Owner" },
      { id: "D", text: "USE catalog" }
    ],
    correctAnswerId: "C",
    explanation: "Schema owners can manage permissions within the schema."
  },
  {
    id: 164,
    topic: "Debugging",
    questionText: "Inspect state of variables (DataFrames) in real-time during execution error.",
    options: [
      { id: "A", text: "CLI" },
      { id: "B", text: "Use the Python Notebook Interactive Debugger" },
      { id: "C", text: "Ganglia" },
      { id: "D", text: "Spark UI" }
    ],
    correctAnswerId: "B",
    explanation: "The interactive debugger allows breakpoints and variable inspection within the notebook UI."
  },
  {
    id: 165,
    topic: "External Tables",
    questionText: "Create external table referencing ADLS.",
    options: [
      { id: "A", text: "CREATE MANAGED" },
      { id: "B", text: "CREATE UNMANAGED" },
      { id: "C", text: "Use the CREATE TABLE statement and specify the LOCATION clause" },
      { id: "D", text: "CREATE EXTERNAL" }
    ],
    correctAnswerId: "C",
    explanation: "Standard syntax `CREATE TABLE ... LOCATION 'path'` creates an external table."
  },
  {
    id: 166,
    topic: "Cluster Selection",
    questionText: "Small proof of concept. Spikes in usage. Wants real-time results.",
    options: [
      { id: "A", text: "All Purpose Cluster with autoscaling" },
      { id: "B", text: "Job Cluster" },
      { id: "C", text: "Job Cluster" },
      { id: "D", text: "Fixed memory" }
    ],
    correctAnswerId: "A",
    explanation: "Interactive development requires All-Purpose clusters. Autoscaling handles spikes."
  },
  {
    id: 167,
    topic: "SQL Compute",
    questionText: "Fluctuating workloads, automatic scaling, no management.",
    options: [
      { id: "A", text: "SQL Analytics" },
      { id: "B", text: "Runtime ML" },
      { id: "C", text: "Jobs" },
      { id: "D", text: "Serverless SQL Warehouse" }
    ],
    correctAnswerId: "D",
    explanation: "Serverless SQL Warehouses are managed, scalable, and charge only for execution."
  },
  {
    id: 168,
    topic: "Auto Loader",
    questionText: "What is the functionality of AutoLoader?",
    options: [
      { id: "A", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling both batch and streaming data with support for schema evolution." },
      { id: "B", text: "No schema evolution" },
      { id: "C", text: "Streaming only" },
      { id: "D", text: "Batch only" }
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader handles both batch and stream, with schema inference and evolution capabilities."
  },
  {
    id: 169,
    topic: "Delta Sharing",
    questionText: "Share dataset with external partner not on Databricks. Secure, read-only.",
    options: [
      { id: "A", text: "CSV" },
      { id: "B", text: "Grant workspace access" },
      { id: "C", text: "Unity Catalog" },
      { id: "D", text: "Share the dataset using Delta Sharing" }
    ],
    correctAnswerId: "D",
    explanation: "Delta Sharing allows secure sharing with any client supporting the protocol."
  },
  {
    id: 170,
    topic: "Optimization",
    questionText: "What happens when OPTIMIZE is run twice on the same table with the same data?",
    options: [
      { id: "A", text: "It has no effect because it is idempotent." },
      { id: "B", text: "Changes file size" },
      { id: "C", text: "Reduces files" },
      { id: "D", text: "Triggers liquid clustering" }
    ],
    correctAnswerId: "A",
    explanation: "If data hasn't changed, OPTIMIZE does nothing."
  },
  {
    id: 171,
    topic: "Delta Sharing",
    questionText: "First piece of info to request from external partner to set up Delta Sharing?",
    options: [
      { id: "A", text: "IP address" },
      { id: "B", text: "Cluster name" },
      { id: "C", text: "The sharing identifier of their Unity Catalog metastore" },
      { id: "D", text: "Password" }
    ],
    correctAnswerId: "C",
    explanation: "To share data Databricks-to-Databricks, you need the recipient's sharing identifier."
  },
  {
    id: 172,
    topic: "Workflow Repair",
    questionText: "Workflow fails at last stage. Expensive to rerun. Minimise downtime/cost.",
    options: [
      { id: "A", text: "Rerun entire" },
      { id: "B", text: "Repair run" },
      { id: "C", text: "Restart cluster" },
      { id: "D", text: "Switch cluster" }
    ],
    correctAnswerId: "B",
    explanation: "Repair run (Matrix run/Repair) allows re-running only the failed tasks."
  },
  {
    id: 173,
    topic: "Scaling",
    questionText: "Scale automatically based on varying workloads without manual cluster management. SLA requirements.",
    options: [
      { id: "A", text: "Fixed Job Clusters" },
      { id: "B", text: "Spot Instances" },
      { id: "C", text: "Interactive Clusters" },
      { id: "D", text: "Utilize Databricks serverless compute" }
    ],
    correctAnswerId: "D",
    explanation: "Serverless compute offers the fastest and most managed auto-scaling."
  },
  {
    id: 174,
    topic: "PySpark Aggregation",
    questionText: "Code for total revenue, average revenue, transaction count per product.",
    options: [
      { id: "A", text: "df.groupBy('product').agg(F.sum('revenue'), F.mean('revenue'), F.count('*'))" },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "A",
    explanation: "Correct PySpark aggregation syntax."
  },
  {
    id: 175,
    topic: "Single Task Repair",
    questionText: "Single-task workflow fails. How to rerun?",
    options: [
      { id: "A", text: "Repair the task" },
      { id: "B", text: "Rerun the pipeline" },
      { id: "C", text: "Restart cluster" },
      { id: "D", text: "Switch cluster" }
    ],
    correctAnswerId: "A",
    explanation: "For single task jobs, 'Repair run' effectively reruns the task. (Note: B is also acceptable in some contexts if it implies 'Run Now', but 'Repair' is the feature for failure handling)."
  },
  {
    id: 176,
    topic: "Grant Permissions",
    questionText: "Grant manufacturing-team create tables in production schema.",
    options: [
      { id: "A", text: "GRANT CREATE TABLE ON SCHEMA...; GRANT USE SCHEMA...; GRANT USE CATALOG..." },
      { id: "B", text: "GRANT USE TABLE..." },
      { id: "C", text: "GRANT CREATE TABLE... CREATE SCHEMA..." },
      { id: "D", text: "..." }
    ],
    correctAnswerId: "A",
    explanation: "To create a table, a user needs USE CATALOG, USE SCHEMA, and CREATE TABLE permissions."
  },
  {
    id: 177,
    topic: "Debugging",
    questionText: "Quickly identify incorrect data type in notebook.",
    options: [
      { id: "A", text: "Spark UI" },
      { id: "B", text: "Databricks debugger breakpoints" },
      { id: "C", text: "Databricks debugger variable explorer" },
      { id: "D", text: "Print statements" }
    ],
    correctAnswerId: "B",
    explanation: "Breakpoints allow pausing execution to inspect the state."
  },
  {
    id: 178,
    topic: "Performance Tuning",
    questionText: "High CPU time vs Task time.",
    options: [
      { id: "A", text: "Repartition" },
      { id: "B", text: "No change" },
      { id: "C", text: "Consider executor and core tuning or resizing the cluster" },
      { id: "D", text: "Increase parallelism" }
    ],
    correctAnswerId: "C",
    explanation: "High CPU vs Task time implies tasks are CPU bound. Adding cores or upsizing cluster helps."
  },
  {
    id: 179,
    topic: "Auto Loader Patterns",
    questionText: "Parse only png files.",
    options: [
      { id: "A", text: "append" },
      { id: "B", text: "option('pathGlobfilter', '*.png')" },
      { id: "C", text: "..." },
      { id: "D", text: "load/*.png" }
    ],
    correctAnswerId: "B",
    explanation: "pathGlobfilter is the correct option to filter files by pattern in Auto Loader."
  },
  {
    id: 180,
    topic: "Serverless Languages",
    questionText: "Languages supported by Serverless compute clusters?",
    options: [
      { id: "A", text: "SQL and Python" },
      { id: "B", text: "Python and R" },
      { id: "C", text: "R and Scala" },
      { id: "D", text: "Scala and Java" }
    ],
    correctAnswerId: "A",
    explanation: "Originally SQL only, but Serverless Job Compute now supports Python."
  },
  {
    id: 181,
    topic: "OOM Error",
    questionText: "java.lang.OutofMemoryError: Java heap space. Corrective actions? (Choose two)",
    options: [
      { id: "A", text: "Narrow filters" },
      { id: "B", text: "Upsize worker nodes" },
      { id: "C", text: "Upsize driver" },
      { id: "D", text: "Cache" },
      { id: "E", text: "Shuffle partitions" }
    ],
    correctAnswerId: "AB",
    explanation: "Reducing data volume (Narrow filters) or increasing memory resources (Upsize workers) helps OOM."
  },
  {
    id: 182,
    topic: "Bronze Layer",
    questionText: "Operation applies to Bronze layer?",
    options: [
      { id: "A", text: "Ingest raw data without transformations, preserving original schemas" },
      { id: "B", text: "Clean" },
      { id: "C", text: "Enrich" },
      { id: "D", text: "Aggregate" }
    ],
    correctAnswerId: "A",
    explanation: "Bronze is for raw ingestion."
  },
  {
    id: 183,
    topic: "Silver Layer",
    questionText: "Primary function of Silver layer?",
    options: [
      { id: "A", text: "Store historical" },
      { id: "B", text: "Aggregate" },
      { id: "C", text: "Validate, clean, and deduplicate data" },
      { id: "D", text: "Ingest raw" }
    ],
    correctAnswerId: "C",
    explanation: "Silver is for cleansing and refinement."
  },
  {
    id: 184,
    topic: "Lakehouse Federation",
    questionText: "Combine sales data from Postgres with Synapse without duplication.",
    options: [
      { id: "A", text: "Export CSV" },
      { id: "B", text: "Use Lakehouse Federation" },
      { id: "C", text: "Manually synchronize" },
      { id: "D", text: "ETL Pipelines" }
    ],
    correctAnswerId: "B",
    explanation: "Federation allows querying external sources in place."
  },
  {
    id: 185,
    topic: "Debugging",
    questionText: "Inspect code execution and variables in real-time?",
    options: [
      { id: "A", text: "Logs" },
      { id: "B", text: "Dashboard" },
      { id: "C", text: "Python Notebook Interactive Debugger" },
      { id: "D", text: "SQL Analytics" }
    ],
    correctAnswerId: "C",
    explanation: "Interactive Debugger is built for this."
  },
  {
    id: 186,
    topic: "Spark Optimization",
    questionText: "Memory spills. Reduce runtime without significant cost increase.",
    options: [
      { id: "A", text: "Tweak 'spark.sql.shuffle.partitions'" },
      { id: "B", text: "Autoscaling" },
      { id: "C", text: "Photon" },
      { id: "D", text: "Memory optimized nodes" }
    ],
    correctAnswerId: "A",
    explanation: "Tuning shuffle partitions is a configuration change that can fix spills without changing hardware (cost)."
  },
  {
    id: 187,
    topic: "Liquid Clustering",
    questionText: "Frequent changing query filter. Z-ordering not helping. Fix bottleneck?",
    options: [
      { id: "A", text: "Re-write" },
      { id: "B", text: "Caching" },
      { id: "C", text: "Optimize" },
      { id: "D", text: "Switch to Automatic Liquid Clustering" }
    ],
    correctAnswerId: "D",
    explanation: "Liquid Clustering adapts to query patterns dynamically."
  },
  {
    id: 188,
    topic: "Optimization",
    questionText: "Optimize Data Layout for efficient reads with high cardinality columns.",
    options: [
      { id: "A", text: "Liquid on customer_id" },
      { id: "B", text: "Alter the table implementing liquid clustering by 'customer_id' and 'purchase_date'" },
      { id: "C", text: "Partition" },
      { id: "D", text: "Cache" }
    ],
    correctAnswerId: "B",
    explanation: "Liquid clustering handles high cardinality columns better than partitioning."
  },
  {
    id: 189,
    topic: "Asset Bundle",
    questionText: "Structure of an Asset Bundle?",
    options: [
      { id: "A", text: "Docker" },
      { id: "B", text: "Zip" },
      { id: "C", text: "Text file" },
      { id: "D", text: "A YAML configuration file" }
    ],
    correctAnswerId: "D",
    explanation: "DABs are defined using YAML."
  },
  {
    id: 190,
    topic: "DevOps",
    questionText: "Deploy ETL pipeline with GitHub repository as workflow.",
    options: [
      { id: "A", text: "Databricks Asset Bundles (DAB) + GitHub Integration" },
      { id: "B", text: "CLI" },
      { id: "C", text: "Terraform" },
      { id: "D", text: "Manual" }
    ],
    correctAnswerId: "A",
    explanation: "DABs are the modern standard for CI/CD and deployment."
  },
  {
    id: 191,
    topic: "Compute",
    questionText: "Stringent SLA, minimal runtime errors, avoid operational overhead.",
    options: [
      { id: "A", text: "Auto-scaling" },
      { id: "B", text: "Hybrid" },
      { id: "C", text: "Dedicated" },
      { id: "D", text: "Utilize Databricks serverless compute" }
    ],
    correctAnswerId: "D",
    explanation: "Serverless removes the overhead of management."
  },
  {
    id: 192,
    topic: "Serverless Migration",
    questionText: "First step in migrating to Databricks Serverless?",
    options: [
      { id: "A", text: "Legacy" },
      { id: "B", text: "A frequently running and efficient Python-based data transformation pipeline" },
      { id: "C", text: "Scala" },
      { id: "D", text: "BI" }
    ],
    correctAnswerId: "B",
    explanation: "Serverless for Jobs currently supports Python/SQL well."
  },
  {
    id: 193,
    topic: "Compute",
    questionText: "Large batches, resource-intensive, scalable, cost-efficient.",
    options: [
      { id: "A", text: "Job Cluster" },
      { id: "B", text: "Dedicated" },
      { id: "C", text: "All-Purpose" },
      { id: "D", text: "SQL Serverless" }
    ],
    correctAnswerId: "A",
    explanation: "Job clusters are the standard for batch ETL."
  },
  {
    id: 194,
    topic: "Delta Sharing",
    questionText: "Multi-team project. Internal full access, External read-only.",
    options: [
      { id: "A", text: "URL" },
      { id: "B", text: "Read/Write both" },
      { id: "C", text: "Assign READ permissions to external partners through Delta Share and READ/WRITE to internal teams" },
      { id: "D", text: "Grant" }
    ],
    correctAnswerId: "C",
    explanation: "Delta Sharing controls external access (Read), Unity Catalog controls internal (Read/Write)."
  },
  {
    id: 195,
    topic: "External Tables",
    questionText: "Manage access to multiple external tables efficiently.",
    options: [
      { id: "A", text: "Blob storage permissions" },
      { id: "B", text: "Single user role" },
      { id: "C", text: "Workspace level" },
      { id: "D", text: "Use Unity Catalog to manage access controls" }
    ],
    correctAnswerId: "D",
    explanation: "Unity Catalog provides centralized governance for external tables."
  },
  {
    id: 196,
    topic: "Data Sharing",
    questionText: "Minimize egress costs cross-cloud sharing (AWS to Azure).",
    options: [
      { id: "A", text: "R2" },
      { id: "B", text: "VPN" },
      { id: "C", text: "Using Delta Sharing without any additional configurations" },
      { id: "D", text: "Pre-signed URLs" }
    ],
    correctAnswerId: "C",
    explanation: "Delta Sharing (Databricks-to-Databricks) can optimize transfer, though Cloud Egress usually applies, Databricks optimizations minimize overhead."
  },
  {
    id: 197,
    topic: "Permissions",
    questionText: "Analysts query but not modify.",
    options: [
      { id: "A", text: "ALL PRIVILEGES" },
      { id: "B", text: "MODIFY" },
      { id: "C", text: "SELECT" },
      { id: "D", text: "INSERT" }
    ],
    correctAnswerId: "C",
    explanation: "SELECT grants read-only access."
  },
  {
    id: 198,
    topic: "Lineage",
    questionText: "Check data sources and tables used in workspace.",
    options: [
      { id: "A", text: "Lineage reports" },
      { id: "B", text: "Lineage notebooks" },
      { id: "C", text: "Use the lineage feature to visualize a graph that shows all dependencies" },
      { id: "D", text: "Do not use lineage" }
    ],
    correctAnswerId: "C",
    explanation: "Unity Catalog Lineage graph shows full upstream/downstream dependencies."
  },
  {
    id: 199,
    topic: "Sharing",
    questionText: "Share UC managed tables and notebooks with partner organization seamlessly.",
    options: [
      { id: "A", text: "Zip code" },
      { id: "B", text: "Share required datasets and notebooks via Delta Sharing" },
      { id: "C", text: "Shared UC" },
      { id: "D", text: "Github" }
    ],
    correctAnswerId: "B",
    explanation: "Delta Sharing supports sharing data and AI assets (including notebooks in newer versions) cross-platform."
  }
];
