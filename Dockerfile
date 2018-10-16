FROM node:latest
LABEL maintainer="r.kazuo.f@gmail.com"
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000