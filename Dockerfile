
#FROM node:9-alpine
FROM node:10

#Establecer directorio de trabajo
WORKDIR /app

COPY . /app

RUN npm install --quiet

EXPOSE 3000
CMD ["npm", "start"]
