# Luganode Assignment Readme

![Luganode Assignment](project_banner.png)

Welcome to the **Luganode Assignment** project! This project showcases the stake values and rates of the Cardano, Kusama, and Polkadot blockchain networks using React, Axios, and Tailwind CSS. The application utilizes the Stakerewards API to fetch and display real-time data.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)


## Introduction

The Luganode Assignment project is a web application that provides users with information about the stake values and rates of the Cardano, Kusama, and Polkadot blockchain networks. The application is built using React for the front-end, Axios for making API requests, and Tailwind CSS for styling.

## Features

- Real-time stake values and rates for Cardano, Kusama, and Polkadot networks.
- Responsive and user-friendly interface.
- Data fetched from the Stakerewards API.
- Customizable and easy-to-use.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/luganode-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd luganode-assignment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Obtain an API key from the Stakerewards API by signing up on their website.

2. Create a `.env` file in the root directory of the project.

3. Add your API key to the `.env` file:

   ```env
   REACT_APP_API_KEY=stakereward_api_key_here
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
_Example screenshot of stake values and rates._

## Contributing

Contributions to the Luganode Assignment project are welcome and encouraged! If you have improvements or bug fixes, feel free to submit a pull request.

1. Fork the project.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3. Commit your changes: `git commit -m "Add your message here"`.
4. Push to the branch: `git push origin feature/your-feature-name` or `git push origin bugfix/your-bug-fix`.
5. Open a pull request.
