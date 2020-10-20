This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Understanding Code

### `index.js`

This is the starting point of the application.

### `data/initial-data.js`

This contains the initial data of the application. This is structured in a way it is easier to add drag and drop functionality later.

### `app.js`

This component contains the layout of the application and the other sub-components that come along with it.

### `components/AppTabs.js`

This components contains the list of tabs that are shown in the application. Only the board tab shows the UI. Clicking on any other tab would show a placeholder `This feature is coming soon`

### `components/Placeholder.js`

This components contains the placeholder for the tabs which are not developed.

### `components/SettingsMenu.js`

This component is used to show the menu inside the drawer component which opens up when you click on a particular task

### `components/SubHeaderContent.js`

This is a static component which appears just below the main header and contains various fields like `Send Feedback`, `Filter`, `Sort`. Please note that none of these features are developed.

### `components/Tag.js`

This component is used to generate chips for status and priority.

### `components/TaskCard.js`

This component is a single unit of tasks in the home page. The component expands/contracts based on the content provided.

### `components/TaskDetails.js`

This is the drawer component that opens up when you click on a particular task card in the home page

### `components/TaskTable.js`

This is the component that is shown inside `TaskDetails` (drawer component). The data of this component is driven by the card
selected in the home page.

### `components/HeaderSettings.js`

This is the component that is shown inside the header on the right hand side. This is a static component

### `App.css`

Contains the styles for the application
