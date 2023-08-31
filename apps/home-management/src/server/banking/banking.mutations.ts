import { builder } from 'server/core';

import {
  BankingAccount,
  BankingAccountCreateInput,
  BankingAccountUpdateInput,
  BankingCategory,
  BankingCategoryCreateInput,
  BankingCategoryUpdateInput,
  BankingTransaction,
  BankingTransactionCreateInput,
  BankingTransactionUpdateInput,
} from './banking.objects';
import {
  createBankingAccount,
  createBankingCategory,
  createBankingTransaction,
  updateBankingAccountById,
  updateBankingCategoryById,
  updateBankingTransactionById,
} from './banking.service';

builder.mutationField('createBankingAccount', (t) =>
  t.prismaField({
    args: {
      input: t.arg({ type: BankingAccountCreateInput, required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Creates a new BankingAccount',
    resolve: async (query, _root, { input }) => createBankingAccount(input, query),
    type: BankingAccount,
  })
);

builder.mutationField('updateBankingAccount', (t) =>
  t.prismaField({
    args: {
      id: t.arg.string({ required: true }),
      input: t.arg({ type: BankingAccountUpdateInput, required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Updates an existing BankingAccount',
    resolve: async (query, _root, { id, input }) => updateBankingAccountById(id, input, query),
    type: BankingAccount,
  })
);

builder.mutationField('createBankingCategory', (t) =>
  t.prismaField({
    args: {
      input: t.arg({ type: BankingCategoryCreateInput, required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Creates a new BankingCategory',
    resolve: async (query, _root, { input }) => createBankingCategory(input, query),
    type: BankingCategory,
  })
);

builder.mutationField('updateBankingCategory', (t) =>
  t.prismaField({
    args: {
      id: t.arg.string({ required: true }),
      input: t.arg({ type: BankingCategoryUpdateInput, required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Updates an existing BankingCategory',
    resolve: async (query, _root, { id, input }) => updateBankingCategoryById(id, input, query),
    type: BankingCategory,
  })
);

builder.mutationField('createBankingTransaction', (t) =>
  t.prismaField({
    args: {
      input: t.arg({ type: BankingTransactionCreateInput, required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Creates a new BankingTransaction',
    resolve: async (query, _root, { input }) => createBankingTransaction(input, query),
    type: BankingTransaction,
  })
);

builder.mutationField('updateBankingTransaction', (t) =>
  t.prismaField({
    args: {
      id: t.arg.string({ required: true }),
      input: t.arg({ type: BankingTransactionUpdateInput, required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Updates an existing BankingTransaction',
    resolve: async (query, _root, { id, input }) => updateBankingTransactionById(id, input, query),
    type: BankingTransaction,
  })
);
