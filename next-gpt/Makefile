startup:
	make setup_db && npm run dev

start:
	make setup_db && npm run build && npx next start

setup_db:
	npx prisma generate && npx prisma db pull && npx prisma db push && make migration

migration:
	npx prisma migrate deploy
