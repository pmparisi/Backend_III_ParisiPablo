FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["node", "src/app.js"]