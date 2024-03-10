# Address Updater Project

## Introduction

This project, titled "Address Updater," aims to develop a user interface application for managing addresses. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on address information. The project utilizes React.js for the frontend, along with Tailwind CSS and Ant Design for styling, and Node.js with Express for the backend.

## Project Details

### Functionality Assessment

#### Add

- Users can add new addresses with complete information.
- The system validates user input for completeness and format.
- Mechanism in place to handle potential duplicate entries.

#### Edit

- Users can edit existing addresses and save the changes.
- All address fields are editable.
- System prevents invalid data during editing.

#### Delete

- Users can delete unwanted addresses.
- Confirmation step before permanent deletion.
- System handles potential data dependencies before deletion.

#### Update

- Users can update existing addresses in real-time.
- Changes are reflected immediately in the interface.
- System handles potential conflicts during updates.

### User Interface (UI)

- Intuitive and easy-to-navigate UI.
- Clear labeling and accessibility of functionalities.
- Data presented in a clear and organized manner.
- Responsive and adaptable UI for different screen sizes.

### Error Handling

- Clear and informative error messages.
- Mechanisms to recover from invalid inputs or unexpected errors.

### Additional Considerations

- Well-organized, documented, and easy-to-understand code.
- Following best practices in coding standards and security principles.
- Extensibility to include additional functionalities.

## Tech Stack

- **Frontend:**
  - React.js: JavaScript library for building user interfaces.
  - CSS: CSS for styling.
 
- **Backend:**
  - Node.js: JavaScript runtime for building server-side applications.
  - Express: Web application framework for Node.js.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

4. MongoDB Atlas Setup

This project utilizes MongoDB Atlas as its database solution. Follow the steps below to set up MongoDB Atlas and obtain the connection string required for your application.

1. **Create a MongoDB Atlas Account**:


    - Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas) and sign up for an account if you haven't already.

2. **Get Connection String**:


    - In the MongoDB Atlas dashboard, click on the "Connect" button for your cluster.
    - Choose "Connect your application" and copy the connection string provided.

3. **Set Up Environment Variables**:


    - Rename the `.env.sample` file to `.env`.
    - Replace the placeholder `<YOUR_CONNECTION_STRING>` with the actual connection string you obtained from MongoDB Atlas.

## Environment Variables

Ensure that you have the following environment variables set in your `.env` file as given in `.env.sample` file:

4. Start the frontend and backend servers:

   ```bash
   # In the backend directory
   npm start

   # In the frontend directory
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

## Deliverables

Please provide a comprehensive assessment report outlining the strengths and weaknesses of the Address Updater project based on the mentioned criteria. Additionally, include any recommendations for improvement or suggestions for further development.

## Contact Information

For any queries or assistance, please contact yadav.mahendra2804@gmail.com.

## Conclusion

The Address Updater project aims to provide a robust solution for managing address information. By adhering to the mentioned criteria and utilizing the specified tech stack, the project aims to deliver a user-friendly interface with efficient functionality.
