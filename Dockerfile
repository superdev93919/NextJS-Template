# Use a lightweight Node.js version 18 image:
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install production dependencies with pnpm:
COPY package.json pnpm-lock.yaml ./
RUN apk add --no-cache curl && \
  curl -L https://unpkg.com/@pnpm/self-installer | node && \
  pnpm install && \
  apk del curl

# Build the app:
FROM base AS build

WORKDIR /app
COPY . .
COPY --from=base /app/node_modules ./node_modules
RUN pnpm run build

# Run the app:
FROM node:18-alpine
WORKDIR /app

# Create a non-root user to run the app:
RUN addgroup -S app && adduser -S app -G app

# Set the ownership and permissions for the app directory and its subdirectories:
RUN chown -R app:app /app && \
  chmod -R 755 /app && \
  mkdir -p /app/.next/cache/images && \
  chown -R app:app /app/.next

USER app

# Copy the built app and node_modules from the previous stages:
COPY --from=build --chown=app:app /app/public ./public
COPY --from=build --chown=app:app /app/.next ./.next
COPY --from=build --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/package.json ./
COPY --from=build --chown=app:app /app/next.config.js ./

# Set environment variables:
ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

# Expose port 3000:
EXPOSE 3000

# Start the app:
CMD ["node", "./node_modules/next/dist/bin/next", "start"]