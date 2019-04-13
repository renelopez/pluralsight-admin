# Build stage
FROM node:10.15.3-alpine as test-env

LABEL maintainer="rene.lopez.cano@gmail.com"

# Copy src

ENV CONTAINER_PATH /usr/app

COPY . $CONTAINER_PATH

WORKDIR $CONTAINER_PATH

# Get Packages
RUN npm install


# Test
ENV TEAMCITY_VERSION="1.0"
RUN npm run test:ci


# Compile
RUN npm run build

# --------------------------------------------------------------------------

# Runtime stage
FROM nginx:1.15.10-alpine

LABEL key="rene.lopez.cano@gmail.com"

WORKDIR /usr/app

COPY --from=test-env /usr/app/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT [ "nginx", "-g","daemon off;"]

