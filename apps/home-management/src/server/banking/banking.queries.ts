import { queryFromInfo } from '@pothos/plugin-prisma';

import { builder, PaginationInput } from 'server/core';
import {
  BankingAccount,
  BankingAccountFilter,
  BankingAccountSort,
  BankingCategory,
  BankingCategoryFilter,
  BankingCategorySort,
  BankingTransaction,
  BankingTransactionFilter,
  BankingTransactionSort,
  PaginatedBankingAccount,
  PaginatedBankingCategory,
  PaginatedBankingTransaction,
} from './banking.objects';
import {
  getAllBankingAccounts,
  getAllBankingCategories,
  getAllBankingTransactions,
  getBankingAccountById,
  getBankingCategoryById,
  getBankingTransactionById,
} from './banking.service';

builder.queryField('bankingAccount', (t) =>
  t.field({
    args: {
      id: t.arg.string({
        description: 'The UUID of the BankingAccount to fetch',
        required: true,
      }),
    },
    authScopes: {
      isOwner: true,
    },
    resolve: async (_query, args) => getBankingAccountById(args.id),
    type: BankingAccount,
  })
);

builder.queryField('bankingAccounts', (t) =>
  t.field({
    args: {
      filter: t.arg({ type: BankingAccountFilter, required: false }),
      pagination: t.arg({ type: PaginationInput, required: false }),
      sort: t.arg({ type: BankingAccountSort, required: false }),
    },
    authScopes: {
      isOwner: true,
    },
    resolve: async (_root, { filter, pagination, sort }, context, info) => {
      const query = queryFromInfo({ context, info, path: ['objects'] });
      return getAllBankingAccounts(filter, sort, pagination, query);
    },
    type: PaginatedBankingAccount,
  })
);

builder.queryField('bankingCategory', (t) =>
  t.field({
    args: {
      id: t.arg.string({
        description: 'The UUID of the BankingCategory to fetch',
        required: true,
      }),
    },
    authScopes: {
      isOwner: true,
    },
    resolve: async (_query, args) => getBankingCategoryById(args.id),
    type: BankingCategory,
  })
);

builder.queryField('bankingCategories', (t) =>
  t.field({
    args: {
      filter: t.arg({ type: BankingCategoryFilter, required: false }),
      pagination: t.arg({ type: PaginationInput, required: false }),
      sort: t.arg({ type: BankingCategorySort, required: false }),
    },
    authScopes: {
      isOwner: true,
    },
    resolve: async (_root, { filter, pagination, sort }, context, info) => {
      const query = queryFromInfo({ context, info, path: ['objects'] });
      return getAllBankingCategories(filter, sort, pagination, query);
    },
    type: PaginatedBankingCategory,
  })
);

builder.queryField('bankingTransaction', (t) =>
  t.field({
    args: {
      id: t.arg.string({
        description: 'The UUID of the BankingTransaction to fetch',
        required: true,
      }),
    },
    authScopes: {
      isOwner: true,
    },
    resolve: async (_query, args) => getBankingTransactionById(args.id),
    type: BankingTransaction,
  })
);

builder.queryField('bankingTransactions', (t) =>
  t.field({
    args: {
      filter: t.arg({ type: BankingTransactionFilter, required: false }),
      pagination: t.arg({ type: PaginationInput, required: false }),
      sort: t.arg({ type: BankingTransactionSort, required: false }),
    },
    authScopes: {
      isOwner: true,
    },
    resolve: async (_root, { filter, pagination, sort }, context, info) => {
      const query = queryFromInfo({ context, info, path: ['objects'] });
      return getAllBankingTransactions(filter, sort, pagination, query);
    },
    type: PaginatedBankingTransaction,
  })
);
