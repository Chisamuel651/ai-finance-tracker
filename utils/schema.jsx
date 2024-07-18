import {
integer, numeric, pgTable, serial, varchar
} from 'drizzle-orm/pg-core';

//  budget schema
export const Budgets = pgTable('budgets', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amounts: varchar('amount').notNull(),
    Icon: varchar('icon')
})