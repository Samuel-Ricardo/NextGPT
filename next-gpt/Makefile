startup:
	make setupdb && npm run dev

start:
	make setupdb && npm run build && npx next start

setupdb:
	npx prisma generate && npx prisma db push && npm run migration:deploy 
