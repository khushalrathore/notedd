# noteDD Application

This is a simple React-based notes making application. It allows users to add, check, and delete notes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Credits](#credits)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-list-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and go to `http://localhost:3000`.

## Components

### ToDoList

The main component that renders the ToDo list application. It includes:
- A top bar with a logo, bell icon, and profile picture.
- A greeting message.
- An input field to add new tasks.
- A list of tasks with checkboxes and delete buttons.

#### State

- `user`: The name of the user, in this example, it is set to 'Khushal'.
- `tasks`: An array of task strings, initialized with two tasks: "Go To Gym" and "DSA Roadmap".

#### Methods

- `handleAddTasks`: Adds a new task to the list.
- `handleKeyUp`: Adds a new task when the Enter key is pressed.
- `handleRemoveTasks`: Removes a task from the list based on its index.
- `handleCheckedTasks`: Placeholder function for handling task completion.

## Styling

The application uses inline styles for simplicity. Here are some of the key styles:

- `styles.page`: Flex container for the entire page.
- `styles.topBar`: Flex container for the top bar with logo and icons.
- `styles.bellButton`, `styles.bellButtonDiv`, `styles.pfpIcon`, `styles.logo`: Styles for the bell icon, profile picture, and logo.
- `styles.h1`: Styles for the greeting message.
- `styles.taskAdder`: Flex container for the task input field and add button.
- `styles.inputTask`, `styles.inputTaskStarCheck`: Styles for the task input field and its container.
- `styles.addButton`, `styles.starButton`, `styles.deleteButton`: Styles for the add, star, and delete buttons.
- `styles.listItem`, `styles.listItemDiv`, `styles.ul`: Styles for the task list and individual task items.

## Credits

- Icons are sourced from the assets directory and a URL for the profile picture.
- The user profile picture URL: [Boring Avatars](https://source.boringavatars.com/beam/250/?colors=264653,f4a261,e76f51)

Feel free to customize the styles and functionality as per your requirements!
