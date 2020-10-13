# Migration `20201001023017-fix-title-in-db`

This migration has been generated at 9/30/2020, 10:30:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" ALTER COLUMN "title" DROP DEFAULT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201001022623-fixed-title..20201001023017-fix-title-in-db
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -20,9 +20,9 @@
 }
 model Post {
   id Int @default(autoincrement()) @id
-  title String @default("")
+  title String
   description String
   language String?
   rating Int? 
   user User @relation(fields: [userEmail], references: [email])
```


