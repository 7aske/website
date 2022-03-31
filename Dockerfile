FROM nginx:alpine as RUN
WORKDIR /usr/share/nginx/html
COPY build/ .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
