## Prerequisites

Before running the project, make sure you have the following software installed on your machine:

- Node.js v18: You can use NVM (Node Version Manager) to install Node.js v18.
  

## Installation

### Installing Node.js v18 using NVM

1. Install NVM (Node Version Manager) by following the instructions at [NVM repository](https://github.com/nvm-sh/nvm#installation). Choose the installation method that is suitable for your operating system.

2. Once NVM is installed, open a new terminal window or restart your terminal.

3. Install Node.js v18 by running the following command:

   ```bash
   nvm install 18
   ```

4. Verify that Node.js v18 is installed by running the following command:

   ```bash
   node --version
   ```

   You should see the version number of Node.js v18.

5. Update the environment variables by copying from .env.example to .env


### Starting the APPLICATION

1. Install project dependencies by navigating to the project directory in your terminal and running the following command:

   ```bash
   npm install
   ```

2. To start the application run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. To run the test cases run the following command

  ```bash
  npm test
  ```


### Additional Fields

I have added three additional fields in variables of deliverable
1. required to check if the field is required or not
2. minLength for minLength
3. fieldValue for field value it is to keep the name and value separate Just like content management system where we type the name and a field value is assigned to it

### TASK 2

Here's a simplifed version of the details from the components I have deducted.

#### Users
- Associations: submits (to Submission)
- Associations: belongs to many (Projects)

#### Projects
- Attributes: ProjectID, ProjectName

#### Deliverables
- Attributes: DeliverableID, DeliverableType, DeliverableName, DateCreated, CreatedByUserID, ProjectID
- Associations: has (to DeliverableVariables), has (to Submission)

#### DeliverableVariables
- Attributes: VariableID, DeliverableID, Placeholder, VariableName, FieldValue, VariableType, Required, MinLength

#### Submission
- Attributes: SubmissionID, UserID, DeliverableID, SubmissionDate, SubmittedValues
- Associations: submitted for (to Users), submitted for (to Deliverables)

<img width="690" alt="image" src="https://github.com/farhantariq12b/turbo-task/assets/55201731/34ca3d0e-7d19-442e-9542-95d3d695003b">
