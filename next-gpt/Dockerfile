FROM node:19-slim

WORKDIR /home/node/app

RUN apt update && apt install make 

USER node

CMD ["npm", "run" ,"docker:startup"]
