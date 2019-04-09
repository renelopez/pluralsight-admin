# Build stage
FROM node:10.15.3-alpine as test-env

LABEL maintainer="rene.lopez.cano@gmail.com"

# Copy src

COPY . /src

WORKDIR /src

# Get Packages
RUN npm install

# Test
RUN npm run test:ci


# Compile
RUN npm run build


# Runtime stage
FROM nginx:1.15.10-alpine

LABEL key="rene.lopez.cano@gmail.com"

COPY --from=test-env src/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT [ "nginx", "-g","daemon off;"]

