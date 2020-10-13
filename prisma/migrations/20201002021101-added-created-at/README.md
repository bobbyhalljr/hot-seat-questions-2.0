# Migration `20201002021101-added-created-at`

This migration has been generated at 10/1/2020, 10:11:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" ADD COLUMN "createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP

ALTER TABLE "public"."User" ADD COLUMN "createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201001023017-fix-title-in-db..20201002021101-added-created-at
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
@@ -16,8 +16,9 @@
   name String
   image String?
   jobTitle String?
   posts Post[]
+  createdAt DateTime @default(now())
 }
 model Post {
   id Int @default(autoincrement()) @id
@@ -26,5 +27,6 @@
   language String?
   rating Int? 
   user User @relation(fields: [userEmail], references: [email])
   userEmail String
+  createdAt DateTime @default(now())
 }
```


