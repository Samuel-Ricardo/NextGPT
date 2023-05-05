startup:
	make setupdb && npm run dev

start:
	make setupdb && npm run build && npm run start

setupdb:
	npx prisma generate && npx prisma push && npm run migration:deploy 
