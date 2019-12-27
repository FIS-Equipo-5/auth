
FROM node:9-alpine

#Establecer directorio de trabajo
WORKDIR /app

COPY . /app

RUN npm install --quiet

EXPOSE 3000
CMD ["npm", "start"]
