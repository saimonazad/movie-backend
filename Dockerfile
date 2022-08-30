# Copyright 2019 Google LLC. All rights reserved.
# Use of this source code is governed by the Apache 2.0
# license that can be found in the LICENSE file.

# Use the official lightweight Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:16-alpine AS builder

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN yarn install --frozen-lockfile
RUN npx prisma generate

# Copy local code to the container image.
COPY . .

# Build the source since its Typescript
RUN yarn build

FROM node:16-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Run the web service on container startup.
CMD [ "yarn", "start:prod" ]