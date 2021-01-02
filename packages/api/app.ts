import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => res.send('Express + TypeScript Server'))

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
