import { prisma } from 'server/core';
import type { PaginationParams } from 'server/core';
import type { Prisma } from 'generated/prisma';

//
// Accounts
//

export const createBankingAccount = (
  data: Prisma.BankingAccountCreateInput,
  args: Omit<Prisma.BankingAccountCreateArgs, 'data'> = {}
) => prisma.bankingAccount.create({ data, ...args });

export const deleteBankingAccountById = (
  id: string,
  args: Omit<Prisma.BankingAccountDeleteArgs, 'where'> = {}
) => prisma.bankingAccount.delete({ where: { id }, ...args });

export const getAllBankingAccounts = async (
  where: Prisma.BankingAccountWhereInput | null | undefined = null,
  orderBy: Prisma.BankingAccountOrderByWithRelationInput | null | undefined = null,
  pagination: PaginationParams | null | undefined = null,
  args: Omit<Prisma.BankingAccountFindManyArgs, 'data'> = {}
) => {
  const [data, meta] = await prisma.bankingAccount
    .paginate({ where: where || {}, ...args })
    .withPages({
      includePageCount: true,
      limit: pagination?.limit ?? 10,
      orderBy: orderBy || { name: 'asc' },
      page: pagination?.page ?? 1,
    });
  return {
    count: meta.totalCount,
    next: meta.nextPage,
    objects: data,
    pageCount: meta.pageCount,
    prevPage: meta.previousPage,
  };
};

export const getBankingAccountById = (
  id: string,
  args: Omit<Prisma.BankingAccountCreateArgs, 'data'> = {}
) => prisma.bankingAccount.findFirstOrThrow({ where: { id }, ...args });

export const updateBankingAccountById = (
  id: string,
  data: Prisma.BankingAccountUpdateInput,
  args: Omit<Prisma.BankingAccountUpdateArgs, 'data' | 'where'> = {}
) => prisma.bankingAccount.update({ data, where: { id }, ...args });

//
// Categories
//

export const createBankingCategory = (
  data: Prisma.BankingCategoryCreateInput,
  args: Omit<Prisma.BankingCategoryCreateArgs, 'data'> = {}
) => prisma.bankingCategory.create({ data, ...args });

export const deleteBankingCategoryById = (
  id: string,
  args: Omit<Prisma.BankingCategoryDeleteArgs, 'where'> = {}
) => prisma.bankingCategory.delete({ where: { id }, ...args });

export const getAllBankingCategories = async (
  where: Prisma.BankingCategoryWhereInput | null | undefined = null,
  orderBy: Prisma.BankingCategoryOrderByWithRelationInput | null | undefined = null,
  pagination: PaginationParams | null | undefined = null,
  args: Omit<Prisma.BankingCategoryFindManyArgs, 'data'> = {}
) => {
  const [data, meta] = await prisma.bankingCategory
    .paginate({ where: where || {}, ...args })
    .withPages({
      includePageCount: true,
      limit: pagination?.limit ?? 10,
      orderBy: orderBy || { name: 'asc' },
      page: pagination?.page ?? 1,
    });
  return {
    count: meta.totalCount,
    next: meta.nextPage,
    objects: data,
    pageCount: meta.pageCount,
    prevPage: meta.previousPage,
  };
};

export const getBankingCategoryById = (
  id: string,
  args: Omit<Prisma.BankingCategoryCreateArgs, 'data'> = {}
) => prisma.bankingCategory.findFirstOrThrow({ where: { id }, ...args });

export const updateBankingCategoryById = (
  id: string,
  data: Prisma.BankingCategoryUpdateInput,
  args: Omit<Prisma.BankingCategoryUpdateArgs, 'data' | 'where'> = {}
) => prisma.bankingCategory.update({ data, where: { id }, ...args });

//
// Transactions
//

export const createBankingTransaction = (
  data: Prisma.BankingTransactionCreateInput,
  args: Omit<Prisma.BankingTransactionCreateArgs, 'data'> = {}
) => prisma.bankingTransaction.create({ data, ...args });

export const deleteBankingTransactionById = (
  id: string,
  args: Omit<Prisma.BankingTransactionDeleteArgs, 'where'> = {}
) => prisma.bankingTransaction.delete({ where: { id }, ...args });

export const getAllBankingTransactions = async (
  where: Prisma.BankingTransactionWhereInput | null | undefined = null,
  orderBy: Prisma.BankingTransactionOrderByWithRelationInput | null | undefined = null,
  pagination: PaginationParams | null | undefined = null,
  args: Omit<Prisma.BankingTransactionFindManyArgs, 'data'> = {}
) => {
  const [data, meta] = await prisma.bankingTransaction
    .paginate({ where: where || {}, ...args })
    .withPages({
      includePageCount: true,
      limit: pagination?.limit ?? 10,
      orderBy: orderBy || { date: 'desc' },
      page: pagination?.page ?? 1,
    });
  return {
    count: meta.totalCount,
    next: meta.nextPage,
    objects: data,
    pageCount: meta.pageCount,
    prevPage: meta.previousPage,
  };
};

export const getBankingTransactionById = (
  id: string,
  args: Omit<Prisma.BankingTransactionCreateArgs, 'data'> = {}
) => prisma.bankingTransaction.findFirstOrThrow({ where: { id }, ...args });

export const updateBankingTransactionById = (
  id: string,
  data: Prisma.BankingTransactionUpdateInput,
  args: Omit<Prisma.BankingTransactionUpdateArgs, 'data' | 'where'> = {}
) => prisma.bankingTransaction.update({ data, where: { id }, ...args });
