import { BankingAccountType as BankingAccountTypeEnum } from 'generated/prisma';
import type {
  BankingAccount as BankingAccountType,
  BankingCategory as BankingCategoryType,
  BankingTransaction as BankingTransactionType,
} from 'generated/prisma';
import { builder, buildPaginatedObj, StringFilter } from 'server/core';

builder.enumType(BankingAccountTypeEnum, { name: 'BankingAccountType' });
export const BankingAccountTypeFilter = builder.prismaFilter(BankingAccountTypeEnum, {
  ops: ['not', 'equals'],
});

export const BankingAccount = builder.prismaObject('BankingAccount', {
  description: 'A single financial institution that contains many BankingTransactions',
  fields: (t) => ({
    id: t.exposeString('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    description: t.exposeString('description', { nullable: true }),
    name: t.exposeString('name'),
    pic: t.exposeString('pic', { nullable: true }),
    transactions: t.relation('transactions'),
    type: t.exposeString('type'),
  }),
});

export const PaginatedBankingAccount = buildPaginatedObj<BankingAccountType>(
  BankingAccount,
  'A paginated list of BankingAccounts'
);

export const BankingAccountFilter = builder.prismaWhere('BankingAccount', {
  name: 'BankingAccountFilter',
  fields: () => ({
    name: StringFilter,
    type: BankingAccountTypeFilter,
  }),
});

export const BankingAccountSort = builder.prismaOrderBy('BankingAccount', {
  name: 'BankingAccountSort',
  fields: {
    createdAt: true,
    updatedAt: true,
    name: true,
    type: true,
  },
});

export const BankingAccountCreateInput = builder.prismaCreate('BankingAccount', {
  description: 'The fields required to create a new BankingAccount',
  name: 'BankingAccountCreateInput',
  fields: (t) => ({
    description: t.string({ required: false }),
    name: t.string({ required: true }),
    pic: t.string({ required: false }),
    type: t.field({ type: BankingAccountTypeEnum, required: true }),
  }),
});

export const BankingAccountUpdateInput = builder.prismaUpdate('BankingAccount', {
  description: 'The fields required to update an existing BankingAccount',
  name: 'BankingAccountUpdateInput',
  fields: (t) => ({
    description: t.string({ required: false }),
    name: t.string({ required: false }),
    pic: t.string({ required: false }),
    type: t.field({ type: BankingAccountTypeEnum, required: false }),
  }),
});

export const BankingCategory = builder.prismaObject('BankingCategory', {
  description: 'A grouping for similar BankingTractions across different BankingAccounts',
  fields: (t) => ({
    id: t.exposeString('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    description: t.exposeString('description', { nullable: true }),
    name: t.exposeString('name'),
    transactions: t.relation('transactions'),
  }),
});

export const PaginatedBankingCategory = buildPaginatedObj<BankingCategoryType>(
  BankingCategory,
  'A paginated list of BankingCategories'
);

export const BankingCategoryFilter = builder.prismaWhere('BankingCategory', {
  name: 'BankingCategoryFilter',
  fields: () => ({
    name: StringFilter,
  }),
});

export const BankingCategorySort = builder.prismaOrderBy('BankingCategory', {
  name: 'BankingCategorySort',
  fields: {
    createdAt: true,
    updatedAt: true,
    name: true,
  },
});

export const BankingCategoryCreateInput = builder.prismaCreate('BankingCategory', {
  description: 'The fields required to create a new BankingCategory',
  name: 'BankingCategoryCreateInput',
  fields: (t) => ({
    description: t.string({ required: false }),
    name: t.string({ required: true }),
  }),
});

export const BankingCategoryUpdateInput = builder.prismaUpdate('BankingCategory', {
  description: 'The fields required to Update an existing BankingCategory',
  name: 'BankingCategoryUpdateInput',
  fields: (t) => ({
    description: t.string({ required: false }),
    name: t.string({ required: false }),
  }),
});

export const BankingTransaction = builder.prismaObject('BankingTransaction', {
  description: 'A single monetary transaction',
  fields: (t) => ({
    id: t.exposeString('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    account: t.relation('account'),
    accountId: t.exposeString('accountId', { nullable: true }),
    amount: t.exposeFloat('amount'),
    category: t.relation('category'),
    categoryId: t.exposeString('categoryId', { nullable: true }),
    date: t.expose('date', { type: 'DateTime' }),
    description: t.exposeString('description', { nullable: true }),
    name: t.exposeString('name'),
  }),
});

export const PaginatedBankingTransaction = buildPaginatedObj<BankingTransactionType>(
  BankingTransaction,
  'A paginated list of BankingTractions'
);

export const BankingTransactionFilter = builder.prismaWhere('BankingTransaction', {
  name: 'BankingTransactionFilter',
  fields: () => ({
    accountId: 'String',
    amount: 'Float',
    categoryId: 'String',
    date: 'DateTime',
    name: StringFilter,
  }),
});

export const BankingTransactionSort = builder.prismaOrderBy('BankingTransaction', {
  name: 'BankingTransactionSort',
  fields: {
    createdAt: true,
    updatedAt: true,
    accountId: true,
    amount: true,
    categoryId: true,
    date: true,
    name: true,
  },
});

export const BankingTransactionCreateInput = builder.prismaCreate('BankingTransaction', {
  description: 'The fields required to create a new BankingTransaction',
  name: 'BankingTransactionCreateInput',
  fields: (t) => ({
    accountId: t.string({ required: true }),
    amount: t.float({ required: true }),
    categoryId: t.string({ required: false }),
    date: t.field({ type: 'DateTime', required: true }),
    description: t.string({ required: false }),
    name: t.string({ required: true }),
  }),
});

export const BankingTransactionUpdateInput = builder.prismaCreate('BankingTransaction', {
  description: 'The fields required to update an existing BankingTransaction',
  name: 'BankingTransactionUpdateInput',
  fields: (t) => ({
    accountId: t.string({ required: false }),
    amount: t.float({ required: false }),
    categoryId: t.string({ required: false }),
    date: t.field({ type: 'DateTime', required: false }),
    description: t.string({ required: false }),
    name: t.string({ required: false }),
  }),
});
