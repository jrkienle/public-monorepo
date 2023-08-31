-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('OWNER', 'UNVERIFIED_GUEST', 'VERIFIED_GUEST');

-- CreateEnum
CREATE TYPE "BankingAccountType" AS ENUM ('BANK_CHECKING', 'BANK_SAVINGS', 'INVESTMENT_401K', 'INVESTMENT_CRYPTO', 'INVESTMENT_IRA', 'INVESTMENT_STOCKS', 'LOAN_AUTO', 'LOAN_CREDIT_CARD', 'LOAN_MORTGAGE', 'LOAN_STUDENT', 'STUDENT_LOAN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankingAccount" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "pic" TEXT,
    "type" "BankingAccountType" NOT NULL,

    CONSTRAINT "BankingAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankingCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "BankingCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankingTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "categoryId" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "BankingTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PropertyToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PropertyToUser_AB_unique" ON "_PropertyToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PropertyToUser_B_index" ON "_PropertyToUser"("B");

-- AddForeignKey
ALTER TABLE "BankingTransaction" ADD CONSTRAINT "BankingTransaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "BankingAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankingTransaction" ADD CONSTRAINT "BankingTransaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "BankingCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PropertyToUser" ADD CONSTRAINT "_PropertyToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PropertyToUser" ADD CONSTRAINT "_PropertyToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
