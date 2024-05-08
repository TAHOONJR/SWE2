# Use the official Node.js 12.22.2 image as a base
FROM node:17 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build -- --prod

# Use NGINX to serve the built Angular application in a lightweight production-ready server
FROM nginx:alpine

# Copy the built application to NGINX html directory
COPY --from=build /app/dist/SA2PROJECT /usr/share/nginx/html

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the desired port for the frontend (replace 8080 with your desired port)
EXPOSE 8081

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
