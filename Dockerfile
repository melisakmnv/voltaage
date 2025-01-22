FROM node:14.18.3-alpine3.14 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:14.18.3-alpine3.14
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i -g serve
COPY --from=builder /app ./
EXPOSE 3000
CMD ["serve", "-s build"]