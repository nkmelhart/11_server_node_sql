import knex from 'knex'

const fn = process.env.SQLITE_FILENAME

const db = knex({
    client: process.env.SQLITE_CLIENT,
    connection: () => ({
        filename: process.env.SQLITE_FILENAME
    }),
    useNullAsDefault: true,
})

export default db

const createTables = async () => {
    const notesTablesExists = await db.schema.hasTable('notes')
    if (!notesTablesExists) {
        await db.schema.createTable('notes', (table) => {
            table.increments('id').primary()
            table.string('title', 100)
            table.string('content')
            table.timestamps()
        })
    }
}

createTables()


