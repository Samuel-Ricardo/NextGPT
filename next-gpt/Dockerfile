FROM node:19-slim

WORKDIR /home/node/app 

RUN apt update && apt-get update

RUN apt install make 
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

RUN npx cypress install

USER node

CMD ["npm", "run" ,"docker:startup"]
