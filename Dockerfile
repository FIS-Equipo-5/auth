FROM node:9

#Establecer directorio de trabajo
WORKDIR /app

COPY . /app

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

RUN npm install --quiet

EXPOSE 3000
CMD ["npm", "start"]
