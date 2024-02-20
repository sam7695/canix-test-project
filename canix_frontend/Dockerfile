# Node.js 20 Docker image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL $REACT_APP_API_BASE_URL

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
