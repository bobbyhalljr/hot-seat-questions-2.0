# Migration `20200928025549-initial-migration`

This migration has been generated at 9/27/2020, 10:55:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"email" text   NOT NULL ,
"name" text   NOT NULL ,
"image" text   ,
"jobTitle" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
"id" SERIAL,
"question" text   NOT NULL ,
"description" text   NOT NULL ,
"language" text   ,
"rating" integer   ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200928025549-initial-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id Int @id @default(autoincrement())
+  email String 
+  name String
+  image String?
+  jobTitle String?
+}
+
+model Post {
+  id Int @id @default(autoincrement())
+  question String
+  description String
+  language String?
+  rating Int? 
+}
```


