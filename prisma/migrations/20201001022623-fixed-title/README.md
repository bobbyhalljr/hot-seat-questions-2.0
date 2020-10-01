# Migration `20201001022623-fixed-title`

This migration has been generated at 9/30/2020, 10:26:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" DROP COLUMN "question",
ADD COLUMN "title" text   NOT NULL DEFAULT E''
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200929051348-adding-user---post-relationship..20201001022623-fixed-title
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
-  question String
+  title String @default("")
   description String
   language String?
   rating Int? 
   user User @relation(fields: [userEmail], references: [email])
```


