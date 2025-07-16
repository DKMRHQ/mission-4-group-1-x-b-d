# Simple React Chat Application

---

This project is a straightforward frontend chat application built with React.js. It provides a user interface for sending messages and displaying chat history, designed to communicate with a separate backend API for message processing and replies.

## Features

* **Real-time Chat Display**: Shows a history of messages from both the user and the AI.
* **User Input**: Allows users to type and send messages.
* **Backend Integration**: Communicates with a local backend server (`http://localhost:3001/api/chat`) to send user messages and receive AI replies.
* **Automatic Scrolling**: Automatically scrolls to the bottom to show the latest messages.
* **Basic Error Handling**: Catches and displays simple errors if the backend communication fails.

---

## Technologies Used

* **Frontend**: React.js
* **Language**: TypeScript (as indicated by `.tsx` file)
* **Styling**: Plain CSS (`index.css`)
* **API Communication**: Built-in Fetch API

---

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* **Node.js**: Make sure you have Node.js (which includes npm) installed. You can download it from [nodejs.org](https://nodejs.org/).
* **Backend Server**: This frontend application requires a backend server running at `http://localhost:3001` with an `/api/chat` endpoint that can handle `POST` requests containing chat history and a new message, and respond with a `reply`. **The backend is not included in this repository.**

### Installation

1.  **Clone the repository**:
    ```bash
    git clone YOUR_REPO_URL_HERE
    cd your-repo-name
    ```
    (Replace `YOUR_REPO_URL_HERE` and `your-repo-name` with your actual repository details.)

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Run the Application

1.  **Start your backend server**: Ensure your corresponding backend server is running and accessible at `http://localhost:3001`.
2.  **Start the React application**:
    ```bash
    npm start
    ```

The application will typically start on `http://localhost:3000` (or another available port). Open this URL in your web browser.

---

## Usage

1.  Ensure both the backend server and this React application are running.
2.  Type your message into the input box at the bottom of the chat window.
3.  Press `Enter` or click the "Send" button to send your message.
4.  The chat history will update with your message and the reply from the backend.

---

## Contributors

* [Your Name/GitHub Profile](YOUR_GITHUB_PROFILE_URL)
* [Another Contributor](ANOTHER_GITHUB_PROFILE_URL)

---

## License

This project is open-source and available under the [MIT License](LICENSE.md). (You may need to create a `LICENSE.md` file in your repository.)

---
