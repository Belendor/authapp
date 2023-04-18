FROM node:latest
WORKDIR /app
EXPOSE 3000
COPY . .

ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm install
RUN npm i -g prisma
RUN npx prisma generate --schema ./prisma/schema.prisma
RUN npx prisma db push
RUN npm run build

CMD ["npm", "start"]