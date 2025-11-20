import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "General",
    questionText: "A data engineer is working with two tables. Each of these tables is displayed below in its entirety. The data engineer runs the following query to join these tables together: Which of the following will be returned by the above query?",
    options: [
      { id: "A", text: "[Missing Image/Data]" },
      { id: "B", text: "[Missing Image/Data]" },
      { id: "C", text: "[Missing Image/Data]" },
      { id: "D", text: "[Missing Image/Data]" },
    ],
    correctAnswerId: "C",
    explanation: "La risposta dipende dai dati visivi non presenti nel file originale. Tuttavia, in generale, ricorda che un INNER JOIN restituisce solo le righe che hanno una corrispondenza in entrambe le tabelle, mentre un OUTER JOIN (Left/Right/Full) include anche righe senza corrispondenza."
  },
  {
    id: 2,
    topic: "General",
    questionText: "A data organization leader is upset about the data analysis team’s reports being different from the data engineering team’s reports. The leader believes the siloed nature of their organization’s data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?",
    options: [
      { id: "A", text: "Both teams would autoscale their work as data size evolves" },
      { id: "B", text: "Both teams would use the same source of truth for their work" },
      { id: "C", text: "Both teams would reorganize to report to the same department" },
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" },
      { id: "E", text: "Both teams would respond more quickly to ad-hoc requests" },
    ],
    correctAnswerId: "B",
    explanation: "Il vantaggio principale dell'architettura Lakehouse è l'unificazione. Invece di avere un Data Lake per i dati grezzi/engineering e un Data Warehouse separato per l'analisi (creando copie e disallineamenti), entrambi i team lavorano sugli stessi dati (Single Source of Truth) gestiti da Delta Lake."
  },
  {
    id: 3,
    topic: "SQL",
    questionText: "Which of the following benefits is provided by the array functions from Spark SQL?",
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" },
    ],
    correctAnswerId: "D",
    explanation: "Le funzioni array (come `explode`, `array_contains`, `filter`) sono essenziali quando si lavora con dati semi-strutturati come i JSON, permettendo di manipolare strutture nidificate complessa direttamente in SQL."
  },
  {
    id: 4,
    topic: "General",
    questionText: "Which of the following describes a scenario in which a data team will want to utilize cluster pools?",
    options: [
      { id: "A", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "B", text: "An automated report needs to be made reproducible." },
      { id: "C", text: "An automated report needs to be tested to identify errors." },
      { id: "D", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "E", text: "An automated report needs to be runnable by all stakeholders." },
    ],
    correctAnswerId: "A",
    explanation: "I Cluster Pools mantengono un set di istanze (VM) in stato 'idle' pronte all'uso. Questo riduce drasticamente il tempo di avvio del cluster (spesso da minuti a secondi), ideale per job che richiedono bassa latenza o esecuzione rapida."
  },
  {
    id: 5,
    topic: "General",
    questionText: "Which of the following is hosted completely in the control plane of the classic Databricks architecture?",
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "JDBC data source" },
      { id: "C", text: "Databricks web application" },
      { id: "D", text: "Databricks Filesystem" },
      { id: "E", text: "Driver node" },
    ],
    correctAnswerId: "C",
    explanation: "Nell'architettura classica, il 'Control Plane' (gestito da Databricks) ospita l'applicazione web, la gestione degli account e i notebook manager. Il 'Data Plane' (dove risiedono Driver e Worker nodes) risiede nel cloud account del cliente."
  },
  {
    id: 6,
    topic: "Delta Lake",
    questionText: "Which of the following benefits of using the Databricks Lakehouse Platform is provided by Delta Lake?",
    options: [
      { id: "A", text: "The ability to manipulate the same data using a variety of languages" },
      { id: "B", text: "The ability to collaborate in real time on a single notebook" },
      { id: "C", text: "The ability to set up alerts for query failures" },
      { id: "D", text: "The ability to support batch and streaming workloads" },
      { id: "E", text: "The ability to distribute complex data operations" },
    ],
    correctAnswerId: "D",
    explanation: "Delta Lake, grazie al suo transaction log (ACID), permette a job Batch e job Streaming di leggere e scrivere sulla stessa tabella simultaneamente e in modo coerente, unificando le due architetture (Lambda architecture semplificata)."
  },
  {
    id: 7,
    topic: "Delta Lake",
    questionText: "Which of the following describes the storage organization of a Delta table?",
    options: [
      { id: "A", text: "Delta tables are stored in a single file that contains data, history, metadata, and other attributes." },
      { id: "B", text: "Delta tables store their data in a single file and all metadata in a collection of files in a separate location." },
      { id: "C", text: "Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes." },
      { id: "D", text: "Delta tables are stored in a collection of files that contain only the data stored within the table." },
      { id: "E", text: "Delta tables are stored in a single file that contains only the data stored within the table." },
    ],
    correctAnswerId: "C",
    explanation: "Una tabella Delta non è un singolo file. È una directory che contiene molti file di dati (solitamente Parquet) e una sottocartella `_delta_log` che contiene i file JSON/Checkpoint per la cronologia, i metadati e le transazioni."
  },
  {
    id: 8,
    topic: "Delta Lake",
    questionText: "Which of the following code blocks will remove the rows where the value in column age is greater than 25 from the existing Delta table my_table and save the updated table?",
    options: [
      { id: "A", text: "SELECT * FROM my_table WHERE age > 25;" },
      { id: "B", text: "UPDATE my_table WHERE age > 25;" },
      { id: "C", text: "DELETE FROM my_table WHERE age > 25;" },
      { id: "D", text: "UPDATE my_table WHERE age <= 25;" },
      { id: "E", text: "DELETE FROM my_table WHERE age <= 25;" },
    ],
    correctAnswerId: "C",
    explanation: "Il comando SQL standard per rimuovere righe fisiche da una tabella è `DELETE FROM ... WHERE condition`. `SELECT` legge solo, `UPDATE` modifica i valori ma non rimuove la riga."
  },
  {
    id: 9,
    topic: "General",
    questionText: "Which tool is used by Auto Loader to process data incrementally?",
    options: [
      { id: "A", text: "Checkpointing" },
      { id: "B", text: "Spark Structured Streaming" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Unity Catalog" },
    ],
    correctAnswerId: "B",
    explanation: "Auto Loader (`cloudFiles`) è costruito sopra Spark Structured Streaming. Usa le funzionalità di streaming per rilevare nuovi file (tramite directory listing o notifiche file) e processarli man mano che arrivano."
  },
  {
    id: 10,
    topic: "Delta Lake",
    questionText: "A data engineer has realized that they made a mistake when making a daily update to a table. They need to use Delta time travel to restore the table to a version that is 3 days old. However, when the data engineer attempts to time travel to the older version, they are unable to restore the data because the data files have been deleted. Which of the following explains why the data files are no longer present?",
    options: [
      { id: "A", text: "The VACUUM command was run on the table" },
      { id: "B", text: "The TIME TRAVEL command was run on the table" },
      { id: "C", text: "The DELETE HISTORY command was run on the table" },
      { id: "D", text: "The OPTIMIZE command was run on the table" },
      { id: "E", text: "The HISTORY command was run on the table" },
    ],
    correctAnswerId: "A",
    explanation: "Il comando `VACUUM` rimuove fisicamente i file di dati non più referenziati dal log corrente (vecchie versioni) per risparmiare spazio. Una volta eseguito `VACUUM` con una retention inferiore ai 3 giorni, il Time Travel verso quei giorni non è più possibile."
  },
  {
    id: 11,
    topic: "General",
    questionText: "Which of the following commands will return the number of null values in the member_id column?",
    options: [
      { id: "A", text: "SELECT count(member_id) FROM my_table;" },
      { id: "B", text: "SELECT count(member_id) - count_null(member_id) FROM my_table;" },
      { id: "C", text: "SELECT count_if(member_id IS NULL) FROM my_table;" },
      { id: "D", text: "SELECT null(member_id) FROM my_table;" },
    ],
    correctAnswerId: "C",
    explanation: "`count(colonna)` conta solo i valori NON nulli. Per contare i nulli si può usare `count(*)` con una `WHERE`, oppure in modo più elegante `count_if(condizione)` dove la condizione è `IS NULL`."
  },
  {
    id: 12,
    topic: "General",
    questionText: "Which of the following Git operations must be performed outside of Databricks Repos (assuming basic functionality)?",
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Push" },
      { id: "D", text: "Clone" },
      { id: "E", text: "Merge" },
    ],
    correctAnswerId: "E",
    explanation: "Sebbene Databricks Repos (ora 'Git Folders') sia migliorato molto, storicamente operazioni complesse come la gestione delle Pull Request (PR) e il Merge finale su rami protetti (es. main) vengono fatte nell'interfaccia del provider Git (GitHub/GitLab/Azure DevOps), non direttamente nella UI di Databricks."
  },
  {
    id: 13,
    topic: "General",
    questionText: "Which of the following data lakehouse features results in improved data quality over a traditional data lake?",
    options: [
      { id: "A", text: "A data lakehouse provides storage solutions for structured and unstructured data." },
      { id: "B", text: "A data lakehouse supports ACID-compliant transactions." },
      { id: "C", text: "A data lakehouse allows the use of SQL queries to examine data." },
      { id: "D", text: "A data lakehouse stores data in open formats." },
      { id: "E", text: "A data lakehouse enables machine learning and artificial Intelligence workloads." },
    ],
    correctAnswerId: "B",
    explanation: "Le transazioni ACID (Atomicity, Consistency, Isolation, Durability) garantiscono che i dati non vengano corrotti da scritture parziali o fallite, un problema comune nei Data Lake tradizionali che portava a scarsa qualità dei dati."
  },
  {
    id: 14,
    topic: "General",
    questionText: "A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
    options: [
      { id: "A", text: "Spark SQL Table" },
      { id: "B", text: "View" },
      { id: "C", text: "Delta Table" },
      { id: "D", text: "Temporary view" },
    ],
    correctAnswerId: "D",
    explanation: "Una `Temporary View` esiste solo all'interno della sessione Spark corrente. Non copia dati (è solo una query salvata logica) e scompare quando la sessione termina, soddisfacendo i requisiti di isolamento e risparmio storage."
  },
  {
    id: 15,
    topic: "General",
    questionText: "A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. Which of the following is an advantage of using Databricks Repos over the Databricks Notebooks versioning?",
    options: [
      { id: "A", text: "Databricks Repos automatically saves development progress" },
      { id: "B", text: "Databricks Repos supports the use of multiple branches" },
      { id: "C", text: "Databricks Repos allows users to revert to previous versions of a notebook" },
      { id: "D", text: "Databricks Repos provides the ability to comment on specific changes" },
      { id: "E", text: "Databricks Repos is wholly housed within the Databricks Lakehouse Platform" },
    ],
    correctAnswerId: "B",
    explanation: "Il versionamento interno dei notebook è lineare (solo cronologia). Databricks Repos integra Git reale, permettendo il 'branching' (ramificazioni), essenziale per lavorare in parallelo su feature diverse senza disturbare il codice principale."
  },
  {
    id: 16,
    topic: "Delta Lake",
    questionText: "A data engineer has left the organization. The data team needs to transfer ownership of the data engineer’s Delta tables to a new data engineer. The new data engineer is the lead engineer on the data team. Assuming the original data engineer no longer has access, which of the following individuals must be the one to transfer ownership of the Delta tables in Data Explorer?",
    options: [
      { id: "A", text: "Databricks account representative" },
      { id: "B", text: "This transfer is not possible" },
      { id: "C", text: "Workspace administrator" },
      { id: "D", text: "New lead data engineer" },
      { id: "E", text: "Original data engineer" },
    ],
    correctAnswerId: "C",
    explanation: "Solo un Workspace Administrator (o il proprietario attuale, che però non ha più accesso) ha i privilegi elevati necessari per forzare il cambio di ownership di un oggetto se il proprietario originale non può farlo."
  },
  {
    id: 17,
    topic: "Delta Lake",
    questionText: "A data analyst has created a Delta table sales that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following commands could the data engineering team use to access sales in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "There is no way to share data between PySpark and SQL." },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table('sales')" },
      { id: "E", text: "spark.table('sales')" },
    ],
    correctAnswerId: "E",
    explanation: "`spark.table('nome_tabella')` è il metodo PySpark standard per creare un DataFrame leggendo da una tabella registrata nel metastore (indipendentemente dal fatto che sia stata creata in SQL)."
  },
  {
    id: 18,
    topic: "General",
    questionText: "Which of the following commands will return the location of database customer360?",
    options: [
      { id: "A", text: "DESCRIBE LOCATION customer360;" },
      { id: "B", text: "DROP DATABASE customer360;" },
      { id: "C", text: "DESCRIBE DATABASE customer360;" },
      { id: "D", text: "ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user'};" },
      { id: "E", text: "USE DATABASE customer360;" },
    ],
    correctAnswerId: "C",
    explanation: "`DESCRIBE DATABASE nome_db` (o `DESCRIBE SCHEMA`) restituisce i metadati dell'oggetto, inclusa la sua 'Location' fisica nello storage (es. `dbfs:/...` o `s3://...`)."
  },
  {
    id: 19,
    topic: "General",
    questionText: "A data engineer wants to create a new table containing the names of customers that live in France. They have written the following command... A senior data engineer mentions that it is organization policy to include a table property indicating that the new table includes personally identifiable information (PII). Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "There is no way to indicate whether a table contains PII." },
      { id: "B", text: "'COMMENT PII'" },
      { id: "C", text: "TBLPROPERTIES PII" },
      { id: "D", text: "COMMENT 'Contains PII'" },
      { id: "E", text: "PII" },
    ],
    correctAnswerId: "D",
    explanation: "In SQL standard (e Databricks), puoi aggiungere commenti agli oggetti usando la keyword `COMMENT`. È una best practice comune per documentare il contenuto, come la presenza di PII. (Nota: anche `TBLPROPERTIES` è valido per i tag, ma `COMMENT` è più diretto per descrizioni testuali)."
  },
  {
    id: 20,
    topic: "General",
    questionText: "What is stored in the Databricks customer's cloud account?",
    options: [
      { id: "A", text: "Databricks web application" },
      { id: "B", text: "Cluster management metadata" },
      { id: "C", text: "Notebooks" },
      { id: "D", text: "Data" },
    ],
    correctAnswerId: "D",
    explanation: "Databricks opera su un modello a responsabilità condivisa. Il codice applicativo e la UI sono nel Control Plane (account Databricks), mentre i Dati veri e propri risiedono nel Cloud Storage (S3/ADLS/GCS) del cliente per motivi di sicurezza e sovranità."
  },
  {
    id: 21,
    topic: "SQL",
    questionText: "Which of the following benefits is provided by the array functions from Spark SQL?",
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" },
      { id: "E", text: "An ability to work with an array of tables for procedural automation" },
    ],
    correctAnswerId: "D",
    explanation: "Domanda duplicata (vedi ID 3). Confermo: le funzioni array servono per gestire dati complessi e nidificati (nested data), tipici di formati come JSON o Avro."
  },
  {
    id: 22,
    topic: "Delta Lake",
    questionText: "Which of the following commands can be used to write data into a Delta table while avoiding the writing of duplicate records?",
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "IGNORE" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" },
      { id: "E", text: "INSERT" },
    ],
    correctAnswerId: "C",
    explanation: "`MERGE INTO` è il comando specifico per fare 'upsert' (update o insert). Permette di controllare se un record esiste già (matching su una chiave): se esiste lo aggiorni o lo ignori, se non esiste lo inserisci, evitando duplicati."
  },
  {
    id: 23,
    topic: "General",
    questionText: "A data engineer is designing a data pipeline. The source system generates files in a shared directory... The data engineer needs to identify which files are new since the previous run in the pipeline, and set up the pipeline to only ingest those new files with each run. Which of the following tools can the data engineer use to solve this problem?",
    options: [
      { id: "A", text: "Unity Catalog" },
      { id: "B", text: "Delta Lake" },
      { id: "C", text: "Databricks SQL" },
      { id: "D", text: "Auto Loader" },
    ],
    correctAnswerId: "D",
    explanation: "Auto Loader (`spark.readStream.format('cloudFiles')`) è progettato esattamente per questo: traccia quali file sono già stati processati in una directory (usando RocksDB o directory listing) e ingerisce solo i nuovi file in modo efficiente ed esattamente una volta."
  },
  {
    id: 24,
    topic: "SQL",
    questionText: "A data engineer needs to apply custom logic to string column city in table stores for a specific use case. In order to apply this custom logic at scale, the data engineer wants to create a SQL user-defined function (UDF). Which of the following code blocks creates this SQL UDF?",
    options: [
      { id: "A", text: "[Code Missing in Source]" },
      { id: "B", text: "[Code Missing in Source]" },
      { id: "C", text: "[Code Missing in Source]" },
      { id: "D", text: "[Code Missing in Source]" },
      { id: "E", text: "[Code Missing in Source]" },
    ],
    correctAnswerId: "A",
    explanation: "Attenzione: Le opzioni di codice mancano nel file sorgente. La sintassi corretta sarebbe comunque: `CREATE FUNCTION nome_funzione(parametro TIPO) RETURNS TIPO RETURN espressione;`."
  },
  {
    id: 25,
    topic: "SQL",
    questionText: "A data analyst has a series of queries in a SQL program. The data analyst wants this program to run every day. They only want the final query in the program to run on Sundays. They ask for help from the data engineering team to complete this task. Which of the following approaches could be used by the data engineering team to complete this task?",
    options: [
      { id: "A", text: "They could submit a feature request with Databricks to add this functionality." },
      { id: "B", text: "They could wrap the queries using PySpark and use Python’s control flow system to determine when to run the final query." },
      { id: "C", text: "They could only run the entire program on Sundays." },
      { id: "D", text: "They could automatically restrict access to the source table in the final query so that it is only accessible on Sundays." },
      { id: "E", text: "They could redesign the data model to separate the data used in the final query into a new table." },
    ],
    correctAnswerId: "B",
    explanation: "SQL è un linguaggio dichiarativo e ha scarse capacità di controllo di flusso (come if/else basati su date). Python (PySpark) è imperativo: puoi facilmente scrivere `if datetime.today().weekday() == 6: spark.sql('...').`"
  },
  {
    id: 26,
    topic: "General",
    questionText: "A data engineer runs a statement every day to copy the previous day’s sales into the table transactions... Today, the data engineer runs the following command... After running the command today, the data engineer notices that the number of records in table transactions has not changed. Which of the following describes why the statement might not have copied any new records into the table?",
    options: [
      { id: "A", text: "The format of the files to be copied were not included with the FORMAT_OPTIONS keyword." },
      { id: "B", text: "The names of the files to be copied were not included with the FILES keyword." },
      { id: "C", text: "The previous day’s file has already been copied into the table." },
      { id: "D", text: "The PARQUET file format does not support COPY INTO." },
      { id: "E", text: "The COPY INTO statement requires the table to be refreshed to view the copied rows." },
    ],
    correctAnswerId: "C",
    explanation: "Il comando `COPY INTO` è idempotente: tiene traccia dei file già caricati. Se provi a rieseguirlo sugli stessi file sorgente, non duplica i dati, semplicemente non fa nulla (skip). Questo spiega perché il conteggio non è cambiato."
  },
  {
    id: 27,
    topic: "General",
    questionText: "In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
    options: [
      { id: "A", text: "When the location of the data needs to be changed" },
      { id: "B", text: "When the target table is an external table" },
      { id: "C", text: "When the source is not a Delta table" },
      { id: "D", text: "When the target table cannot contain duplicate records" },
    ],
    correctAnswerId: "D",
    explanation: "`INSERT INTO` aggiunge ciecamente righe (append). Se la tabella di destinazione non deve avere duplicati (ad esempio, stai ricaricando dati corretti), devi usare `MERGE INTO` per fare il match sulle chiavi esistenti e aggiornare invece di duplicare."
  },
  {
    id: 28,
    topic: "SQL",
    questionText: "A data engineer needs to create a table in Databricks using data from their organization’s existing SQLite database. They run the following command... Which of the following lines of code fills in the above blank to successfully complete the task?",
    options: [
      { id: "A", text: "org.apache.spark.sql.jdbc" },
      { id: "B", text: "autoloader" },
      { id: "C", text: "DELTA" },
      { id: "D", text: "sqlite" },
      { id: "E", text: "org.apache.spark.sql.sqlite" },
    ],
    correctAnswerId: "A",
    explanation: "Per connettersi a database relazionali esterni (come SQLite, PostgreSQL, Oracle), Spark usa il formato JDBC. La stringa corretta per il driver/format è tipicamente legata al connettore JDBC, quindi `org.apache.spark.sql.jdbc` o semplicemente `jdbc` se configurato."
  },
  {
    id: 29,
    topic: "SQL",
    questionText: "Duplicate of previous SQLite question.",
    options: [
      { id: "A", text: "org.apache.spark.sql.jdbc" },
      { id: "B", text: "autoloader" },
      { id: "C", text: "org.apache.spark.sql.sqlite" },
      { id: "D", text: "sqlite" },
    ],
    correctAnswerId: "A",
    explanation: "Domanda duplicata. La risposta rimane la connessione via JDBC."
  },
  {
    id: 30,
    topic: "General",
    questionText: "A data engineering team has two tables: march_transactions and april_transactions. There are no duplicate records between the tables. Which of the following commands should be run to create a new table all_transactions that contains all records from both without duplicate records?",
    options: [
      { id: "A", text: "INNER JOIN" },
      { id: "B", text: "UNION" },
      { id: "C", text: "OUTER JOIN" },
      { id: "D", text: "INTERSECT" },
      { id: "E", text: "MERGE" },
    ],
    correctAnswerId: "B",
    explanation: "L'operatore SQL per combinare verticalmente i risultati di due tabelle (mettere le righe di aprile sotto quelle di marzo) è `UNION` (o `UNION ALL`). Dato che il testo dice che non ci sono duplicati tra le tabelle, `UNION` è la scelta corretta per unirle in un unico dataset."
  },
  {
    id: 31,
    topic: "Streaming",
    questionText: "A data engineer has configured a Structured Streaming job... If the data engineer only wants the query to execute a micro-batch to process data every 5 seconds, which of the following lines of code should the data engineer use to fill in the blank?",
    options: [
      { id: "A", text: "trigger('5 seconds')" },
      { id: "B", text: "trigger()" },
      { id: "C", text: "trigger(once='5 seconds')" },
      { id: "D", text: "trigger(processingTime='5 seconds')" },
      { id: "E", text: "trigger(continuous='5 seconds')" },
    ],
    correctAnswerId: "D",
    explanation: "In Structured Streaming, il trigger definisce quando processare i dati. `processingTime='5 seconds'` indica al motore di avviare un micro-batch ogni 5 secondi. Se usassi `availableNow` o `once`, processerebbe tutto e si fermerebbe."
  },
  {
    id: 32,
    topic: "Delta Lake",
    questionText: "A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW. What is the expected behavior when a batch of data containing data that violates these constraints is processed?",
    options: [
      { id: "A", text: "Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table." },
      { id: "B", text: "Records that violate the expectation are added to the target dataset and flagged as invalid." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log." },
      { id: "E", text: "Records that violate the expectation cause the job to fail." },
    ],
    correctAnswerId: "C",
    explanation: "In DLT (Delta Live Tables), `ON VIOLATION DROP ROW` impedisce ai dati 'sporchi' di entrare nella tabella finale, ma l'evento viene comunque tracciato nei log del sistema (event log) per monitorare la qualità dei dati. Non crea automaticamente una 'quarantine table' separata (quello richiederebbe logica custom)."
  },
  {
    id: 33,
    topic: "Delta Lake",
    questionText: "Which of the following describes when to use the CREATE STREAMING LIVE TABLE syntax over the CREATE LIVE TABLE syntax when creating Delta Live Tables (DLT) tables using SQL?",
    options: [
      { id: "A", text: "CREATE STREAMING LIVE TABLE should be used when the subsequent step in the DLT pipeline is static." },
      { id: "B", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed incrementally." },
      { id: "C", text: "CREATE STREAMING LIVE TABLE is redundant for DLT and it does not need to be used." },
      { id: "D", text: "CREATE STREAMING LIVE TABLE should be used when data needs to be processed through complicated aggregations." },
      { id: "E", text: "CREATE STREAMING LIVE TABLE should be used when the previous step in the DLT pipeline is static." },
    ],
    correctAnswerId: "B",
    explanation: "La differenza chiave in DLT è: `LIVE TABLE` è per carichi completi (riprocessa tutto ogni volta), mentre `STREAMING LIVE TABLE` legge da una sorgente di streaming (come Kafka o Auto Loader) e processa solo i nuovi dati in modo incrementale."
  },
  {
    id: 34,
    topic: "Streaming",
    questionText: "A data engineer has joined an existing project and they see the following query: CREATE STREAMING LIVE TABLE loyal_customers AS SELECT customer_id FROM STREAM(LIVE.customers) WHERE loyalty_level = 'high'; Which of the following describes why the STREAM function is included in the query?",
    options: [
      { id: "A", text: "The STREAM function is not needed and will cause an error." },
      { id: "B", text: "The data in the customers table has been updated since its last run." },
      { id: "C", text: "The customers table is a streaming live table." },
      { id: "D", text: "The customers table is a reference to a Structured Streaming query on a PySpark DataFrame." },
    ],
    correctAnswerId: "C",
    explanation: "La funzione `STREAM()` in DLT SQL converte una tabella Delta statica o una Live Table esistente in una sorgente di streaming 'append-only'. Questo permette di leggere incrementalmente le nuove righe aggiunte alla tabella `LIVE.customers`."
  },
  {
    id: 35,
    topic: "General",
    questionText: "How can Git operations must be performed outside of Databricks Repos?",
    options: [
      { id: "A", text: "Commit" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Clone" },
    ],
    correctAnswerId: "C",
    explanation: "In Databricks Repos (Git Folders), puoi fare Commit, Push e Pull. Tuttavia, il 'Merge' (specialmente di Pull Request complesse) viene tipicamente gestito nell'interfaccia del provider Git (es. GitHub, GitLab) per sfruttare la code review, e non direttamente nella UI di Databricks."
  },
  {
    id: 36,
    topic: "Delta Lake",
    questionText: "A data engineer has three tables in a Delta Live Tables (DLT) pipeline... They notice that some data is being dropped due to quality concerns. They would like to determine at which table in their pipeline the data is being dropped. Which of the following approaches can the data engineer take?",
    options: [
      { id: "A", text: "They can set up separate expectations for each table when developing their DLT pipeline." },
      { id: "B", text: "They cannot determine which table is dropping the records." },
      { id: "C", text: "They can set up DLT to notify them via email when records are dropped." },
      { id: "D", text: "They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics." },
    ],
    correctAnswerId: "D",
    explanation: "L'interfaccia utente (UI) delle Pipeline DLT mostra un grafico DAG. Cliccando su ogni nodo (tabella), si apre un pannello laterale che mostra le statistiche di Data Quality, inclusi quanti record hanno violato le aspettative e sono stati scartati."
  },
  {
    id: 37,
    topic: "Streaming",
    questionText: "A data engineer has a single-task Job... After identifying an upstream data issue, they need to set up another task to run a new notebook prior to the original task. Which of the following approaches can the data engineer use?",
    options: [
      { id: "A", text: "They can clone the existing task in the existing Job and update it to run the new notebook." },
      { id: "B", text: "They can create a new task in the existing Job and then add it as a dependency of the original task." },
      { id: "C", text: "They can create a new task in the existing Job and then add the original task as a dependency of the new task." },
      { id: "D", text: "They can create a new job from scratch and add both tasks to run concurrently." },
    ],
    correctAnswerId: "B",
    explanation: "I Databricks Jobs supportano i DAG (Directed Acyclic Graphs). Puoi aggiungere un nuovo Task e configurare il task originale affinché 'dipenda' dal nuovo task. In questo modo il nuovo task gira per primo."
  },
  {
    id: 38,
    topic: "SQL",
    questionText: "An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query... The manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week... Which of the following approaches can ensure the query does not cost money beyond the first week?",
    options: [
      { id: "A", text: "They can set a limit to the number of DBUs that are consumed by the SQL Endpoint." },
      { id: "B", text: "They can set the query’s refresh schedule to end after a certain number of refreshes." },
      { id: "C", text: "They cannot ensure the query does not cost the organization money beyond the first week of the project’s release." },
      { id: "D", text: "They can set a limit to the number of individuals that are able to manage the query’s refresh schedule." },
      { id: "E", text: "They can set the query’s refresh schedule to end on a certain date in the query scheduler." },
    ],
    correctAnswerId: "E",
    explanation: "Quando si pianifica (Schedule) una query o dashboard in Databricks SQL, è possibile specificare una 'End Date' (data di fine). Arrivati a quella data, lo scheduler smette di eseguire la query, fermando i costi automatici."
  },
  {
    id: 39,
    topic: "SQL",
    questionText: "A data analysis team has noticed that their Databricks SQL queries are running too slowly... This issue is present when many members of the team are running small queries simultaneously... Which of the following approaches can the data engineering team use to improve the latency of the team’s queries?",
    options: [
      { id: "A", text: "They can increase the cluster size of the SQL endpoint." },
      { id: "B", text: "They can increase the maximum bound of the SQL endpoint’s scaling range." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can turn on the Serverless feature for the SQL endpoint." },
    ],
    correctAnswerId: "B",
    explanation: "Il problema descritto è di 'concorrenza' (troppe query simultanee). Aumentare la dimensione del cluster (scaling verticale) aiuta con query grandi e complesse. Aumentare il range di scaling (scaling orizzontale, aggiungendo più cluster/endpoint in parallelo) aiuta a gestire un alto numero di query simultanee da molti utenti."
  },
  {
    id: 40,
    topic: "SQL",
    questionText: "A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary. Which of the following approaches can the data engineer use to minimize the total running time?",
    options: [
      { id: "A", text: "They can ensure the dashboard’s SQL endpoint matches each of the queries’ SQL endpoints." },
      { id: "B", text: "They can set up the dashboard’s SQL endpoint to be serverless." },
      { id: "C", text: "They can turn on the Auto Stop feature for the SQL endpoint." },
      { id: "D", text: "They can reduce the cluster size of the SQL endpoint." },
    ],
    correctAnswerId: "C",
    explanation: "La feature 'Auto Stop' spegne il Warehouse (SQL Endpoint) dopo un periodo di inattività (es. 10 minuti). Se il refresh è giornaliero, il cluster si accenderà per il refresh e si spegnerà subito dopo, minimizzando i costi."
  },
  {
    id: 41,
    topic: "SQL",
    questionText: "A data engineer has been using a Databricks SQL dashboard... The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which of the following approaches can be used?",
    options: [
      { id: "A", text: "They can set up an Alert with a custom template." },
      { id: "B", text: "They can set up an Alert with a new email alert destination." },
      { id: "C", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "D", text: "They can set up an Alert with one-time notifications." },
    ],
    correctAnswerId: "C",
    explanation: "In Databricks SQL Alerts, puoi configurare una 'Destination'. Se vuoi inviare notifiche a sistemi di messaggistica (come Slack, Teams) che non sono email dirette, si configura una destinazione di tipo Webhook."
  },
  {
    id: 42,
    topic: "Delta Lake",
    questionText: "Which of the following must be specified when creating a new Delta Live Tables pipeline?",
    options: [
      { id: "A", text: "A key-value pair configuration" },
      { id: "B", text: "At least one notebook library to be executed" },
      { id: "C", text: "A path to cloud storage location for the written data" },
      { id: "D", text: "A location of a target database for the written data" },
    ],
    correctAnswerId: "B",
    explanation: "Una DLT Pipeline è essenzialmente un'orchestrazione di codice. Per crearne una, devi obbligatoriamente specificare *quale codice eseguire*, che solitamente è fornito sotto forma di un Notebook (o file Python/SQL) aggiunto come 'Library' alla pipeline."
  },
  {
    id: 43,
    topic: "Workflows",
    questionText: "A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which of the following actions can the data engineer perform to improve the start up time?",
    options: [
      { id: "A", text: "They can use endpoints available in Databricks SQL" },
      { id: "B", text: "They can use jobs clusters instead of all-purpose clusters" },
      { id: "C", text: "They can configure the clusters to be single-node" },
      { id: "D", text: "They can use clusters that are from a cluster pool" },
    ],
    correctAnswerId: "D",
    explanation: "I 'Cluster Pools' mantengono istanze cloud pre-inizializzate (calde). Usare un pool permette di ottenere un cluster in pochi secondi invece che in diversi minuti, risolvendo il problema dei tempi di avvio lenti."
  },
  {
    id: 44,
    topic: "General",
    questionText: "A new data engineering team has been assigned to an ELT project. The new data engineering team will need full privileges on the database 'customers' to fully manage the project. Which of the following commands can be used to grant full permissions?",
    options: [
      { id: "A", text: "GRANT USAGE ON DATABASE customers TO team;" },
      { id: "B", text: "GRANT ALL PRIVILEGES ON DATABASE team TO customers;" },
      { id: "C", text: "GRANT SELECT PRIVILEGES ON DATABASE customers TO teams;" },
      { id: "D", text: "GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;" },
      { id: "E", text: "GRANT ALL PRIVILEGES ON DATABASE customers TO team;" },
    ],
    correctAnswerId: "E",
    explanation: "`GRANT ALL PRIVILEGES` è il comando SQL standard (e Databricks) per dare controllo totale su un oggetto (in questo caso un database/schema) a un principal (utente o gruppo)."
  },
  {
    id: 45,
    topic: "General",
    questionText: "A new data engineering team... will need access to database 'customers' in order to see what tables already exist. The team has its own group 'team'. Which of the following commands can be used to grant the necessary permission on the entire database to the new team?",
    options: [
      { id: "A", text: "GRANT VIEW ON CATALOG customers TO team;" },
      { id: "B", text: "GRANT CREATE ON DATABASE customers TO team;" },
      { id: "C", text: "GRANT USAGE ON CATALOG team TO customers;" },
      { id: "D", text: "GRANT CREATE ON DATABASE team TO customers;" },
      { id: "E", text: "GRANT USAGE ON DATABASE customers TO team;" },
    ],
    correctAnswerId: "E",
    explanation: "Per poter 'vedere' o elencare gli oggetti dentro un database, o interrogarli, è necessario avere il privilegio `USAGE` sul database stesso (oltre ai permessi sulle tabelle specifiche per leggerne i dati)."
  },
  {
    id: 46,
    topic: "General",
    questionText: "A data engineer is running code in a Databricks Repo that is cloned from a central Git repository... The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which of the following Git operations does the data engineer need to run?",
    options: [
      { id: "A", text: "Merge" },
      { id: "B", text: "Push" },
      { id: "C", text: "Pull" },
      { id: "D", text: "Commit" },
      { id: "E", text: "Clone" },
    ],
    correctAnswerId: "C",
    explanation: "`Pull` è l'operazione Git standard per scaricare le modifiche dal repository remoto (remote) e integrarle nella copia locale (il Databricks Repo)."
  },
  {
    id: 47,
    topic: "General",
    questionText: "Which of the following is a benefit of the Databricks Lakehouse Platform embracing open source technologies?",
    options: [
      { id: "A", text: "Cloud-specific integrations" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Ability to scale storage" },
      { id: "D", text: "Ability to scale workloads" },
      { id: "E", text: "Avoiding vendor lock-in" },
    ],
    correctAnswerId: "E",
    explanation: "Utilizzando standard open source come Delta Lake, Apache Spark e MLflow, il codice e i dati non sono bloccati in formati proprietari di un singolo fornitore (vendor lock-in). Puoi spostare i dati Delta su altri sistemi che leggono Parquet/Delta senza doverli convertire."
  },
  {
    id: 48,
    topic: "Delta Lake",
    questionText: "A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which of the following locations can the data engineer review their permissions on the table?",
    options: [
      { id: "A", text: "Databricks Filesystem" },
      { id: "B", text: "Jobs" },
      { id: "C", text: "Dashboards" },
      { id: "D", text: "Repos" },
      { id: "E", text: "Data Explorer" },
    ],
    correctAnswerId: "E",
    explanation: "Data Explorer (ora spesso chiamato 'Catalog Explorer' nell'interfaccia Unity Catalog) è il luogo centrale dove esplorare schemi, tabelle e vedere i permessi/grants associati al proprio utente."
  },
  {
    id: 49,
    topic: "General",
    questionText: "Which of the following describes a scenario in which a data engineer will want to use a single-node cluster?",
    options: [
      { id: "A", text: "When they are working interactively with a small amount of data" },
      { id: "B", text: "When they are running automated reports to be refreshed as quickly as possible" },
      { id: "C", text: "When they are working with SQL within Databricks SQL" },
      { id: "D", text: "When they are concerned about the ability to automatically scale with larger data" },
      { id: "E", text: "When they are manually running reports with a large amount of data" },
    ],
    correctAnswerId: "A",
    explanation: "I cluster 'Single Node' (senza worker, solo driver) sono economici e ideali per carichi di lavoro leggeri, test, o librerie che non supportano la distribuzione (es. pandas standard su piccoli dataset), ma non per Big Data reali."
  },
  {
    id: 50,
    topic: "General",
    questionText: "Which of the following describes the relationship between Bronze tables and raw data?",
    options: [
      { id: "A", text: "Bronze tables contain less data than raw data files." },
      { id: "B", text: "Bronze tables contain more truthful data than raw data." },
      { id: "C", text: "Bronze tables contain raw data with a schema applied." },
      { id: "D", text: "Bronze tables contain a less refined view of data than raw data." },
    ],
    correctAnswerId: "C",
    explanation: "Il layer Bronze nel Medallion Architecture è una copia 'grezza' dei dati sorgente (Raw), ma organizzata in tabelle Delta con uno schema definito e metadati aggiuntivi (come data di ingestione), senza però aver subito pulizie o trasformazioni pesanti."
  },
  {
    id: 51,
    topic: "Delta Lake",
    questionText: "A data engineer has realized that the data files associated with a Delta table are incredibly small. They want to compact the small files to form larger files to improve performance. Which of the following keywords can be used to compact the small files?",
    options: [
      { id: "A", text: "REDUCE" },
      { id: "B", text: "OPTIMIZE" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" },
      { id: "E", text: "VACUUM" },
    ],
    correctAnswerId: "B",
    explanation: "Il comando `OPTIMIZE table_name` in Delta Lake serve specificamente a compattare molti file piccoli (small file problem) in file più grandi (intorno a 1GB), migliorando la velocità di lettura."
  },
  {
    id: 52,
    topic: "Delta Lake",
    questionText: "In which of the following file formats is data from Delta Lake tables primarily stored?",
    options: [
      { id: "A", text: "Delta" },
      { id: "B", text: "CSV" },
      { id: "C", text: "Parquet" },
      { id: "D", text: "JSON" },
      { id: "E", text: "A proprietary, optimized format specific to Databricks" },
    ],
    correctAnswerId: "C",
    explanation: "Delta Lake è basato su **Parquet**. I dati fisici sono salvati come file Parquet aperti. Ciò che rende 'Delta' speciale è il Transaction Log (file JSON) che traccia quali di questi file Parquet sono validi per la versione corrente della tabella."
  },
  {
    id: 53,
    topic: "General",
    questionText: "Which of the following is stored in the Databricks customer's cloud account?",
    options: [
      { id: "A", text: "Databricks web application" },
      { id: "B", text: "Cluster management metadata" },
      { id: "C", text: "Repos" },
      { id: "D", text: "Data" },
      { id: "E", text: "Notebooks" },
    ],
    correctAnswerId: "D",
    explanation: "Come visto nella domanda 20 (duplicato concettuale), nel 'Data Plane' (l'account cloud del cliente) vengono archiviati i Dati veri e propri (S3/ADLS/Blob). Tutto il resto (app web, notebook manager) è nel Control Plane gestito da Databricks."
  },
  {
    id: 54,
    topic: "General",
    questionText: "Which of the following can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
    options: [
      { id: "A", text: "None of these" },
      { id: "B", text: "Data lake" },
      { id: "C", text: "Data warehouse" },
      { id: "D", text: "All of these" },
      { id: "E", text: "Data lakehouse" },
    ],
    correctAnswerId: "E",
    explanation: "Il Data Lakehouse è la risposta architetturale ai silos creati avendo separati Data Lake (AI/ML, dati grezzi) e Data Warehouse (BI, SQL). Unifica tutto su un'unica piattaforma di storage."
  },
  {
    id: 55,
    topic: "SQL",
    questionText: "An engineering manager uses a Databricks SQL query to monitor ingestion latency... The manager checks the results of the query every day, but they are manually rerunning the query each day. Which of the following approaches can the manager use to ensure the results are updated each day?",
    options: [
      { id: "A", text: "They can schedule the query to refresh every 1 day from the SQL endpoint's page." },
      { id: "B", text: "They can schedule the query to refresh every 12 hours from the SQL endpoint's page." },
      { id: "C", text: "They can schedule the query to refresh every 1 day from the query's page in Databricks SQL." },
      { id: "D", text: "They can schedule the query to run every 12 hours from the Jobs UI." },
    ],
    correctAnswerId: "C",
    explanation: "In Databricks SQL, puoi aggiungere una 'Schedule' (pianificazione) direttamente dalla pagina dell'editor della Query salvata, impostando la frequenza (es. giornaliera) per aggiornare i risultati automaticamente."
  },
  {
    id: 56,
    topic: "SQL",
    questionText: "A data engineer has a Python notebook in Databricks, but they need to use SQL to accomplish a specific task within a cell. Which of the following describes how the data engineer can use SQL within a cell of their Python notebook?",
    options: [
      { id: "A", text: "It is not possible to use SQL in a Python notebook" },
      { id: "B", text: "They can attach the cell to a SQL endpoint rather than a Databricks cluster" },
      { id: "C", text: "They can simply write SQL syntax in the cell" },
      { id: "D", text: "They can add %sql to the first line of the cell" },
      { id: "E", text: "They can change the default language of the notebook to SQL" },
    ],
    correctAnswerId: "D",
    explanation: "I 'Magic Commands' (che iniziano con `%`) permettono di cambiare linguaggio per una singola cella. `%sql` permette di scrivere ed eseguire SQL puro in un notebook che di default è Python."
  },
  {
    id: 57,
    topic: "SQL",
    questionText: "Which of the following SQL keywords can be used to convert a table from a long format to a wide format?",
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" },
      { id: "E", text: "WHERE" },
    ],
    correctAnswerId: "B",
    explanation: "`PIVOT` è la clausola SQL che ruota i dati: prende i valori unici di una colonna e li trasforma in multiple colonne (da formato 'lungo' verticalmente a formato 'largo' orizzontalmente)."
  },
  {
    id: 58,
    topic: "General",
    questionText: "Which of the following describes a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
    options: [
      { id: "A", text: "Parquet files can be partitioned" },
      { id: "B", text: "CREATE TABLE AS SELECT statements cannot be used on files" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Parquet files have the ability to be optimized" },
      { id: "E", text: "Parquet files will become Delta tables" },
    ],
    correctAnswerId: "C",
    explanation: "Il CSV è testo puro e non contiene informazioni sui tipi di dati (tutto è stringa potenzialmente). Parquet è un formato binario che incorpora lo schema (nomi colonne e tipi dati) direttamente nel file, rendendo la creazione di tabelle più sicura e performante."
  },
  {
    id: 59,
    topic: "Delta Lake",
    questionText: "The Delta transaction log for the 'students' tables is shown... A Data Engineer needs to query the table as it existed before the UPDATE operation listed in the log (Version 4). Which command should the Data Engineer use? (Select the valid syntax example)",
    options: [
      { id: "A", text: "SELECT * FROM students@v4" },
      { id: "B", text: "SELECT * FROM students TIMESTAMP AS OF '...'" },
      { id: "C", text: "SELECT * FROM students VERSION AS OF 3" },
      { id: "D", text: "SELECT * FROM students VERSION AS OF 5" },
    ],
    correctAnswerId: "A",
    explanation: "Per il Time Travel in Delta Lake, puoi usare la sintassi SQL `VERSION AS OF 3` (se l'update era la v4, la versione prima è la 3) oppure la sintassi abbreviata `@v3` (es. `students@v3`). L'opzione A usa `@v4` che potrebbe essere ambigua nel contesto della spiegazione, ma tecnicamente `VERSION AS OF` o `TIMESTAMP AS OF` sono le clausole standard corrette. Nel contesto della domanda (prima dell'update), si cerca la versione precedente."
  },
  {
    id: 60,
    topic: "General",
    questionText: "Which method should a Data Engineer apply to ensure Workflows are being triggered on schedule efficiently and cost-effectively?",
    options: [
      { id: "A", text: "Scheduled Workflows require an always-running cluster." },
      { id: "B", text: "Scheduled Workflows process data as it arrives at configured sources." },
      { id: "C", text: "Scheduled Workflows can reduce resource consumption and expense since the cluster runs only long enough to execute the pipeline." },
      { id: "D", text: "Scheduled Workflows run continuously until manually stopped." },
    ],
    correctAnswerId: "C",
    explanation: "Usare i 'Job Clusters' (cluster effimeri creati solo per la durata del job) nei Workflow pianificati è la pratica standard per risparmiare. Paghi solo per i minuti di esecuzione del job, invece di tenere un cluster All-Purpose sempre acceso."
  },
  {
    id: 61,
    topic: "General",
    questionText: "A data engineer needs to access the view created by the sales team, using a shared cluster. The data engineer has been provided usage permissions on the catalog and schema. In order to access the view created by sales team. What are the minimum permissions the data engineer would require in addition?",
    options: [
      { id: "A", text: "Needs SELECT permission on the VIEW and the underlying TABLE" },
      { id: "B", text: "Needs SELECT permission only on the VIEW" },
      { id: "C", text: "Needs ALL PRIVILEGES on the VIEW" },
      { id: "D", text: "Needs ALL PRIVILEGES at the SCHEMA level" },
    ],
    correctAnswerId: "B",
    explanation: "Grazie al concetto di 'Unity Catalog View' (e anche nelle viste standard SQL), se il proprietario della vista ha i permessi sulle tabelle sottostanti, all'utente finale basta avere il permesso `SELECT` sulla VISTA stessa. Non serve dare accesso diretto alle tabelle grezze sottostanti (security through views)."
  },
  {
    id: 62,
    topic: "General",
    questionText: "Which of the following commands will return the number of null values in the member_id column?",
    options: [
      { id: "A", text: "SELECT count(member_id) FROM my_table;" },
      { id: "B", text: "SELECT count(member_id) - count_null(member_id) FROM my_table;" },
      { id: "C", text: "SELECT count_if(member_id IS NULL) FROM my_table;" },
      { id: "D", text: "SELECT null(member_id) FROM my_table;" },
      { id: "E", text: "SELECT count_null(member_id) FROM my_table;" },
    ],
    correctAnswerId: "C",
    explanation: "(Duplicato della domanda #11). Confermo che `count_if(colonna IS NULL)` è il modo più diretto ed efficiente in Spark SQL per contare i nulli."
  },
  {
    id: 63,
    topic: "SQL",
    questionText: "A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees in table stores... The data engineer wants to use the FILTER higher-order function. Which of the following code blocks successfully completes this task?",
    options: [
      { id: "A", text: "FILTER(employees, e -> e.experience > 5)" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
    ],
    correctAnswerId: "A",
    explanation: "La funzione `FILTER(array, lambda_function)` prende un array e una funzione anonima (lambda). La sintassi corretta è `FILTER(colonna_array, variabile -> condizione)`. Nel nostro caso: filtra l'array 'employees' mantenendo solo gli elementi 'e' dove 'e.experience > 5'."
  },
  {
    id: 64,
    topic: "Delta Lake",
    questionText: "A data engineer has created an ETL pipeline using Delta Live table... they want to ensure that if the location details has not been provided by the employee (is NULL), the pipeline needs to be terminated (failed). How can the scenario be implemented?",
    options: [
      { id: "A", text: "CONSTRAINT valid_location EXPECT (location IS NULL)" },
      { id: "B", text: "CONSTRAINT valid_location EXPECT (location IS NOT NULL) ON VIOLATION FAIL UPDATE" },
      { id: "C", text: "CONSTRAINT valid_location EXPECT (location IS NOT NULL) ON VIOLATION DROP ROW" },
      { id: "D", text: "CONSTRAINT valid_location EXPECT (location IS NOT NULL)" },
    ],
    correctAnswerId: "B",
    explanation: "Se il requisito è bloccare/terminare la pipeline in caso di dati sporchi, devi usare `ON VIOLATION FAIL UPDATE`. L'opzione 'DROP ROW' scarterebbe il dato continuando, mentre la validazione standard (senza clausola) emette solo un warning ma non ferma nulla."
  },
  {
    id: 65,
    topic: "SQL",
    questionText: "A data engineer has a Python variable table_name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_name. They have the following incomplete code block: ____(f'SELECT customer_id, spend FROM {table_name}')",
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.delta.table" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" },
      { id: "E", text: "spark.sql" },
    ],
    correctAnswerId: "E",
    explanation: "`spark.sql()` è il metodo per eseguire una stringa arbitraria contenente codice SQL. Poiché stiamo usando una f-string di Python per iniettare il nome della tabella, il risultato è una stringa SQL valida che `spark.sql` può eseguire."
  },
  {
    id: 66,
    topic: "General",
    questionText: "Identify a scenario to use an external table. A Data Engineer needs to create a parquet bronze table and wants to ensure that it gets stored in a specific path in an external location. Which table can be created in this scenario?",
    options: [
      { id: "A", text: "An external table where the location is pointing to specific path in external location." },
      { id: "B", text: "An external table where the schema has managed location pointing to specific path in external location." },
      { id: "C", text: "A managed table where the catalog has managed location pointing to specific path in external location." },
      { id: "D", text: "A managed table where the location is pointing to specific path in external location." },
    ],
    correctAnswerId: "A",
    explanation: "Per definizione, una 'External Table' (o Unmanaged Table) è una tabella dove i dati risiedono in una location specifica definita dall'utente (es. `LOCATION 's3://bucket/path'`) e non nella location di default gestita da Databricks."
  },
  {
    id: 67,
    topic: "General",
    questionText: "A data engineer has created a new database using the following command: CREATE DATABASE IF NOT EXISTS customer360; In which of the following locations will the customer360 database be located?",
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse/customer360.db" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "More information is needed to determine the correct response" },
      { id: "E", text: "dbfs:/user/hive/database" },
    ],
    correctAnswerId: "B",
    explanation: "Se non viene specificata una `LOCATION` durante la creazione del database, questo viene creato nella location di default del Warehouse Hive, che tradizionalmente in Databricks (senza Unity Catalog) è `dbfs:/user/hive/warehouse/nome_db.db`."
  },
  {
    id: 68,
    topic: "Delta Lake",
    questionText: "Data engineer and data analysts are working together on a data pipeline... They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made?",
    options: [
      { id: "A", text: "The pipeline can have different notebook sources in SQL & Python" },
      { id: "B", text: "The pipeline will need to be written entirely in SQL" },
      { id: "C", text: "The pipeline will need to use a batch source in place of a streaming source" },
      { id: "D", text: "The pipeline will need to be written entirely in Python" },
    ],
    correctAnswerId: "A",
    explanation: "Delta Live Tables (DLT) è poliglotta. Una singola pipeline DLT può orchestrare più notebook, e questi notebook possono essere misti: alcuni scritti in SQL e altri in Python. Non sei obbligato a convertire tutto in un unico linguaggio."
  },
  {
    id: 69,
    topic: "SQL",
    questionText: "A data engineer is attempting to drop a Spark SQL table my_table... After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. Which of the following describes why all of these files were deleted?",
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table's data was larger than 10 GB" },
      { id: "D", text: "The table was external" },
      { id: "E", text: "The table did not have a location" },
    ],
    correctAnswerId: "A",
    explanation: "Quando fai `DROP TABLE` su una 'Managed Table', Databricks cancella sia i metadati (dal catalogo) sia i dati fisici (dallo storage). Se fosse stata una 'External Table', avrebbe cancellato solo i metadati, lasciando i file intatti."
  },
  {
    id: 70,
    topic: "Python",
    questionText: "A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which of the following code blocks can the data engineer use to complete this task?",
    options: [
      { id: "A", text: "[Missing Code]" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "def add(a, b): return a + b" },
      { id: "E", text: "[Missing Code]" },
    ],
    correctAnswerId: "D",
    explanation: "La sintassi standard per definire una funzione in Python è: `def nome_funzione(parametri):` seguito dal corpo indentato e `return risultato`. Quindi `def add(a, b): return a + b` è corretto."
  },
  {
    id: 71,
    topic: "Streaming",
    questionText: "A data engineer has configured a Structured Streaming job... The data engineer only wants the query to process all of the available data in as many batches as required (and then stop). Which line of code should the data engineer use to fill in the blank?",
    options: [
      { id: "A", text: "trigger(availableNow=True)" },
      { id: "B", text: "trigger(processingTime='once')" },
      { id: "C", text: "trigger(continuous='once')" },
      { id: "D", text: "trigger(once=True)" },
    ],
    correctAnswerId: "A",
    explanation: "`trigger(availableNow=True)` è l'evoluzione raccomandata di `once=True`. Processa tutti i dati disponibili al momento del lancio (suddividendoli in micro-batch se necessario per scalabilità) e poi spegne lo stream. È ideale per job batch eseguiti periodicamente su sorgenti streaming."
  },
  {
    id: 72,
    topic: "General",
    questionText: "In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
    options: [
      { id: "A", text: "When the location of the data needs to be changed" },
      { id: "B", text: "When the target table is an external table" },
      { id: "C", text: "When the source table can be deleted" },
      { id: "D", text: "When the target table cannot contain duplicate records" },
      { id: "E", text: "When the source is not a Delta table" },
    ],
    correctAnswerId: "D",
    explanation: "(Duplicato della #27). `MERGE INTO` serve per evitare duplicati facendo upsert (aggiorna se esiste, inserisci se nuovo), mentre `INSERT INTO` crea sempre nuove righe, potenzialmente duplicando dati esistenti."
  },
  {
    id: 73,
    topic: "General",
    questionText: "A data engineer is working with two tables... The data engineer runs a join query... Which of the following will be returned?",
    options: [
      { id: "A", text: "[Missing Data]" },
      { id: "B", text: "[Missing Data]" },
      { id: "C", text: "[Correct Join Result]" },
      { id: "D", text: "[Missing Data]" },
      { id: "E", text: "[Missing Data]" },
    ],
    correctAnswerId: "C",
    explanation: "(Duplicato della #1). Manca l'immagine delle tabelle, ma la logica riguarda sempre il funzionamento dei JOIN (Inner vs Outer)."
  },
  {
    id: 74,
    topic: "General",
    questionText: "What can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Data lake" },
      { id: "C", text: "Data warehouse" },
      { id: "D", text: "Data lakehouse" },
    ],
    correctAnswerId: "D",
    explanation: "(Duplicato della #54). Il Data Lakehouse unifica Data Lake e Data Warehouse."
  },
  {
    id: 75,
    topic: "General",
    questionText: "A data engineer needs to create a table in Databricks using data from a CSV file at location /path/to/csv. They run a CREATE TABLE statement. Which of the following lines of code fills in the blank to successfully complete the task?",
    options: [
      { id: "A", text: "None of these lines of code are needed" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" },
      { id: "E", text: "FROM 'path/to/csv'" },
    ],
    correctAnswerId: "B",
    explanation: "La sintassi SQL per creare una tabella da un formato specifico (non Delta che è il default) richiede `USING formato`. Quindi `CREATE TABLE nome (...) USING CSV LOCATION '...'` è corretto."
  },
  {
    id: 76,
    topic: "Delta Lake",
    questionText: "In a healthcare provider organization using Delta Lake... a data analyst needs to analyze a snapshot of the patient_records table from two weeks ago. What approach should the Data Engineer take?",
    options: [
      { id: "A", text: "Truncate and reload old data" },
      { id: "B", text: "Identify the version number corresponding to two weeks ago... and share that version number with the analyst to query using VERSION AS OF syntax." },
      { id: "C", text: "Restore the table using RESTORE command" },
      { id: "D", text: "Use VACUUM to remove newer versions" },
    ],
    correctAnswerId: "B",
    explanation: "L'approccio meno invasivo per una *analisi* storica è usare il Time Travel nelle query (`SELECT * FROM table VERSION AS OF ...`). Non serve fare `RESTORE` (che sovrascriverebbe la tabella attuale portandola indietro nel tempo per tutti), basta interrogare la versione vecchia."
  },
  {
    id: 77,
    topic: "Streaming",
    questionText: "Duplicate of ID 71 (Structured Streaming trigger availableNow).",
    options: [
      { id: "A", text: "processingTime(1)" },
      { id: "B", text: "trigger(availableNow=True)" },
      { id: "C", text: "trigger(parallelBatch=True)" },
      { id: "D", text: "trigger(processingTime='once')" },
    ],
    correctAnswerId: "B",
    explanation: "(Vedi ID 71). `trigger(availableNow=True)` è la risposta corretta per processare tutto il dato disponibile in batch multipli e poi fermarsi."
  },
  {
    id: 78,
    topic: "General",
    questionText: "A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader... Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Which of the following describes why?",
    options: [
      { id: "A", text: "There was a type mismatch" },
      { id: "B", text: "JSON data is a text-based format and schema inference defaults to string if not specified/safe" },
      { id: "C", text: "Auto Loader only works with string data" },
      { id: "D", text: "All of the fields had at least one null value" },
      { id: "E", text: "Auto Loader cannot infer schema" },
    ],
    correctAnswerId: "B",
    explanation: "Quando Auto Loader (o Spark) inferisce lo schema da JSON, se non è abilitata un'inferenza aggressiva o forniti 'schema hints', tende a interpretare i campi come Stringhe per sicurezza, dato che JSON è testuale. Inoltre, l'opzione `cloudFiles.inferColumnTypes` deve essere abilitata per tentare di indovinare i tipi precisi."
  },
  {
    id: 79,
    topic: "Delta Lake",
    questionText: "A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE... The table is configured to run in Development mode. What is the expected outcome after clicking Start?",
    options: [
      { id: "A", text: "Pipeline shuts down after update" },
      { id: "B", text: "Pipeline persists until shut down" },
      { id: "C", text: "Pipeline persists without processing" },
      { id: "D", text: "Pipeline shuts down, compute persists" },
      { id: "E", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." },
    ],
    correctAnswerId: "E",
    explanation: "In 'Development Mode', DLT tiene il cluster acceso (per permettere iterazioni veloci senza riavvio) e processa i dati. In 'Production Mode', il cluster verrebbe terminato dopo l'esecuzione (se non è in continuous mode) per risparmiare costi."
  },
  {
    id: 80,
    topic: "General",
    questionText: "Which of the following data workloads will utilize a Gold table as its source?",
    options: [
      { id: "A", text: "A job that enriches data by parsing timestamps" },
      { id: "B", text: "A job that aggregates uncleaned data" },
      { id: "C", text: "A job that cleans data by removing malformatted records" },
      { id: "D", text: "A job that queries aggregated data designed to feed into a dashboard" },
      { id: "E", text: "A job that ingests raw data" },
    ],
    correctAnswerId: "D",
    explanation: "Le tabelle Gold sono dati 'Business-level', aggregati, puliti e pronti per il consumo. Sono la sorgente tipica per Dashboard (BI), Reporting e analisi finali."
  },
  {
    id: 81,
    topic: "General",
    questionText: "Which two components function in the DB platform architecture’s control plane? (Choose two.)",
    options: [
      { id: "A", text: "Virtual Machines" },
      { id: "B", text: "Compute Orchestration" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "Compute" },
      { id: "E", text: "Unity Catalog" },
    ],
    correctAnswerId: "B",
    explanation: "Nel Control Plane (gestito da Databricks) troviamo servizi come la 'Compute Orchestration' (Gestore dei cluster/Job), l'Applicazione Web, e anche Unity Catalog (che è un servizio globale). Le VM e il Compute classico sono nel Data Plane (account cliente)."
  },
  {
    id: 82,
    topic: "General",
    questionText: "Identify how the count_if function and the count where x is null can be used... What would be the output of below query? select count_if(col > 1) as count_a, count(*) as count_b, count(col1) as count_c from random_values. Data: 0, 1, 2, NULL, -2, 3",
    options: [
      { id: "A", text: "2, 6, 5" },
      { id: "B", text: "4, 6, 5" },
      { id: "C", text: "3, 6, 6" },
      { id: "D", text: "4, 6, 6" },
    ],
    correctAnswerId: "A",
    explanation: "Analisi dati (0, 1, 2, NULL, -2, 3): \n1. `count_if(col > 1)`: Valori > 1 sono '2' e '3'. Totale = 2.\n2. `count(*)`: Conta tutte le righe inclusi i NULL. Totale = 6.\n3. `count(col1)`: Conta i valori NON nulli. Esclude il NULL. Totale = 5.\nRisposta corretta: 2, 6, 5."
  },
  {
    id: 83,
    topic: "Streaming",
    questionText: "A data engineer has joined an existing project and they see the following query: CREATE STREAMING LIVE TABLE loyal_customers AS SELECT * FROM STREAM(LIVE.customers)... Why is the STREAM function included?",
    options: [
      { id: "A", text: "Error" },
      { id: "B", text: "Table is live" },
      { id: "C", text: "The customers table is a streaming live table (allows incremental read)" },
      { id: "D", text: "Reference to PySpark" },
      { id: "E", text: "Data updated since last run" },
    ],
    correctAnswerId: "C",
    explanation: "(Duplicato della #34). `STREAM()` permette di leggere in modalità streaming (append-only) da una tabella Delta esistente."
  },
  {
    id: 84,
    topic: "General",
    questionText: "Which of the following describes the type of workloads that are always compatible with Auto Loader?",
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "Machine learning workloads" },
      { id: "C", text: "Serverless workloads" },
      { id: "D", text: "Batch workloads" },
      { id: "E", text: "Dashboard workloads" },
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader è nativamente una sorgente di Streaming (`spark.readStream.format('cloudFiles')`). Anche se può essere usato in trigger 'AvailableNow' (simile al batch), la sua natura fondamentale è lo streaming (rilevazione continua di nuovi file)."
  },
  {
    id: 85,
    topic: "Workflows",
    questionText: "Differentiate between all-purpose clusters and jobs clusters... A data engineering team has created a python notebook... this job has been tested and now needs to be scheduled in production. Which would be the best cluster to be used?",
    options: [
      { id: "A", text: "All purpose cluster" },
      { id: "B", text: "Any Unity Catalog-enabled cluster" },
      { id: "C", text: "Jobs Cluster" },
      { id: "D", text: "Serverless SQL warehouse" },
    ],
    correctAnswerId: "C",
    explanation: "Per i carichi di lavoro in produzione pianificati (Scheduled), i 'Jobs Cluster' sono la scelta migliore perché costano molto meno (DBU/hour inferiore) rispetto agli All-Purpose cluster, che sono pensati per lo sviluppo interattivo."
  },
  {
    id: 86,
    topic: "Delta Lake",
    questionText: "They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
    options: [
      { id: "A", text: "None of these changes will need to be made (DLT supports multi-language and streaming)" },
      { id: "B", text: "The pipeline will need to stop using the medallion-based multi-hop architecture" },
      { id: "C", text: "The pipeline will need to be written entirely in SQL" },
      { id: "D", text: "The pipeline will need to use a batch source in place of a streaming source" },
      { id: "E", text: "The pipeline will need to be written entirely in Python" },
    ],
    correctAnswerId: "A",
    explanation: "DLT supporta nativamente l'architettura Medallion (Bronze/Silver/Gold), supporta input streaming e supporta mix di Python e SQL. Quindi non è necessario abbandonare queste pratiche."
  },
  {
    id: 87,
    topic: "Streaming",
    questionText: "A data engineer is using the following code block... Which of the following changes needs to be made so this code block will work when the transactions table is a stream source?",
    options: [
      { id: "A", text: "Replace predict with a stream-friendly prediction function" },
      { id: "B", text: "Replace schema(schema) with option ('maxFilesPerTrigger', 1)" },
      { id: "C", text: "Replace 'transactions' with the path to the location of the Delta table" },
      { id: "D", text: "Replace format('delta') with format('stream')" },
      { id: "E", text: "Replace spark.read with spark.readStream" },
    ],
    correctAnswerId: "E",
    explanation: "La modifica fondamentale per passare da Batch a Streaming in Spark è cambiare il metodo di lettura da `spark.read` a `spark.readStream`. Il resto (format, options) spesso rimane simile."
  },
  {
    id: 88,
    topic: "Streaming",
    questionText: "Which of the following queries is performing a streaming hop from raw data to a Bronze table?",
    options: [
      { id: "A", text: "[Missing Code]" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
      { id: "E", text: "[Missing Code]" },
    ],
    correctAnswerId: "E",
    explanation: "Manca il codice nel file originale. In generale, una 'streaming hop' verso la Bronze (Raw ingestion) usa `spark.readStream` (o Auto Loader) leggendo da file grezzi (JSON/CSV) e scrive in `append` mode su una tabella Delta."
  },
  {
    id: 89,
    topic: "Delta Lake",
    questionText: "A dataset has been defined using Delta Live Tables and includes an expectations clause: ... ON VIOLATION FAIL UPDATE. What is the expected behavior?",
    options: [
      { id: "A", text: "Records recorded as invalid in log" },
      { id: "B", text: "Records that violate the expectation cause the job to fail." },
      { id: "C", text: "Records dropped and loaded to quarantine" },
      { id: "D", text: "Records added and flagged" },
      { id: "E", text: "Records added and flagged in new field" },
    ],
    correctAnswerId: "B",
    explanation: "Come visto nella domanda #64, `ON VIOLATION FAIL UPDATE` è l'impostazione più rigida: se anche una sola riga viola la regola, l'intero aggiornamento fallisce e la pipeline si ferma (Fail fast)."
  },
  {
    id: 90,
    topic: "General",
    questionText: "Which of the following statements regarding the relationship between Silver tables and Bronze tables is always true?",
    options: [
      { id: "A", text: "Silver tables contain a less refined view" },
      { id: "B", text: "Silver tables contain aggregates" },
      { id: "C", text: "Silver tables contain more data" },
      { id: "D", text: "Silver tables contain a more refined and cleaner view of data than Bronze tables." },
      { id: "E", text: "Silver tables contain less data" },
    ],
    correctAnswerId: "D",
    explanation: "La tabella Bronze è 'Raw' (copia fedele della sorgente). La tabella Silver rappresenta dati 'Refined' (puliti, tipizzati, deduplicati, arricchiti), ma tipicamente ancora al livello di granularità della transazione originale (non aggregati, quelli sono Gold). Quindi è una vista più pulita della Bronze."
  },
  {
    id: 91,
    topic: "General",
    questionText: "Which data lakehouse feature results in improved data quality over a traditional data lake?",
    options: [
      { id: "A", text: "A data lakehouse stores data in open formats." },
      { id: "B", text: "A data lakehouse allows the use of SQL queries to examine data." },
      { id: "C", text: "A data lakehouse provides storage solutions for structured and unstructured data." },
      { id: "D", text: "A data lakehouse supports ACID-compliant transactions." },
    ],
    correctAnswerId: "D",
    explanation: "Come visto in precedenza, le transazioni ACID impediscono che job falliti lascino dati corrotti o parziali, garantendo una qualità del dato nettamente superiore rispetto ai semplici file system dei Data Lake tradizionali."
  },
  {
    id: 92,
    topic: "General",
    questionText: "In which scenario will a data team want to utilize cluster pools?",
    options: [
      { id: "A", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "B", text: "An automated report needs to be runnable by all stakeholders." },
      { id: "C", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "D", text: "An automated report needs to be made reproducible." },
    ],
    correctAnswerId: "C",
    explanation: "Il vantaggio chiave dei Cluster Pools è la riduzione dei tempi di 'spin-up' (avvio). Se hai report che devono girare frequentemente e velocemente, evitare i 5-10 minuti di avvio del cluster è cruciale."
  },
  {
    id: 93,
    topic: "General",
    questionText: "What is hosted completely in the control plane of the classic Databricks architecture?",
    options: [
      { id: "A", text: "Worker node" },
      { id: "B", text: "Databricks web application" },
      { id: "C", text: "Driver node" },
      { id: "D", text: "Databricks Filesystem" },
    ],
    correctAnswerId: "B",
    explanation: "L'applicazione Web (Notebook UI, Workspace Manager, Account Console) risiede nel Control Plane. I nodi di calcolo (Driver/Worker) risiedono nel Data Plane (il tuo account cloud)."
  },
  {
    id: 94,
    topic: "General",
    questionText: "A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. What is an advantage of using Databricks Repos over the Databricks Notebooks versioning?",
    options: [
      { id: "A", text: "Databricks Repos allows users to revert to previous versions of a notebook" },
      { id: "B", text: "Databricks Repos is wholly housed within the Databricks Data Intelligence Platform" },
      { id: "C", text: "Databricks Repos provides the ability to comment on specific changes" },
      { id: "D", text: "Databricks Repos supports the use of multiple branches" },
    ],
    correctAnswerId: "D",
    explanation: "La capacità di lavorare su 'Branch' separati (feature branches) e poi fare merge è la distinzione fondamentale tra un vero sistema Git (Repos) e una semplice cronologia lineare (Notebook revision history)."
  },
  {
    id: 95,
    topic: "General",
    questionText: "What is a benefit of the Databricks Lakehouse Architecture embracing open source technologies?",
    options: [
      { id: "A", text: "Avoiding vendor lock-in" },
      { id: "B", text: "Simplified governance" },
      { id: "C", text: "Ability to scale workloads" },
      { id: "D", text: "Cloud-specific integrations" },
    ],
    correctAnswerId: "A",
    explanation: "Usare formati aperti come Parquet e Delta Lake significa che i tuoi dati sono tuoi. Se un domani volessi cambiare piattaforma di calcolo, potresti leggere quei dati senza dover fare costose migrazioni o conversioni."
  },
  {
    id: 96,
    topic: "Delta Lake",
    questionText: "A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which location can the data engineer review their permissions on the table?",
    options: [
      { id: "A", text: "Jobs" },
      { id: "B", text: "Dashboards" },
      { id: "C", text: "Catalog Explorer" },
      { id: "D", text: "Repos" },
    ],
    correctAnswerId: "C",
    explanation: "Catalog Explorer (precedentemente Data Explorer) è lo strumento UI dedicato alla governance: ti permette di vedere schema, dati di esempio, lineage e, appunto, i permessi/ownership."
  },
  {
    id: 97,
    topic: "General",
    questionText: "A data engineer is running code in a Databricks Repo that is cloned from a central Git repository... The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which Git operation does the data engineer need to run to accomplish this task?",
    options: [
      { id: "A", text: "Clone" },
      { id: "B", text: "Pull" },
      { id: "C", text: "Merge" },
      { id: "D", text: "Push" },
    ],
    correctAnswerId: "B",
    explanation: "`Pull` scarica (fetch) e unisce (merge) le modifiche remote nel tuo ramo locale. È l'azione standard per 'aggiornarsi' rispetto al server."
  },
  {
    id: 98,
    topic: "Delta Lake",
    questionText: "Which file format is used for storing Delta Lake Table?",
    options: [
      { id: "A", text: "CSV" },
      { id: "B", text: "Parquet" },
      { id: "C", text: "JSON" },
      { id: "D", text: "Delta" },
    ],
    correctAnswerId: "B",
    explanation: "Anche se logicamente parliamo di 'formato Delta', fisicamente i file su disco sono **Parquet**. Delta aggiunge solo un layer di log transazionale (JSON) sopra questi file Parquet."
  },
  {
    id: 99,
    topic: "Delta Lake",
    questionText: "A data architect has determined that a table of the following format is necessary: (schema details). Which code block is used by SQL DDL command to create an empty Delta table in the above format regardless of whether a table already exists with this name?",
    options: [
      { id: "A", text: "CREATE OR REPLACE TABLE table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )" },
      { id: "B", text: "CREATE OR REPLACE TABLE table_name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA" },
      { id: "C", text: "CREATE TABLE IF NOT EXISTS table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )" },
      { id: "D", text: "CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT" },
    ],
    correctAnswerId: "A",
    explanation: "`CREATE OR REPLACE TABLE` è il comando DDL che crea la tabella se non esiste, o la sovrascrive (svuotandola e ridefinendola) se esiste già. Delta è il formato di default in Databricks, quindi `USING DELTA` è spesso opzionale ma implicito."
  },
  {
    id: 100,
    topic: "Delta Lake",
    questionText: "A data engineer has been given a new record of data... Which SQL commands can be used to append the new record to an existing Delta table my_table?",
    options: [
      { id: "A", text: "INSERT INTO my_table VALUES ('a1', 6, 9.4)" },
      { id: "B", text: "INSERT VALUES ('a1', 6, 9.4) INTO my_table" },
      { id: "C", text: "UPDATE my_table VALUES ('a1', 6, 9.4)" },
      { id: "D", text: "UPDATE VALUES ('a1', 6, 9.4) my_table" },
    ],
    correctAnswerId: "A",
    explanation: "Sintassi SQL standard: `INSERT INTO table_name VALUES (val1, val2, ...)`."
  },
  {
    id: 101,
    topic: "Delta Lake",
    questionText: "A data engineer has realized that the data files associated with a Delta table are incredibly small... Which keyword can be used to compact the small files?",
    options: [
      { id: "A", text: "OPTIMIZE" },
      { id: "B", text: "VACUUM" },
      { id: "C", text: "COMPACTION" },
      { id: "D", text: "REPARTITION" },
    ],
    correctAnswerId: "A",
    explanation: "`OPTIMIZE` riscrive i file di dati per consolidare file piccoli in file più grandi. `VACUUM` invece cancella i file vecchi non più in uso. Non confonderli!"
  },
  {
    id: 102,
    topic: "General",
    questionText: "A data engineer wants to create a data entity from a couple of tables. The data entity must be used by other data engineers in other sessions. It also must be saved to a physical location. Which of the following data entities should the data engineer create?",
    options: [
      { id: "A", text: "Table" },
      { id: "B", text: "Function" },
      { id: "C", text: "View" },
      { id: "D", text: "Temporary view" },
    ],
    correctAnswerId: "A",
    explanation: "Le parole chiave qui sono 'other sessions' (esclude Temporary View) e 'saved to a physical location' (esclude View standard, che è logica). Una **Table** (Managed o External) salva fisicamente i dati ed è accessibile a tutti."
  },
  {
    id: 103,
    topic: "General",
    questionText: "A data engineer runs a statement every day to copy the previous day’s sales... The data engineer notices that the number of records in table transactions has not changed. What explains why the statement might not have copied any new records into the table?",
    options: [
      { id: "A", text: "The format of the files to be copied were not included with the FORMAT_OPTIONS keyword." },
      { id: "B", text: "The COPY INTO statement requires the table to be refreshed to view the copied rows." },
      { id: "C", text: "The previous day’s file has already been copied into the table." },
      { id: "D", text: "The PARQUET file format does not support COPY INTO." },
    ],
    correctAnswerId: "C",
    explanation: "Il comando `COPY INTO` tiene traccia della metadata dei file ingestati. Se provi a caricare file che sono già stati processati con successo, il comando li salta per garantire l'idempotenza (evitare duplicati)."
  },
  {
    id: 104,
    topic: "Delta Lake",
    questionText: "Which command can be used to write data into a Delta table while avoiding the writing of duplicate records?",
    options: [
      { id: "A", text: "DROP" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "MERGE" },
      { id: "D", text: "APPEND" },
    ],
    correctAnswerId: "C",
    explanation: "`MERGE` è l'unico comando che permette logica condizionale (WHEN MATCHED UPDATE, WHEN NOT MATCHED INSERT) per gestire i duplicati durante la scrittura."
  },
  {
    id: 105,
    topic: "Delta Lake",
    questionText: "A data analyst has created a Delta table sales... However, the data engineering team uses Python for its tests rather than SQL. Which command could the data engineering team use to access sales in PySpark?",
    options: [
      { id: "A", text: "SELECT * FROM sales" },
      { id: "B", text: "spark.table('sales')" },
      { id: "C", text: "spark.sql('sales')" },
      { id: "D", text: "spark.delta.table('sales')" },
    ],
    correctAnswerId: "B",
    explanation: "`spark.table('nome')` restituisce un DataFrame PySpark puntando alla tabella metastore. `spark.sql()` richiederebbe una query completa come stringa (`spark.sql('SELECT * FROM sales')`), non solo il nome."
  },
  {
    id: 106,
    topic: "General",
    questionText: "A data engineer has created a new database using the following command: CREATE DATABASE IF NOT EXISTS customer360; In which location will the customer360 database be located?",
    options: [
      { id: "A", text: "dbfs:/user/hive/database/customer360" },
      { id: "B", text: "dbfs:/user/hive/warehouse" },
      { id: "C", text: "dbfs:/user/hive/customer360" },
      { id: "D", text: "dbfs:/user/hive/database" },
    ],
    correctAnswerId: "B",
    explanation: "Senza specificare una `LOCATION` custom, i database vengono creati nella root del warehouse di default, che è tipicamente `dbfs:/user/hive/warehouse/` seguito dal nome del db (con estensione .db)."
  },
  {
    id: 107,
    topic: "SQL",
    questionText: "A data engineer is attempting to drop a Spark SQL table my_table... After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. What is the reason behind the deletion of all these files?",
    options: [
      { id: "A", text: "The table was managed" },
      { id: "B", text: "The table's data was smaller than 10 GB" },
      { id: "C", text: "The table did not have a location" },
      { id: "D", text: "The table was external" },
    ],
    correctAnswerId: "A",
    explanation: "Una 'Managed Table' è gestita interamente da Databricks. Quando la elimini (`DROP`), Databricks si sente autorizzato a pulire tutto (metadati e dati). Con le 'External Tables', Databricks elimina solo il puntatore (metadati), lasciando i tuoi file al sicuro."
  },
  {
    id: 108,
    topic: "General",
    questionText: "A data engineer needs to create a table in Databricks using data from a CSV file... Which of the following lines of code fills in the blank to successfully complete the task?",
    options: [
      { id: "A", text: "FROM 'path/to/csv'" },
      { id: "B", text: "USING CSV" },
      { id: "C", text: "FROM CSV" },
      { id: "D", text: "USING DELTA" },
    ],
    correctAnswerId: "B",
    explanation: "`CREATE TABLE ... USING CSV` indica a Spark di usare il driver CSV per leggere i file in quella location."
  },
  {
    id: 109,
    topic: "General",
    questionText: "What is a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
    options: [
      { id: "A", text: "Parquet files can be partitioned" },
      { id: "B", text: "Parquet files will become Delta tables" },
      { id: "C", text: "Parquet files have a well-defined schema" },
      { id: "D", text: "Parquet files have the ability to be optimized" },
    ],
    correctAnswerId: "C",
    explanation: "Il CSV non ha tipi di dati intrinseci (è solo testo). Parquet conserva i tipi (int, string, date...) nel file stesso. Questo rende la creazione di tabelle molto più robusta perché non si deve indovinare lo schema."
  },
  {
    id: 110,
    topic: "SQL",
    questionText: "Which SQL keyword can be used to convert a table from a long format to a wide format?",
    options: [
      { id: "A", text: "TRANSFORM" },
      { id: "B", text: "PIVOT" },
      { id: "C", text: "SUM" },
      { id: "D", text: "CONVERT" },
    ],
    correctAnswerId: "B",
    explanation: "`PIVOT` è la funzione per trasformare righe in colonne (Wide format). L'operazione opposta (colonne in righe, Long format) si fa con `UNPIVOT` o `STACK`."
  },
  {
    id: 111,
    topic: "SQL",
    questionText: "A data engineer has a Python variable table_name... They want to construct a Python code block that will run the query using table_name. ____(f'SELECT customer_id, spend FROM {table_name}')",
    options: [
      { id: "A", text: "spark.delta.sql" },
      { id: "B", text: "spark.sql" },
      { id: "C", text: "spark.table" },
      { id: "D", text: "dbutils.sql" },
    ],
    correctAnswerId: "B",
    explanation: "Per eseguire SQL dinamico (costruito con variabili Python), si usa `spark.sql(stringa_query)`. `spark.table` accetta solo il nome della tabella, non una query SELECT completa."
  },
  {
    id: 112,
    topic: "General",
    questionText: "A data engineer is working with two tables. Each of these tables is displayed below... The data engineer runs the following query to join these tables together. [MISSING IMAGE IN SOURCE]",
    options: [
      { id: "A", text: "[Image/Data Missing]" },
      { id: "B", text: "[Image/Data Missing]" },
      { id: "C", text: "[Image/Data Missing]" },
      { id: "D", text: "[Image/Data Missing]" },
    ],
    correctAnswerId: "C",
    explanation: "Come per la domanda ID 1, mancano i dati visivi. La risposta C è corretta nel file originale, presumibilmente basandosi su una logica di INNER o LEFT JOIN tra le due tabelle non visibili."
  },
  {
    id: 113,
    topic: "General",
    questionText: "A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees... using the FILTER higher-order function.",
    options: [
      { id: "A", text: "FILTER(employees, e -> e.experience > 5)" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
    ],
    correctAnswerId: "A",
    explanation: "La sintassi delle Lambda Function in Spark SQL usa la freccia `->`. Quindi `FILTER(array, variabile -> condizione)`."
  },
  {
    id: 114,
    topic: "Python",
    questionText: "A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which code block can the data engineer use to complete this task?",
    options: [
      { id: "A", text: "[Missing Code]" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "def add(a, b): return a + b" },
    ],
    correctAnswerId: "D",
    explanation: "Definizione standard di funzione Python: `def` keyword, parametri tra parentesi, due punti, indentazione e `return`."
  },
  {
    id: 115,
    topic: "Streaming",
    questionText: "Which line of code should the data engineer use to fill in the blank if the data engineer only wants the query to execute a micro-batch to process data every 5 seconds?",
    options: [
      { id: "A", text: "trigger('5 seconds')" },
      { id: "B", text: "trigger(continuous='5 seconds')" },
      { id: "C", text: "trigger(once='5 seconds')" },
      { id: "D", text: "trigger(processingTime='5 seconds')" },
    ],
    correctAnswerId: "D",
    explanation: "`processingTime` è il parametro per i trigger basati su intervalli fissi (micro-batch)."
  },
  {
    id: 116,
    topic: "General",
    questionText: "A data engineer is maintaining a data pipeline... notices that the source data is starting to have a lower level of quality. The data engineer would like to automate the process of monitoring the quality level. Which of the following tools can the data engineer use?",
    options: [
      { id: "A", text: "Auto Loader" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Delta Lake" },
      { id: "D", text: "Delta Live Tables" },
    ],
    correctAnswerId: "D",
    explanation: "Delta Live Tables (DLT) ha una feature nativa chiamata **Expectations** (`CONSTRAINT ... EXPECT ...`) che permette di definire regole di qualità, monitorare le violazioni e agire di conseguenza (drop, fail, alert) in modo automatizzato."
  },
  {
    id: 117,
    topic: "Delta Lake",
    questionText: "A data engineer has three tables in a Delta Live Tables (DLT) pipeline... They would like to determine at which table in their pipeline the data is being dropped. Which approach can the data engineer take?",
    options: [
      { id: "A", text: "Set up separate expectations" },
      { id: "B", text: "Review the errors button" },
      { id: "C", text: "Notify via email" },
      { id: "D", text: "Navigate to the DLT pipeline page, click on each table, and view the data quality statistics." },
    ],
    correctAnswerId: "D",
    explanation: "La UI di DLT fornisce una vista grafica (DAG). Cliccando su un nodo (tabella), vedi i dettagli dell'esecuzione, inclusi i record processati e quelli scartati dalle Expectations."
  },
  {
    id: 118,
    topic: "Streaming",
    questionText: "What is used by Spark to record the offset range of the data being processed in each trigger in order for Structured Streaming to reliably track the exact progress?",
    options: [
      { id: "A", text: "Checkpointing and Write-ahead Logs" },
      { id: "B", text: "Replayable Sources and Idempotent Sinks" },
      { id: "C", text: "Write-ahead Logs and Idempotent Sinks" },
      { id: "D", text: "Checkpointing and Idempotent Sinks" },
    ],
    correctAnswerId: "D",
    explanation: "Nota: Questa domanda è ambigua nel file originale (che segna D, mentre altre volte A). La risposta tecnicamente più precisa per il *tracking* è **Checkpointing** (che salva l'Offset Log, una forma di Write-Ahead Log). Tuttavia, per ottenere la semantica 'Exactly-Once' end-to-end, servono Checkpointing (per sapere cosa leggere) e **Idempotent Sinks** (per poter riscrivere l'output in caso di riavvio senza creare duplicati). Databricks sembra favorire la risposta D in questo contesto specifico."
  },
  {
    id: 119,
    topic: "General",
    questionText: "What describes the relationship between Gold tables and Silver tables?",
    options: [
      { id: "A", text: "Gold tables are more likely to contain aggregations than Silver tables." },
      { id: "B", text: "Gold tables are more likely to contain valuable data than Silver tables." },
      { id: "C", text: "Gold tables are more likely to contain a less refined view of data than Silver tables." },
      { id: "D", text: "Gold tables are more likely to contain truthful data than Silver tables." },
    ],
    correctAnswerId: "A",
    explanation: "Silver = Dati puliti, livello transazione. Gold = Dati aggregati (SUM, AVG, COUNT) pronti per dashboard e report esecutivi."
  },
  {
    id: 120,
    topic: "Delta Lake",
    questionText: "What describes when to use the CREATE STREAMING LIVE TABLE syntax over the CREATE LIVE TABLE syntax when creating Delta Live Tables (DLT) tables using SQL?",
    options: [
      { id: "A", text: "Used when the subsequent step is static" },
      { id: "B", text: "Used when data needs to be processed incrementally." },
      { id: "C", text: "Used for complicated aggregations" },
      { id: "D", text: "Used when the previous step is static" },
    ],
    correctAnswerId: "B",
    explanation: "`STREAMING LIVE TABLE` indica un processo continuo/incrementale (legge solo i nuovi dati). `LIVE TABLE` indica un processo batch completo (legge tutto ogni volta)."
  },
  {
    id: 121,
    topic: "Delta Lake",
    questionText: "A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE... The table is configured to run in Production mode using the Continuous Pipeline Mode. What is the expected outcome after clicking Start?",
    options: [
      { id: "A", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing." },
      { id: "B", text: "All datasets will be updated once and the pipeline will shut down." },
      { id: "C", text: "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped." },
      { id: "D", text: "All datasets will be updated once and the pipeline will shut down." },
    ],
    correctAnswerId: "C",
    explanation: "In modalità 'Continuous' (Production), la pipeline gira all'infinito processando i dati man mano che arrivano. Le risorse di calcolo (cluster) rimangono attive finché non fermi manualmente la pipeline."
  },
  {
    id: 122,
    topic: "General",
    questionText: "Which type of workloads are compatible with Auto Loader?",
    options: [
      { id: "A", text: "Streaming workloads" },
      { id: "B", text: "Machine learning workloads" },
      { id: "C", text: "Serverless workloads" },
      { id: "D", text: "Batch workloads" },
    ],
    correctAnswerId: "A",
    explanation: "(Variante della #84). Auto Loader è tecnicamente uno Structured Streaming Source (`spark.readStream.format('cloudFiles')`), quindi è nativamente un carico di lavoro streaming, anche se usato con `availableNow` per simulare il batch."
  },
  {
    id: 123,
    topic: "General",
    questionText: "A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader... Why has Auto Loader inferred all of the columns to be of the string type?",
    options: [
      { id: "A", text: "Auto Loader cannot infer the schema of ingested data" },
      { id: "B", text: "JSON data is a text-based format" },
      { id: "C", text: "Auto Loader only works with string data" },
      { id: "D", text: "All of the fields had at least one null value" },
    ],
    correctAnswerId: "B",
    explanation: "(Variante della #78). JSON è testo. Senza hints o un campionamento aggressivo, Spark/Auto Loader predilige `StringType` per evitare perdita di dati o errori di parsing su campi ambigui."
  },
  {
    id: 124,
    topic: "General",
    questionText: "Which statement regarding the relationship between Silver tables and Bronze tables is always true?",
    options: [
      { id: "A", text: "Silver tables contain a less refined, less clean view of data than Bronze data." },
      { id: "B", text: "Silver tables contain aggregates while Bronze data is unaggregated." },
      { id: "C", text: "Silver tables contain more data than Bronze tables." },
      { id: "D", text: "Silver tables contain less data than Bronze tables." },
    ],
    correctAnswerId: "D", // Nota: Nel contesto di pulizia, Silver ha MENO righe se deduplichi o filtri dati errati.
    explanation: "Attenzione: La risposta D suggerisce che Silver abbia 'meno dati'. Questo è spesso vero perché il passaggio da Bronze a Silver implica **Deduplicazione** e **Filtraggio** di record non validi (Data Quality), riducendo il volume totale rispetto al dato grezzo (Raw/Bronze) che tiene tutto."
  },
  {
    id: 125,
    topic: "Streaming",
    questionText: "Which query is performing a streaming hop from raw data to a Bronze table?",
    options: [
      { id: "A", text: "[Missing Code]" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
    ],
    correctAnswerId: "D",
    explanation: "Manca il codice, ma la logica corretta per un 'streaming hop' verso Bronze è una lettura con `spark.readStream` (o `cloudFiles`) da una cartella raw e una scrittura `.writeStream` in una tabella Delta in modalità `append`."
  },
  {
    id: 126,
    topic: "Delta Lake",
    questionText: "A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW. What is the expected behavior?",
    options: [
      { id: "A", text: "Records that violate the expectation cause the job to fail." },
      { id: "B", text: "Records that violate the expectation are added to the target dataset and flagged." },
      { id: "C", text: "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log." },
      { id: "D", text: "Records that violate the expectation are added to the target dataset." },
    ],
    correctAnswerId: "C",
    explanation: "(Variante della #32). `ON VIOLATION DROP ROW` elimina silenziosamente il dato dalla tabella target, ma registra l'evento di violazione nel log delle metriche DLT."
  },
  {
    id: 127,
    topic: "Workflows",
    questionText: "A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which action can the data engineer perform to improve the start up time?",
    options: [
      { id: "A", text: "They can use endpoints available in Databricks SQL" },
      { id: "B", text: "They can use jobs clusters instead of all-purpose clusters" },
      { id: "C", text: "They can configure the clusters to autoscale for larger data sizes" },
      { id: "D", text: "They can use clusters that are from a cluster pool" },
    ],
    correctAnswerId: "D",
    explanation: "(Variante della #43). I **Cluster Pools** (Instance Pools) mantengono VM pre-avviate nel cloud provider, eliminando i tempi di provisioning e boot del sistema operativo, riducendo l'avvio del cluster Spark a pochi secondi."
  },
  {
    id: 128,
    topic: "Streaming",
    questionText: "A data engineer has a single-task Job... they need to set up another task to run a new notebook prior to the original task. Which approach can the data engineer use?",
    options: [
      { id: "A", text: "Clone the existing task and update it." },
      { id: "B", text: "Create a new task in the existing Job and then add it as a dependency of the original task." },
      { id: "C", text: "Create a new task and add the original task as a dependency of the new task." },
      { id: "D", text: "Create a new job from scratch." },
    ],
    correctAnswerId: "B",
    explanation: "Per far girare il Task B *prima* del Task A esistente, devi modificare il Task A affinché 'dipenda' (Depends On) dal Task B. In questo modo l'orchestrazione esegue B -> A."
  },
  {
    id: 129,
    topic: "Workflows",
    questionText: "A single Job runs two notebooks as two separate tasks. One of the notebooks is running slowly... The data engineer asks a tech lead for help in identifying why. Which approach can the tech lead use?",
    options: [
      { id: "A", text: "Navigate to Runs tab -> immediately review notebook." },
      { id: "B", text: "Navigate to Tasks tab -> click active run." },
      { id: "C", text: "They can navigate to the Runs tab in the Jobs UI and click on the active run to review the processing notebook." },
      { id: "D", text: "Navigate to Tasks tab -> review notebook." },
    ],
    correctAnswerId: "C",
    explanation: "Nella Jobs UI, la tab 'Runs' mostra la cronologia e le esecuzioni attive. Cliccando sulla 'Active Run' specifica, si entra nel dettaglio dei task, dove è possibile vedere i log, l'output delle celle e lo Spark UI in tempo reale per il debug."
  },
  {
    id: 130,
    topic: "SQL",
    questionText: "A data analysis team has noticed that their Databricks SQL queries are running too slowly... The issue is present when many members of the team are running small queries simultaneously... Which approach can the data engineering team use to improve latency?",
    options: [
      { id: "A", text: "Increase cluster size." },
      { id: "B", text: "They can increase the maximum bound of the SQL endpoint’s scaling range." },
      { id: "C", text: "Turn on Auto Stop." },
      { id: "D", text: "Turn on Serverless." },
    ],
    correctAnswerId: "B",
    explanation: "(Variante della #39). Per problemi di concorrenza (molti utenti, query piccole), la soluzione è la scalabilità orizzontale (più cluster in parallelo). Aumentare il 'Maximum Bound' del range di scaling permette a Databricks SQL di lanciare più cluster simultanei per servire la coda di query."
  },
  {
    id: 131,
    topic: "SQL",
    questionText: "A data engineer has been using a Databricks SQL dashboard... The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which approach can be used?",
    options: [
      { id: "A", text: "Alert with custom template." },
      { id: "B", text: "Alert with email destination." },
      { id: "C", text: "They can set up an Alert with a new webhook alert destination." },
      { id: "D", text: "Alert with one-time notifications." },
    ],
    correctAnswerId: "C",
    explanation: "(Variante della #41). Per integrazioni con Slack, Microsoft Teams o PagerDuty, si usano le 'Webhook Destination' negli Alert di SQL."
  },
  {
    id: 132,
    topic: "Delta Lake",
    questionText: "A company uses Delta Sharing to collaborate with partners across different cloud providers and geographic regions. What will result in additional costs due to cross-region or egress fees?",
    options: [
      { id: "A", text: "Sharing data within the same cloud provider and region" },
      { id: "B", text: "Transferring data via Delta Sharing across clouds and across different geographic regions" },
      { id: "C", text: "Accessing Delta Sharing data using a VPN" },
      { id: "D", text: "Utilizing Delta Sharing for internal data analytics" },
    ],
    correctAnswerId: "B",
    explanation: "Delta Sharing è un protocollo aperto, ma i dati fisici devono viaggiare. Se il consumatore è in una regione AWS diversa o su un cloud diverso (es. Azure) rispetto a dove risiedono i dati, il cloud provider addebiterà i costi di 'Egress' (uscita dati) standard."
  },
  {
    id: 133,
    topic: "Streaming",
    questionText: "A data engineer is writing a script... In the event of the Schema change, the ingestion should fail. It should fail until the changes downstream source can be found and verified. Which command will meet the requirements?",
    options: [
      { id: "A", text: "failOnNewColumns" },
      { id: "B", text: "none" },
      { id: "C", text: "rescue" },
      { id: "D", text: "addNewColumns" },
    ],
    correctAnswerId: "A",
    explanation: "In Auto Loader e Spark Streaming, l'opzione di evoluzione dello schema `failOnNewColumns` fa esattamente questo: se rileva colonne nuove non presenti nello schema originale, il job fallisce (sollevando un'eccezione) per allertare l'ingegnere."
  },
  {
    id: 134,
    topic: "SQL",
    questionText: "Which SQL code snippet will correctly demonstrate a Data Definition Language (DDL) operation used to create a table?",
    options: [
      { id: "A", text: "CREATE TABLE employees ( id INT, name STRING );" },
      { id: "B", text: "DROP TABLE employees;" },
      { id: "C", text: "ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);" },
      { id: "D", text: "INSERT INTO employees (id, name) VALUES (1 'Alice');" },
    ],
    correctAnswerId: "A",
    explanation: "DDL (Data Definition Language) riguarda la struttura degli oggetti. `CREATE TABLE` è l'esempio classico. `DROP` e `ALTER` sono anch'essi DDL, ma la domanda chiede specificamente 'used to create a table'. `INSERT` è DML (Manipulation)."
  },
  {
    id: 135,
    topic: "SQL",
    questionText: "A data engineer is working in a Databricks notebook... The engineer wants to organize these steps into a structured process that can be run regularly and scheduled. Which Databricks notebook feature is applicable in the use case?",
    options: [
      { id: "A", text: "Real-time streaming support" },
      { id: "B", text: "Collaborative editing" },
      { id: "C", text: "Task workflows and job scheduling" },
      { id: "D", text: "Notebook version control" },
    ],
    correctAnswerId: "C",
    explanation: "La funzionalità per trasformare un notebook (o un insieme di notebook) in un processo strutturato, ricorrente e monitorato è **Databricks Workflows** (Jobs scheduling)."
  },
  {
    id: 136,
    topic: "Workflows",
    questionText: "A data engineer needs to develop integration tests for an ETL process and deploy a version-controlled, packaged workflow into production using an external job scheduler. Which tool should the data engineer use for this job?",
    options: [
      { id: "A", text: "Databricks Connect" },
      { id: "B", text: "Databricks Asset Bundles" },
      { id: "C", text: "Databricks Command Line Interface" },
      { id: "D", text: "Databricks Software Development Kit" },
    ],
    correctAnswerId: "B",
    explanation: "**Databricks Asset Bundles (DABs)** è il nuovo standard (basato su CLI e YAML) per definire, testare e distribuire (CI/CD) interi progetti Databricks (Jobs, DLT, ML) come codice versione-controllato."
  },
  {
    id: 137,
    topic: "General",
    questionText: "Which Databricks asset bundle format is valid?",
    options: [
      { id: "A", text: "resources: jobs: hello-job: name: hello-job tasks: ..." },
      { id: "B", text: "'resources':{ 'jobs':{ ... JSON format ... }" },
      { id: "C", text: "configuration = { ... Python dict ... }" },
      { id: "D", text: "resources { jobs { ... Terraform-like ... }" },
    ],
    correctAnswerId: "A",
    explanation: "I Databricks Asset Bundles (DABs) utilizzano file di configurazione in formato **YAML** (`databricks.yml`). La struttura `resources: jobs: ...` è tipica dello YAML."
  },
  {
    id: 138,
    topic: "Delta Lake",
    questionText: "A data engineer needs to ingest from both streaming and batch sources... Occasionally, some of the data picked up by the sensors are outside the expected parameters. If this occurs, the data must be dropped, but the stream should not fail. Which feature of Delta Live Tables meets this requirement?",
    options: [
      { id: "A", text: "Change Data Capture" },
      { id: "B", text: "Error Handling" },
      { id: "C", text: "Monitoring" },
      { id: "D", text: "Expectations" },
    ],
    correctAnswerId: "D",
    explanation: "Le **Expectations** in DLT gestiscono la qualità. Nello specifico, la clausola `ON VIOLATION DROP ROW` soddisfa il requisito: scarta il dato errato ma non ferma il flusso (non fail)."
  },
  {
    id: 139,
    topic: "General",
    questionText: "A data engineer has inherited a Databricks pipeline... It is noted that the cluster is not being fully utilized, and the dataset is getting skewed. How should the data engineer resolve this issue?",
    options: [
      { id: "A", text: "Use coalesce() on the dataset" },
      { id: "B", text: "Increase the number of executors" },
      { id: "C", text: "Repartition the dataset to have it be more optimally spread across all nodes." },
      { id: "D", text: "Increase the executor memory" },
    ],
    correctAnswerId: "C",
    explanation: "Il 'Data Skew' significa che alcuni worker lavorano molto più di altri perché i dati sono distribuiti male (es. tutti su una partizione). Fare un `repartition()` (spesso su una colonna ad alta cardinalità o 'salt') ridistribuisce i dati uniformemente, permettendo al cluster di lavorare in parallelo efficiente."
  },
  {
    id: 140,
    topic: "General",
    questionText: "An organization is looking for an optimized storage layer that supports ACID transactions and schema enforcement. Which technology should the organization use?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Unity Catalog" },
      { id: "C", text: "Cloud File Storage" },
      { id: "D", text: "Data lake" },
    ],
    correctAnswerId: "A",
    explanation: "**Delta Lake** è la tecnologia di storage layer open source che aggiunge ACID, schema enforcement e time travel sopra il Data Lake (Cloud Storage)."
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
    explanation: "Il layer Bronze deve rimanere il più fedele possibile alla sorgente (Raw). Le uniche trasformazioni accettate sono puramente tecniche: aggiunta di metadati di ingestione come `_load_date`, `_source_file`, o `_process_id` per lineage e audit."
  },
  {
    id: 142,
    topic: "SQL",
    questionText: "An organization has data stored across multiple external systems, including MySQL, Amazon Redshift, and Google BigQuery. The data engineer wants to perform analytics without ingesting directly into Databricks... Which feature of Databricks enables querying these external data sources?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Lakehouse Federation" },
      { id: "C", text: "MLflow" },
      { id: "D", text: "Databricks Connect" },
    ],
    correctAnswerId: "B",
    explanation: "**Lakehouse Federation** è la feature di Unity Catalog che permette di mappare database esterni (come Snowflake, Postgres, Redshift) dentro Databricks e interrogarli via SQL senza copiare i dati (virtualizzazione)."
  },
  {
    id: 143,
    topic: "Unity Catalog",
    questionText: "An organization needs to share a dataset stored in its Databricks Unity Catalog with an external partner who uses a different data platform that is not Databricks... Which method should the data engineer use?",
    options: [
      { id: "A", text: "Using Delta Sharing with the open sharing protocol" },
      { id: "B", text: "Exporting data as CSV files and emailing them" },
      { id: "C", text: "Using a third-party API" },
      { id: "D", text: "Databricks-to-Databricks Sharing" },
    ],
    correctAnswerId: "A",
    explanation: "Delta Sharing è un protocollo aperto (Open Protocol). Esistono connettori per PowerBI, Tableau, Pandas e altri sistemi. Se il partner non ha Databricks, può usare un client open source compatibile con Delta Sharing per leggere i dati in modo sicuro."
  },
  {
    id: 144,
    topic: "Streaming",
    questionText: "A data engineer streams customer orders into a Kafka topic and is currently writing the ingestion script of a DLT pipeline. The data engineer needs to ingest the data from Kafka brokers to DLT using Databricks. What is the correct code?",
    options: [
      { id: "A", text: "spark.readStream.format('kafka').option('kafka.bootstrap.servers', ...).load()" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
    ],
    correctAnswerId: "A",
    explanation: "Per leggere da Kafka in Spark (e DLT), si usa il formato standard `kafka` specificando i `bootstrap.servers` e il topic da sottoscrivere (`subscribe`)."
  },
  {
    id: 145,
    topic: "General",
    questionText: "Calculate the total sales amount for each product category and store the results in a new dataframe called category_sales. What will generate the expected result of category_sales?",
    options: [
      { id: "A", text: "category_sales = sales_df.groupBy('category').agg(sum('sales_amount').alias('total_sales_amount'))" },
      { id: "B", text: "category_sales = sales_df.sum('sales_amount').groupBy('category')..." },
      { id: "C", text: "category_sales = sales_df.agg(sum('sales_amount').groupBy('category')..." },
      { id: "D", text: "category_sales = sales_df.groupBy('region').agg(sum('sales_amount')..." },
    ],
    correctAnswerId: "A",
    explanation: "Sintassi PySpark corretta per aggregazione: `df.groupBy('colonna').agg(funzione('col').alias('nome'))`. L'opzione A raggruppa correttamente per 'category'."
  },
  {
    id: 146,
    topic: "Delta Lake",
    questionText: "A data engineer is designing an ETL pipeline... The team is considering using Delta Live Tables (DLT)... Why is Delta Live Tables (DLT) an appropriate choice?",
    options: [
      { id: "A", text: "Automatic data quality checks, built-in support for schema evolution, and declarative pipeline development" },
      { id: "B", text: "Manual schema enforcement..." },
      { id: "C", text: "Requires custom code for data quality..." },
      { id: "D", text: "Supports only batch processing..." },
    ],
    correctAnswerId: "A",
    explanation: "DLT automatizza gran parte del lavoro di ingegneria noioso ('plumbing'): gestisce automaticamente le dipendenze (DAG), offre Data Quality dichiarativa (Expectations) e gestisce l'evoluzione dello schema e i checkpointing."
  },
  {
    id: 147,
    topic: "SQL",
    questionText: "A data engineer is attempting to write Python and SQL in the same command cell and is running into an error. The engineer thought that it was possible to use a Python variable in a select statement. Why does the command fail?",
    options: [
      { id: "A", text: "Databricks supports language interoperability... but only between Scala and SQL." },
      { id: "B", text: "Databricks supports multiple languages but only one per notebook." },
      { id: "C", text: "Databricks supports one language per cell." },
      { id: "D", text: "Databricks supports language interoperability but only if a special character is used." },
    ],
    correctAnswerId: "C",
    explanation: "Ogni cella del notebook viene interpretata da un singolo interprete (Python, SQL, Scala o R). Non puoi mischiare codice Python (`x = 5`) e codice SQL (`SELECT *`) *direttamente* nella stessa cella senza usare magic commands (`%sql`) o funzioni bridge come `spark.sql()`."
  },
  {
    id: 148,
    topic: "Python",
    questionText: "Which compute option should be chosen in a scenario where small-scale ad-hoc Python scripts need to be run at high frequency and should wind down quickly after these queries have finished running?",
    options: [
      { id: "A", text: "All-purpose Cluster" },
      { id: "B", text: "Job Cluster" },
      { id: "C", text: "Serverless Compute" },
      { id: "D", text: "SQL Warehouse" },
    ],
    correctAnswerId: "C",
    explanation: "**Serverless Compute** per Jobs (o Notebooks) offre tempi di avvio istantanei e spegnimento rapido, ideale per script frequenti e brevi (bursty workloads) dove i tempi di attesa dei cluster classici sarebbero inaccettabili."
  },
  {
    id: 149,
    topic: "Delta Lake",
    questionText: "A data engineer is working on a personal laptop... The engineer decides to use Databricks Connect... How does Databricks Connect enable the engineer to develop, test, and debug code seamlessly on their local machine?",
    options: [
      { id: "A", text: "By providing a local environment that mimics the Databricks runtime..." },
      { id: "B", text: "..." },
      { id: "C", text: "..." },
      { id: "D", text: "By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using their preferred IDE" },
    ],
    correctAnswerId: "D",
    explanation: "**Databricks Connect** permette al tuo IDE locale (VS Code, PyCharm) di agire come un client che invia i comandi Spark al cluster remoto Databricks, permettendoti di sviluppare localmente ma eseguendo il calcolo pesante sul cloud."
  },
  {
    id: 150,
    topic: "General",
    questionText: "Calculate the total sales amount for each region and store the results in a new dataframe called region_sales. Given the expected result: Which code will generate the expected result?",
    options: [
      { id: "A", text: "region_sales = sales_df.groupBy('category').sum('sales_amount')..." },
      { id: "B", text: "region_sales = sales_df.groupBy('region').agg(sum('sales_amount').alias('total_sales_amount'))" },
      { id: "C", text: "region_sales = sales_df.sum('sales_amount').groupBy('region')..." },
      { id: "D", text: "region_sales = sales_df.agg(sum('sales_amount').groupBy('region')..." },
    ],
    correctAnswerId: "B",
    explanation: "Simile alla #145 ma raggruppando per `region`. La sintassi corretta è `groupBy('region').agg(...)`."
  },
  {
    id: 151,
    topic: "Delta Lake",
    questionText: "A Data Engineer is building a simple data pipeline using Delta Live Tables (DLT)... The task is to create a DLT pipeline that reads the raw JSON data and writes it into a Delta table for further processing. Which code snippet will correctly ingest the raw JSON data?",
    options: [
      { id: "A", text: "[Code Missing]" },
      { id: "B", text: "[Code Missing]" },
      { id: "C", text: "CREATE OR REFRESH STREAMING LIVE TABLE customers AS SELECT * FROM cloud_files('/path/to/json', 'json')" },
      { id: "D", text: "[Code Missing]" },
    ],
    correctAnswerId: "C",
    explanation: "In DLT SQL, la funzione `cloud_files()` è l'equivalente di Auto Loader. La sintassi corretta è creare una `STREAMING LIVE TABLE` che seleziona da `cloud_files('percorso', 'formato')`."
  },
  {
    id: 152,
    topic: "General",
    questionText: "A data engineering team is using Kafka to capture event data... The team wants to be mindful of costs. Where should this historical event data be stored within the Medallion architecture?",
    options: [
      { id: "A", text: "Gold" },
      { id: "B", text: "Silver" },
      { id: "C", text: "Bronze" },
      { id: "D", text: "Raw layer" },
    ],
    correctAnswerId: "C",
    explanation: "Il layer **Bronze** è designato per l'archiviazione storica a lungo termine dei dati grezzi (Raw) in formato Delta efficiente. È il posto più economico e sicuro per mantenere la storia completa (append-only) degli eventi."
  },
  {
    id: 153,
    topic: "Workflows",
    questionText: "What is the maximum output supported by a job cluster to ensure a notebook does not fail (regarding result size returning to driver)?",
    options: [
      { id: "A", text: "25MBs" },
      { id: "B", text: "10MBs" },
      { id: "C", text: "20MBs" },
      { id: "D", text: "15MBs" },
    ],
    correctAnswerId: "C",
    explanation: "Nota tecnica: I notebook Databricks hanno un limite sulla dimensione dei risultati restituiti al driver (interfaccia web) per evitare crash del browser o del driver stesso. Questo limite è tipicamente intorno ai 20MB. Se superato, il job può fallire o troncare l'output."
  },
  {
    id: 154,
    topic: "General",
    questionText: "Which two items are characteristics of the Gold Layer? (Choose two.)",
    options: [
      { id: "A", text: "Historical lineage" },
      { id: "B", text: "Raw Data" },
      { id: "C", text: "Normalised" },
      { id: "D", text: "De-normalised (Read-optimized)" },
      { id: "E", text: "Aggregated business metrics" },
    ],
    correctAnswerId: "D",
    explanation: "Le tabelle Gold sono ottimizzate per la lettura (Read-optimized) da parte di strumenti di BI. Spesso sono **De-normalizzate** (modelli a stella, tabelle larghe) per evitare join costosi durante l'analisi e contengono aggregazioni di business."
  },
  {
    id: 155,
    topic: "Delta Lake",
    questionText: "A data engineer has developed an ETL that produces a Delta managed table... How could the Data Engineer be sure about the OPTIMIZE command has been executed explicitly?",
    options: [
      { id: "A", text: "Check the system table" },
      { id: "B", text: "Use SHOW TABLES EXTENDED" },
      { id: "C", text: "Use DESCRIBE DETAIL table" },
      { id: "D", text: "Use DESCRIBE HISTORY table to check if exists any OPTIMIZE operation" },
    ],
    correctAnswerId: "D",
    explanation: "`DESCRIBE HISTORY table_name` mostra il log di tutte le transazioni avvenute sulla tabella. Se `OPTIMIZE` è stato eseguito, apparirà come un'operazione specifica in questa lista."
  },
  {
    id: 156,
    topic: "General",
    questionText: "A data engineer is reviewing the documentation on audit logs... How are events formatted in Databricks audit logs?",
    options: [
      { id: "A", text: "In Databricks, audit logs output events in a JSON format." },
      { id: "B", text: "In Databricks, audit logs output events in a CSV format." },
      { id: "C", text: "In Databricks, audit logs output events in an XML format." },
      { id: "D", text: "In Databricks, audit logs output events in a plain text format." },
    ],
    correctAnswerId: "A",
    explanation: "I log di audit (che tracciano chi ha fatto cosa) vengono consegnati nel bucket di storage del cliente in formato **JSON**, facili da ingerire e analizzare programmaticamente."
  },
  {
    id: 157,
    topic: "Python",
    questionText: "A Python file is ready to go into production and the client wants to use the cheapest but most efficient type of cluster possible... Which cluster meets the requirement?",
    options: [
      { id: "A", text: "Interactive cluster" },
      { id: "B", text: "Job cluster with spot instances enabled" },
      { id: "C", text: "Job cluster with spot instances disabled" },
      { id: "D", text: "Job cluster with Photon enabled" },
    ],
    correctAnswerId: "B",
    explanation: "Per minimizzare i costi al massimo: 1) Usare un **Job Cluster** (più economico dell'Interactive). 2) Usare **Spot Instances** (capacità in eccesso del cloud provider venduta a forte sconto). Per workload semplici e piccoli, il rischio di interruzione delle spot è gestibile o trascurabile rispetto al risparmio."
  },
  {
    id: 158,
    topic: "Python",
    questionText: "A data engineer... wants to load several JSON files from containers on a storage account as soon as the file arrives... Which syntax should the data engineer follow using Auto Loader?",
    options: [
      { id: "A", text: "df = spark.read.json('input/path')" },
      { id: "B", text: "df = spark.readStream.format('cloud').option('json').load('/input/path')" },
      { id: "C", text: "df = spark.readStream.format('json'.load('input/path')" },
      { id: "D", text: "df = spark.readStream.format('cloudFiles').option('cloudFiles.format', 'json').load('/input/path')" },
    ],
    correctAnswerId: "D",
    explanation: "La sintassi corretta per Auto Loader è `format('cloudFiles')`. È poi obbligatorio specificare il formato dei file sorgente con l'opzione `cloudFiles.format` (es. 'json')."
  },
  {
    id: 159,
    topic: "General",
    questionText: "What is the appropriate layer and data pairing for medallion architecture?",
    options: [
      { id: "A", text: "Silver Layer - Raw data" },
      { id: "B", text: "Bronze Layer - Summary of cash deposit" },
      { id: "C", text: "Silver Layer - Cleansed master customer data" },
      { id: "D", text: "Gold Layer - Deduplicated money transfer transaction" },
    ],
    correctAnswerId: "C",
    explanation: "Analizziamo le opzioni: A è errato (Raw è Bronze). B è errato (Summary è Gold). D è errato (Deduplicated transactions sono Silver). **C è corretto**: Silver contiene dati puliti ('Cleansed') e master data (entità uniche)."
  },
  {
    id: 160,
    topic: "Streaming",
    questionText: "A data engineer is processing ingested streaming tables and needs to filter out NULL values in the order_datetime column... Which code snippet should the data engineer use?",
    options: [
      { id: "A", text: "CREATE STREAMING LIVE TABLE orders_valid AS SELECT * FROM STREAM(LIVE.orders_raw) WHERE order_datetime IS NOT NULL" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
    ],
    correctAnswerId: "A",
    explanation: "Per filtrare record in DLT SQL, basta una clausola `WHERE` standard nella definizione della tabella. Poiché la sorgente è streaming, usiamo `FROM STREAM(...)`."
  },
  {
    id: 161,
    topic: "Delta Lake",
    questionText: "The data engineer is utilizing the Unity Catalog lineage feature to monitor this process. How does Unity Catalog’s data lineage feature support the visualization of relationships?",
    options: [
      { id: "A", text: "Visualizes dependencies but not column-level." },
      { id: "B", text: "Only supports table level." },
      { id: "C", text: "Excludes job-related dependencies." },
      { id: "D", text: "Unity Catalog provides an interactive graph that visualizes the dependencies between Delta tables, notebooks, jobs, and dashboards, while also supporting column-level tracking." },
    ],
    correctAnswerId: "D",
    explanation: "La potenza di Unity Catalog sta proprio nella **Lineage** completa: traccia il flusso dei dati dalle tabelle grezze fino alle dashboard, passando per job e notebook, e supporta la granularità fino alla singola colonna (Column-Level Lineage)."
  },
  {
    id: 162,
    topic: "SQL",
    questionText: "A data engineer needs to conduct Exploratory Analysis... Which type of SQL Warehouse will enable the data engineer to process large numbers of queries quickly and cost-effectively?",
    options: [
      { id: "A", text: "Serverless compute for notebooks" },
      { id: "B", text: "Pro SQL Warehouse" },
      { id: "C", text: "Classic SQL Warehouse" },
      { id: "D", text: "Serverless SQL Warehouse" },
    ],
    correctAnswerId: "D",
    explanation: "Per l'analisi esplorativa (ad-hoc), **Serverless SQL Warehouse** è ideale perché si avvia istantaneamente (nessuna attesa per il cluster) e scala rapidamente in base al carico, ottimizzando il rapporto tempo/costo."
  },
  {
    id: 163,
    topic: "Unity Catalog",
    questionText: "A data engineer is configuring Unity Catalog... and needs to assign a role to a user who should have the ability to grant and revoke privileges on various data objects within a specific schema, but should not have read/write access over the schema or its objects. Which role should the data engineer assign?",
    options: [
      { id: "A", text: "Table Owner" },
      { id: "B", text: "Catalog Owner" },
      { id: "C", text: "Schema Owner" },
      { id: "D", text: "USE catalog/schema privilege" },
    ],
    correctAnswerId: "C",
    explanation: "In Unity Catalog, l'**Owner** di un oggetto (come uno Schema) ha il privilegio di gestire i permessi (GRANT/REVOKE) su quell'oggetto e i suoi figli. Non implica necessariamente che l'owner stia leggendo/scrivendo dati (sebbene ne abbia la facoltà), ma è il ruolo amministrativo corretto per la delega della gestione."
  },
  {
    id: 164,
    topic: "Python",
    questionText: "A data engineer is debugging a Python notebook... The engineer wants to inspect the state of variables... Which tool should the engineer use?",
    options: [
      { id: "A", text: "Cluster Logs" },
      { id: "B", text: "Use the Python Notebook Interactive Debugger to set breakpoints and inspect variable values in real-time" },
      { id: "C", text: "Ganglia UI" },
      { id: "D", text: "Spark UI" },
    ],
    correctAnswerId: "B",
    explanation: "Databricks ha introdotto un **Interactive Debugger** per i notebook Python. Simile a quello di VS Code o PyCharm, permette di mettere breakpoint nelle celle, fermare l'esecuzione e ispezionare lo stato delle variabili."
  },
  {
    id: 165,
    topic: "General",
    questionText: "A data engineer wants to create an external table in Databricks that references data stored in an Azure Data Lake Storage (ADLS) location... Which step should the data engineer take?",
    options: [
      { id: "A", text: "CREATE MANAGED TABLE statement" },
      { id: "B", text: "CREATE UNMANAGED TABLE statement" },
      { id: "C", text: "Use the CREATE TABLE statement and specify the LOCATION clause with the path to the external data." },
      { id: "D", text: "CREATE EXTERNAL TABLE statement" },
    ],
    correctAnswerId: "C",
    explanation: "La sintassi standard per creare una tabella esterna (External Table) è semplicemente `CREATE TABLE ... LOCATION 'path'`. Se specifichi una `LOCATION`, Databricks capisce che non deve gestire lui i file (Managed) ma puntare a quelli esistenti."
  },
  {
    id: 166,
    topic: "General",
    questionText: "A data engineer is developing a small proof of concept in a notebook. When running the entire notebook, the Cluster usage spikes. The data engineer wants to keep the development requirements and get real-time results. Which Cluster meets these requirements?",
    options: [
      { id: "A", text: "All Purpose Cluster with autoscaling" },
      { id: "B", text: "Job Cluster with Photon enabled" },
      { id: "C", text: "Job Cluster with autoscaling" },
      { id: "D", text: "All-Purpose Cluster with a large fixed memory size" },
    ],
    correctAnswerId: "A",
    explanation: "Per lo sviluppo interattivo (POC, Notebook), serve un **All-Purpose Cluster**. L'**Autoscaling** permette al cluster di crescere (aggiungere nodi) durante i picchi di calcolo e ridursi dopo, bilanciando performance e costi durante lo sviluppo."
  },
  {
    id: 167,
    topic: "SQL",
    questionText: "A data engineer needs to process SQL queries on a large dataset with fluctuating workloads. The workload requires automatic scaling... The solution should be cost-efficient and charge only for the compute resources used. Which compute option should the data engineer use?",
    options: [
      { id: "A", text: "Databricks SQL Analytics" },
      { id: "B", text: "Databricks Runtime for ML" },
      { id: "C", text: "Databricks Jobs" },
      { id: "D", text: "Serverless SQL Warehouse" },
    ],
    correctAnswerId: "D",
    explanation: "**Serverless SQL Warehouse** è progettato per carichi SQL fluttuanti. Scala automaticamente (sia verticalmente che orizzontalmente) quasi istantaneamente e fattura solo per i secondi di utilizzo attivo, eliminando i costi dei cluster in idle."
  },
  {
    id: 168,
    topic: "General",
    questionText: "What is the functionality of AutoLoader in Databricks?",
    options: [
      { id: "A", text: "Auto Loader automatically ingests and processes new files from cloud storage, handling both batch and streaming data with support for schema evolution." },
      { id: "B", text: "Auto Loader handles batch and streaming but no schema evolution." },
      { id: "C", text: "Auto Loader handles only streaming." },
      { id: "D", text: "Auto Loader handles batch with schema evolution." },
    ],
    correctAnswerId: "A",
    explanation: "Auto Loader (`cloudFiles`) è potente perché combina l'ingestione incrementale (streaming o batch triggerato) con una robusta gestione dell'evoluzione dello schema (schema evolution, rescue data)."
  },
  {
    id: 169,
    topic: "Delta Lake",
    questionText: "A company is collaborating with a partner that does not use Databricks but needs access to a large historical dataset... The data engineer needs to ensure that the partner can access the data securely, without the need for them to set up an account... How should the data be shared?",
    options: [
      { id: "A", text: "Export to CSV" },
      { id: "B", text: "Grant Databricks workspace access" },
      { id: "C", text: "Use Unity Catalog sharing (requires Databricks)" },
      { id: "D", text: "Share the dataset using Delta Sharing, which allows your partner to access the data using a secure, read-only URL (token) without requiring a Databricks account." },
    ],
    correctAnswerId: "D",
    explanation: "**Delta Sharing** risolve proprio questo problema. Genera un token sicuro che il partner può usare con un client open source (es. Pandas, PowerBI) per leggere i dati Delta direttamente dallo storage, senza aver bisogno di un account Databricks."
  },
  {
    id: 170,
    topic: "Delta Lake",
    questionText: "What happens when OPTIMIZE is run twice on the same table with the same data?",
    options: [
      { id: "A", text: "It has no effect because it is idempotent." },
      { id: "B", text: "It changes the number of tuples per file." },
      { id: "C", text: "It further reduces file sizes." },
      { id: "D", text: "It triggers a full liquid clustering process." },
    ],
    correctAnswerId: "A",
    explanation: "`OPTIMIZE` è intelligente (idempotente). Controlla se i file sono già della dimensione ottimale (es. 1GB). Se riesegui il comando e non sono stati aggiunti nuovi dati (o piccoli file), non fa nulla, risparmiando risorse."
  },
  {
    id: 171,
    topic: "Delta Lake",
    questionText: "A data engineer... needs to share a collection of tables with an external partner who also uses a Databricks workspace... The data engineer decides to use Delta Sharing. What is the first piece of information the data engineer should request?",
    options: [
      { id: "A", text: "IP address" },
      { id: "B", text: "Cluster name" },
      { id: "C", text: "The sharing identifier of their Unity Catalog metastore" },
      { id: "D", text: "Password" },
    ],
    correctAnswerId: "C",
    explanation: "Per la condivisione Databricks-to-Databricks (via Unity Catalog), devi conoscere l'identificativo univoco del Metastore del destinatario (**Sharing Identifier**) per autorizzare la condivisione verso quel metastore specifico."
  },
  {
    id: 172,
    topic: "General",
    questionText: "A Databricks workflow fails at the last stage... This workflow is very costly and time-intensive to run. Which action should the data engineer do in order to minimise downtime and cost?",
    options: [
      { id: "A", text: "Re-run the entire workflow" },
      { id: "B", text: "Repair run" },
      { id: "C", text: "Restart the cluster" },
      { id: "D", text: "Switch to another cluster" },
    ],
    correctAnswerId: "B",
    explanation: "La funzionalità **Repair Run** nei Workflow permette di rieseguire *solo* i task falliti (e i loro dipendenti), saltando tutti i task che erano stati completati con successo. Questo è cruciale per risparmiare tempo e costi su job lunghi."
  },
  {
    id: 173,
    topic: "General",
    questionText: "An organization has implemented a data pipeline... and needs to ensure it can scale automatically based on varying workloads without manual cluster management... Which approach fulfills these requirements?",
    options: [
      { id: "A", text: "Job Clusters with fixed configurations" },
      { id: "B", text: "Spot Instances" },
      { id: "C", text: "Interactive Clusters" },
      { id: "D", text: "Utilize Databricks serverless compute that automatically optimizes resources and abstracts cluster management." },
    ],
    correctAnswerId: "D",
    explanation: "L'astrazione completa della gestione del cluster (no manual management) e lo scaling automatico immediato sono le definizioni stesse di **Serverless Compute**."
  },
  {
    id: 174,
    topic: "General",
    questionText: "A data engineer has been provided a PySpark DataFrame named df with columns product and revenue. The data engineer needs to compute complex aggregations... Which code snippet should the data engineer use?",
    options: [
      { id: "A", text: "df.groupBy('product').agg(sum('revenue').alias('total_revenue'), avg('revenue').alias('avg_revenue'), count('revenue').alias('txn_count'))" },
      { id: "B", text: "[Missing Code]" },
      { id: "C", text: "[Missing Code]" },
      { id: "D", text: "[Missing Code]" },
    ],
    correctAnswerId: "A",
    explanation: "La sintassi PySpark per aggregazioni multiple è: `df.groupBy('col').agg(func1, func2, func3)`."
  },
  {
    id: 175,
    topic: "General",
    questionText: "A Databricks single-task workflow fails... The data engineer fixes the mistake in the notebook. What should the data engineer do to rerun the workflow?",
    options: [
      { id: "A", text: "Repair the task (or Repair Run)" },
      { id: "B", text: "Rerun the pipeline" },
      { id: "C", text: "Restart cluster" },
      { id: "D", text: "Switch cluster" },
    ],
    correctAnswerId: "A",
    explanation: "(Duplicato logico della #172). Anche per un single-task, l'azione corretta nella UI per riprendere un run fallito (specialmente se parte di un contesto più ampio o per mantenere lo storico del run ID) è 'Repair Run'."
  },
  {
    id: 176,
    topic: "SQL",
    questionText: "Which set of SQL commands will grant a group named manufacturing-team to create tables in a schema named production with the parent catalog named manufacturing with the least privileges?",
    options: [
      { id: "A", text: "GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality ...; GRANT USE CATALOG ON CATALOG manufacturing ...;" },
      { id: "B", text: "GRANT USE TABLE..." },
      { id: "C", text: "GRANT CREATE CATALOG..." },
      { id: "D", text: "GRANT CREATE SCHEMA..." },
    ],
    correctAnswerId: "A",
    explanation: "In Unity Catalog, la gerarchia dei permessi richiede il privilegio `USE CATALOG` sul catalogo genitore e `USE SCHEMA` sullo schema specifico per poterci fare qualsiasi cosa dentro. Poi serve il permesso specifico `CREATE TABLE` sullo schema."
  },
  {
    id: 177,
    topic: "General",
    questionText: "Which Databricks feature will help the data engineer quickly identify if an incorrect data type has been provided as input to a function in a notebook?",
    options: [
      { id: "A", text: "Spark UI" },
      { id: "B", text: "The Databricks debugger enables breakpoints that will raise an error if the wrong data type is submitted." },
      { id: "C", text: "Variable explorer" },
      { id: "D", text: "Print statements" },
    ],
    correctAnswerId: "B",
    explanation: "L'uso dei breakpoint nell'**Interactive Debugger** permette di fermare l'esecuzione appena entrati nella funzione e ispezionare il tipo delle variabili in ingresso (`type(variable)`), individuando subito l'errore."
  },
  {
    id: 178,
    topic: "Workflows",
    questionText: "A data engineer observes the Spark UI and finds out the job has a high CPU time vs Task time... Which course of action should the data engineer take?",
    options: [
      { id: "A", text: "Repartition data" },
      { id: "B", text: "No change needed" },
      { id: "C", text: "High CPU time vs Task time means a CPU over-utilized job. The data engineer may need to consider executor and core tuning or resizing the cluster" },
      { id: "D", text: "Increase parallelism" },
    ],
    correctAnswerId: "C",
    explanation: "Se il tempo di CPU è alto rispetto alla durata del task, significa che il codice sta facendo molto calcolo (Compute Bound) piuttosto che aspettare I/O. Per velocizzarlo, servono CPU più potenti o più core (Scaling verticale o orizzontale)."
  },
  {
    id: 179,
    topic: "General",
    questionText: "A data engineer needs to parse only png files in a directory that contains files with different suffixes. Which code should the data engineer use?",
    options: [
      { id: "A", text: ".append('/*.png')" },
      { id: "B", text: "df = spark.readStream.format('cloudFiles').option('cloudFiles.format', 'binaryFile').option('pathGlobFilter', '*.png').load()" },
      { id: "C", text: ".append()" },
      { id: "D", text: ".load('/*.png')" },
    ],
    correctAnswerId: "B",
    explanation: "L'opzione `pathGlobFilter` è lo standard in Spark (e Auto Loader) per dire 'leggi solo i file che corrispondono a questo pattern' (es. `*.png`). Usare il formato `binaryFile` è corretto per immagini."
  },
  {
    id: 180,
    topic: "General",
    questionText: "Which languages are supported by Serverless compute clusters (for Notebooks/Jobs)? (Choose two.)",
    options: [
      { id: "A", text: "SQL and Python" },
      { id: "B", text: "Python only" },
      { id: "C", text: "R" },
      { id: "D", text: "Scala" },
      { id: "E", text: "Java" },
    ],
    correctAnswerId: "A",
    explanation: "Attualmente, Databricks Serverless Compute per Notebook/Jobs supporta principalmente **SQL** e **Python**. (Scala e R sono supportati nei cluster classici, il supporto serverless si sta espandendo ma SQL/Python sono i primi cittadini)."
  },
  {
    id: 181,
    topic: "SQL",
    questionText: "A data engineer... sees 'java.lang.OutOfMemoryError: Java heap space'. Which corrective action should the data engineer perform?",
    options: [
      { id: "A", text: "Narrow the filters in order to collect less data in the query" },
      { id: "B", text: "Upsize worker nodes" },
      { id: "C", text: "Upsize driver node" },
      { id: "D", text: "Cache dataset" },
      { id: "E", text: "Fix shuffle partitions" },
    ],
    correctAnswerId: "A",
    explanation: "L'errore 'Java Heap Space' sul driver o executor significa spesso che si sta tentando di caricare troppi dati in memoria contemporaneamente (es. un `collect()` enorme o un join esploso). La prima azione logica è ridurre la quantità di dati letti restringendo i filtri (`WHERE`)."
  },
  {
    id: 182,
    topic: "Streaming",
    questionText: "A Data Engineer is designing Bronze layer... Which operation applies to the Bronze layer?",
    options: [
      { id: "A", text: "Ingest raw data without transformations, preserving original schemas, and store in Delta format." },
      { id: "B", text: "Clean and standardize" },
      { id: "C", text: "Apply business logic" },
      { id: "D", text: "Aggregate" },
    ],
    correctAnswerId: "A",
    explanation: "Definizione da manuale del Bronze Layer: Raw ingestion, AS-IS (così com'è), nessuna perdita di dati, append-only."
  },
  {
    id: 183,
    topic: "General",
    questionText: "What is the primary function of the Silver layer in the Databricks medallion architecture?",
    options: [
      { id: "A", text: "Auditing" },
      { id: "B", text: "Aggregate" },
      { id: "C", text: "Validate, clean, and deduplicate data for further processing" },
      { id: "D", text: "Ingest raw" },
    ],
    correctAnswerId: "C",
    explanation: "Il Silver Layer serve a 'raffinare' il dato: pulizia (validazione tipi), deduplicazione, e standardizzazione, rendendo il dato affidabile per l'analisi successiva."
  },
  {
    id: 184,
    topic: "SQL",
    questionText: "A data engineer needs to combine sales data from an on-premises PostgreSQL database with customer data in Azure Synapse... The goal is to avoid data duplication. Which feature enables querying these external data sources?",
    options: [
      { id: "A", text: "Delta Lake" },
      { id: "B", text: "Lakehouse Federation" },
      { id: "C", text: "MLflow" },
      { id: "D", text: "Databricks Connect" },
    ],
    correctAnswerId: "B",
    explanation: "(Variante della #142). **Lakehouse Federation** permette di creare 'Foreign Catalogs' in Unity Catalog che puntano a Postgres e Synapse, permettendo di fare JOIN tra loro e con tabelle Delta locali senza prima copiare i dati (avoid data duplication)."
  },
  {
    id: 185,
    topic: "Python",
    questionText: "A data engineer is working in a Python notebook... The data engineer wants to investigate the issue by stepping through the code... Which tool should be used?",
    options: [
      { id: "A", text: "Cluster Logs" },
      { id: "B", text: "Job Execution Dashboard" },
      { id: "C", text: "Python Notebook Interactive Debugger" },
      { id: "D", text: "SQL Analytics" },
    ],
    correctAnswerId: "C",
    explanation: "(Duplicato della #164). L'Interactive Debugger è lo strumento per lo stepping (step-by-step execution) del codice."
  },
  {
    id: 186,
    topic: "General",
    questionText: "An initial investigation has identified memory spills in Spark. These increased runtimes are also driving up costs... What should the data engineer do first?",
    options: [
      { id: "A", text: "Tweak the 'spark.sql.shuffle.partitions' configuration." },
      { id: "B", text: "Enable autoscaling" },
      { id: "C", text: "Use photon" },
      { id: "D", text: "Memory optimized nodes" },
    ],
    correctAnswerId: "A",
    explanation: "I 'Memory Spills' (scrittura su disco temporanea durante shuffle) accadono spesso quando le partizioni sono troppo grandi per la memoria. Aumentare `spark.sql.shuffle.partitions` riduce la dimensione di ogni singola partizione, eliminando spesso lo spill e velocizzando il job senza cambiare hardware."
  },
  {
    id: 187,
    topic: "Delta Lake",
    questionText: "A data engineer is facing performance bottlenecks... The table is a managed Unity Catalog table, and it uses partitioning and Z-ordering... The predictive optimization is enabled... but no benefit... How should the data engineer fix the data layout bottlenecks?",
    options: [
      { id: "A", text: "Re-write Data Layout" },
      { id: "B", text: "Delta Caching" },
      { id: "C", text: "Tweak Z-Order" },
      { id: "D", text: "Switch the Data layout from Partition+Z-Ordering to Automatic Liquid Clustering." },
    ],
    correctAnswerId: "D",
    explanation: "**Liquid Clustering** è la nuova tecnologia che sostituisce il partizionamento rigido e lo Z-Order. È dinamico, gestito da Databricks e risolve problemi che Z-Order non riesce a risolvere (come la skew data o query pattern che cambiano), specialmente con Predictive Optimization attivata."
  },
  {
    id: 188,
    topic: "Delta Lake",
    questionText: "A data engineer needs to optimize... an e-commerce transactions Delta table. The table is partitioned by date... but this does not optimize searches on user statistics 'customer_id' (high cardinality)... How should the data engineer optimize the Data Layout?",
    options: [
      { id: "A", text: "Liquid clustering on customer_id only" },
      { id: "B", text: "Alter the table implementing liquid clustering by 'customer_id' and 'purchase_date'." },
      { id: "C", text: "Partition by customer_id" },
      { id: "D", text: "Delta caching" },
    ],
    correctAnswerId: "B",
    explanation: "Il Partizionamento fisico su colonne ad alta cardinalità (come User ID) è un anti-pattern (crea milioni di file piccoli). **Liquid Clustering** è la soluzione perfetta: puoi clusterizzare sia per data che per User ID senza i problemi fisici del partizionamento directory-based."
  },
  {
    id: 189,
    topic: "General",
    questionText: "What is the structure of an Asset Bundle?",
    options: [
      { id: "A", text: "Docker image" },
      { id: "B", text: "ZIP archive" },
      { id: "C", text: "Text file" },
      { id: "D", text: "A YAML configuration file that specifies the artifacts, resources, and configurations for the project" },
    ],
    correctAnswerId: "D",
    explanation: "Il cuore di un DAB è il file `databricks.yml`, che descrive in modo dichiarativo tutto il progetto (jobs, pipeline, cluster settings) per il deployment."
  },
  {
    id: 190,
    topic: "General",
    questionText: "A data engineer is maintaining an ETL pipeline code with a GitHub repository... The data engineer wants to deploy the ETL pipeline to production as a databricks workflow. Which approach should the data engineer use?",
    options: [
      { id: "A", text: "Databricks Asset Bundles (DAB) + GitHub Integration" },
      { id: "B", text: "Maintain workflow_config.json" },
      { id: "C", text: "Terraform" },
      { id: "D", text: "Manual UI" },
    ],
    correctAnswerId: "A",
    explanation: "DABs è progettato specificamente per questo flusso CI/CD moderno: codice su Git, definizione YAML del job, e deployment automatico (es. via GitHub Actions) verso Databricks Workflows."
  },
  {
    id: 191,
    topic: "General",
    questionText: "A data engineer works for an organization that must meet a stringent Service Level Agreement (SLA)... The data engineer wants to avoid the operational overhead of managing and tuning clusters. Which architectural solution will meet the requirements?",
    options: [
      { id: "A", text: "Auto-scaling cluster" },
      { id: "B", text: "Hybrid approach" },
      { id: "C", text: "Dedicated cluster" },
      { id: "D", text: "Utilize Databricks serverless compute that automatically optimizes resources and abstracts cluster management." },
    ],
    correctAnswerId: "D",
    explanation: "Ancora una volta, **Serverless Compute** è la risposta quando si vuole alta affidabilità (SLA) e zero gestione infrastrutturale (no overhead)."
  },
  {
    id: 192,
    topic: "General",
    questionText: "A data engineer wants to reduce costs and optimize cloud spending... using Databricks Serverless. What is the first step in migrating to Databricks Serverless?",
    options: [
      { id: "A", text: "Legacy Ingestion pipelines" },
      { id: "B", text: "A frequently running and efficient Python-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog" },
      { id: "C", text: "Scala pipeline" },
      { id: "D", text: "Adhoc SQL" },
    ],
    correctAnswerId: "B",
    explanation: "Per migrare a Serverless Jobs, il carico di lavoro deve essere compatibile (Unity Catalog abilitato, librerie supportate). Iniziare con una pipeline Python ben strutturata ed efficiente che già usa Unity Catalog è il candidato ideale per il passaggio."
  },
  {
    id: 193,
    topic: "Workflows",
    questionText: "A data engineering project involves processing large batches of data... requiring a scalable, cost-efficient compute solution that can automatically scale based on the workload. Which compute approach will satisfy the needs described?",
    options: [
      { id: "A", text: "Job Cluster" },
      { id: "B", text: "Dedicated Cluster" },
      { id: "C", text: "All-Purpose Cluster" },
      { id: "D", text: "Databricks SQL Serverless" },
    ],
    correctAnswerId: "A",
    explanation: "Per i job ETL batch pesanti, un **Job Cluster** (effimero) è lo standard economico. L'autoscaling del job cluster adatterà le risorse alla dimensione del batch."
  },
  {
    id: 194,
    topic: "Delta Lake",
    questionText: "A data engineer is configuring Delta Sharing... The goal is to ensure that internal teams can access the shared data with full permissions, while external partners can only read the data. Which action should the Data Engineer take?",
    options: [
      { id: "A", text: "Secure access URL" },
      { id: "B", text: "READ/WRITE permissions" },
      { id: "C", text: "Assign READ permissions to external partners through the Delta Share and READ/WRITE permissions to internal teams (via Unity Catalog)." },
      { id: "D", text: "Grant READ to everyone" },
    ],
    correctAnswerId: "C",
    explanation: "Delta Sharing è per natura **Read-Only** per i consumatori esterni. Per i team interni (nello stesso workspace), invece, gestisci i permessi standard via Unity Catalog (`GRANT ALL/WRITE...`)."
  },
  {
    id: 195,
    topic: "General",
    questionText: "A data engineer manages multiple external tables... wants to manage these external tables efficiently and ensure that only the necessary permissions are granted. How should the data engineer manage access?",
    options: [
      { id: "A", text: "Azure Blob Storage permissions" },
      { id: "B", text: "Single user role" },
      { id: "C", text: "Workspace level" },
      { id: "D", text: "Use Unity Catalog to manage access controls and permissions for each external table individually." },
    ],
    correctAnswerId: "D",
    explanation: "Unity Catalog unifica la governance sia per le tabelle Managed che per le **External Tables**. Puoi registrare la tabella esterna in UC e poi usare `GRANT SELECT ON TABLE ...` esattamente come per qualsiasi altra tabella."
  },
  {
    id: 196,
    topic: "General",
    questionText: "An organization plans to share a large dataset stored in a Databricks workspace on AWS with a partner organization whose Databricks workspace is hosted on Azure... Which strategy will reduce data egress costs?",
    options: [
      { id: "A", text: "Cloudflare R2" },
      { id: "B", text: "VPN" },
      { id: "C", text: "Using Delta Sharing without any additional configurations" },
      { id: "D", text: "Pre-signed URLs" },
    ],
    correctAnswerId: "C",
    explanation: "Delta Sharing utilizza URL pre-firmati (Pre-signed URLs) per permettere al destinatario di scaricare direttamente i dati dallo storage object (S3). Sebbene ci siano costi di egress cross-cloud (AWS->Azure), questo metodo è il più efficiente 'out-of-the-box' rispetto a soluzioni che richiedono compute intermediari (JDBC/ODBC) o VPN complesse, ed è la risposta standard attesa."
  },
  {
    id: 197,
    topic: "Unity Catalog",
    questionText: "A data engineer is setting up access control in Unity Catalog and needs to ensure that a group of data analysts can query tables but not modify data. Which permission should the data engineer grant?",
    options: [
      { id: "A", text: "ALL PRIVILEGES" },
      { id: "B", text: "MODIFY" },
      { id: "C", text: "SELECT" },
      { id: "D", text: "INSERT" },
    ],
    correctAnswerId: "C",
    explanation: "`SELECT` è il permesso di sola lettura standard SQL."
  },
  {
    id: 198,
    topic: "General",
    questionText: "What Databricks feature can be used to check the data sources and tables used in a workspace?",
    options: [
      { id: "A", text: "Lineage (Reports only)" },
      { id: "B", text: "Lineage (Notebooks only)" },
      { id: "C", text: "Use the lineage feature to visualize a graph that shows all dependencies, including where the table is used in notebooks, other tables, and reports." },
      { id: "D", text: "Do not use lineage" },
    ],
    correctAnswerId: "C",
    explanation: "La **Lineage** di Unity Catalog è olistica: mostra tutto il grafo delle dipendenze."
  },
  {
    id: 199,
    topic: "Delta Lake",
    questionText: "A data engineer is getting a partner organization up to speed with Databricks account... The data engineer has to share some of your Unity-Catalog managed delta tables and the notebook jobs creating those tables... How can the data engineer seamlessly share the required information?",
    options: [
      { id: "A", text: "Zip code and email" },
      { id: "B", text: "Share required datasets and notebooks via Delta Sharing. Manage permissions via Unity Catalog." },
      { id: "C", text: "Unity Catalog simple sharing" },
      { id: "D", text: "Github" },
    ],
    correctAnswerId: "B",
    explanation: "Delta Sharing si sta evolvendo per condividere non solo dati (tabelle) ma anche asset non tabulari come i Notebooks e Volumi, permettendo una collaborazione più completa tra workspace Databricks diversi."
  }
];
