-- CreateTable
CREATE TABLE "KeepTalkingDiscount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "maxMinutes" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "DistanceDialingCost" (
    "id" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destiny" TEXT NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "KeepTalkingDiscount_id_key" ON "KeepTalkingDiscount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "KeepTalkingDiscount_name_key" ON "KeepTalkingDiscount"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DistanceDialingCost_id_key" ON "DistanceDialingCost"("id");
