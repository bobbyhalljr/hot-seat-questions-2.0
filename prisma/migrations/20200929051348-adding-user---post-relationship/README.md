# Migration `20200929051348-adding-user---post-relationship`

This migration has been generated at 9/29/2020, 1:13:48 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" ADD COLUMN "userEmail" text   NOT NULL 

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("userEmail")REFERENCES "public"."User"("email") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200928025549-initial-migration..20200929051348-adding-user---post-relationship
--- datamodel.dml
+++ datamodel.dml
@@ -2,26 +2,29 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model User {
-  id Int @id @default(autoincrement())
-  email String 
+  id Int @default(autoincrement()) @id
+  email String @unique
   name String
   image String?
   jobTitle String?
+  posts Post[]
 }
 model Post {
-  id Int @id @default(autoincrement())
+  id Int @default(autoincrement()) @id
   question String
   description String
   language String?
   rating Int? 
+  user User @relation(fields: [userEmail], references: [email])
+  userEmail String
 }
```


