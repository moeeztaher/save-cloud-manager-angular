# Save Cloud Manager

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is the frontend part of the Save Cloud Manager application, built with Angular version 17.0.3. It allows users to upload and download files to/from an AWS S3 bucket.

## Features
- Upload files to AWS S3
- Download files from AWS S3
- Responsive design
- Integration with backend API

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/savecloudmanagerfrontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd savecloudmanagerfrontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Running the Application
1. Start the development server:
    ```bash
    ng serve
    ```
2. Open your browser and navigate to `http://localhost:4200`.

## Configuration
Configuration details such as API endpoints can be set in the `src/environments/environment.ts` file. Here is an example:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
```
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
