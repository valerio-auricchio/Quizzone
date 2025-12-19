import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "SQL Joins",
    questionText: "A data engineer is working with two tables (sales and favorite_stores) displayed in the image. Which of the following will be returned by the LEFT JOIN query? ",
    imageUrl: "/images/p1_q1.png",
    options: [
      { 
        id: "A", 
        text: "Vedi immagine tabella", 
        imageUrl: "/images/p1_q1_optA.png" 
      }, 
      { 
        id: "B", 
        text: "Vedi immagine tabella", 
        imageUrl: "/images/p1_q1_optB.png" 
      },
      { 
        id: "C", 
        text: "Vedi immagine tabella", 
        imageUrl: "/images/p1_q1_optC.png" 
      }, 
      { 
        id: "D", 
        text: "Vedi immagine tabella", 
        imageUrl: "/images/p1_q1_optD.png" 
      }  
    ],
    correctAnswerId: "C",
    explanation: "In un LEFT JOIN, vengono mantenuti tutti i record della tabella di sinistra (sales), mentre vengono inclusi solo i record corrispondenti della tabella di destra (favorite_stores)."
  },
  {
    id: 2,
    topic: "Data Lakehouse",
    questionText: "A data organization leader believes siloed data architectures are to blame for inconsistent reports. How could a data lakehouse alleviate this issue? [cite: 47, 48, 49]",
    imageUrl: null,
    options: [
      { id: "A", text: "Both teams would autoscale their work as data size evolves" }, // [cite: 50]
      { id: "B", text: "Both teams would use the same source of truth for their work" }, // [cite: 51]
      { id: "C", text: "Both teams would reorganize to report to the same department" }, // [cite: 52]
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" }, // [cite: 52]
      { id: "E", text: "Both teams would respond more quickly to ad-hoc requests" } // [cite: 52]
    ],
    correctAnswerId: "B", // [cite: 53, 59]
    explanation: "Databricks Lakehouse consente di utilizzare i dati come un'unica fonte di verità (single source of truth), eliminando i silos[cite: 58, 97]."
  },
  {
    id: 3,
    topic: "Spark SQL",
    questionText: "Which of the following benefits is provided by the array functions from Spark SQL? [cite: 153]",
    imageUrl: null,
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" }, // [cite: 154]
      { id: "B", text: "An ability to work with data within certain partitions and windows" }, // [cite: 155]
      { id: "C", text: "An ability to work with time-related data in specified intervals" }, // [cite: 156]
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" } // [cite: 157]
    ],
    correctAnswerId: "D", // [cite: 158, 160]
    explanation: "Le funzioni array sono progettate per manipolare dati complessi e nidificati comuni nei file JSON[cite: 164, 165]."
  },
  {
    id: 4,
    topic: "Cluster Pools",
    questionText: "In which scenario would a data team want to utilize cluster pools? [cite: 172]",
    imageUrl: null,
    options: [
      { id: "A", text: "An automated report needs to be refreshed as quickly as possible." }, // [cite: 173]
      { id: "B", text: "An automated report needs to be made reproducible." }, // [cite: 174]
      { id: "C", text: "An automated report needs to be tested to identify errors." }, // [cite: 175]
      { id: "D", text: "An automated report needs to be version-controlled across multiple collaborators." }, // [cite: 176]
      { id: "E", text: "An automated report needs to be runnable by all stakeholders." } // [cite: 177]
    ],
    correctAnswerId: "A", // [cite: 178, 180]
    explanation: "I cluster pool riducono i tempi di avvio dei cluster mantenendo istanze pre-configurate pronte all'uso[cite: 184, 188]."
  },
  {
    id: 5,
    topic: "Architecture",
    questionText: "Which of the following is hosted completely in the control plane of the classic Databricks architecture? [cite: 275]",
    imageUrl: null,
    options: [
      { id: "A", text: "Worker node" }, // [cite: 276]
      { id: "B", text: "JDBC data source" }, // [cite: 277]
      { id: "C", text: "Databricks web application" }, // [cite: 278]
      { id: "D", text: "Databricks Filesystem" }, // [cite: 279]
      { id: "E", text: "Driver node" } // [cite: 280]
    ],
    correctAnswerId: "C", // [cite: 281, 283]
    explanation: "Il control plane ospita l'applicazione web, la gestione dei notebook e la pianificazione dei job[cite: 288, 325, 340]."
  },
  {
    id: 6,
    topic: "Delta Lake",
    questionText: "Which benefit of the Databricks Lakehouse Platform is specifically provided by Delta Lake? [cite: 394]",
    imageUrl: null,
    options: [
      { id: "A", text: "The ability to manipulate the same data using a variety of languages" }, // [cite: 395]
      { id: "B", text: "The ability to collaborate in real time on a single notebook" }, // [cite: 396]
      { id: "C", text: "The ability to set up alerts for query failures" }, // [cite: 397]
      { id: "D", text: "The ability to support batch and streaming workloads" }, // [cite: 398]
      { id: "E", text: "The ability to distribute complex data operations" } // [cite: 399]
    ],
    correctAnswerId: "D", // [cite: 400, 402]
    explanation: "Delta Lake è lo strato di storage che permette di supportare carichi di lavoro batch e streaming in modo fluido[cite: 407, 421]."
  },
  {
    id: 7,
    topic: "Delta Lake",
    questionText: "Which of the following describes the storage organization of a Delta table?",
    imageUrl: null,
    options: [
      { id: "A", text: "Delta tables are stored in a single file that contains data, history, metadata, and other attributes." },
      { id: "B", text: "Delta tables store their data in a single file and all metadata in a collection of files in a separate location." },
      { id: "C", text: "Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes." },
      { id: "D", text: "Delta tables are stored in a collection of files that contain only the data stored within the table." },
      { id: "E", text: "Delta tables are stored in a single file that contains only the data stored within the table." }
    ],
    correctAnswerId: "C",
    explanation: "Le tabelle Delta sono memorizzate come directory contenenti file Parquet per i dati e una sottocartella _delta_log per i log delle transazioni in formato JSON. [cite: 485, 497, 511, 546]"
  },
  {
    id: 8,
    topic: "Delta Lake SQL",
    questionText: "Which of the following code blocks will remove the rows where the value in column age is greater than 25 from the existing Delta table my_table and save the updated table?",
    imageUrl: null,
    options: [
      { id: "A", text: "SELECT * FROM my_table WHERE age > 25;" },
      { id: "B", text: "UPDATE my_table WHERE age > 25;" },
      { id: "C", text: "DELETE FROM my_table WHERE age > 25;" },
      { id: "D", text: "UPDATE my_table WHERE age <= 25" },
      { id: "E", text: "DELETE FROM my_table WHERE age <= 25;" }
    ],
    correctAnswerId: "C",
    explanation: "Delta Lake supporta pienamente l'istruzione standard SQL DELETE per rimuovere righe in base a una condizione specifica. [cite: 580, 583, 596, 632]"
  },
  {
    id: 9,
    topic: "Auto Loader",
    questionText: "Which tool is used by Auto Loader to process data incrementally?",
    imageUrl: null,
    options: [
      { id: "A", text: "Checkpointing" },
      { id: "B", text: "Spark Structured Streaming" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Unity Catalog" }
    ],
    correctAnswerId: "B",
    explanation: "Auto Loader è costruito sopra Spark Structured Streaming, che è il motore core che permette l'ingestione incrementale dei file. [cite: 657, 659, 678, 683]"
  },
  {
    id: 10,
    topic: "Delta Lake Management",
    questionText: "A data engineer needs to use Delta time travel to restore a table to a version that is 3 days old, but the files have been deleted. Why are the data files no longer present?",
    imageUrl: null,
    options: [
      { id: "A", text: "The VACUUM command was run on the table" },
      { id: "B", text: "The TIME TRAVEL command was run on the table" },
      { id: "C", text: "The DELETE HISTORY command was run on the table" },
      { id: "D", text: "The OPTIMIZE command was run on the table" },
      { id: "E", text: "The HISTORY command was run on the table" }
    ],
    correctAnswerId: "A",
    explanation: "Il comando VACUUM elimina i file di dati che non sono più referenziati dal log delle transazioni e che sono più vecchi del periodo di conservazione (default 7 giorni). [cite: 714, 715, 735, 760]"
  },
  {
    id: 11,
    topic: "Databricks SQL",
    questionText: "Which of the following commands will return the number of null values in the member_id column?",
    imageUrl: null,
    options: [
      { id: "A", text: "SELECT count(member_id) FROM my_table;" },
      { id: "B", text: "SELECT count(member_id)count_null(member_id) FROM my_table;" },
      { id: "C", text: "SELECT count_if(member_id IS NULL) FROM my_table;" },
      { id: "D", text: "SELECT null(member_id) FROM my_table" }
    ],
    correctAnswerId: "C",
    explanation: "La funzione count_if permette di contare le righe che soddisfano una determinata condizione booleana, come il controllo dei valori NULL. [cite: 805, 808, 815]"
  },
  {
    id: 12,
    topic: "Git Integration",
    questionText: "Which of the following Git operations must be performed outside of Databricks Repos?",
    imageUrl: null,
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Push" },
      { id: "D", text: "Clone" },
      { id: "E", text: "Merge" }
    ],
    correctAnswerId: "E",
    explanation: "Storicamente, operazioni come il merge avanzato o la risoluzione complessa di conflitti dovevano essere fatte esternamente, anche se le versioni più recenti di Databricks Repos supportano ormai quasi tutte queste funzioni. [cite: 823, 829, 831, 840, 857]"
  },
  {
    id: 13,
    topic: "Data Lakehouse",
    questionText: "Which of the following data lakehouse features results in improved data quality over a traditional data lake?",
    imageUrl: null,
    options: [
      { id: "A", text: "A data lakehouse provides storage solutions for structured and unstructured data." },
      { id: "B", text: "A data lakehouse supports ACID-compliant transactions." },
      { id: "C", text: "A data lakehouse allows the use of SQL queries to examine data." },
      { id: "D", text: "A data lakehouse stores data in open formats." },
      { id: "E", text: "A data lakehouse enables machine learning and artificial Intelligence workloads." }
    ],
    correctAnswerId: "B",
    explanation: "Il supporto alle transazioni ACID garantisce integrità e coerenza dei dati, evitando che scritture fallite o accessi concorrenti danneggino la qualità del dato. [cite: 930, 932, 942, 947, 960]"
  },
  {
    id: 14,
    topic: "Spark SQL Objects",
    questionText: "A data engineer wants to create a relational object by pulling data from two tables. The object does not need to be used in other sessions and must avoid physical storage to save costs. Which object should be created?",
    imageUrl: null,
    options: [
      { id: "A", text: "Spark SQL Table" },
      { id: "B", text: "View" },
      { id: "C", text: "Delta Table" },
      { id: "D", text: "Temporary view" }
    ],
    correctAnswerId: "D",
    explanation: "Le viste temporanee sono limitate alla sessione (session-scoped) e non richiedono storage fisico, poiché non persistono i dati sul database[cite: 982, 986, 987]."
  },
  {
    id: 15,
    topic: "Version Control",
    questionText: "Which of the following is an advantage of using Databricks Repos over built-in Databricks Notebooks versioning?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks Repos automatically saves development progress" },
      { id: "B", text: "Databricks Repos supports the use of multiple branches" },
      { id: "C", text: "Databricks Repos allows users to revert to previous versions of a notebook" },
      { id: "D", text: "Databricks Repos provides the ability to comment on specific changes" },
      { id: "E", text: "Databricks Repos is wholly housed within the Databricks Lakehouse Platform" }
    ],
    correctAnswerId: "B",
    explanation: "A differenza del versionamento dei notebook che è lineare, Databricks Repos supporta l'uso di branch multipli, facilitando lo sviluppo parallelo e la collaborazione[cite: 1003, 1010, 1062]."
  },
  {
    id: 16,
    topic: "Governance",
    questionText: "A data engineer has left the organization. Which individual must transfer ownership of the engineer's Delta tables in Data Explorer to a new lead engineer?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks account representative" },
      { id: "B", text: "This transfer is not possible" },
      { id: "C", text: "Workspace administrator" },
      { id: "D", text: "New lead data engineer" },
      { id: "E", text: "Original data engineer" }
    ],
    correctAnswerId: "C",
    explanation: "Se il proprietario originale non ha più accesso, solo un amministratore del workspace (o un amministratore del metastore) ha i privilegi necessari per riassegnare la proprietà degli asset[cite: 1094, 1109, 1115]."
  },
  {
    id: 17,
    topic: "PySpark APIs",
    questionText: "Which command could a data engineering team use to access a Delta table named 'sales' in PySpark?",
    imageUrl: null,
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "There is no way to share data between PySpark and SQL" },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table('sales')" },
      { id: "E", text: "spark.table('sales')" }
    ],
    correctAnswerId: "E",
    explanation: "La funzione spark.table() permette di leggere una tabella registrata nel catalogo e caricarla come DataFrame in PySpark[cite: 1186, 1206, 1210]."
  },
  {
    id: 18,
    topic: "Metadata",
    questionText: "Which of the following commands will return the location of database customer360?",
    imageUrl: null,
    options: [
      { id: "A", text: "DESCRIBE LOCATION customer360;" },
      { id: "B", text: "DROP DATABASE customer360;" },
      { id: "C", text: "DESCRIBE DATABASE customer360;" },
      { id: "D", text: "ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user'};" },
      { id: "E", text: "USE DATABASE customer360;" }
    ],
    correctAnswerId: "C",
    explanation: "Il comando DESCRIBE DATABASE fornisce informazioni sui metadati del database, inclusa la sua posizione fisica nello storage[cite: 1334, 1343]."
  },
  {
    id: 19,
    topic: "Data Quality / PII",
    questionText: "A senior data engineer mentions that it is policy to include a table property indicating that a new table contains personally identifiable information (PII). Which line successfully completes the CREATE TABLE AS SELECT task?",
    imageUrl: null,
    options: [
      { id: "A", text: "There is no way to indicate whether a table contains PII." },
      { id: "B", text: "'COMMENT PII'" },
      { id: "C", text: "TBLPROPERTIES PII" },
      { id: "D", text: "COMMENT 'Contains PII'" },
      { id: "E", text: "PII" }
    ],
    correctAnswerId: "D",
    explanation: "La parola chiave COMMENT seguita da una stringa letterale è il modo standard per aggiungere metadati descrittivi visibili quando si descrive la tabella[cite: 1411, 1477, 1488]."
  },
  {
    id: 20,
    topic: "Architecture",
    questionText: "What is stored in the Databricks customer's cloud account?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks web application" },
      { id: "B", text: "Cluster management metadata" },
      { id: "C", text: "Notebooks" },
      { id: "D", text: "Data" }
    ],
    correctAnswerId: "D",
    explanation: "Il Data Plane, che fa parte dell'account cloud del cliente, è dove risiedono effettivamente i dati (es. su AWS S3 o Azure Blob Storage)[cite: 1513, 1517]."
  },
  {
    id: 21,
    topic: "Spark SQL",
    questionText: "Which of the following benefits is provided by the array functions from Spark SQL?",
    imageUrl: null,
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" },
      { id: "E", text: "An ability to work with an array of tables for procedural automation" }
    ],
    correctAnswerId: "D",
    explanation: "Le funzioni array sono particolarmente utili per manipolare strutture dati complesse e nidificate, tipiche dei file JSON[cite: 1550, 1560]."
  },
  {
    id: 22,
    topic: "Delta Lake",
    questionText: "Which of the following commands can be used to write data into a Delta table while avoiding the writing of duplicate records?",
    imageUrl: null,
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "IGNORE" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" },
      { id: "E", text: "INSERT" }
    ],
    correctAnswerId: "C",
    explanation: "Il comando MERGE permette di eseguire 'upsert', aggiornando i record esistenti e inserendo quelli nuovi, evitando così la creazione di duplicati[cite: 1634, 1695]."
  },
  {
    id: 23,
    topic: "Data Ingestion",
    questionText: "A data engineer needs to identify which files in a shared directory are new since the previous run and only ingest those. Which tool can be used?",
    imageUrl: null,
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Delta Lake" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Auto Loader" }
    ],
    correctAnswerId: "D",
    explanation: "Auto Loader traccia automaticamente i nuovi file che appaiono in una directory e ingerisce solo quelli non ancora elaborati[cite: 1743, 1744]."
  },
  {
    id: 24,
    topic: "SQL UDF",
    questionText: "Which of the following code blocks correctly creates a SQL UDF to apply custom logic to a city column?",
    imageUrl: null,
    options: [
      { id: "A", text: "CREATE FUNCTION combine_nyc (city STRING) RETURNS STRING RETURN CASE WHEN city = 'brooklyn' THEN 'new york' ELSE city END;" },
      { id: "B", text: "CREATE UDF combine_nyc (city STRING) RETURNS STRING CASE WHEN city = 'brooklyn' THEN 'new york' ELSE city END;" },
      { id: "C", text: "CREATE UDF combine_nyc(city STRING) RETURN CASE WHEN city = 'brooklyn' THEN 'new york' ELSE city END;" },
      { id: "D", text: "CREATE FUNCTION combine_nyc (city STRING) RETURN CASE WHEN city = 'brooklyn' THEN 'new york' ELSE city END;" },
      { id: "E", text: "CREATE UDF combine_nyc(city STRING) RETURNS STRING RETURN CASE WHEN city = 'brooklyn' THEN 'new york' ELSE city END;" }
    ],
    correctAnswerId: "A",
    explanation: "La sintassi corretta richiede 'CREATE FUNCTION' e la specifica del tipo di ritorno con 'RETURNS' prima del corpo della funzione[cite: 1782, 1818, 1835]."
  },
  {
    id: 25,
    topic: "Orchestration",
    questionText: "A data analyst wants to run a SQL program daily, but the final query only on Sundays. Which approach is feasible?",
    imageUrl: null,
    options: [
      { id: "A", text: "Submit a feature request with Databricks" },
      { id: "B", text: "Wrap the queries using PySpark and use Python's control flow" },
      { id: "C", text: "Only run the entire program on Sundays" },
      { id: "D", text: "Restrict access to the source table on Sundays" },
      { id: "E", text: "Redesign the data model to separate the data" }
    ],
    correctAnswerId: "B",
    explanation: "Avvolgendo il codice SQL in PySpark, è possibile usare i costrutti Python (come 'if' e il modulo 'datetime') per gestire la logica condizionale[cite: 1884, 1886]."
  },
  {
    id: 26,
    topic: "Data Ingestion",
    questionText: "A data engineer uses COPY INTO daily. Today, the number of records in the table has not changed. Why might this be?",
    imageUrl: null,
    options: [
      { id: "A", text: "File format was not included in FORMAT_OPTIONS" },
      { id: "B", text: "File names were not included with the FILES keyword" },
      { id: "C", text: "The previous day's file has already been copied into the table" },
      { id: "D", text: "The PARQUET file format does not support COPY INTO" },
      { id: "E", text: "The COPY INTO statement requires the table to be refreshed" }
    ],
    correctAnswerId: "C",
    explanation: "COPY INTO è un'operazione idempotente: mantiene un log dei file già elaborati e salta quelli già caricati per evitare duplicati[cite: 1965, 2005, 2017]."
  },
  {
    id: 27,
    topic: "Delta Lake",
    questionText: "In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
    imageUrl: null,
    options: [
      { id: "A", text: "When the location of the data needs to be changed" },
      { id: "B", text: "When the target table is an external table" },
      { id: "C", text: "When the source is not a Delta table" },
      { id: "D", text: "When the target table cannot contain duplicate records" }
    ],
    correctAnswerId: "D",
    explanation: "Il comando MERGE INTO viene utilizzato per gestire gli 'upsert', garantendo che i record esistenti vengano aggiornati invece di inserire duplicati[cite: 2038, 2042, 2106]."
  },
  {
    id: 28,
    topic: "JDBC Connections",
    questionText: "A data engineer needs to create a table in Databricks using data from an existing SQLite database. Which line of code fills in the 'USING' blank to successfully complete the task?",
    imageUrl: null,
    options: [
      { id: "A", text: "org.apache.spark.sql.jdbc" },
      { id: "B", text: "autoloader" },
      { id: "C", text: "DELTA" },
      { id: "D", text: "sqlite" },
      { id: "E", text: "org.apache.spark.sql.sqlite" }
    ],
    correctAnswerId: "A",
    explanation: "Per connettersi a database esterni tramite JDBC, è necessario specificare il driver di Spark SQL: org.apache.spark.sql.jdbc[cite: 2059, 2117, 2166]."
  },
  {
    id: 29,
    topic: "SQL Set Operations",
    questionText: "A data engineering team has two tables, march_transactions and april_transactions, without duplicate records. Which command creates a new table all_transactions containing all records without duplicates?",
    imageUrl: null,
    options: [
      { id: "A", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions INNER JOIN SELECT * FROM april_transactions;" },
      { id: "B", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions UNION SELECT * FROM april_transactions;" },
      { id: "C", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions OUTER JOIN SELECT * FROM april_transactions;" },
      { id: "D", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions INTERSECT SELECT * from april_transactions;" },
      { id: "E", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions MERGE SELECT * FROM april_transactions;" }
    ],
    correctAnswerId: "B",
    explanation: "L'operatore UNION combina i set di risultati e rimuove automaticamente i duplicati tra le due tabelle[cite: 2171, 2214, 2220]."
  },
  {
    id: 30,
    topic: "Governance",
    questionText: "A data engineer needs to identify the owner of new_table to ask for permissions. Which approach can be used?",
    imageUrl: null,
    options: [
      { id: "A", text: "Review the Permissions tab in the table's page in Data Explorer" },
      { id: "B", text: "There is no way to identify the owner of the table" },
      { id: "C", text: "Review the Owner field in the table's page in Data Explorer" },
      { id: "D", text: "Review the Owner field in the table's page in the cloud storage solution" }
    ],
    correctAnswerId: "C",
    explanation: "L'identità del proprietario della tabella è visualizzata direttamente nel campo 'Owner' all'interno di Data Explorer[cite: 2241, 2248, 2250]."
  },
  {
    id: 31,
    topic: "Python Control Flow",
    questionText: "A data engineer wants to execute a block only if 'day_of_week' is 1 and 'review_period' is True. Which control flow statement is correct?",
    imageUrl: null,
    options: [
      { id: "A", text: "if day_of_week = 1 and review_period:" },
      { id: "B", text: "if day_of_week = 1 and review_period = 'True'" },
      { id: "C", text: "if day_of_week == 1 and review_period == 'True':" },
      { id: "D", text: "if day_of_week == 1 and review_period:" },
      { id: "E", text: "if day_of_week = 1 & review_period: = 'True':" }
    ],
    correctAnswerId: "D",
    explanation: "In Python si usa '==' per il confronto di uguaglianza. Se una variabile è già booleana (come review_period), può essere valutata direttamente senza confronti con stringhe[cite: 2259, 2273, 2307]."
  },
  {
    id: 32,
    topic: "Managed vs External Tables",
    questionText: "A data engineer runs 'DROP TABLE IF EXISTS my_table'. Metadata is deleted, but data files still exist. Why?",
    imageUrl: null,
    options: [
      { id: "A", text: "The table's data was larger than 10 GB" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table was external" },
      { id: "D", text: "The table did not have a location" },
      { id: "E", text: "The table was managed" }
    ],
    correctAnswerId: "C",
    explanation: "Per le tabelle esterne, Spark rimuove solo i metadati dal catalogo, lasciando i file originali intatti nello storage[cite: 2370, 2391, 2406]."
  },
  {
    id: 33,
    topic: "Spark SQL Objects",
    questionText: "Which data entity should be created if it must be used by other engineers in different sessions and saved to a physical location?",
    imageUrl: null,
    options: [
      { id: "A", text: "Database" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" },
      { id: "E", text: "Table" }
    ],
    correctAnswerId: "E",
    explanation: "A differenza delle viste, le tabelle sono persistenti e memorizzano i dati in una posizione fisica, rendendoli accessibili tra sessioni diverse[cite: 2421, 2461, 2484]."
  },
  {
    id: 41,
    topic: "Data Lakehouse",
    questionText: "A data organization leader is upset about inconsistent reports between data engineering and analysis teams due to siloed architectures. How does a data lakehouse solve this?",
    imageUrl: null,
    options: [
      { id: "A", text: "Both teams would respond more quickly to ad-hoc requests" },
      { id: "B", text: "Both teams would use the same source of truth for their work" },
      { id: "C", text: "Both teams would reorganize to report to the same department" },
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" }
    ],
    correctAnswerId: "B",
    explanation: "Il Data Lakehouse unifica i dati in un'unica fonte di verità (single source of truth), eliminando le discrepanze tra i report dei vari team[cite: 3078, 3081]."
  },
  {
    id: 42,
    topic: "Medallion Architecture",
    questionText: "Which of the following describes the relationship between Bronze tables and raw data?",
    imageUrl: null,
    options: [
      { id: "A", text: "Bronze tables contain less data than raw data files." },
      { id: "B", text: "Bronze tables contain more truthful data than raw data." },
      { id: "C", text: "Bronze tables contain aggregates while raw data is unaggregated." },
      { id: "D", text: "Bronze tables contain a less refined view of data than raw data." },
      { id: "E", text: "Bronze tables contain raw data with a schema applied." }
    ],
    correctAnswerId: "E",
    explanation: "Le tabelle Bronze rappresentano il primo stadio dell'ingestione, dove ai dati grezzi (raw) viene applicato uno schema per renderli interrogabili[cite: 3095, 3096, 3133, 3136]."
  },
  {
    id: 43,
    topic: "Structured Streaming",
    questionText: "Which Structured Streaming query is performing a hop from a Silver table to a Gold table?",
    imageUrl: "/images/p7_q43.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "D",
    explanation: "Il passaggio da Silver a Gold solitamente comporta aggregazioni di business. L'opzione D usa 'groupBy' e 'agg', tipici del livello Gold[cite: 3185, 3202, 3203, 3208]."
  },
  {
    id: 44,
    topic: "Auto Loader",
    questionText: "Which of the following tools is used by Auto Loader to process data incrementally?",
    imageUrl: null,
    options: [
      { id: "A", text: "Checkpointing" },
      { id: "B", text: "Spark Structured Streaming" },
      { id: "C", text: "Data Explorer" },
      { id: "D", text: "Unity Catalog" },
      { id: "E", text: "Databricks SQL" }
    ],
    correctAnswerId: "B",
    explanation: "Auto Loader si basa internamente su Spark Structured Streaming per gestire l'ingestione incrementale dei file[cite: 3226, 3230, 3265, 3287]."
  },
  {
    id: 45,
    topic: "Structured Streaming",
    questionText: "If a data engineer wants to execute a micro-batch to process data every 5 seconds, which line of code should be used?",
    imageUrl: null,
    options: [
      { id: "A", text: "trigger('5 seconds')" },
      { id: "B", text: "trigger()" },
      { id: "C", text: "trigger(once='5 seconds')" },
      { id: "D", text: "trigger(processingTime='5 seconds')" },
      { id: "E", text: "trigger(continuous='5 seconds')" }
    ],
    correctAnswerId: "D",
    explanation: "Il trigger 'processingTime' definisce l'intervallo tra i micro-batch nello streaming strutturato[cite: 3336, 3340, 3342, 3348]."
  },
  {
    id: 46,
    topic: "Delta Live Tables",
    questionText: "A DLT dataset includes: CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW. What happens to records that violate this?",
    imageUrl: null,
    options: [
      { id: "A", text: "Records are dropped and loaded into a quarantine table." },
      { id: "B", text: "Records are added to the target dataset and flagged as invalid." },
      { id: "C", text: "Records are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "D", text: "Records are added to the target dataset and recorded as invalid in the event log." },
      { id: "E", text: "Records cause the job to fail." }
    ],
    correctAnswerId: "C",
    explanation: "La clausola 'ON VIOLATION DROP ROW' istruisce DLT a scartare i record non validi e a loggare l'evento senza interrompere il job[cite: 3412, 3416, 3419, 3469]."
  },
  {
    id: 47,
    topic: "Delta Live Tables",
    questionText: "Which of the following describes when to use the CREATE STREAMING LIVE TABLE syntax over the CREATE LIVE TABLE syntax in DLT?",
    imageUrl: null,
    options: [
      { id: "A", text: "When the subsequent step in the DLT pipeline is static." },
      { id: "B", text: "When data needs to be processed incrementally." },
      { id: "C", text: "CREATE STREAMING LIVE TABLE is redundant for DLT." },
      { id: "D", text: "When data needs to be processed through complicated aggregations." },
      { id: "E", text: "When the previous step in the DLT pipeline is static." }
    ],
    correctAnswerId: "B",
    explanation: "La sintassi STREAMING LIVE TABLE si usa specificamente per caricare e processare i dati in modo incrementale anziché in batch[cite: 3525, 3535]."
  },
  {
    id: 48,
    topic: "Delta Live Tables",
    questionText: "A data engineer sees the query: CREATE STREAMING LIVE TABLE loyal_customers AS SELECT ... FROM STREAM(LIVE.customers). Why is the STREAM function included?",
    imageUrl: null,
    options: [
      { id: "A", text: "The STREAM function is not needed and will cause an error." },
      { id: "B", text: "The data in the customers table has been updated since its last run." },
      { id: "C", text: "The customers table is a streaming live table." },
      { id: "D", text: "The customers table is a reference to a Structured Streaming query." }
    ],
    correctAnswerId: "C",
    explanation: "La funzione STREAM() serve a indicare al motore DLT che deve leggere la tabella 'customers' come una sorgente streaming[cite: 3584, 3596]."
  },
  {
    id: 49,
    topic: "Data Ingestion",
    questionText: "A data engineer needs to ingest files from a shared directory where files accumulate. They need to identify and ingest only new files since the previous run. Which tool should be used?",
    imageUrl: null,
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Delta Lake" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Data Explorer" },
      { id: "E", text: "Auto Loader" }
    ],
    correctAnswerId: "E",
    explanation: "Auto Loader è progettato per gestire l'ingestione incrementale scalabile, tracciando automaticamente i nuovi file senza rielaborare quelli vecchi[cite: 3609, 3619]."
  },
  {
    id: 50,
    topic: "Version Control",
    questionText: "Which Git operation must be performed outside of Databricks Repos?",
    imageUrl: null,
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Clone" }
    ],
    correctAnswerId: "C",
    explanation: "Sebbene Databricks Repos si stia evolvendo, le operazioni di Merge (soprattutto quelle complesse o tramite Pull Request) sono solitamente delegate al fornitore Git esterno[cite: 3663, 3686]."
  },
  {
    id: 51,
    topic: "Medallion Architecture",
    questionText: "Which Structured Streaming query is performing a hop from a Silver table to a Gold table?",
    imageUrl: "/images/p8_q51.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" },
      { id: "E", text: "Vedi opzione E nell'immagine" }
    ],
    correctAnswerId: "E",
    explanation: "Il passaggio al livello Gold è caratterizzato da aggregazioni (groupBy, agg) e spesso richiede l'outputMode 'complete' per aggiornare i risultati[cite: 3755, 3760, 3776]."
  },
  {
    id: 52,
    topic: "Data Quality",
    questionText: "A data engineer notices data is being dropped in a DLT pipeline. How can they identify which specific table is dropping the records?",
    imageUrl: null,
    options: [
      { id: "A", text: "Set up separate expectations for each table." },
      { id: "B", text: "They cannot determine which table is dropping the records." },
      { id: "C", text: "Set up email notifications for dropped records." },
      { id: "D", text: "Navigate to the DLT pipeline page, click on each table, and view data quality statistics." },
      { id: "E", text: "Click on the 'Error' button on the pipeline page." }
    ],
    correctAnswerId: "D",
    explanation: "L'interfaccia UI di DLT permette di cliccare su ogni singolo nodo (tabella) della pipeline per visualizzare metriche dettagliate sulla qualità dei dati e sui record scartati[cite: 3810, 3818]."
  },
  {
    id: 53,
    topic: "Databricks Jobs",
    questionText: "A data engineer needs to set up a new task to run a notebook prior to an original single-task Job. How can they do this?",
    imageUrl: null,
    options: [
      { id: "A", text: "Clone the existing task and update it." },
      { id: "B", text: "Create a new task and add it as a dependency of the original task." },
      { id: "C", text: "Create a new task and add the original task as a dependency of the new task." },
      { id: "D", text: "Create a new job from scratch." },
      { id: "E", text: "Clone the task to a new Job." }
    ],
    correctAnswerId: "B",
    explanation: "Per far girare il nuovo task prima dell'originale, il task originale deve 'dipendere' dal nuovo task[cite: 3893, 3904]."
  },
  {
    id: 54,
    topic: "Databricks SQL Performance",
    questionText: "An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query. For the first week following the project's release, the manager wants the query results to be updated every minute. However, the manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week of the project's release. Which of the following approaches can the engineering team use to ensure the query does not cost the organization any money beyond the first week of the project's release?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can set a limit to the number of DBUs that are consumed by the SQL Endpoint." },
      { id: "B", text: "They can set the query's refresh schedule to end after a certain number of refreshes." },
      { id: "C", text: "They cannot ensure the query does not cost the organization money beyond the first week of the project's release." },
      { id: "D", text: "They can set a limit to the number of individuals that are able to manage the query's refresh schedule." },
      { id: "E", text: "They can set the query's refresh schedule to end on a certain date in the query scheduler." } 
    ],
    correctAnswerId: "E",
    explanation: "Sebbene l'interfaccia UI possa variare, l'uso della sintassi cron o delle impostazioni di pianificazione permette di definire una data di fine per evitare costi imprevisti."
  },
  {
    id: 55,
    topic: "SQL Set Operations",
    questionText: "A data engineering team has two tables. The first table march_transactions is a collection of all retail transactions in the month of March. The second table april_transactions is a collection of all retail transactions in the month of April. There are no duplicate records between the tables. Which of the following commands should be run to create a new table all_transactions that contains all records from march_transactions and april_transactions without duplicate records?",
    imageUrl: null,
    options: [
      { id: "A", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions INNER JOIN SELECT * FROM april_transactions;" }, 
      { id: "B", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions UNION SELECT * FROM april_transactions;" }, 
      { id: "C", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions OUTER JOIN SELECT * FROM april_transactions;" }, 
      { id: "D", text: "CREATE TABLE all_transactions AS SELECT * FROM march_transactions INTERSECT SELECT * from april_transactions;" } 
    ],
    correctAnswerId: "B",
    explanation: "L'operatore UNION combina i risultati di due tabelle e rimuove automaticamente i duplicati, garantendo un unico set di record univoci."
  },
  {
    id: 56,
    topic: "SQL Endpoint Latency",
    questionText: "A data analysis team has noticed that their Databricks SQL queries are running too slowly when connected to their always-on SQL endpoint. They claim that this issue is present when many members of the team are running small queries simultaneously. They ask the data engineering team for help. The data engineering team notices that each of the team's queries uses the same SQL endpoint. Which of the following approaches can the data engineering team use to improve the latency of the team's queries?", 
    imageUrl: null,
    options: [
      { id: "A", text: "They can increase the cluster size of the SQL endpoint." }, 
      { id: "B", text: "They can increase the maximum bound of the SQL endpoint's scaling range." }, 
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." }, 
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." }, 
      { id: "E", text: "They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to 'Reliability Optimized.'" } 
    ],
    correctAnswerId: "B", 
    explanation: "Per risolvere problemi di latenza dovuti all'esecuzione simultanea (concorrente) di molte query, è necessario lo 'Scale Out' orizzontale aumentando il limite massimo del range di scaling dell'endpoint." 
  },
  {
    id: 57,
    topic: "Databricks SQL Performance",
    questionText: "A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary. Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?", 
    imageUrl: null,
    options: [
      { id: "A", text: "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints." }, 
      { id: "B", text: "They can set up the dashboard's SQL endpoint to be serverless." }, 
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." }, 
      { id: "D", text: "They can reduce the cluster size of the SQL endpoint." }, 
      { id: "E", text: "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint." } 
    ],
    correctAnswerId: "C", 
    explanation: "La funzione Auto Stop permette all'endpoint SQL di spegnersi automaticamente quando è inattivo, minimizzando i tempi di esecuzione e i costi associati." 
  },
  {
    id: 58,
    topic: "Databricks Jobs",
    questionText: "In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?", 
    imageUrl: null,
    options: [
      { id: "A", text: "When another task needs to be replaced by the new task" }, 
      { id: "B", text: "When another task needs to successfully complete before the new task begins" }, 
      { id: "C", text: "When another task has the same dependency libraries as the new task" }, 
      { id: "D", text: "When another task needs to use as little compute resources as possible" } 
    ],
    correctAnswerId: "B", 
    explanation: "Il campo 'Depends On' viene utilizzato per definire le dipendenze tra i task, assicurando che un task inizi solo dopo il completamento con successo di quelli precedenti." 
  },
  {
    id: 59,
    topic: "Databricks SQL Alerts",
    questionText: "A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?", 
    imageUrl: null,
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." }, 
      { id: "B", text: "They can set up an Alert with a new email alert destination." }, 
      { id: "C", text: "They can set up an Alert with a new webhook alert destination." }, 
      { id: "D", text: "They can set up an Alert with one-time notifications." }, 
      { id: "E", text: "They can set up an Alert without notifications." } 
    ],
    correctAnswerId: "C", 
    explanation: "Per inviare notifiche a servizi di messaggistica esterni (come Slack o Teams) è necessario configurare un Alert con una destinazione di tipo webhook." 
  },
  {
    id: 60,
    topic: "Delta Live Tables",
    questionText: "Which of the following must be specified when creating a new Delta Live Tables pipeline?", 
    imageUrl: null,
    options: [
      { id: "A", text: "A key-value pair configuration" }, 
      { id: "B", text: "At least one notebook library to be executed" }, 
      { id: "C", text: "A path to cloud storage location for the written data" }, 
      { id: "D", text: "A location of a target database for the written data" } 
    ],
    correctAnswerId: "B", 
    explanation: "La creazione di una pipeline DLT richiede obbligatoriamente la specifica di almeno una libreria di notebook che contenga il codice da eseguire." 
  },
  {
    id: 61,
    topic: "Databricks Jobs",
    questionText: "A single Job runs two notebooks as two separate tasks. A data engineer has noticed that one of the notebooks is running slowly in the Job's current run. The data engineer asks a tech lead for help in identifying why this might be the case. Which of the following approaches can the tech lead use to identify why the notebook is running slowly as part of the Job?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can navigate to the Runs tab in the Jobs UI to immediately review the processing notebook." },
      { id: "B", text: "They can navigate to the Tasks tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "C", text: "They can navigate to the Runs tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "D", text: "There is no way to determine why a Job task is running slowly." },
      { id: "E", text: "They can navigate to the Tasks tab in the Jobs UI to immediately review the processing notebook." }
    ],
    correctAnswerId: "C",
    explanation: "La scheda 'Runs' nell'interfaccia utente dei Job mostra l'elenco di tutte le esecuzioni. Cliccando sull'esecuzione attiva, il tech lead può accedere a informazioni dettagliate, log e metriche per identificare la causa del rallentamento."
  },
  {
    id: 62,
    topic: "Cluster Performance",
    questionText: "A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which of the following actions can the data engineer perform to improve the start up time for the clusters used for the Job?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can use endpoints available in Databricks SQL" },
      { id: "B", text: "They can use jobs clusters instead of all-purpose clusters" },
      { id: "C", text: "They can configure the clusters to be single-node" },
      { id: "D", text: "They can use clusters that are from a cluster pool" },
      { id: "E", text: "They can configure the clusters to autoscale for larger data sizes" }
    ],
    correctAnswerId: "D",
    explanation: "I cluster pool mantengono un set di istanze virtuali pre-inizializzate e pronte all'uso, eliminando la necessità di avviare nuove VM da zero e riducendo drasticamente i tempi di avvio."
  },
  {
    id: 63,
    topic: "Data Governance",
    questionText: "A new data engineering team has been assigned to an ELT project. The new data engineering team will need full privileges on the database customers to fully manage the project. Which of the following commands can be used to grant full permissions on the database to the new data engineering team?",
    imageUrl: null,
    options: [
      { id: "A", text: "GRANT USAGE ON DATABASE customers TO team;" },
      { id: "B", text: "GRANT ALL PRIVILEGES ON DATABASE team TO customers;" },
      { id: "C", text: "GRANT SELECT PRIVILEGES ON DATABASE customers TO teams;" },
      { id: "D", text: "GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;" },
      { id: "E", text: "GRANT ALL PRIVILEGES ON DATABASE customers TO team;" }
    ],
    correctAnswerId: "E",
    explanation: "Il comando GRANT ALL PRIVILEGES fornisce alla squadra specificata tutti i permessi disponibili sul database, permettendo loro di gestirlo completamente."
  },
  {
    id: 64,
    topic: "Data Governance",
    questionText: "A new data engineering team has been assigned to work on a project. The team will need access to database customers in order to see what tables already exist. The team has its own group team. Which of the following commands can be used to grant the necessary permission on the entire database to the new team?",
    imageUrl: null,
    options: [
      { id: "A", text: "GRANT VIEW ON CATALOG customers TO team;" },
      { id: "B", text: "GRANT CREATE ON DATABASE customers TO team;" },
      { id: "C", text: "GRANT USAGE ON CATALOG team TO customers;" },
      { id: "D", text: "GRANT CREATE ON DATABASE team TO customers;" },
      { id: "E", text: "GRANT USAGE ON DATABASE customers TO team;" }
    ],
    correctAnswerId: "E",
    explanation: "Il privilegio USAGE consente a un gruppo di visualizzare gli oggetti esistenti all'interno di un database (come le tabelle) senza permettere altre operazioni."
  },
  {
    id: 65,
    topic: "Version Control",
    questionText: "A data engineer is running code in a Databricks Repo that is cloned from a central Git repository. A colleague of the data engineer informs them that changes have been made and synced to the central Git repository. The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which of the following Git operations does the data engineer need to run to accomplish this task?",
    imageUrl: null,
    options: [
      { id: "A", text: "Merge" },
      { id: "B", text: "Push" },
      { id: "C", text: "Pull" },
      { id: "D", text: "Commit" },
      { id: "E", text: "Clone" }
    ],
    correctAnswerId: "C",
    explanation: "L'operazione di 'Pull' è necessaria per sincronizzare il repository Databricks locale con le modifiche apportate al repository Git centrale."
  },
  {
    id: 66,
    topic: "Databricks Platform",
    questionText: "Which of the following is a benefit of the Databricks Lakehouse Platform embracing open source technologies?",
    imageUrl: null,
    options: [
      { id: "A", text: "Cloud-specific integrations" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Ability to scale storage" },
      { id: "D", text: "Ability to scale workloads" },
      { id: "E", text: "Avoiding vendor lock-in" }
    ],
    correctAnswerId: "E",
    explanation: "L'adozione di tecnologie open-source (come Delta Lake) permette agli utenti di non essere vincolati all'ecosistema di un singolo fornitore (vendor lock-in), offrendo maggiore flessibilità."
  },
  {
    id: 67,
    topic: "Python Control Flow",
    questionText: "A data engineer only wants to execute the final block of a Python program if the Python variable day_of_week is equal to 1 and the Python variable review_period is True. Which of the following control flow statements should the data engineer use to begin this conditionally executed code block?",
    imageUrl: null,
    options: [
      { id: "A", text: "if day_of_week = 1 and review_period:" },
      { id: "B", text: "if day_of_week = 1 and review_period = 'True':" },
      { id: "C", text: "if day_of_week = 1 & review_period: = 'True':" },
      { id: "D", text: "if day_of_week == 1 and review_period:" }
    ],
    correctAnswerId: "D",
    explanation: "In Python, '==' si usa per il confronto di uguaglianza. Se una variabile è booleana (True/False), può essere valutata direttamente nel blocco 'if' senza confrontarla con una stringa."
  },
  {
    id: 68,
    topic: "Data Governance",
    questionText: "A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which of the following locations can the data engineer review their permissions on the table?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks Filesystem" },
      { id: "B", text: "Jobs" },
      { id: "C", text: "Dashboards" },
      { id: "D", text: "Repos" },
      { id: "E", text: "Data Explorer" }
    ],
    correctAnswerId: "E",
    explanation: "Data Explorer è lo strumento di Databricks dedicato alla visualizzazione e gestione dei permessi per tabelle, schemi e database."
  },
  {
    id: 69,
    topic: "SQL Operations",
    questionText: "Which of the following SQL keywords can be used to convert a table from a long format to a wide format?",
    imageUrl: null,
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" },
      { id: "E", text: "WHERE" }
    ],
    correctAnswerId: "B",
    explanation: "L'operazione PIVOT viene utilizzata per ruotare i dati dalle righe alle colonne, convertendo efficacemente una tabella da un formato 'long' a un formato 'wide'."
  },
  {
    id: 70,
    topic: "Data Ingestion",
    questionText: "Which of the following describes a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
    imageUrl: null,
    options: [
      { id: "A", text: "Parquet files can be partitioned" },
      { id: "B", text: "CREATE TABLE AS SELECT statements cannot be used on files" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Parquet files have the ability to be optimized" },
      { id: "E", text: "Parquet files will become Delta tables" }
    ],
    correctAnswerId: "C",
    explanation: "Le istruzioni CTAS (CREATE TABLE AS SELECT) ereditano i dettagli dello schema dalla sorgente. I file Parquet includono metadati sullo schema al loro interno, garantendo coerenza e ottimizzazione rispetto ai file CSV."
  },
  {
    id: 71,
    topic: "Delta Lake Time Travel",
    questionText: "The Delta transaction log for the 'students' tables is shown using the 'DESCRIBE HISTORY students' command. A Data Engineer needs to query the table as it existed before the UPDATE operation listed in the log. Which command should the Data Engineer use to achieve this? (Choose two.)",
    imageUrl: "/images/p12_q71.png",
    options: [
      { id: "A", text: "SELECT * FROM students@v4" },
      { id: "B", text: "SELECT * FROM students TIMESTAMP AS OF '2024-04-22T 14:32:47.000+00:00'" },
      { id: "C", text: "SELECT * FROM students FROM HISTORY VERSION AS OF 3" },
      { id: "D", text: "SELECT * FROM students VERSION AS OF 5" },
      { id: "E", text: "SELECT * FROM students TIMESTAMP AS OF '2024-04-22T 14:32:58.000+00:00" }
    ],
    correctAnswerId: "A, B",
    explanation: "Dalla cronologia, l'operazione UPDATE è alla versione 5. Per vedere i dati 'prima', serve la versione 4 (o il timestamp corrispondente 14:32:47). La sintassi @v4 è un'abbreviazione valida per VERSION AS OF 4."
  },
  {
    id: 72,
    topic: "Spark SQL Objects",
    questionText: "A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
    imageUrl: null,
    options: [
      { id: "A", text: "Spark SQL Table" },
      { id: "B", text: "View" },
      { id: "C", text: "Database" },
      { id: "D", text: "Temporary view" },
      { id: "E", text: "Delta Table" }
    ],
    correctAnswerId: "D",
    explanation: "Le viste temporanee sono limitate alla sessione (session-scoped) e non richiedono storage fisico, rendendole ideali per analisi immediate senza costi di archiviazione."
  },
  {
    id: 73,
    topic: "Workflows",
    questionText: "Which method should a Data Engineer apply to ensure Workflows are being triggered on schedule?",
    imageUrl: null,
    options: [
      { id: "A", text: "Scheduled Workflows require an always-running cluster, which is more expensive but reduces processing latency." },
      { id: "B", text: "Scheduled Workflows process data as it arrives at configured sources." },
      { id: "C", text: "Scheduled Workflows can reduce resource consumption and expense since the cluster runs only long enough to execute the pipeline." },
      { id: "D", text: "Scheduled Workflows run continuously until manually stopped." }
    ],
    correctAnswerId: "C",
    explanation: "I flussi di lavoro pianificati riducono i costi perché i cluster (job clusters) vengono avviati solo per il tempo necessario all'esecuzione e poi terminati."
  },
  {
    id: 74,
    topic: "PySpark APIs",
    questionText: "A data analyst has developed a query that runs against Delta table. They want help from the data engineering team to implement a series of tests to ensure the data returned by the query is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following operations could the data engineering team use to run the query and operate with the results in PySpark?",
    imageUrl: null,
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.sql" },
      { id: "D", text: "There is no way to share data between PySpark and SQL." },
      { id: "E", text: "spark.table" }
    ],
    correctAnswerId: "C",
    explanation: "La funzione spark.sql() è il metodo principale per eseguire una query SQL all'interno di un ambiente PySpark e ottenere un DataFrame come risultato."
  },
  {
    id: 75,
    topic: "Data Governance",
    questionText: "A data engineer needs to access the view created by the sales team, using a shared cluster. The data engineer has been provided usage permissions on the catalog and schema. In order to access the view created by sales team. What are the minimum permissions the data engineer would require in addition?",
    imageUrl: null,
    options: [
      { id: "A", text: "Needs SELECT permission on the VIEW and the underlying TABLE." },
      { id: "B", text: "Needs SELECT permission only on the VIEW" },
      { id: "C", text: "Needs ALL PRIVILEGES on the VIEW" },
      { id: "D", text: "Needs ALL PRIVILEGES at the SCHEMA level" }
    ],
    correctAnswerId: "B",
    explanation: "In Databricks Unity Catalog, su cluster condivisi, è sufficiente il permesso SELECT sulla vista stessa, a patto di avere USAGE sul catalogo e sullo schema padre."
  },
  {
    id: 76,
    topic: "Databricks SQL Functions",
    questionText: "Which of the following commands will return the number of null values in the member_id column?",
    imageUrl: null,
    options: [
      { id: "A", text: "SELECT count(member_id) FROM my_table;" },
      { id: "B", text: "SELECT count(member_id)count_null(member_id) FROM my_table;" },
      { id: "C", text: "SELECT count_if(member_id IS NULL) FROM my_table;" },
      { id: "D", text: "SELECT null(member_id) FROM my_table;" },
      { id: "E", text: "SELECT count_null(member_id) FROM my_table;" }
    ],
    correctAnswerId: "C",
    explanation: "La funzione count_if() permette di contare i record che soddisfano una condizione specifica (come essere NULL). Funzioni come 'count_null' non esistono in Spark SQL."
  },
  {
    id: 77,
    topic: "Higher-Order Functions",
    questionText: "A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees in table stores. The custom logic should create a new column exp_employees that is an array of all of the employees with more than 5 years of experience for each row. In order to apply this custom logic at scale, the data engineer wants to use the FILTER higher-order function. Which of the following code blocks successfully completes this task?",
    imageUrl: "/images/p12_q77.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" },
      { id: "E", text: "Vedi opzione E nell'immagine" }
    ],
    correctAnswerId: "A",
    explanation: "L'opzione A utilizza correttamente la funzione FILTER sull'array 'employees' con una funzione lambda (i -> i.years_exp > 5)."
  },
  {
    id: 78,
    topic: "Delta Live Tables",
    questionText: "A data engineer has created an ETL pipeline using Delta Live table to manage their company travel reimbursement detail, they want to ensure that the if the location details has not been provided by the employee, the pipeline needs to be terminated. How can the scenario be implemented?",
    imageUrl: null,
    options: [
      { id: "A", text: "CONSTRAINT valid_location EXPECT (location =NULL)" },
      { id: "B", text: "CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL UPDATE" },
      { id: "C", text: "CONSTRAINT valid_location EXPECT (location != NULL) ON DROP ROW" },
      { id: "D", text: "CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL" }
    ],
    correctAnswerId: "B",
    explanation: "Per terminare immediatamente l'esecuzione di una pipeline DLT in caso di violazione di un vincolo, si utilizza la clausola 'ON VIOLATION FAIL UPDATE'."
  },
  {
    id: 79,
    topic: "PySpark",
    questionText: "A data engineer has a Python variable table_name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_name. They have the following incomplete code block: ________(f\"SELECT customer_id, spend FROM {table_name}\") Which of the following can be used to fill in the blank to successfully complete the task?",
    imageUrl: null,
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" },
      { id: "E", text: "spark.sql" }
    ],
    correctAnswerId: "E",
    explanation: "La funzione spark.sql() permette di eseguire una query SQL (definita come stringa f-string in Python) e restituisce i risultati come un DataFrame."
  },
  {
    id: 80,
    topic: "External Tables",
    questionText: "Identify a scenario to use an external table. A Data Engineer needs to create a parquet bronze table and wants to ensure that it gets stored in a specific path in an external location. Which table can be created in this scenario?",
    imageUrl: null,
    options: [
      { id: "A", text: "An external table where the location is pointing to specific path in external location." },
      { id: "B", text: "An external table where the schema has managed location pointing to specific path in external location." },
      { id: "C", text: "A managed table where the catalog has managed location pointing to specific path in external location." },
      { id: "D", text: "A managed table where the location is pointing to specific path in external location." }
    ],
    correctAnswerId: "A",
    explanation: "Un'external table consente di specificare il percorso esatto in una posizione di archiviazione esterna (come S3 o ADLS) durante la creazione."
  },
  {
    id: 81,
    topic: "Databases",
    questionText: "A data engineer has created a new database using the following command: CREATE DATABASE IF NOT EXISTS customer360; In which of the following locations will the customer360 database be located?",
    imageUrl: null,
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "More information is needed to determine the correct response" },
      { id: "E", text: "dbfs:/user/hive/database" }
    ],
    correctAnswerId: "B",
    explanation: "Per impostazione predefinita, i database creati nel Hive Metastore senza specificare un percorso vengono posizionati sotto dbfs:/user/hive/warehouse."
  },
  {
    id: 82,
    topic: "Delta Live Tables",
    questionText: "Data engineer and data analysts are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
    imageUrl: null,
    options: [
      { id: "A", text: "The pipeline can have different notebook sources in SQL & Python" },
      { id: "B", text: "The pipeline will need to be written entirely in SQL" },
      { id: "C", text: "The pipeline will need to use a batch source in place of a streaming source" },
      { id: "D", text: "The pipeline will need to be written entirely in Python" }
    ],
    correctAnswerId: "A",
    explanation: "Delta Live Tables supporta pipeline poliglotte, il che significa che è possibile combinare notebook in SQL e Python nello stesso flusso di lavoro."
  },
  {
    id: 83,
    topic: "Managed Tables",
    questionText: "A data engineer is attempting to drop a Spark SQL table my_table and runs the following command: DROP TABLE IF EXISTS my_table; After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. Which of the following describes why all of these files were deleted?",
    imageUrl: null,
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table's data was larger than 10 GB" },
      { id: "D", text: "The table was external." },
      { id: "E", text: "The table did not have a location" }
    ],
    correctAnswerId: "A",
    explanation: "Quando si elimina (DROP) una tabella gestita (managed), il sistema cancella sia i metadati che i file di dati effettivi dal file system."
  },
  {
    id: 84,
    topic: "Python Functions",
    questionText: "A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which of the following code blocks can the data engineer use to complete this task?",
    imageUrl: null,
    options: [
      { id: "A", text: "function add integers(x, y): return x+y" },
      { id: "B", text: "function add_integers(x, y): x+y" },
      { id: "C", text: "def add integers (x, y): print (x+y)" },
      { id: "D", text: "def add_integers (x,y): return x+y" },
      { id: "E", text: "def add_integers integers (x, y): x+y" }
    ],
    correctAnswerId: "D",
    explanation: "In Python, le funzioni vengono definite con la parola chiave 'def' e utilizzano 'return' per restituire un valore."
  },
  {
    id: 85,
    topic: "Structured Streaming",
    questionText: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is below: (spark.readStream .table (\"sales\") .withColumn(\"avg_price\", col (\"sales\") / col (\"units\")) .writeStream .option(\"checkpointLocation\", checkpointPath) .outputMode (\"complete\") .________ .table (\"new_sales\") ) The data engineer only wants the query to process all of the available data in as many batches as required. Which line of code should the data engineer use to fill in the blank?",
    imageUrl: null,
    options: [
      { id: "A", text: "trigger(availableNow=True)" },
      { id: "B", text: "trigger(processing Time= \"once\")" },
      { id: "C", text: "trigger(continuous= \"once\")" },
      { id: "D", text: "trigger(once=True)" }
    ],
    correctAnswerId: "A",
    explanation: "Il trigger 'availableNow=True' istruisce lo streaming a processare tutti i dati disponibili in più micro-batch, se necessario, per poi fermarsi."
  },
  {
    id: 86,
    topic: "Delta Lake",
    questionText: "In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
    imageUrl: null,
    options: [
      { id: "A", text: "When the location of the data needs to be changed" },
      { id: "B", text: "When the target table is an external table" },
      { id: "C", text: "When the source table can be deleted" },
      { id: "D", text: "When the target table cannot contain duplicate records" },
      { id: "E", text: "When the source is not a Delta table" }
    ],
    correctAnswerId: "D",
    explanation: "MERGE INTO è il comando ideale per gestire le operazioni di 'upsert' ed evitare l'inserimento di record duplicati nella tabella di destinazione."
  },
  {
    id: 87,
    topic: "SQL Joins",
    questionText: "A data engineer is working with due tabelle (sales e favorite_stores) visualizzate nell'immagine. Quale sarà il risultato della query LEFT JOIN?",
    imageUrl: "/images/p13_q87.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "C",
    explanation: "Il LEFT JOIN mantiene tutti i record della tabella di sinistra (sales). Poiché 'a3' non ha una corrispondenza nella tabella di destra, il valore di store_id sarà NULL."
  },
  {
    id: 88,
    topic: "Data Lakehouse",
    questionText: "What can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
    imageUrl: null,
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Data lake" },
      { id: "C", text: "Data warehouse" },
      { id: "D", text: "Data lakehouse" }
    ],
    correctAnswerId: "D",
    explanation: "Un data lakehouse combina le migliori caratteristiche dei data lake e dei data warehouse, fornendo una singola piattaforma per tutti i casi d'uso dei dati e semplificando le architetture a silos."
  },
  {
    id: 89,
    topic: "SQL DDL",
    questionText: "A data engineer needs to create a table in Databricks using data from a CSV file at location/path/to/csv. They run the following command:\n\nCREATE TABLE new table\n________\nOPTIONS (\n)\nheader = \"true\",\ndelimiter = \"|\"\nLOCATION \"path/to/csv\"\n\nWhich of the following lines of code fills in the above blank to successfully complete the task?",
    imageUrl: null,
    options: [
      { id: "A", text: "None of these lines of code are needed to successfully complete the task" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" },
      { id: "E", text: "FROM \"path/to/csv" }
    ],
    correctAnswerId: "B",
    explanation: "Per creare una tabella in Databricks utilizzando dati da un file CSV, la sintassi corretta prevede l'uso della clausola 'USING CSV' per definire il formato della sorgente."
  },
  {
    id: 90,
    topic: "Delta Lake Time Travel",
    questionText: "In a healthcare provider organization using Delta Lake to store electronic health records (EHRs), a data analyst needs to analyze a snapshot of the patient_records table from two weeks ago before some recent data corrections were applied. What approach should the Data Engineer take to allow the analyst to query that specific prior version?",
    imageUrl: null,
    options: [
      { id: "A", text: "Truncate the table to remove all data, then reload the data from two weeks ago into the truncated table for the analyst to query." },
      { id: "B", text: "Identify the version number corresponding to two weeks ago from the Delta transaction log, share that version number with the analyst to query using VERSION AS OF syntax, or export that version to a new Delta table for the analyst to query." },
      { id: "C", text: "Restore the table to the version from two weeks ago using the RESTORE command, and have the analyst query the restored table." },
      { id: "D", text: "Use the VACUUM command to remove all versions of the table older than two weeks, then the analyst can query the remaining version." }
    ],
    correctAnswerId: "B",
    explanation: "L'approccio corretto consiste nell'identificare la versione specifica nel log delle transazioni e consentire all'analista di interrogarla tramite 'VERSION AS OF', senza alterare la tabella corrente."
  },
  {
    id: 91,
    topic: "Structured Streaming",
    questionText: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is below:\n\n(spark.readStream\n.table(\"sales\")\n.withColumn(\"avg_price\", col(\"sales\") / col(\"units\"))\n.writeStream\n.option(\"checkpoint Location\", checkpointPath)\n.outputMode (\"complete\")\n________\n.table(\"new_sales\")\n)\n\nIf the data engineer only wants the query to process all of the available data in as many batches as required, which of the following lines of code should the data engineer use to fill in the blank?",
    imageUrl: null,
    options: [
      { id: "A", text: "processing Time(1)" },
      { id: "B", text: "trigger(availableNow =True)" },
      { id: "C", text: "trigger(parallelBatch =True" },
      { id: "D", text: "trigger(processing Time=\"once\")" },
      { id: "E", text: "trigger(continuous=\"once\")" }
    ],
    correctAnswerId: "B",
    explanation: "In Structured Streaming, 'trigger(availableNow=True)' elabora tutti i dati disponibili al momento in più batch (se necessario) e poi termina la query."
  },
  {
    id: 92,
    topic: "Auto Loader",
    questionText: "A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Which of the following describes why Auto Loader inferred all of the columns to be of the string type?",
    imageUrl: null,
    options: [
      { id: "A", text: "There was a type mismatch between the specific schema and the inferred schema" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "Auto Loader only works with string data" },
      { id: "D", text: "All of the fields had at least one null value" },
      { id: "E", text: "Auto Loader cannot infer the schema of ingested data" }
    ],
    correctAnswerId: "B",
    explanation: "Per impostazione predefinita, l'inferenza dello schema di Auto Loader per i formati che non codificano i tipi di dati (come JSON e CSV) interpreta tutte le colonne come stringhe per evitare problemi di incompatibilità."
  },
  {
    id: 93,
    topic: "Delta Live Tables",
    questionText: "A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Development mode using the Continuous Pipeline Mode. Assuming previously unprocessed data exists and all definitions are valid, what is the expected outcome after clicking Start to update the pipeline?",
    imageUrl: null,
    options: [
      { id: "A", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated." },
      { id: "B", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist until the pipeline is shut down." },
      { id: "C", text: "All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused." },
      { id: "D", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing." },
      { id: "E", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." }
    ],
    correctAnswerId: "E",
    explanation: "In modalità 'Development', DLT riutilizza il cluster per evitare l'overhead dei riavvii; in modalità 'Continuous', la pipeline aggiorna i dataset a intervalli regolari finché non viene interrotta manualmente."
  },
  {
    id: 94,
    topic: "Medallion Architecture",
    questionText: "Which of the following data workloads will utilize a Gold table as its source?",
    imageUrl: null,
    options: [
      { id: "A", text: "A job that enriches data by parsing its timestamps into a human-readable format" },
      { id: "B", text: "A job that aggregates uncleaned data to create standard summary statistics" },
      { id: "C", text: "A job that cleans data by removing malformatted records" },
      { id: "D", text: "A job that queries aggregated data designed to feed into a dashboard" },
      { id: "E", text: "A job that ingests raw data from a streaming source into the Lakehouse" }
    ],
    correctAnswerId: "D",
    explanation: "Le tabelle Gold contengono dati altamente raffinati e aggregati, pronti per essere utilizzati in dashboard analitiche o report di business."
  },
  {
    id: 95,
    topic: "Architecture",
    questionText: "Which two components function in the DB platform architecture’s control plane? (Choose two.)",
    imageUrl: null,
    options: [
      { id: "A", text: "Virtual Machines" },
      { id: "B", text: "Compute Orchestration" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "Compute" },
      { id: "E", text: "Unity Catalog" }
    ],
    correctAnswerId: "B, E",
    explanation: "Il control plane gestisce l'orchestrazione del calcolo (scheduling) e la governance centralizzata tramite Unity Catalog, mentre i nodi di calcolo effettivi risiedono nel data plane."
  },
  {
    id: 96,
    topic: "Delta Live Tables",
    questionText: "Which of the following must be specified when creating a new Delta Live Tables pipeline?",
    imageUrl: null,
    options: [
      { id: "A", text: "A key-value pair configuration" },
      { id: "B", text: "The preferred DBU/hour cost" },
      { id: "C", text: "A path to cloud storage location for the written data" },
      { id: "D", text: "A location of a target database for the written data" },
      { id: "E", text: "At least one notebook library to be executed" }
    ],
    correctAnswerId: "E",
    explanation: "Sebbene la posizione di archiviazione possa essere automatica, è obbligatorio indicare almeno un notebook che contenga la logica di trasformazione per la pipeline."
  },
  {
    id: 97,
    topic: "SQL Functions",
    questionText: "Identify how the count_if function and the count where x is null can be used Consider a table random_values with below data. What would be the output of below query?\n\nTable random_values (col1):\n0\n1\n2\nNULL\n2\n3\n\nQuery:\nselect count_if(col > 1) as count_a, count(*) as count_b, count(col1) as count_c from random_values",
    imageUrl: null,
    options: [
      { id: "A", text: "3 6 5" },
      { id: "B", text: "4 6 5" },
      { id: "C", text: "3 6 6" },
      { id: "D", text: "4 6 6" }
    ],
    correctAnswerId: "A",
    explanation: "count_a: 3 valori > 1 (2, 2, 3). count_b: 6 righe totali. count_c: 5 valori non nulli (0, 1, 2, 2, 3)."
  },
  {
    id: 98,
    topic: "Delta Live Tables",
    questionText: "A data engineer has joined an existing project and they see the following query in the project repository:\n\nCREATE STREAMING LIVE TABLE loyal_customers AS\nSELECT customer_id\nFROM STREAM(LIVE.customers)\nWHERE loyalty_level = 'high';\n\nWhich of the following describes why the STREAM function is included in the query?",
    imageUrl: null,
    options: [
      { id: "A", text: "The STREAM function is not needed and will cause an error." },
      { id: "B", text: "The table being created is a live table." },
      { id: "C", text: "The customers table is a streaming live table." },
      { id: "D", text: "The customers table is a reference to a Structured Streaming query on a PySpark DataFrame." },
      { id: "E", text: "The data in the customers table has been updated since its last run." }
    ],
    correctAnswerId: "C",
    explanation: "La funzione STREAM() indica a DLT di leggere la tabella 'customers' come una sorgente streaming incrementale."
  },
  {
    id: 99,
    topic: "Auto Loader",
    questionText: "Which of the following describes the type of workloads that are always compatible with Auto Loader?",
    imageUrl: null,
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "Machine learning workloads" },
      { id: "C", text: "Serverless workloads" },
      { id: "D", text: "Batch workloads" },
      { id: "E", text: "Dashboard workloads" }
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader è progettato nativamente per gestire carichi di lavoro in streaming, processando i file man mano che arrivano nello storage."
  },
  {
    id: 100,
    topic: "Compute Resources",
    questionText: "Differentiate between all-purpose clusters and jobs clusters. A data engineering team has created a python notebook to load data from cloud storage, this job has been tested and now needs to be scheduled in production. Which would be the best cluster to be used in this case?",
    imageUrl: null,
    options: [
      { id: "A", text: "All purpose cluster" },
      { id: "B", text: "Any Unity Catalog-enabled cluster" },
      { id: "C", text: "Jobs Cluster" },
      { id: "D", text: "Serverless SQL warehouse" }
    ],
    correctAnswerId: "C",
    explanation: "I Jobs Cluster sono cluster effimeri ottimizzati per costi e prestazioni per l'esecuzione di carichi di lavoro pianificati in produzione."
  },
  {
    id: 101,
    topic: "Delta Live Tables",
    questionText: "A data engineer and data analyst are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
    imageUrl: null,
    options: [
      { id: "A", text: "None of these changes will need to be made" },
      { id: "B", text: "The pipeline will need to stop using the medallion-based multi-hop architecture" },
      { id: "C", text: "The pipeline will need to be written entirely in SQL" },
      { id: "D", text: "The pipeline will need to use a batch source in place of a streaming source" },
      { id: "E", text: "The pipeline will need to be written entirely in Python" }
    ],
    correctAnswerId: "A",
    explanation: "DLT supporta nativamente l'architettura medallion, l'uso misto di SQL e Python e le sorgenti streaming, quindi non sono richiesti cambiamenti strutturali."
  },
  {
    id: 102,
    topic: "Structured Streaming",
    questionText: "A data engineer is using the following code block as part of a batch ingestion pipeline to read from a composable table:\n\nWhich of the following changes needs to be made so this code block will work when the transactions table is a stream source?",
    imageUrl: null,
    options: [
      { id: "A", text: "Replace predict with a stream-friendly prediction function" },
      { id: "B", text: "Replace schema(schema) with option (\"maxFilesPerTrigger\", 1)" },
      { id: "C", text: "Replace \"transactions\" with the path to the location of the Delta table" },
      { id: "D", text: "Replace format(\"delta\") with format(\"stream\")" },
      { id: "E", text: "Replace spark.read with spark.readStream" }
    ],
    correctAnswerId: "E",
    explanation: "Per convertire una lettura batch in una lettura streaming in PySpark, è necessario utilizzare spark.readStream invece di spark.read."
  },
  {
    id: 103,
    topic: "Medallion Architecture",
    questionText: "Which of the following queries is performing a streaming hop from raw data to a Bronze table?",
    imageUrl: "/images/p15_q103.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" },
      { id: "E", text: "Vedi opzione E nell'immagine" }
    ],
    correctAnswerId: "E",
    explanation: "Il passaggio da 'raw' a 'bronze' è una semplice integrazione dei dati senza aggregazioni o filtri complessi, eseguita con readStream."
  },
  {
    id: 104,
    topic: "Delta Live Tables",
    questionText: "A dataset has been defined using Delta Live Tables and includes an expectations clause:\n\nCONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION FAIL UPDATE\n\nWhat is the expected behavior when a batch of data containing data that violates these constraints is processed?",
    imageUrl: null,
    options: [
      { id: "A", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "B", text: "Records that violate the expectation cause the job to fail." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log." },
      { id: "E", text: "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset." }
    ],
    correctAnswerId: "B",
    explanation: "L'azione 'FAIL UPDATE' interrompe immediatamente l'esecuzione della pipeline se viene rilevato un record che viola il vincolo."
  },
  {
    id: 105,
    topic: "Medallion Architecture",
    questionText: "Which of the following statements regarding the relationship between Silver tables and Bronze tables is always true?",
    imageUrl: null,
    options: [
      { id: "A", text: "Silver tables contain a less refined, less clean view of data than Bronze data." },
      { id: "B", text: "Silver tables contain aggregates while Bronze data is unaggregated." },
      { id: "C", text: "Silver tables contain more data than Bronze tables." },
      { id: "D", text: "Silver tables contain a more refined and cleaner view of data than Bronze tables." },
      { id: "E", text: "Silver tables contain less data than Bronze tables." }
    ],
    correctAnswerId: "D",
    explanation: "Nell'architettura medallion, il passaggio da Bronze a Silver serve proprio a pulire, filtrare e raffinare i dati grezzi."
  },
  {
    id: 106,
    topic: "Databricks SQL",
    questionText: "A data engineering team has noticed that their Databricks SQL queries are running too slowly when they are submitted to a non-running SQL endpoint. The data engineering team wants this issue to be resolved. Which of the following approaches can the team use to reduce the time it takes to return results in this scenario?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to \"Reliability Optimized.\"" },
      { id: "B", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "C", text: "They can increase the cluster size of the SQL endpoint." },
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." },
      { id: "E", text: "They can increase the maximum bound of the SQL endpoint's scaling range." }
    ],
    correctAnswerId: "D",
    explanation: "La tecnologia Serverless riduce i tempi di avvio dell'endpoint da minuti a pochi secondi, abbattendo la latenza per le query inviate a un endpoint spento."
  },
  {
    id: 107,
    topic: "Data Governance",
    questionText: "A new data engineering team team has been assigned to an ELT project. The new data engineering team will need full privileges on the table sales to fully manage the project. Which command can be used to grant full permissions on the database to the new data engineering team?",
    imageUrl: null,
    options: [
      { id: "A", text: "GRANT ALL PRIVILEGES ON TABLE sales TO team;" },
      { id: "B", text: "GRANT SELECT CREATE MODIFY ON TABLE sales TO team;" },
      { id: "C", text: "GRANT SELECT ON TABLE sales TO team;" },
      { id: "D", text: "GRANT ALL PRIVILEGES ON TABLE team TO sales;" }
    ],
    correctAnswerId: "A",
    explanation: "Il comando corretto per assegnare tutti i permessi su un oggetto specifico (come la tabella 'sales') a un gruppo è GRANT ALL PRIVILEGES."
  },
  {
    id: 108,
    topic: "Databricks Jobs",
    questionText: "A data engineer has a Job that has a complex run schedule, and they want to transfer that schedule to other Jobs. Rather than manually selecting each value in the scheduling form in Databricks, which of the following tools can the data engineer use to represent and submit the schedule programmatically?",
    imageUrl: null,
    options: [
      { id: "A", text: "pyspark.sql.types.Date Type" },
      { id: "B", text: "datetime" },
      { id: "C", text: "pyspark.sql.types. Timestamp Type" },
      { id: "D", text: "Cron syntax" },
      { id: "E", text: "There is no way to represent and submit this information programmatically" }
    ],
    correctAnswerId: "D",
    explanation: "La sintassi Cron è lo standard utilizzato per definire pianificazioni temporali in modo programmatico e flessibile."
  },
  {
    id: 109,
    topic: "Databricks Jobs",
    questionText: "Which of the following approaches should be used to send the Databricks Job owner an email in the case that the Job fails?",
    imageUrl: null,
    options: [
      { id: "A", text: "Manually programming in an alert system in each cell of the Notebook" },
      { id: "B", text: "Setting up an Alert in the Job page" },
      { id: "C", text: "Setting up an Alert in the Notebook" },
      { id: "D", text: "There is no way to notify the Job owner in the case of Job failure" },
      { id: "E", text: "MLflow Model Registry Webhooks" }
    ],
    correctAnswerId: "B",
    explanation: "Databricks permette di configurare le notifiche email direttamente nella pagina delle impostazioni del Job."
  },
  {
    id: 110,
    topic: "Data Governance",
    questionText: "A new data engineering team has been assigned to work on a project. The team will need access to database customers in order to see what tables already exist. The team has its own group team. Which command can be used to grant the necessary permission on the entire database to the new team?",
    imageUrl: null,
    options: [
      { id: "A", text: "GRANT VIEW ON CATALOG customers TO team;" },
      { id: "B", text: "GRANT CREATE ON DATABASE customers TO team;" },
      { id: "C", text: "GRANT USAGE ON CATALOG team TO customers;" },
      { id: "D", text: "GRANT USAGE ON DATABASE customers TO team;" }
    ],
    correctAnswerId: "D",
    explanation: "Il privilegio USAGE è quello minimo necessario per poter visualizzare ed elencare gli oggetti contenuti in un database."
  },
  {
    id: 111,
    topic: "Databricks SQL",
    questionText: "An engineering manager uses a Databricks SQL query to monitor ingestion latency for each data source. The manager checks the results of the query every day, but they are manually rerunning the query each day and waiting for the results. Which of the following approaches can the manager use to ensure the results of the query are updated each day?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL." },
      { id: "B", text: "They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL." },
      { id: "C", text: "They can schedule the query to refresh every 1 day from the query's page in Databricks SQL." },
      { id: "D", text: "They can schedule the query to run every 1 day from the Jobs Ul." },
      { id: "E", text: "They can schedule the query to run every 12 hours from the Jobs UI." }
    ],
    correctAnswerId: "C",
    explanation: "È possibile impostare una pianificazione di aggiornamento (refresh schedule) direttamente dalla pagina della query."
  },
  {
    id: 112,
    topic: "Databricks SQL",
    questionText: "An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query. For the first week following the project's release, the manager wants the query results to be updated every minute. However, the manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week of the project's release. Which approach can the engineering team use to ensure the query does not cost the organization any money beyond the first week of the project's release?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can set a limit to the number of DBUs that are consumed by the SQL Endpoint." },
      { id: "B", text: "They can set the query's refresh schedule to end after a certain number of refreshes." },
      { id: "C", text: "They can set the query's refresh schedule to end on a certain date in the query scheduler." },
      { id: "D", text: "They can set a limit to the number of individuals that are able to manage the query's refresh schedule." }
    ],
    correctAnswerId: "C",
    explanation: "Lo scheduler delle query Databricks SQL permette di impostare una data di fine per la pianificazione, evitando esecuzioni e costi non necessari."
  },
  {
    id: 113,
    topic: "Databricks Jobs",
    questionText: "In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?",
    imageUrl: null,
    options: [
      { id: "A", text: "When another task needs to be replaced by the new task" },
      { id: "B", text: "When another task needs to fail before the new task begins" },
      { id: "C", text: "When another task has the same dependency libraries as the new task" },
      { id: "D", text: "When another task needs to use as little compute resources as possible" },
      { id: "E", text: "When another task needs to successfully complete before the new task begins" }
    ],
    correctAnswerId: "E",
    explanation: "Il campo 'Depends On' serve a definire l'ordine di esecuzione, facendo sì che un task parta solo dopo che quello precedente è terminato con successo."
  },
  {
    id: 114,
    topic: "Databricks SQL",
    questionText: "A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to a data analytics dashboard for a retail use case. The job has a Databricks SQL query that returns the number of store-level records where sales is equal to zero. The data engineer wants their entire team to be notified via a messaging webhook whenever this value is greater than 0. Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of stores with $0 in sales is greater than zero?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." },
      { id: "B", text: "They can set up an Alert with a new email alert destination." },
      { id: "C", text: "They can set up an Alert with one-time notifications." },
      { id: "D", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "E", text: "They can set up an Alert without notifications." }
    ],
    correctAnswerId: "D",
    explanation: "Per inviare notifiche a servizi di messaggistica esterni tramite webhook, è necessario configurare un Alert con una destinazione webhook specifica."
  },
  {
    id: 115,
    topic: "Databricks SQL",
    questionText: "A data engineer wants to schedule their Databricks SQL dashboard to refresh every hour, but they only want the associated SQL endpoint to be running when it is necessary. The dashboard has multiple queries on multiple datasets associated with it. The data that feeds the dashboard is automatically processed using a Databricks Job. Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "B", text: "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint." },
      { id: "C", text: "They can reduce the cluster size of the SQL endpoint." },
      { id: "D", text: "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints." },
      { id: "E", text: "They can set up the dashboard's SQL endpoint to be serverless." }
    ],
    correctAnswerId: "A",
    explanation: "La funzione Auto Stop spegne l'endpoint SQL quando non è in uso, garantendo che le risorse vengano allocate solo durante l'esecuzione delle query e minimizzando i costi."
  },
  {
    id: 116,
    topic: "Governance",
    questionText: "Which two conditions are applicable for governance in Databricks Unity Catalog? (Choose two.)",
    imageUrl: null,
    options: [
      { id: "A", text: "You can have more than 1 metastore within a databricks account console but only 1 per region." },
      { id: "B", text: "Both catalog and schema must have a managed location in Unity Catalog provided metastore is not associated with a location" },
      { id: "C", text: "You can have multiple catalogs within metastore and 1 catalog can be associated with multiple metastore" },
      { id: "D", text: "If catalog is not associated with location, it's mandatory to associate schema with managed locations" },
      { id: "E", text: "If metastore is not associated with location, it's mandatory to associate catalog with managed locations" }
    ],
    correctAnswerId: "A, E",
    explanation: "Unity Catalog permette un solo metastore per regione. Inoltre, se il metastore non ha una posizione di archiviazione predefinita, è obbligatorio associarne una a livello di catalogo per garantire la governance dei dati."
  },
  {
    id: 117,
    topic: "Governance",
    questionText: "A data engineer needs access to a table new_table, but they do not have the correct permissions. They can ask the table owner for permission, but they do not know who the table owner is. Which of the following approaches can be used to identify the owner of new_table?",
    imageUrl: null,
    options: [
      { id: "A", text: "Review the Permissions tab in the table's page in Data Explorer" },
      { id: "B", text: "All of these options can be used to identify the owner of the table" },
      { id: "C", text: "Review the Owner field in the table's page in Data Explorer" },
      { id: "D", text: "Review the Owner field in the table's page in the cloud storage solution" },
      { id: "E", text: "There is no way to identify the owner of the table" }
    ],
    correctAnswerId: "C",
    explanation: "Il campo 'Owner' nella pagina della tabella all'interno di Data Explorer (o Catalog Explorer) mostra chiaramente chi detiene la proprietà dell'oggetto."
  },
  {
    id: 118,
    topic: "Databricks SQL",
    questionText: "A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary. Which approach can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints." },
      { id: "B", text: "They can set up the dashboard's SQL endpoint to be serverless." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint." }
    ],
    correctAnswerId: "C",
    explanation: "L'abilitazione dell'Auto Stop è la strategia standard per ridurre il tempo totale di esecuzione degli endpoint SQL quando non ci sono query attive."
  },
  {
    id: 119,
    topic: "Governance",
    questionText: "A new data engineering team team has been assigned to an ELT project. The new data engineering team will need full privileges on the table sales to fully manage the project. Which of the following commands can be used to grant full permissions on the database to the new data engineering team?",
    imageUrl: null,
    options: [
      { id: "A", text: "GRANT ALL PRIVILEGES ON TABLE sales TO team;" },
      { id: "B", text: "GRANT SELECT CREATE MODIFY ON TABLE sales TO team;" },
      { id: "C", text: "GRANT SELECT ON TABLE sales TO team;" },
      { id: "D", text: "GRANT USAGE ON TABLE sales TO team;" },
      { id: "E", text: "GRANT ALL PRIVILEGES ON TABLE team TO sales;" }
    ],
    correctAnswerId: "A",
    explanation: "Per fornire privilegi completi su un oggetto (come la tabella sales), si utilizza il comando 'GRANT ALL PRIVILEGES' indirizzato al gruppo o utente corretto."
  },
  {
    id: 120,
    topic: "Data Lakehouse",
    questionText: "Which data lakehouse feature results in improved data quality over a traditional data lake?",
    imageUrl: null,
    options: [
      { id: "A", text: "A data lakehouse stores data in open formats." },
      { id: "B", text: "A data lakehouse allows the use of SQL queries to examine data." },
      { id: "C", text: "A data lakehouse provides storage solutions for structured and unstructured data." },
      { id: "D", text: "A data lakehouse supports ACID-compliant transactions." }
    ],
    correctAnswerId: "D",
    explanation: "Le transazioni ACID (Atomicità, Coerenza, Isolamento, Durabilità) garantiscono l'integrità dei dati anche in caso di errori o accessi simultanei, migliorando la qualità rispetto ai data lake tradizionali."
  },
  {
    id: 121,
    topic: "Compute",
    questionText: "In which scenario will a data team want to utilize cluster pools?",
    imageUrl: null,
    options: [
      { id: "A", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "B", text: "An automated report needs to be runnable by all stakeholders." },
      { id: "C", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "D", text: "An automated report needs to be made reproducible." }
    ],
    correctAnswerId: "C",
    explanation: "I cluster pool riducono i tempi di 'cold start' mantenendo istanze pronte all'uso, il che è ideale quando è necessaria una velocità di esecuzione immediata per i report."
  },
  {
    id: 122,
    topic: "Architecture",
    questionText: "What is hosted completely in the control plane of the classic Databricks architecture?",
    imageUrl: null,
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "Databricks web application" },
      { id: "C", text: "Driver node" },
      { id: "D", text: "Databricks Filesystem" }
    ],
    correctAnswerId: "B",
    explanation: "L'applicazione web di Databricks (interfaccia utente, gestione dei job e dei notebook) risiede interamente nel piano di controllo, mentre i nodi di calcolo e lo storage risiedono nel piano dati del cliente."
  },
  {
    id: 123,
    topic: "Version Control",
    questionText: "A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. What is an advantage of using Databricks Repos over the Databricks Notebooks versioning?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks Repos allows users to revert to previous versions of a notebook" },
      { id: "B", text: "Databricks Repos is wholly housed within the Databricks Data Intelligence Platform" },
      { id: "C", text: "Databricks Repos provides the ability to comment on specific changes" },
      { id: "D", text: "Databricks Repos supports the use of multiple branches" }
    ],
    correctAnswerId: "D",
    explanation: "Databricks Repos si integra con Git, consentendo flussi di lavoro avanzati come l'uso di rami multipli (branches) per lo sviluppo collaborativo."
  },
  {
    id: 124,
    topic: "Architecture",
    questionText: "What is a benefit of the Databricks Lakehouse Architecture embracing open source technologies?",
    imageUrl: null,
    options: [
      { id: "A", text: "Avoiding vendor lock-in" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Ability to scale workloads" },
      { id: "D", text: "Cloud-specific integrations" }
    ],
    correctAnswerId: "A",
    explanation: "L'uso di tecnologie open source (come Spark e Delta Lake) garantisce flessibilità ed evita che le organizzazioni rimangano bloccate nell'ecosistema di un singolo fornitore."
  },
  {
    id: 125,
    topic: "Governance",
    questionText: "A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which location can the data engineer review their permissions on the table?",
    imageUrl: null,
    options: [
      { id: "A", text: "Jobs" },
      { id: "B", text: "Dashboards" },
      { id: "C", text: "Catalog Explorer" },
      { id: "D", text: "Repos" }
    ],
    correctAnswerId: "C",
    explanation: "Catalog Explorer (noto anche come Data Explorer) è l'area dedicata alla gestione dei metadati e dei permessi sugli asset di dati."
  },
  {
    id: 126,
    topic: "Version Control",
    questionText: "A data engineer is running code in a Databricks Repo that is cloned from a central Git repository. A colleague of the data engineer informs them that changes have been made and synced to the central Git repository. The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which Git operation does the data engineer need to run to accomplish this task?",
    imageUrl: null,
    options: [
      { id: "A", text: "Clone" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Push" }
    ],
    correctAnswerId: "B",
    explanation: "Per aggiornare il repository locale con le modifiche presenti nel repository centrale, è necessario eseguire l'operazione di 'Pull'."
  },
  {
    id: 127,
    topic: "Delta Lake",
    questionText: "Which file format is used for storing Delta Lake Table?",
    imageUrl: null,
    options: [
      { id: "A", text: "CSV" },
      { id: "B", text: "Parquet" },
      { id: "C", text: "JSON" },
      { id: "D", text: "Delta" }
    ],
    correctAnswerId: "B",
    explanation: "Le tabelle Delta Lake utilizzano il formato Parquet come standard di archiviazione dei dati, garantendo efficienza e compressione colonnare."
  },
  {
    id: 128,
    topic: "SQL DDL",
    questionText: "A data architect has determined that a table of the following format is necessary: [employeeId: STRING, startDate: DATE, avgRating: FLOAT]. Which code block is used by SQL DDL command to create an empty Delta table in the above format regardless of whether a table already exists with this name? ",
    imageUrl: null,
    options: [
      { id: "A", text: "CREATE OR REPLACE TABLE table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )" },
      { id: "B", text: "CREATE OR REPLACE TABLE table_name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA" },
      { id: "C", text: "CREATE TABLE IF NOT EXISTS table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )" },
      { id: "D", text: "CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT" }
    ],
    correctAnswerId: "A",
    explanation: "Il comando 'CREATE OR REPLACE TABLE' è l'unico che garantisce la creazione di una tabella vuota indipendentemente dal fatto che ne esista già una con lo stesso nome."
  },
  {
    id: 129,
    topic: "SQL Operations",
    questionText: "A data engineer has been given a new record of data: id STRING = 'a1', rank INTEGER = 6, rating FLOAT = 9.4. Which SQL commands can be used to append the new record to an existing Delta table my_table? ",
    imageUrl: null,
    options: [
      { id: "A", text: "INSERT INTO my_table VALUES ('a1', 6, 9.4)" },
      { id: "B", text: "INSERT VALUES ('a1', 6, 9.4) INTO my_table" },
      { id: "C", text: "UPDATE my_table VALUES ('a1', 6, 9.4)" },
      { id: "D", text: "UPDATE VALUES ('a1', 6, 9.4) my_table" }
    ],
    correctAnswerId: "A",
    explanation: "La sintassi SQL standard per aggiungere (appendere) un nuovo record a una tabella esistente è 'INSERT INTO ... VALUES'."
  },
  {
    id: 130,
    topic: "Delta Lake Optimization",
    questionText: "A data engineer has realized that the data files associated with a Delta table are incredibly small. They want to compact the small files to form larger files to improve performance. Which keyword can be used to compact the small files? ",
    imageUrl: null,
    options: [
      { id: "A", text: "OPTIMIZE" },
      { id: "B", text: "VACUUM" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" }
    ],
    correctAnswerId: "A",
    explanation: "Il comando OPTIMIZE viene utilizzato in Delta Lake per compattare file piccoli in file più grandi (compaction), migliorando le prestazioni delle query."
  },
  {
    id: 131,
    topic: "Data Entities",
    questionText: "A data engineer wants to create a data entity from a couple of tables. The data entity must be used by other data engineers in other sessions. It also must be saved to a physical location. Which of the following data entities should the data engineer create? ",
    imageUrl: null,
    options: [
      { id: "A", text: "Table" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" }
    ],
    correctAnswerId: "A",
    explanation: "Solo le tabelle sono salvate in una posizione fisica e sono accessibili tra sessioni diverse, a differenza delle viste (oggetti logici) o viste temporanee."
  },
  {
    id: 132,
    topic: "Data Ingestion",
    questionText: "A data engineer runs a statement every day to copy the previous day’s sales into the table transactions. Each day’s sales are in their own file in the location \"/transactions/raw\". Today, the data engineer runs the following command to complete this task. After running the command today, the data engineer notices that the number of records in table transactions has not changed. What explains why the statement might not have copied any new records into the table? ",
    imageUrl: null,
    options: [
      { id: "A", text: "The format of the files to be copied were not included with the FORMAT_OPTIONS keyword." },
      { id: "B", text: "The COPY INTO statement requires the table to be refreshed to view the copied rows." },
      { id: "C", text: "The previous day’s file has already been copied into the table." },
      { id: "D", text: "The PARQUET file format does not support COPY INTO." }
    ],
    correctAnswerId: "C",
    explanation: "Il comando COPY INTO è idempotente: traccia i file già caricati e li ignora nelle esecuzioni successive per evitare duplicati."
  },
  {
    id: 133,
    topic: "SQL Operations",
    questionText: "Which command can be used to write data into a Delta table while avoiding the writing of duplicate records? ",
    imageUrl: null,
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" }
    ],
    correctAnswerId: "C",
    explanation: "MERGE permette di eseguire un 'upsert', garantendo che i dati vengano inseriti solo se non sono già presenti, evitando duplicati."
  },
  {
    id: 134,
    topic: "PySpark APIs",
    questionText: "A data analyst has created a Delta table sales that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL. Which command could the data engineering team use to access sales in PySpark? ",
    imageUrl: null,
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "spark.table(\"sales\")" },
      { id: "C", text: "spark.sql(\"sales\")" },
      { id: "D", text: "spark.delta.table(\"sales\")" }
    ],
    correctAnswerId: "B",
    explanation: "In PySpark, il metodo standard per accedere a una tabella registrata e ottenerla come DataFrame è 'spark.table()'."
  },
  {
    id: 135,
    topic: "Databases",
    questionText: "A data engineer has created a new database using the following command: CREATE DATABASE IF NOT EXISTS customer360; In which location will the customer360 database be located? ",
    imageUrl: null,
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "dbfs:/user/hive/database" }
    ],
    correctAnswerId: "B",
    explanation: "Per impostazione predefinita, i database senza un percorso specificato vengono creati sotto dbfs:/user/hive/warehouse."
  },
  {
    id: 136,
    topic: "SQL Operations",
    questionText: "A data engineer is attempting to drop a Spark SQL table my_table and runs the following command: DROP TABLE IF EXISTS my_table; After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. What is the reason behind the deletion of all these files? ",
    imageUrl: null,
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table did not have a location" },
      { id: "D", text: "The table was external" }
    ],
    correctAnswerId: "A",
    explanation: "In una tabella 'managed', Databricks gestisce sia i metadati che i dati fisici; pertanto, il comando DROP rimuove entrambi."
  },
  {
    id: 137,
    topic: "SQL DDL",
    questionText: "A data engineer needs to create a table in Databricks using data from a CSV file at location /path/to/csv. They run the following command. Which of the following lines of code fills in the above blank to successfully complete the task? ",
    imageUrl: null,
    options: [
      { id: "A", text: "FROM \"path/to/csv\"" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" }
    ],
    correctAnswerId: "B",
    explanation: "Per specificare il formato di una sorgente dati durante la creazione di una tabella, si utilizza la clausola 'USING'."
  },
  {
    id: 138,
    topic: "External Tables",
    questionText: "What is a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement? ",
    imageUrl: null,
    options: [
      { id: "A", text: "Parquet files can be partitioned" },
      { id: "B", text: "Parquet files will become Delta tables" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Parquet files have the ability to be optimized" }
    ],
    correctAnswerId: "C",
    explanation: "A differenza dei CSV che sono file di testo, i file Parquet contengono metadati sullo schema, garantendo una definizione corretta dei tipi di dati."
  },
  {
    id: 139,
    topic: "SQL Keywords",
    questionText: "Which SQL keyword can be used to convert a table from a long format to a wide format? ",
    imageUrl: null,
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" }
    ],
    correctAnswerId: "B",
    explanation: "La parola chiave PIVOT trasforma i valori delle righe in colonne, passando da un formato 'long' a uno 'wide'."
  },
  {
    id: 140,
    topic: "PySpark",
    questionText: "A data engineer has a Python variable table_name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_name. They have the following incomplete code block: ________(f\"SELECT customer_id, spend FROM {table_name}\") What can be used to fill in the blank to successfully complete the task?",
    imageUrl: null,
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.sql" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" }
    ],
    correctAnswerId: "B",
    explanation: "La funzione spark.sql() è il metodo PySpark per eseguire query SQL definite come stringhe, permettendo l'uso di f-strings per inserire variabili Python."
  },
  {
    id: 141,
    topic: "SQL Joins",
    questionText: "A data engineer is working with two tables. Each of these tables is displayed below in its entirety. [Vedi immagine per le tabelle sales e favorite_stores]. The data engineer runs the following query to join these tables together: SELECT sales.customer id, sales.spend, favorite_stores.store_id FROM sales LEFT JOIN favorite stores ON sales.customer_id = favorite_stores.customer_id; Which of the following will be returned by the above query?",
    imageUrl: "/images/p19_q141.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "C",
    explanation: "Il LEFT JOIN mantiene tutti i record della tabella di sinistra (sales). Il cliente 'a3' non ha una corrispondenza in favorite_stores, quindi riceve un NULL come store_id."
  },
  {
    id: 142,
    topic: "Higher-Order Functions",
    questionText: "A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees in table stores. The custom logic should create a new column exp_employees that is an array of all of the employees with more than 5 years of experience for each row. In order to apply this custom logic at scale, the data engineer wants to use the FILTER higher-order function. Which code block successfully completes this task?",
    imageUrl: "/images/p19_q142.png",
    options: [
      { id: "A", text: "Vedi blocco codice A nell'immagine" },
      { id: "B", text: "Vedi blocco codice B nell'immagine" },
      { id: "C", text: "Vedi blocco codice C nell'immagine" },
      { id: "D", text: "Vedi blocco codice D nell'immagine" }
    ],
    correctAnswerId: "A",
    explanation: "L'opzione A utilizza la sintassi corretta per FILTER con una funzione lambda (i -> i.years_exp > 5) per processare gli elementi dell'array."
  },
  {
    id: 143,
    topic: "Python Functions",
    questionText: "A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which code block can the data engineer use to complete this task?",
    imageUrl: null,
    options: [
      { id: "A", text: "function add_integers (x, y): return x+y" },
      { id: "B", text: "def add integers (x, y): print (x + y)" },
      { id: "C", text: "def add_integers (x, y): x+y" },
      { id: "D", text: "def add_integers (x, y): return x + y" }
    ],
    correctAnswerId: "D",
    explanation: "In Python, le funzioni si definiscono con 'def' e richiedono l'istruzione 'return' per restituire un risultato al chiamante."
  },
  {
    id: 144,
    topic: "Structured Streaming",
    questionText: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is [Vedi immagine]. Which line of code should the data engineer use to fill in the blank if the data engineer only wants the query to execute a micro-batch to process data every 5 seconds?",
    imageUrl: "/images/p19_q144.png",
    options: [
      { id: "A", text: "trigger(\"5 seconds\")" },
      { id: "B", text: "trigger(continuous=\"5 seconds\")" },
      { id: "C", text: "trigger(once=\"5 seconds\")" },
      { id: "D", text: "trigger(processingTime=\"5 seconds\")" }
    ],
    correctAnswerId: "D",
    explanation: "Per definire un intervallo temporale fisso tra micro-batch nello streaming, si utilizza il trigger 'processingTime'."
  },
  {
    id: 145,
    topic: "Data Quality",
    questionText: "A data engineer is maintaining a data pipeline. Upon data ingestion, the data engineer notices that the source data is starting to have a lower level of quality. The data engineer would like to automate the process of monitoring the quality level. Which of the following tools can the data engineer use to solve this problem?",
    imageUrl: null,
    options: [
      { id: "A", text: "Auto Loader" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Delta Lake" },
      { id: "D", text: "Delta Live Tables" }
    ],
    correctAnswerId: "D",
    explanation: "Delta Live Tables (DLT) offre funzionalità native per definire, applicare e monitorare vincoli di qualità dei dati (expectations)."
  },
  {
    id: 146,
    topic: "Delta Live Tables",
    questionText: "A data engineer has three tables in a Delta Live Tables (DLT) pipeline. They have configured the pipeline to drop invalid records at each table. They notice that some data is being dropped due to quality concerns at some point in the DLT pipeline. They would like to determine at which table in their pipeline the data is being dropped. Which approach can the data engineer take to identify the table that is dropping the records?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can set up separate expectations for each table when developing their DLT pipeline." },
      { id: "B", text: "They can navigate to the DLT pipeline page, click on the \"Error\" button, and review the present errors." },
      { id: "C", text: "They can set up DLT to notify them via email when records are dropped." },
      { id: "D", text: "They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics." }
    ],
    correctAnswerId: "D",
    explanation: "L'interfaccia UI di DLT permette di visualizzare statistiche dettagliate sulla qualità dei dati cliccando sui singoli nodi della pipeline."
  },
  {
    id: 147,
    topic: "Structured Streaming",
    questionText: "What is used by Spark to record the offset range of the data being processed in each trigger in order for Structured Streaming to reliably track the exact progress of the processing so that it can handle any kind of failure by restarting and/or reprocessing?",
    imageUrl: null,
    options: [
      { id: "A", text: "Checkpointing and Write-ahead Logs" },
      { id: "B", text: "Replayable Sources and Idempotent Sinks" },
      { id: "C", text: "Write-ahead Logs and Idempotent Sinks" },
      { id: "D", text: "Checkpointing and Idempotent Sinks" }
    ],
    correctAnswerId: "D",
    explanation: "Sebbene il progresso venga tecnicamente registrato tramite checkpoint e WAL, il PDF suggerisce 'D' come risposta corretta, unendo il tracciamento alla garanzia di output corretto."
  },
  {
    id: 148,
    topic: "Medallion Architecture",
    questionText: "What describes the relationship between Gold tables and Silver tables?",
    imageUrl: null,
    options: [
      { id: "A", text: "Gold tables are more likely to contain aggregations than Silver tables." },
      { id: "B", text: "Gold tables are more likely to contain valuable data than Silver tables." },
      { id: "C", text: "Gold tables are more likely to contain a less refined view of data than Silver tables." },
      { id: "D", text: "Gold tables are more likely to contain truthful data than Silver tables." }
    ],
    correctAnswerId: "A",
    explanation: "Le tabelle Gold rappresentano il livello finale di business logic e contengono solitamente aggregazioni pronte per l'analisi."
  },
  {
    id: 149,
    topic: "Delta Live Tables",
    questionText: "What describes when to use the CREATE STREAMING LIVE TABLE (formerly CREATE INCREMENTAL LIVE TABLE) syntax over the CREATE LIVE TABLE syntax when creating Delta Live Tables (DLT) tables using SQL?",
    imageUrl: null,
    options: [
      { id: "A", text: "CREATE STREAMING LIVE TABLE should be used when the subsequent step in the DLT pipeline is static." },
      { id: "B", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed incrementally." },
      { id: "C", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed through complicated aggregations." },
      { id: "D", text: "CREATE STREAMING LIVE TABLE should be used when the previous step in the DLT pipeline is static." }
    ],
    correctAnswerId: "B",
    explanation: "La sintassi STREAMING LIVE TABLE è specifica per il caricamento incrementale dei dati (micro-batching)."
  },
  {
    id: 150,
    topic: "Delta Live Tables",
    questionText: "A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Production mode using the Continuous Pipeline Mode. What is the expected outcome after clicking Start to update the pipeline assuming previously unprocessed data exists and all definitions are valid?",
    imageUrl: null,
    options: [
      { id: "A", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." },
      { id: "B", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing." },
      { id: "C", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped." },
      { id: "D", text: "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated." }
    ],
    correctAnswerId: "C",
    explanation: "In modalità 'Continuous' e 'Production', la pipeline aggiorna i dati a intervalli regolari finché non viene fermata manualmente, momento in cui le risorse di calcolo vengono terminate."
  },
  {
    id: 151,
    topic: "Auto Loader",
    questionText: "Which type of workloads are compatible with Auto Loader?",
    imageUrl: null,
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "Machine learning workloads" },
      { id: "C", text: "Serverless workloads" },
      { id: "D", text: "Batch workloads" }
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader è progettato principalmente per ingerire dati in streaming (streaming workloads) in modo continuo ed efficiente."
  },
  {
    id: 152,
    topic: "Auto Loader",
    questionText: "A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Why has Auto Loader inferred all of the columns to be of the string type?",
    imageUrl: null,
    options: [
      { id: "A", text: "Auto Loader cannot infer the schema of ingested data" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "Auto Loader only works with string data" },
      { id: "D", text: "All of the fields had at least one null value" }
    ],
    correctAnswerId: "B",
    explanation: "Poiché JSON non codifica nativamente i tipi di dati, Auto Loader interpreta per impostazione predefinita tutte le colonne come stringhe se non vengono forniti suggerimenti sullo schema."
  },
  {
    id: 153,
    topic: "Medallion Architecture",
    questionText: "Which statement regarding the relationship between Silver tables and Bronze tables is always true?",
    imageUrl: null,
    options: [
      { id: "A", text: "Silver tables contain a less refined, less clean view of data than Bronze data." },
      { id: "B", text: "Silver tables contain aggregates while Bronze data is unaggregated." },
      { id: "C", text: "Silver tables contain more data than Bronze tables." },
      { id: "D", text: "Silver tables contain less data than Bronze tables." }
    ],
    correctAnswerId: "D",
    explanation: "Le tabelle Silver sono versioni raffinate del Bronze; solitamente contengono meno dati perché i record non validi o non necessari vengono filtrati durante il processo di pulizia."
  },
  {
    id: 154,
    topic: "Medallion Architecture",
    questionText: "Which query is performing a streaming hop from raw data to a Bronze table?",
    imageUrl: "/images/p20_q154.png",
    options: [
      { id: "A", text: "Vedi blocco codice A nell'immagine" },
      { id: "B", text: "Vedi blocco codice B nell'immagine" },
      { id: "C", text: "Vedi blocco codice C nell'immagine" },
      { id: "D", text: "Vedi blocco codice D nell'immagine" }
    ],
    correctAnswerId: "D",
    explanation: "Un 'hop' streaming richiede sia `readStream` dalla sorgente grezza che `writeStream` verso la tabella di destinazione senza aggregazioni pesanti."
  },
  {
    id: 155,
    topic: "Delta Live Tables",
    questionText: "A dataset has been defined using Delta Live Tables and includes an expectations clause:\n\nCONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW\n\nWhat is the expected behavior when a batch of data containing data that violates these constraints is processed?",
    imageUrl: null,
    options: [
      { id: "A", text: "Records that violate the expectation cause the job to fail." },
      { id: "B", text: "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log." }
    ],
    correctAnswerId: "C",
    explanation: "La clausola 'ON VIOLATION DROP ROW' scarta i record non validi e logga l'evento nei metadati della pipeline."
  },
  {
    id: 156,
    topic: "Compute",
    questionText: "A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which action can the data engineer perform to improve the start up time for the clusters used for the Job?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can use endpoints available in Databricks SQL" },
      { id: "B", text: "They can use jobs clusters instead of all-purpose clusters" },
      { id: "C", text: "They can configure the clusters to autoscale for larger data sizes" },
      { id: "D", text: "They can use clusters that are from a cluster pool" }
    ],
    correctAnswerId: "D",
    explanation: "L'uso di istanze provenienti da un cluster pool riduce i tempi di attesa mantenendo macchine virtuali pronte all'uso."
  },
  {
    id: 157,
    topic: "Databricks Jobs",
    questionText: "A data engineer has a single-task Job that runs each morning before they begin working. After identifying an upstream data issue, they need to set up another task to run a new notebook prior to the original task. Which approach can the data engineer use to set up the new task?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can clone the existing task in the existing Job and update it to run the new notebook." },
      { id: "B", text: "They can create a new task in the existing Job and then add it as a dependency of the original task." },
      { id: "C", text: "They can create a new task in the existing Job and then add the original task as a dependency of the new task." },
      { id: "D", text: "They can create a new job from scratch and add both tasks to run concurrently." }
    ],
    correctAnswerId: "B",
    explanation: "Per far girare un nuovo task prima di quello esistente, il task originale deve essere configurato per 'dipendere' dal completamento del nuovo task."
  },
  {
    id: 158,
    topic: "Databricks Jobs",
    questionText: "A single Job runs two notebooks as two separate tasks. A data engineer has noticed that one of the notebooks is running slowly in the Job's current run. The data engineer asks a tech lead for help in identifying why this might be the case. Which approach can the tech lead use to identify why the notebook is running slowly as part of the Job?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can navigate to the Runs tab in the Jobs Ul to immediately review the processing notebook." },
      { id: "B", text: "They can navigate to the Tasks tab in the Jobs Ul and click on the active run to review the processing notebook." },
      { id: "C", text: "They can navigate to the Runs tab in the Jobs Ul and click on the active run to review the processing notebook." },
      { id: "D", text: "They can navigate to the Tasks tab in the Jobs Ul to immediately review the processing notebook." }
    ],
    correctAnswerId: "C",
    explanation: "Esaminando l'esecuzione attiva (active run) dalla scheda 'Runs' è possibile accedere ai dettagli specifici del notebook in esecuzione."
  },
  {
    id: 159,
    topic: "Databricks SQL",
    questionText: "A data analysis team has noticed that their Databricks SQL queries are running too slowly when connected to their always-on SQL endpoint. They claim that this issue is present when many members of the team are running small queries simultaneously. They ask the data engineering team for help. The data engineering team notices that each of the team's queries uses the same SQL endpoint. Which approach can the data engineering team use to improve the latency of the team's queries?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can increase the cluster size of the SQL endpoint." },
      { id: "B", text: "They can increase the maximum bound of the SQL endpoint's scaling range." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." }
    ],
    correctAnswerId: "B",
    explanation: "Aumentare il limite massimo del range di scaling (Scale Out) permette di gestire meglio l'esecuzione simultanea di molte query piccole, riducendo le code."
  },
  {
    id: 160,
    topic: "Databricks SQL Alerts",
    questionText: "A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which approach can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?",
    imageUrl: null,
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." },
      { id: "B", text: "They can set up an Alert with a new email alert destination." },
      { id: "C", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "D", text: "They can set up an Alert with one-time notifications." }
    ],
    correctAnswerId: "C",
    explanation: "Per inviare notifiche a servizi di messaggistica esterni (come Slack) basati su una condizione SQL, è necessario configurare una destinazione webhook negli Alert."
  },
  {
    id: 161,
    topic: "Delta Sharing",
    questionText: "A company uses Delta Sharing to collaborate with partners across different cloud providers and geographic regions. What will result in additional costs due to cross-region or egress fees?",
    imageUrl: null,
    options: [
      { id: "A", text: "Sharing data within the same cloud provider and region" },
      { id: "B", text: "Transferring data via Delta Sharing across clouds and across different geographic regions" },
      { id: "C", text: "Accessing Delta Sharing data using a VPN within the same data center" },
      { id: "D", text: "Utilizing Delta Sharing for internal data analytics within a single cloud environment" }
    ],
    correctAnswerId: "B",
    explanation: "Il trasferimento di dati tra regioni geografiche diverse o tra fornitori cloud differenti comporta costi di 'egress' (uscita dati) che vengono fatturati dal fornitore cloud."
  },
  {
    id: 162,
    topic: "Data Ingestion",
    questionText: "A data engineer is writing a script that is meant to ingest new data from cloud storage. In the event of the Schema change, the ingestion should fail. It should fail until the changes downstream source can be found and verified as intended changes. Which command will meet the requirements?",
    imageUrl: null,
    options: [
      { id: "A", text: "failOnNewColumns" },
      { id: "B", text: "none" },
      { id: "C", text: "rescue" },
      { id: "D", text: "addNewColumns" }
    ],
    correctAnswerId: "A",
    explanation: "L'opzione 'failOnNewColumns' istruisce il motore di ingestione a interrompersi se rileva colonne non previste, garantendo che i cambiamenti dello schema siano verificati manualmente."
  },
  {
    id: 163,
    topic: "SQL DDL",
    questionText: "Which SQL code snippet will correctly demonstrate a Data Definition Language (DDL) operation used to create a table?",
    imageUrl: "/images/p21_q163.png",
    options: [
      { id: "A", text: "CREATE TABLE employees (id INT, name STRING);" },
      { id: "B", text: "DROP TABLE employees;" },
      { id: "C", text: "ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);" },
      { id: "D", text: "INSERT INTO employees (id, name) VALUES (1, 'Alice');" }
    ],
    correctAnswerId: "A",
    explanation: "Sebbene DROP e ALTER siano comandi DDL, la domanda chiede specificamente lo snippet corretto per *creare* una tabella."
  },
  {
    id: 164,
    topic: "Databricks Workflows",
    questionText: "A data engineer is working in a Databricks notebook to design and manage a batch ETL pipeline. The engineer is writing SQL and Python code to clean data, transform it, and join large datasets from different sources. The engineer wants to organize these steps into a structured process that can be run regularly and scheduled as part of a data pipeline. Which Databricks notebook feature is applicable in the use case?",
    imageUrl: null,
    options: [
      { id: "A", text: "Real-time streaming support" },
      { id: "B", text: "Collaborative editing" },
      { id: "C", text: "Task workflows and job scheduling" },
      { id: "D", text: "Notebook version control" }
    ],
    correctAnswerId: "C",
    explanation: "Databricks Workflows permette di orchestrare notebook multipli come task all'interno di un Job, definendo dipendenze e pianificazioni."
  },
  {
    id: 165,
    topic: "Databricks Asset Bundles",
    questionText: "A data engineer needs to develop integration tests for an ETL process and deploy a version-controlled, packaged workflow into production using an external job scheduler. Which tool should the data engineer use for this job?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks Connect" },
      { id: "B", text: "Databricks Asset Bundles" },
      { id: "C", text: "Databricks Command Line Interface" },
      { id: "D", text: "Databricks Software Development Kit" }
    ],
    correctAnswerId: "B",
    explanation: "I Databricks Asset Bundles (DABs) permettono di gestire l'intero ciclo di vita di un progetto (test, deploy, versioning) come un unico pacchetto software."
  },
  {
    id: 166,
    topic: "Databricks Asset Bundles",
    questionText: "Which Databricks asset bundle format is valid?",
    imageUrl: null,
    options: [
      { id: "A", text: "YAML format starting with resources: jobs:" },
      { id: "B", text: "JSON format" },
      { id: "C", text: "Python dictionary" },
      { id: "D", text: "HCL-like syntax" }
    ],
    correctAnswerId: "A",
    explanation: "La configurazione dei Databricks Asset Bundles deve essere scritta obbligatoriamente nel formato YAML."
  },
  {
    id: 167,
    topic: "Delta Live Tables",
    questionText: "A data engineer needs to ingest from both streaming and batch sources for a firm that relies on highly accurate data. Occasionally, some of the data picked up by the sensors that provide a streaming input are outside the expected parameters. If this occurs, the data must be dropped, but the stream should not fail. Which feature of Delta Live Tables meets this requirement?",
    imageUrl: null,
    options: [
      { id: "A", text: "Change Data Capture" },
      { id: "B", text: "Error Handling" },
      { id: "C", text: "Monitoring" },
      { id: "D", text: "Expectations" }
    ],
    correctAnswerId: "D",
    explanation: "Le 'Expectations' di DLT permettono di definire vincoli di qualità e azioni specifiche (come DROP ROW) per gestire dati errati senza bloccare la pipeline."
  },
  {
    id: 168,
    topic: "Performance Tuning",
    questionText: "A data engineer has inherited a Databricks pipeline from a previous team. The pipeline is missing SLAs and costs more than the allotted budget. On analysis, it is noted that the cluster is not being fully utilized, and the dataset is getting skewed. How should the data engineer resolve this issue?",
    imageUrl: null,
    options: [
      { id: "A", text: "Use coalesce() on the dataset to merge partitions and reduce skew." },
      { id: "B", text: "Increase the number of executors for the job." },
      { id: "C", text: "Repartition the dataset to have it be more optimally spread across all nodes." },
      { id: "D", text: "Increase the executor memory for the job." }
    ],
    correctAnswerId: "C",
    explanation: "Il re-partitioning è la tecnica standard per risolvere il problema del 'data skew', ridistribuendo i dati in modo uniforme tra tutti i nodi del cluster."
  },
  {
    id: 169,
    topic: "Delta Lake",
    questionText: "An organization is looking for an optimized storage layer that supports ACID transactions and schema enforcement. Which technology should the organization use?",
    imageUrl: null,
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Cloud File Storage" },
      { id: "D", text: "Data lake" }
    ],
    correctAnswerId: "A",
    explanation: "Delta Lake è lo strato di storage open-source che abilita transazioni ACID e gestione rigorosa dello schema sopra i data lake esistenti."
  },
  {
    id: 170,
    topic: "Medallion Architecture",
    questionText: "What are the transformations typically included in building the Bronze layer?",
    imageUrl: null,
    options: [
      { id: "A", text: "Include columns Load date/time, process ID" },
      { id: "B", text: "Business rules and transformations" },
      { id: "C", text: "Perform extensive data cleansing" },
      { id: "D", text: "Aggregate data from multiple sources" }
    ],
    correctAnswerId: "A",
    explanation: "Il livello Bronze serve a catturare i dati grezzi aggiungendo solo metadati tecnici necessari per la tracciabilità (lineage)."
  },
  {
    id: 171,
    topic: "Lakehouse Federation",
    questionText: "An organization has data stored across multiple external systems, including MySQL, Amazon Redshift, and Google BigQuery. The data engineer wants to perform analytics without ingesting directly into Databricks, ensuring unified governance and minimizing data duplication. Which feature of Databricks enables querying these external data sources while maintaining centralized governance?",
    imageUrl: null,
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Lakehouse Federation" },
      { id: "C", text: "MLflow" },
      { id: "D", text: "Databricks Connect" }
    ],
    correctAnswerId: "B",
    explanation: "Lakehouse Federation permette a Unity Catalog di interrogare database esterni in tempo reale, senza necessità di caricare i dati in Databricks."
  },
  {
    id: 172,
    topic: "Unity Catalog",
    questionText: "An organization needs to share a dataset stored in its Databricks Unity Catalog with an external partner who uses a different data platform that is not Databricks. The goal is to maintain data security and ensure the partner can access the data efficiently. Which method should the data engineer use to securely share the dataset with the external partner?",
    imageUrl: null,
    options: [
      { id: "A", text: "Using Delta Sharing with the open sharing protocol" },
      { id: "B", text: "Exporting data as CSV files and emailing them" },
      { id: "C", text: "Using a third-party API to access the Delta table" },
      { id: "D", text: "Databricks-to-Databricks Sharing" }
    ],
    correctAnswerId: "A",
    explanation: "Il protocollo 'open sharing' di Delta Sharing permette di condividere dati con chiunque, indipendentemente dal fatto che utilizzi Databricks o meno."
  },
  {
    id: 173,
    topic: "Delta Live Tables",
    questionText: "A data engineer streams customer orders into a Kafka topic (orders_topic) and is currently writing the ingestion script of a DLT pipeline. The data engineer needs to ingest the data from Kafka brokers to DLT using Databricks. What is the correct code for ingesting the data?",
    imageUrl: "/images/p22_q173.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "A",
    explanation: "Per ingerire dati da Kafka in una pipeline DLT con Python, si utilizza `spark.readStream.format(\"kafka\")` specificando i server di bootstrap e il topic."
  },
  {
    id: 174,
    topic: "PySpark DataFrames",
    questionText: "A global retail company sells products across multiple categories (e.g., Electronics, Clothing) and regions. The sales team has provided the data engineer with a PySpark dataframe named sales_df [Vedi immagine]. Calculate the total sales amount for each product category and store the results in a new dataframe called category_sales. What will generate the expected result?",
    imageUrl: "/images/p22_q174.png",
    options: [
      { id: "A", text: "category_sales = sales_df.groupBy(\"category\").agg(sum(\"sales_amount\").alias(\"total_sales_amount\"))" },
      { id: "B", text: "category_sales = sales_df.sum(\"sales_amount\").groupBy(\"category\").alias(\"total_sales_amount\"))" },
      { id: "C", text: "category_sales = sales_df.agg(sum(\"sales_amount\").groupBy(\"category\").alias(\"total_sales_amount\"))" },
      { id: "D", text: "category_sales = sales_df.groupBy(\"region\").agg(sum(\"sales_amount\").alias(\"total_sales_amount\"))" }
    ],
    correctAnswerId: "A",
    explanation: "La sintassi corretta in PySpark per aggregare dati prevede l'uso di `groupBy` seguito da `agg` con una funzione di aggregazione come `sum`."
  },
  {
    id: 175,
    topic: "Delta Live Tables",
    questionText: "A data engineer is designing an ETL pipeline to process both streaming and batch data from multiple sources. The pipeline must ensure data quality, handle schema evolution, and provide easy maintenance. Why is Delta Live Tables (DLT) an appropriate choice?",
    imageUrl: null,
    options: [
      { id: "A", text: "Automatic data quality checks, built-in support for schema evolution, and declarative pipeline development" },
      { id: "B", text: "Manual schema enforcement, high operational overhead, and limited scalability" },
      { id: "C", text: "Requires custom code for data quality checks, no support for streaming data, and complex pipeline maintenance" },
      { id: "D", text: "Supports only batch processing, no data versioning, and high infrastructure costs" }
    ],
    correctAnswerId: "A",
    explanation: "DLT è ideale perché automatizza i controlli di qualità, supporta l'evoluzione dello schema e permette uno sviluppo dichiarativo semplificato."
  },
  {
    id: 176,
    topic: "Databricks Notebooks",
    questionText: "A data engineer is attempting to write Python and SQL in the same command cell and is running into an error. The engineer thought that it was possible to use a Python variable in a select statement. Why does the command fail?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks supports language interoperability in the same cell but only between Scala and SQL." },
      { id: "B", text: "Databricks supports multiple languages but only one per notebook." },
      { id: "C", text: "Databricks supports one language per cell." },
      { id: "D", text: "Databricks supports language interoperability but only if a special character is used." }
    ],
    correctAnswerId: "C",
    explanation: "Ogni cella di un notebook Databricks può interpretare un solo linguaggio alla volta (definito dal linguaggio di default o da un comando magico come %sql o %python)."
  },
  {
    id: 177,
    topic: "Compute Resources",
    questionText: "Which compute option should be chosen in a scenario where small-scale ad-hoc Python scripts need to be run at high frequency and should wind down quickly after these queries have finished running?",
    imageUrl: null,
    options: [
      { id: "A", text: "All-purpose Cluster" },
      { id: "B", text: "Job Cluster" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "SQL Warehouse" }
    ],
    correctAnswerId: "C",
    explanation: "Sebbene la community suggerisca i Job Cluster, la tecnologia Serverless è progettata specificamente per carichi di lavoro ad-hoc che devono avviarsi e spegnersi istantaneamente."
  },
  {
    id: 178,
    topic: "Databricks Connect",
    questionText: "A data engineer is working on a personal laptop and needs to perform complex transformations on data stored in a Delta Lake on cloud storage. The engineer decides to use Databricks Connect to interact with Databricks clusters and work in their local IDE. How does Databricks Connect enable the engineer to develop, test, and debug code seamlessly on their local machine while interacting with Databricks clusters?",
    imageUrl: null,
    options: [
      { id: "A", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using a specific IDE that is required by Databricks" },
      { id: "B", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code only through Databricks' own web interface" },
      { id: "C", text: "By allowing direct execution of Spark jobs from the local machine without needing a network connection" },
      { id: "D", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using their preferred IDE" }
    ],
    correctAnswerId: "D",
    explanation: "Databricks Connect permette agli sviluppatori di utilizzare il proprio IDE preferito (come VS Code) per scrivere ed eseguire codice Spark sul cluster remoto."
  },
  {
    id: 179,
    topic: "PySpark DataFrames",
    questionText: "Calculate the total sales amount for each region and store the results in a new dataframe called region_sales. [Vedi immagine per sales_df e risultato atteso]. Which code will generate the expected result?",
    imageUrl: "/images/p22_q179.png",
    options: [
      { id: "A", text: "region_sales = sales_df.groupBy(\"category\").sum(\"sales_amount\").alias(\"total_sales_amount\")" },
      { id: "B", text: "region_sales = sales_df.groupBy(\"region\").agg(sum(\"sales_amount\").alias(\"total_sales_amount\"))" },
      { id: "C", text: "region_sales = sales_df.sum(\"sales_amount\").groupBy(\"region\").alias(\"total_sales_amount\")" },
      { id: "D", text: "region_sales = sales_df.agg(sum(\"sales_amount\").groupBy(\"region\").alias(\"total_sales_amount\"))" }
    ],
    correctAnswerId: "B",
    explanation: "Per ottenere il totale per regione, è necessario raggruppare per la colonna 'region' e applicare la somma sulla colonna 'sales_amount' tramite `agg`."
  },
  {
    id: 180,
    topic: "Delta Live Tables",
    questionText: "A Data Engineer is building a simple data pipeline using Delta Live Tables (DLT) in Databricks to ingest customer data. The raw customer data is stored in a cloud storage location in JSON format. The task is to create a DLT pipeline that reads the raw JSON data and writes it into a Delta table for further processing. Which code snippet will correctly ingest the raw JSON data and create a Delta table using DLT?",
    imageUrl: "/images/p22_q180.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "C",
    explanation: "La sintassi corretta per creare una tabella DLT da file JSON prevede l'uso del decoratore `@dlt.table` e della funzione `spark.read.json()`."
  },
  {
    id: 181,
    topic: "Medallion Architecture",
    questionText: "A data engineering team is using Kafka to capture event data and then ingest it into Databricks. The team wants to be able to see these historical events. Medallion architecture is already in place. The team wants to be mindful of costs. Where should this historical event data be stored?",
    imageUrl: null,
    options: [
      { id: "A", text: "Gold" },
      { id: "B", text: "Silver" },
      { id: "C", text: "Bronze" },
      { id: "D", text: "Raw layer" }
    ],
    correctAnswerId: "C",
    explanation: "Le tabelle Bronze sono destinate a conservare la cronologia completa dei dati grezzi ingeriti, rendendole il luogo ideale per l'archiviazione degli eventi storici a lungo termine."
  },
  {
    id: 182,
    topic: "Job Clusters",
    questionText: "What is the maximum output supported by a job cluster to ensure a notebook does not fail?",
    imageUrl: null,
    options: [
      { id: "A", text: "25MBs" },
      { id: "B", text: "10MBs" },
      { id: "C", text: "30MBs" },
      { id: "D", text: "15MBs" }
    ],
    correctAnswerId: "C",
    explanation: "Il limite massimo di output per una cella o un notebook in un Job Cluster è fissato a 30 MB; superare questa soglia può causare il fallimento dell'esecuzione."
  },
  {
    id: 183,
    topic: "Medallion Architecture",
    questionText: "Which two items are characteristics of the Gold Layer? (Choose two.)",
    imageUrl: null,
    options: [
      { id: "A", text: "Historical lineage" },
      { id: "B", text: "Raw Data" },
      { id: "C", text: "Normalised" },
      { id: "D", text: "De-normalised" },
      { id: "E", text: "Read-optimized" }
    ],
    correctAnswerId: "D, E",
    explanation: "Le tabelle Gold sono tipicamente denormalizzate (de-normalised) e ottimizzate per la lettura (read-optimized) per facilitare il consumo da parte di tool BI e dashboard."
  },
  {
    id: 184,
    topic: "Liquid Clustering",
    questionText: "A data engineer has developed an ETL that produce a Delta managed table with liquid clustering feature activated as output. Several consumers are having issues regarding time delay when reading this table. How could the Data Engineer be sure about the OPTIMIZE command has been executed explicitly?",
    imageUrl: null,
    options: [
      { id: "A", text: "Check the system table system.storage.predictive_optimization_operations_history" },
      { id: "B", text: "Use SHOW TABLES EXTENDED to check the partitions columns used" },
      { id: "C", text: "Use DESCRIBE DETAIL table to see the file size and number of files for the table" },
      { id: "D", text: "Use DESCRIBE HISTORY table to check if exists any OPTIMIZE operation" }
    ],
    correctAnswerId: "D",
    explanation: "Il comando `DESCRIBE HISTORY` mostra la cronologia completa di tutte le transazioni effettuate sulla tabella, inclusi i comandi OPTIMIZE."
  },
  {
    id: 185,
    topic: "Audit Logs",
    questionText: "A data engineer is reviewing the documentation on audit logs in Databricks for compliance purposes and needs to understand the format in which audit logs output events. How are events formatted in Databricks audit logs?",
    imageUrl: null,
    options: [
      { id: "A", text: "In Databricks, audit logs output events in a JSON format." },
      { id: "B", text: "In Databricks, audit logs output events in a CSV format." },
      { id: "C", text: "In Databricks, audit logs output events in an XML format." },
      { id: "D", text: "In Databricks, audit logs output events in a plain text format." }
    ],
    correctAnswerId: "A",
    explanation: "Databricks utilizza il formato JSON per i suoi log di audit, poiché è flessibile e facilmente processabile da sistemi esterni di monitoraggio."
  },
  {
    id: 186,
    topic: "Compute Resources",
    questionText: "A Python file is ready to go into production and the client wants to use the cheapest but most efficient type of cluster possible. The workload is quite small, only processing 10GBs of data with only simple joins and no complex aggregations or wide transformations. Which cluster meets the requirement?",
    imageUrl: null,
    options: [
      { id: "A", text: "Interactive cluster" },
      { id: "B", text: "Job cluster with spot instances enabled" },
      { id: "C", text: "Job cluster with spot instances disabled" },
      { id: "D", text: "Job cluster with Photon enabled" }
    ],
    correctAnswerId: "B",
    explanation: "I Job Cluster con istanze spot attivate rappresentano l'opzione più economica per carichi di lavoro di produzione non critici che possono tollerare interruzioni."
  },
  {
    id: 187,
    topic: "Auto Loader",
    questionText: "A data engineer is working on a Databricks project that utilizes cloud storage. The data engineer wants to load several JSON files from containers on a storage account as soon as the file arrives within the storage account. Which syntax should the data engineer follow to first load the files into a dataframe and check that it is working as expected using Python?",
    imageUrl: null,
    options: [
      { id: "A", text: "df = spark.read.json(\"input/path\")" },
      { id: "B", text: "f = spark.readStream.format(\"cloud\").option(\"json\").load(\"/input/path\")" },
      { id: "C", text: "df = spark.readStream.format(\"json\".load(\"input/path\")" },
      { id: "D", text: "df = spark.readStream.format(\"cloudFiles\").option(\"cloudFiles.format\", \"json\").load(\"/input/path\")" }
    ],
    correctAnswerId: "D",
    explanation: "La sintassi corretta per utilizzare Auto Loader (cloudFiles) prevede la specifica del formato sorgente tramite opzioni dedicate."
  },
  {
    id: 188,
    topic: "Medallion Architecture",
    questionText: "A data engineer team has decided to implement a new data platform on Databricks and is currently deciding how to store each kind of data on each data layer. What is the appropriate layer and data pairing for medallion architecture?",
    imageUrl: null,
    options: [
      { id: "A", text: "Silver Layer - Raw data from deposit account application" },
      { id: "B", text: "Bronze Layer - Summary of cash deposit amount for each country and city" },
      { id: "C", text: "Silver Layer - Cleansed master customer data" },
      { id: "D", text: "Gold Layer - Deduplicated money transfer transaction" }
    ],
    correctAnswerId: "C",
    explanation: "Il livello Silver è destinato ai dati puliti (cleansed) e arricchiti, fungendo da ponte tra i dati grezzi del Bronze e gli aggregati del Gold."
  },
  {
    id: 189,
    topic: "Delta Live Tables",
    questionText: "A data engineer is processing ingested streaming tables and needs to filter out NULL values in the order_datetime column from the raw streaming table orders_raw and store the results in a new table orders_valid using DLT. Which code snippet should the data engineer use?",
    imageUrl: "/images/p23_q189.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "A",
    explanation: "In DLT SQL, i vincoli di qualità vengono definiti con la clausola CONSTRAINT e le aspettative (EXPECT), permettendo di scartare righe non conformi."
  },
  {
    id: 190,
    topic: "Unity Catalog",
    questionText: "A data engineer is managing a data pipeline in Databricks, where multiple Delta tables are used for various transformations. The team wants to track how data flows through the pipeline, including identifying dependencies between Delta tables, notebooks, jobs, and dashboards. How does Unity Catalog's data lineage feature support the visualization of relationships?",
    imageUrl: null,
    options: [
      { id: "A", text: "Unity Catalog lineage visualizes dependencies between Delta tables, notebooks, and jobs, but does not provide column-level tracing or relationships with dashboards." },
      { id: "B", text: "Unity Catalog lineage only supports visualizing relationships at the table level and does not extend to notebooks, jobs, or dashboards." },
      { id: "C", text: "Unity Catalog lineage provides an interactive graph that tracks dependencies between tables and notebooks but excludes any job-related dependencies or dashboard visualizations." },
      { id: "D", text: "Unity Catalog provides an interactive graph that visualizes the dependencies between Delta tables, notebooks, jobs, and dashboards, while also supporting column-level tracking of data transformations." }
    ],
    correctAnswerId: "D",
    explanation: "Unity Catalog offre una visualizzazione end-to-end che include tabelle, notebook, job e dashboard, arrivando fino al dettaglio delle singole colonne."
  },
  {
    id: 191,
    topic: "SQL Warehouse",
    questionText: "A data engineer needs to conduct Exploratory Analysis on data residing in a database that is within the company's custom-defined network in the cloud. The data engineer is using SQL for this task. Which type of SQL Warehouse will enable the data engineer to process large numbers of queries quickly and cost-effectively?",
    imageUrl: null,
    options: [
      { id: "A", text: "Serverless compute for notebooks" },
      { id: "B", text: "Pro SQL Warehouse" },
      { id: "C", text: "Classic SQL Warehouse" },
      { id: "D", text: "Serverless SQL Warehouse" }
    ],
    correctAnswerId: "D",
    explanation: "Il Serverless SQL Warehouse è l'opzione più bilanciata tra prestazioni e costi per query ad-hoc e analisi esplorative."
  },
  {
    id: 192,
    topic: "Unity Catalog Roles",
    questionText: "A data engineer is configuring Unity Catalog in Databricks and needs to assign a role to a user who should have the ability to grant and revoke privileges on various data objects within a specific schema, but should not have read/write access over the schema or its objects. Which role should the data engineer assign to this user?",
    imageUrl: null,
    options: [
      { id: "A", text: "Table Owner" },
      { id: "B", text: "Catalog Owner" },
      { id: "C", text: "Schema Owner" },
      { id: "D", text: "USE catalog/schema privilege on the schema" }
    ],
    correctAnswerId: "C",
    explanation: "Essere il proprietario dello schema (Schema Owner) permette di gestire i permessi su tutti gli oggetti in esso contenuti senza necessariamente avere accesso ai dati."
  },
  {
    id: 193,
    topic: "Debugging",
    questionText: "A data engineer is debugging a Python notebook in Databricks that processes a dataset using PySpark. The notebook fails with an error during a DataFrame transformation. The engineer wants to inspect the state of variables, such as the input DataFrame and intermediate results. Which tool should the engineer use?",
    imageUrl: null,
    options: [
      { id: "A", text: "Use the Databricks CLI to download and analyze driver logs" },
      { id: "B", text: "Use the Python Notebook Interactive Debugger to set breakpoints and inspect variable values in real-time" },
      { id: "C", text: "Use the Ganglia UI to monitor cluster resource usage" },
      { id: "D", text: "Use the Spark UI to analyze the execution plan" }
    ],
    correctAnswerId: "B",
    explanation: "Il debugger interattivo integrato nei notebook Databricks permette l'ispezione real-time delle variabili e il controllo del flusso tramite breakpoint."
  },
  {
    id: 194,
    topic: "External Tables",
    questionText: "A data engineer wants to create an external table in Databricks that references data stored in an Azure Data Lake Storage (ADLS) location. The goal is to enable Databricks to access and query this external data without moving it into the Databricks-managed storage. Which step should the data engineer take?",
    imageUrl: null,
    options: [
      { id: "A", text: "Use the CREATE MANAGED TABLE statement and specify the LOCATION clause" },
      { id: "B", text: "CREATE UNMANAGED TABLE statement without specifying a LOCATION clause" },
      { id: "C", text: "Use the CREATE TABLE statement and specify the LOCATION clause with the path to the external data" },
      { id: "D", text: "CREATE EXTERNAL TABLE statement without specifying a LOCATION clause" }
    ],
    correctAnswerId: "C",
    explanation: "Per creare una tabella esterna in Spark SQL si utilizza il comando CREATE TABLE specificando il percorso fisico tramite la clausola LOCATION."
  },
  {
    id: 195,
    topic: "Compute Resources",
    questionText: "A data engineer is developing a small proof of concept in a notebook. When running the entire notebook, the Cluster usage spikes. The data engineer wants to keep the development requirements and get real-time results. Which Cluster meets these requirements?",
    imageUrl: null,
    options: [
      { id: "A", text: "All Purpose Cluster with autoscaling" },
      { id: "B", text: "Job Cluster with Photon enabled and autoscaling" },
      { id: "C", text: "Job Cluster with autoscaling enabled" },
      { id: "D", text: "All-Purpose Cluster with a large fixed memory size" }
    ],
    correctAnswerId: "A",
    explanation: "Gli All Purpose Cluster sono progettati per l'uso interattivo e lo sviluppo; l'autoscaling gestisce i picchi di carico mantenendo i risultati real-time."
  },
  {
    id: 196,
    topic: "Compute Options",
    questionText: "A data engineer needs to process SQL queries on a large dataset with fluctuating workloads. The workload requires automatic scaling based on the volume of queries, without the need to manage or provision infrastructure. The solution should be cost-efficient and charge only for the compute resources used during query execution. Which compute option should the data engineer use?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks SQL Analytics" },
      { id: "B", text: "Databricks Runtime for ML" },
      { id: "C", text: "Databricks Jobs" },
      { id: "D", text: "Serverless SQL Warehouse" }
    ],
    correctAnswerId: "D",
    explanation: "Il Serverless SQL Warehouse elimina la gestione dell'infrastruttura e offre una fatturazione basata sull'uso effettivo durante le query."
  },
  {
    id: 197,
    topic: "Auto Loader",
    questionText: "What is the functionality of AutoLoader in Databricks?",
    imageUrl: null,
    options: [
      { id: "A", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling both batch and streaming data with support for schema evolution." },
      { id: "B", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling batch and streaming data with no support for schema evolution." },
      { id: "C", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling only streaming data with no support for schema evolution." },
      { id: "D", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling batch data with support for schema evolution." }
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader è versatile: ingerisce nuovi file in modo incrementale, supporta flussi batch e streaming e gestisce l'evoluzione dello schema."
  },
  {
    id: 198,
    topic: "Delta Sharing",
    questionText: "A company is collaborating with a partner that does not use Databricks but needs access to a large historical dataset stored in Delta format. The data engineer needs to ensure that the partner can access the data securely, without the need for them to set up an account, and with read-only access. How should the data be shared?",
    imageUrl: null,
    options: [
      { id: "A", text: "Share the dataset by exporting it to a CSV file" },
      { id: "B", text: "Grant your partner access to your Databricks workspace" },
      { id: "C", text: "Share the dataset using Unity Catalog within the same organization" },
      { id: "D", text: "Share the dataset using Delta Sharing, which allows your partner to access the data using a secure, read-only URL without requiring a Databricks account." }
    ],
    correctAnswerId: "D",
    explanation: "Delta Sharing permette la condivisione aperta (open sharing) verso utenti non Databricks tramite protocolli sicuri e URL di sola lettura."
  },
  {
    id: 199,
    topic: "Delta Lake Maintenance",
    questionText: "A data engineer is using the Databricks OPTIMIZE command on a Delta table. What happens when OPTIMIZE is run twice on the same table with the same data?",
    imageUrl: null,
    options: [
      { id: "A", text: "It has no effect because it is idempotent." },
      { id: "B", text: "It changes the number of tuples per file significantly." },
      { id: "C", text: "It further reduces file sizes by re-clustering the data." },
      { id: "D", text: "It triggers a full liquid clustering process." }
    ],
    correctAnswerId: "A",
    explanation: "Il comando OPTIMIZE è idempotente: se la tabella è già ottimizzata e non ci sono nuovi dati, non effettua alcuna operazione aggiuntiva."
  },
  {
    id: 200,
    topic: "Delta Sharing",
    questionText: "A data engineer at a company that uses Databricks with Unity Catalog needs to share a collection of tables with an external partner who also uses a Databricks workspace enabled for Unity Catalog. The data engineer decides to use Delta Sharing to accomplish this. What is the first piece of information the data engineer should request from the external partner to set up Delta Sharing?",
    imageUrl: null,
    options: [
      { id: "A", text: "The IP address of their Databricks workspace" },
      { id: "B", text: "The name of their Databricks cluster" },
      { id: "C", text: "The sharing identifier of their Unity Catalog metastore" },
      { id: "D", text: "Their Databricks account password" }
    ],
    correctAnswerId: "C",
    explanation: "Per configurare Delta Sharing tra due organizzazioni Databricks (Databricks-to-Databricks), è necessario ottenere lo 'sharing identifier' univoco del metastore del destinatario."
  },
  {
    id: 201,
    topic: "Databricks Workflows",
    questionText: "A Databricks workflow fails at the last stage due to an error in a notebook. This workflow runs daily. The data engineer fixes the mistake and wants to rerun the pipeline. This workflow is very costly and time-intensive to run. Which action should the data engineer do in order to minimise downtime and cost?",
    imageUrl: null,
    options: [
      { id: "A", text: "Re-run the entire workflow" },
      { id: "B", text: "Repair run" },
      { id: "C", text: "Restart the cluster" },
      { id: "D", text: "Switch to another cluster" }
    ],
    correctAnswerId: "B",
    explanation: "La funzione 'Repair run' permette di rieseguire solo i task che sono falliti, risparmiando tempo e costi di calcolo rispetto alla riesecuzione dell'intero workflow."
  },
  {
    id: 202,
    topic: "Serverless Compute",
    questionText: "An organization has implemented a data pipeline in Databricks and needs to ensure it can scale automatically based on varying workloads without manual cluster management. The goal is to meet the company's Service Level Agreements (SLAs), which require high availability and minimal downtime, while Databricks automatically handles resource allocation and optimization. Which approach fulfills these requirements?",
    imageUrl: null,
    options: [
      { id: "A", text: "Deploy Job Clusters with fixed configurations, dedicated to specific tasks, without automatic scaling." },
      { id: "B", text: "Use Spot Instances to allocate resources dynamically while minimizing costs, with potential interruptions." },
      { id: "C", text: "Use Interactive Clusters in Databricks, adjusting cluster sizes manually based on workload demands." },
      { id: "D", text: "Use Serverless compute in Databricks to automatically scale and provision resources with minimal manual intervention." }
    ],
    correctAnswerId: "D",
    explanation: "Il calcolo Serverless offre scalabilità automatica istantanea e gestione zero dell'infrastruttura, garantendo il rispetto degli SLA senza intervento manuale."
  },
  {
    id: 203,
    topic: "PySpark Aggregations",
    questionText: "A data engineer has been provided a PySpark DataFrame named df with columns product and revenue. The data engineer needs to compute complex aggregations to determine each product's total revenue, average revenue, and transaction count. Which code snippet should the data engineer use?",
    imageUrl: "/images/p24_q203.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "A",
    explanation: "L'opzione A utilizza correttamente le funzioni `F.sum`, `F.avg` e `F.count` all'interno del metodo `agg()` con gli alias corretti per le colonne di output."
  },
  {
    id: 204,
    topic: "Databricks Workflows",
    questionText: "A Databricks single-task workflow fails at the last task due to an error in a notebook. The data engineer fixes the mistake in the notebook. What should the data engineer do to rerun the workflow?",
    imageUrl: null,
    options: [
      { id: "A", text: "Repair the task" },
      { id: "B", text: "Rerun the pipeline" },
      { id: "C", text: "Restart the cluster" },
      { id: "D", text: "Switch the cluster" }
    ],
    correctAnswerId: "B",
    explanation: "In un workflow composto da un solo task, la funzione 'repair run' non è applicabile; la procedura standard dopo aver corretto il codice è rieseguire l'intera pipeline."
  },
  {
    id: 205,
    topic: "Unity Catalog Permissions",
    questionText: "A data engineer needs to provide access to a group named manufacturing-team. The team needs privileges to create tables in the quality schema. Which set of SQL commands will grant a group named manufacturing-team to create tables in a schema named production with the parent catalog named manufacturing with the least privileges?",
    imageUrl: null,
    options: [
      { id: "A", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
      { id: "B", text: "GRANT USE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
      { id: "C", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE CATALOG ON CATALOG manufacturing TO manufacturing-team;" },
      { id: "D", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-tearm; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;" }
    ],
    correctAnswerId: "A",
    explanation: "Per creare tabelle sono necessari i privilegi minimi di USE CATALOG sul catalogo genitore, USE SCHEMA sullo schema e CREATE TABLE sullo schema specifico."
  },
  {
    id: 206,
    topic: "Debugging",
    questionText: "A data engineer has written a function in a Databricks Notebook to calculate the population of bacteria in a given medium. Analysts use this function in the notebook and sometimes provide input arguments of the wrong data type, which can cause errors during execution. Which Databricks feature will help the data engineer quickly identify if an incorrect data type has been provided as input?",
    imageUrl: null,
    options: [
      { id: "A", text: "The Spark User interface has a debug tab that contains the variables that are used in this session." },
      { id: "B", text: "The Databricks debugger enables breakpoints that will raise an error if the wrong data type is submitted." },
      { id: "C", text: "The Databricks debugger enables the use of a variable explorer to see at a glance the value of the variables." },
      { id: "D", text: "The Data Engineer should add print statements to find out what the variable is." }
    ],
    correctAnswerId: "C",
    explanation: "Il Variable Explorer nel debugger di Databricks permette di visualizzare istantaneamente il valore e il tipo di ogni variabile Python, rendendo semplice individuare input errati."
  },
  {
    id: 207,
    topic: "Spark Performance",
    questionText: "A data engineer is inspecting an ETL pipeline based on a Pyspark job that consistently encounters performance bottlenecks. Based on developer feedback, the data engineer assumes the job is low on compute resources. To pinpoint the issue, the data engineer observes the Spark Ul and finds out the job has a high CPU time vs Task time. Which course of action should the data engineer take?",
    imageUrl: null,
    options: [
      { id: "A", text: "High CPU time vs Task time means an under-utilized cluster. The data engineer may need to repartition data to spread the jobs more evenly throughout the cluster." },
      { id: "B", text: "High CPU time vs Task time means efficient use of cluster and no change needed" },
      { id: "C", text: "High CPU time vs Task time means a CPU over-utilized job. The data engineer may need to consider executor and core tuning or resizing the cluster" },
      { id: "D", text: "High CPU time vs Task time means over-utilized memory and the need to increase parallelism" }
    ],
    correctAnswerId: "C",
    explanation: "Quando il tempo di CPU è elevato rispetto al tempo totale del task, significa che il processo è limitato dalla potenza di calcolo (CPU-bound) e richiede più core o un ridimensionamento del cluster."
  },
  {
    id: 208,
    topic: "Auto Loader Patterns",
    questionText: "A data engineer needs to parse only png files in a directory that contains files with different suffixes. Which code should the data engineer use to achieve this task?",
    imageUrl: "/images/p24_q208.png",
    options: [
      { id: "A", text: "Vedi opzione A nell'immagine" },
      { id: "B", text: "Vedi opzione B nell'immagine" },
      { id: "C", text: "Vedi opzione C nell'immagine" },
      { id: "D", text: "Vedi opzione D nell'immagine" }
    ],
    correctAnswerId: "B",
    explanation: "Per filtrare i file in base all'estensione con Auto Loader, è necessario utilizzare l'opzione `pathGlobFilter` (nota: nel PDF originale è scritto con la minuscola, ma è l'unica logica corretta)."
  },
  {
    id: 209,
    topic: "Serverless Compute",
    questionText: "Which languages are supported by Serverless compute clusters? (Choose two.)",
    imageUrl: null,
    options: [
      { id: "A", text: "SQL" },
      { id: "B", text: "Python" },
      { id: "C", text: "R" },
      { id: "D", text: "Scala" },
      { id: "E", text: "Java" }
    ],
    correctAnswerId: "A, B",
    explanation: "Al momento, i cluster Serverless in Databricks supportano principalmente SQL e Python per l'esecuzione di notebook e query."
  },
  {
    id: 210,
    topic: "Spark Troubleshooting",
    questionText: "A data engineer is developing an ETL process based on Spark SQL. The execution fails. The data engineer checks the Spark Ul and can see the ERRORS as follows: \"java.lang.OutofMemoryError: Java heap space\". Which two corrective actions should the data engineer perform to resolve this issue? (Choose two.)",
    imageUrl: null,
    options: [
      { id: "A", text: "Narrow the filters in order to collect less data in the query" },
      { id: "B", text: "Upsize the worker nodes and activate autoshuffle partitions" },
      { id: "C", text: "Upsize the driver node and deactivate autoshuffle partitions" },
      { id: "D", text: "Cache the dataset in order to boost the query performance" },
      { id: "E", text: "Fix the shuffle partitions to 50 to ensure the allocation" }
    ],
    correctAnswerId: "A, B",
    explanation: "Per risolvere l'errore di memoria (OOM), è necessario ridurre la quantità di dati elaborati tramite filtri o aumentare le risorse dei nodi worker attivando la gestione dinamica dei shuffle."
  },
  {
    id: 211,
    topic: "Medallion Architecture",
    questionText: "A Data Engineer is designing Bronze layer in Databricks Medallion Architecture. The raw data is collected from multiple sources (Clickstream in JSON, Transactions in CSV). The task is to design the Bronze layer of the Medallion Architecture to ingest and store this raw data for further processing. Which operation applies to the Bronze layer?",
    imageUrl: null,
    options: [
      { id: "A", text: "Ingest raw data without transformations, preserving original schemas, and store in Delta format." },
      { id: "B", text: "Clean and standardize raw data by removing null values and enforcing schemas." },
      { id: "C", text: "Apply complex business logic to enrich raw data with customer segmentation labels." },
      { id: "D", text: "Aggregate and transform source data to calculate daily sales performance metrics." }
    ],
    correctAnswerId: "A",
    explanation: "Il livello Bronze serve a catturare i dati grezzi così come arrivano dalla sorgente (raw), mantenendo lo schema originale per eventuali rielaborazioni future."
  },
  {
    id: 212,
    topic: "Medallion Architecture",
    questionText: "What is the primary function of the Silver layer in the Databricks medallion architecture?",
    imageUrl: null,
    options: [
      { id: "A", text: "Store historical data solely for auditing purposes" },
      { id: "B", text: "Aggregate and enrich data for business analytics" },
      { id: "C", text: "Validate, clean, and deduplicate data for further processing" },
      { id: "D", text: "Ingest raw data in its original state" }
    ],
    correctAnswerId: "C",
    explanation: "Il livello Silver è dedicato alla pulizia, validazione e rimozione dei duplicati, preparando i dati per il consumo analitico nel livello Gold."
  },
  {
    id: 213,
    topic: "Lakehouse Federation",
    questionText: "A data engineer needs to combine sales data from an on-premises PostgreSQL database with customer data in Azure Synapse for a comprehensive report. The goal is to avoid data duplication and ensure up-to-date information. How should the data engineer achieve this using Databricks?",
    imageUrl: null,
    options: [
      { id: "A", text: "Export data from both sources to CSV files and upload them to Databricks" },
      { id: "B", text: "Use Lakehouse Federation to query both data sources directly" },
      { id: "C", text: "Manually synchronize data from both sources into a single database" },
      { id: "D", text: "Develop custom ETL pipelines to ingest data into Databricks" }
    ],
    correctAnswerId: "B",
    explanation: "Lakehouse Federation permette di interrogare sorgenti esterne eterogenee direttamente, eliminando la necessità di spostare i dati e garantendo risultati sempre aggiornati."
  },
  {
    id: 214,
    topic: "Debugging",
    questionText: "A data engineer is working in a Python notebook on Databricks to process data, but notices that the output is not as expected. The data engineer wants to investigate the issue by stepping through the code and checking the values of certain variables during execution. Which tool should the data engineer use to inspect the code execution and variables in real-time?",
    imageUrl: null,
    options: [
      { id: "A", text: "Cluster Logs" },
      { id: "B", text: "Job Execution Dashboard" },
      { id: "C", text: "Python Notebook Interactive Debugger" },
      { id: "D", text: "SQL Analytics" }
    ],
    correctAnswerId: "C",
    explanation: "Il debugger interattivo dei notebook Python permette di eseguire il codice passo-passo e monitorare il valore delle variabili in tempo reale per identificare errori logici."
  },
  {
    id: 215,
    topic: "Performance Tuning",
    questionText: "A data engineer has inherited a Databricks pipeline from a previous team. The pipeline is missing its SLAs, and an initial investigation has identified memory spills in Spark. These increased runtimes are also driving up costs. The data engineer needs to reduce the runtime without significantly increasing costs. What should the data engineer do first to address this issue?",
    imageUrl: null,
    options: [
      { id: "A", text: "Tweak the \"spark.sql.shuffle.partitions\" configuration." },
      { id: "B", text: "Enable autoscaling in the cluster to match the requirements" },
      { id: "C", text: "Use a photon enabled execution engine." },
      { id: "D", text: "Ensure the cluster uses memory optimized node types." }
    ],
    correctAnswerId: "A",
    explanation: "Il 'memory spill' avviene quando le partizioni sono troppo grandi per la RAM; regolare correttamente il numero di partizioni di shuffle è il primo passo per ottimizzare l'uso della memoria e ridurre i tempi di esecuzione."
  },
  {
    id: 216,
    topic: "Liquid Clustering",
    questionText: "A data engineer is facing performance bottlenecks in an e-commerce transactions Delta table. The table is a managed Unity Catalog table, and it uses partitioning and Z-ordering in its data layout scheme. The predictive optimization for Unity Catalog tables is also enabled. The table has a frequently changing query filter, and the data engineer does not observe a benefit of the Data Layout or the Predictive Optimization. How should the data engineer fix the data layout bottlenecks?",
    imageUrl: null,
    options: [
      { id: "A", text: "Re-write the Data Layout with Liquid Clustering and cluster by the Z-Ordered columns." },
      { id: "B", text: "Enable Delta Caching so that query results can be read through caches." },
      { id: "C", text: "Tweak the Z-Order columns and run OPTIMIZE manually." },
      { id: "D", text: "Switch the Data layout from Partition+Z-Ordering to Automatic Liquid Clustering." }
    ],
    correctAnswerId: "D",
    explanation: "Liquid Clustering è progettato per adattarsi automaticamente ai pattern di query variabili, eliminando le inefficienze dei metodi rigidi come partizionamento e Z-ordering."
  },
  {
    id: 217,
    topic: "Liquid Clustering",
    questionText: "A data engineer needs to optimize the data layout and query performance for an e-commerce transactions Delta table. The table is partitioned by \"purchase_date\" a date column which helps with time-based queries but does not optimize searches on user statistics \"customer_id\", a high-cardinality column. The table is usually queried with filters on \"customer_id\" within specific date ranges, but since this data is spread across multiple files in each partition, it results in full partition scans and increased runtime and costs. How should the data engineer optimize the Data Layout for efficient reads?",
    imageUrl: null,
    options: [
      { id: "A", text: "Alter table implementing liquid clustering on \"customer_id\" while keeping the existing partitioning." },
      { id: "B", text: "Alter the table implementing liquid clustering by \"customer_id\" and \"purchase_date\"." },
      { id: "C", text: "Alter the table to partition by \"customer_id\"." },
      { id: "D", text: "Enable delta caching on the cluster so that frequent reads are cached for performance." }
    ],
    correctAnswerId: "B",
    explanation: "Implementare il Liquid Clustering su entrambe le colonne permette di ottimizzare le query sia per data che per ID cliente, superando i limiti del partizionamento tradizionale."
  },
  {
    id: 218,
    topic: "Asset Bundles",
    questionText: "What is the structure of an Asset Bundle?",
    imageUrl: null,
    options: [
      { id: "A", text: "A Docker image containing runtime environments and the source code of the assets" },
      { id: "B", text: "A compressed archive (ZIP) that solely contains workspace assets without any accompanying metadata" },
      { id: "C", text: "A single plain text file enumerating the names of assets to be migrated to a new workspace" },
      { id: "D", text: "A YAML configuration file that specifies the artifacts, resources, and configurations for the project" }
    ],
    correctAnswerId: "D",
    explanation: "I Databricks Asset Bundles (DAB) utilizzano file di configurazione YAML per definire in modo dichiarativo tutte le risorse e i parametri di un progetto."
  },
  {
    id: 219,
    topic: "DevOps",
    questionText: "A data engineer is maintaining an ETL pipeline code with a GitHub repository linked to their Databricks account. The data engineer wants to deploy the ETL pipeline to production as a databricks workflow. Which approach should the data engineer use?",
    imageUrl: null,
    options: [
      { id: "A", text: "Databricks Asset Bundles (DAB) + GitHub Integration" },
      { id: "B", text: "Maintain workflow_config.json and deploy it using Databricks CLI" },
      { id: "C", text: "Maintain workflow_config.json and deploy it using Terraform" },
      { id: "D", text: "Manually create and manage the workflow in UI" }
    ],
    correctAnswerId: "A",
    explanation: "L'integrazione tra DAB e GitHub è l'approccio consigliato per implementare flussi di CI/CD e distribuire pipeline in produzione in modo automatizzato."
  },
  {
    id: 220,
    topic: "Serverless",
    questionText: "A data engineer works for an organization that must meet a stringent Service Level Agreement (SLA) that demands minimal runtime errors and high availability for its data processing pipelines. The data engineer wants to avoid the operational overhead of managing and tuning clusters. Which architectural solution will meet the requirements?",
    imageUrl: null,
    options: [
      { id: "A", text: "Use an auto-scaling cluster configured and monitored by the user." },
      { id: "B", text: "Implement a hybrid approach with scheduled batch jobs on custom cloud VMs." },
      { id: "C", text: "Deploy a dedicated, manually managed cluster optimized by in-house IT staff." },
      { id: "D", text: "Utilize Databricks serverless compute that automatically optimizes resources and abstracts cluster management." }
    ],
    correctAnswerId: "D",
    explanation: "Il calcolo serverless astrae completamente la gestione dell'infrastruttura, garantendo scalabilità e disponibilità elevate senza carico operativo per il team."
  },
  {
    id: 221,
    topic: "Serverless Migration",
    questionText: "A data engineer wants to reduce costs and optimize cloud spending. The data engineer has decided to use Databricks Serverless for lowering cloud costs while maintaining existing SLAs. What is the first step in migrating to Databricks Serverless?",
    imageUrl: null,
    options: [
      { id: "A", text: "Legacy Ingestion pipelines that include ingestion from sources API’s, files, JDBC/ODBC connections" },
      { id: "B", text: "A frequently running and efficient Python-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog" },
      { id: "C", text: "A frequently running and efficient Scala-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog" },
      { id: "D", text: "Low frequency BI Dashboarding and Adhoc SQL Analytics" }
    ],
    correctAnswerId: "B",
    explanation: "La migrazione inizia tipicamente con carichi di lavoro moderni in Python, già conformi a Unity Catalog, per massimizzare i benefici immediati del serverless."
  },
  {
    id: 222,
    topic: "Compute",
    questionText: "A data engineering project involves processing large batches of data on a daily schedule using ETL. The jobs are resource-intensive and vary in size, requiring a scalable, cost-efficient compute solution that can automatically scale based on the workload. Which compute approach will satisfy the needs described?",
    imageUrl: null,
    options: [
      { id: "A", text: "Job Cluster" },
      { id: "B", text: "Dedicated Cluster" },
      { id: "C", text: "All-Purpose Cluster" },
      { id: "D", text: "Databricks SQL Serverless" }
    ],
    correctAnswerId: "A",
    explanation: "I Job Cluster sono cluster effimeri dedicati a task specifici; sono scalabili e rappresentano l'opzione più economica per carichi ETL pianificati."
  },
  {
    id: 223,
    topic: "Delta Sharing",
    questionText: "A data engineer is configuring Delta Sharing for a multi-team project where teams from different departments will need to access shared data. The data engineer has successfully created a Unity Catalog metastore and is now setting up the Delta Share. The goal is to ensure that internal teams can access the shared data with full permissions, while external partners can only read the data. Which action should the Data Engineer take to configure the sharing correctly?",
    imageUrl: null,
    options: [
      { id: "A", text: "Create a Delta Share, set up a secure access URL for internal teams and external partners, and distribute the URL to provide them access to the shared data." },
      { id: "B", text: "Create a Delta Share, add the internal team's tables and views, and assign READ/WRITE permissions to both external partners and internal teams." },
      { id: "C", text: "Assign READ permissions to external partners through the Delta Share and READ/WRITE permissions to internal teams, and ensure the correct tables and views are shared." },
      { id: "D", text: "Grant READ permissions to external partners and READ/WRITE permissions to internal teams through the Delta Share." }
    ],
    correctAnswerId: "C",
    explanation: "Delta Sharing permette di definire granularmente i permessi; i partner esterni ricevono tipicamente l'accesso in sola lettura tramite il protocollo di condivisione."
  },
  {
    id: 224,
    topic: "Governance",
    questionText: "A data engineer manages multiple external tables linked to various data sources. The data engineer wants to manage these external tables efficiently and ensure that only the necessary permissions are granted to users for accessing specific external tables. How should the data engineer manage access to these external tables?",
    imageUrl: null,
    options: [
      { id: "A", text: "Set up Azure Blob Storage permissions at the container level, allowing access to all external tables." },
      { id: "B", text: "Create a single user role with full access to all external tables and assign it to all users." },
      { id: "C", text: "Grant permissions on the Databricks workspace level, which will automatically apply to all external tables." },
      { id: "D", text: "Use Unity Catalog to manage access controls and permissions for each external table individually." }
    ],
    correctAnswerId: "D",
    explanation: "Unity Catalog è il motore di governance centralizzato che permette di gestire i permessi su ogni singolo oggetto (tabella, vista) in modo granulare e indipendente dallo storage fisico."
  },
  {
    id: 225,
    topic: "Delta Sharing Costs",
    questionText: "An organization plans to share a large dataset stored in a Databricks workspace on AWS with a partner organization whose Databricks workspace is hosted on Azure. The data engineer wants to minimize data transfer costs while ensuring secure and efficient data sharing. Which strategy will reduce data egress costs associated with cross-cloud data sharing?",
    imageUrl: null,
    options: [
      { id: "A", text: "Migrating the dataset to Cloudflare R2 object storage before sharing" },
      { id: "B", text: "Configure VPN connection between AWS and Azure for faster data sharing" },
      { id: "C", text: "Using Delta Sharing without any additional configurations" },
      { id: "D", text: "Sharing data via pre-signed URLs without monitoring egress costs" }
    ],
    correctAnswerId: "C",
    explanation: "Delta Sharing è ottimizzato per minimizzare i movimenti di dati; tuttavia, in alcuni contesti, non richiede configurazioni di rete complesse per garantire la sicurezza del trasferimento."
  },
  {
    id: 226,
    topic: "Governance",
    questionText: "A data engineer is setting up access control in Unity Catalog and needs to ensure that a group of data analysts can query tables but not modify data. Which permission should the data engineer grant to the data analysts?",
    imageUrl: null,
    options: [
      { id: "A", text: "ALL PRIVILEGES" },
      { id: "B", text: "MODIFY" },
      { id: "C", text: "SELECT" },
      { id: "D", text: "INSERT" }
    ],
    correctAnswerId: "C",
    explanation: "Il privilegio SELECT permette di leggere e interrogare i dati senza avere la possibilità di alterarli, inserirne di nuovi o cancellarli."
  },
  {
    id: 227,
    topic: "Lineage",
    questionText: "What Databricks feature can be used to check the data sources and tables used in a workspace?",
    imageUrl: null,
    options: [
      { id: "A", text: "Use the lineage feature to visualize a graph that highlights where the table is used only in reports." },
      { id: "B", text: "Use the lineage feature to visualize a graph that highlights where the table is used only in notebooks." },
      { id: "C", text: "Use the lineage feature to visualize a graph that shows all dependencies, including where the table is used in notebooks, other tables, and reports." },
      { id: "D", text: "Do not use the lineage feature as it only tracks activity from the last 3 months and will not provide full details on dependencies." }
    ],
    correctAnswerId: "C",
    explanation: "La funzionalità di Lineage di Unity Catalog fornisce una visione olistica e interattiva di tutte le dipendenze degli asset nel workspace."
  },
  {
    id: 228,
    topic: "Delta Sharing",
    questionText: "A data engineer is getting a partner organization up to speed with Databricks account. Both the teams share some business use cases. The data engineer has to share some of your Unity-Catalog managed delta tables and the notebook jobs creating those tables with the partner organization. How can the data engineer seamlessly share the required information?",
    imageUrl: null,
    options: [
      { id: "A", text: "Zip all the code and share via email and allow data ingestion from your data lake" },
      { id: "B", text: "Share required datasets and notebooks via Delta Sharing. Manage permissions via Unity Catalog." },
      { id: "C", text: "Data and Notebooks can be shared simply using Unity Catalog." },
      { id: "D", text: "Share access to codebase via Github and allow them to ingest datasets from your Datalake." }
    ],
    correctAnswerId: "B",
    explanation: "Delta Sharing è lo strumento dedicato per condividere in modo sicuro asset (dati e notebook) con organizzazioni esterne mantenendo il controllo tramite Unity Catalog."
  }
];