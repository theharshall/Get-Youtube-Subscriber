# Get YouTube Subscriber
(AlmaBetter Capstone Project)

This project is a backend application built with Express.js and Node.js that allows users to retrieve subscriber information from YouTube channels.

## Features
Retrieve subscriber information including Name, ID, subscription date, and subscribed channel.
Get subscriber names along with their respective channels.
Retrieve subscriber information for a specific user using their ID.

## Installation

1. Install dependencies:

```bash

npm install

```
## Usage

### Starting the Server

Run the following command to start the server:


```bash

npm start

```
By default, the server will run on port `3000`. You can access the endpoints at `http://localhost:3000`.

### Endpoints

#### 1. Get Subscriber Information

- **Route:** /`subscribers`
- **Method:** `GET`
- **Description:**  `Retrieves subscriber information as an array of all subscribers in the database.`
 - Example Request: `http://localhost:3000/subscribers`

#### 2. Get Subscriber Names

- **Route:** `/subscribers/names`
- **Method:** `GET`
- **Description:** `Retrieves subscriber names along with their respective channels.` 
 - Example Request: `http://localhost:3000/subscribers/names`

#### 3. Get Subscriber Information by ID

- **Route:** `/subscribers/:id`
- **Method:** `GET`
- **Description:** `Retrieves subscriber information for a specific user using their ID.`
Example Request: `http://localhost:3000/subscribers/:id`


Replace `:id` with the actual subscriber ID.


## Contributing


Contributions are welcome! If you'd like to contribute to this project, please follow these steps:


1. Fork the repository.
2. Create your feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.


## Application Folder Structure


Get-Youtube_subscribers  
├─ src                   
│  ├─ models             
│  │  └─ subscribers.js  
│  ├─ app.js             
│  ├─ createDatabase.js  
│  ├─ data.js            
│  ├─ index.html         
│  └─ youtube.png        
├─ index.js              
├─ package-lock.json     
├─ package.json          
├─ Readme.md


## Dependencies Used in This Project

* Express
* Mongoose
* nodemon
* dotenv


## Deployment

You can view the live application at:

Live Link : https://getyoutubesubscriber-beryl.vercel.app/
GitHub Link : https://github.com/theharshall/Get-Youtube-Subscriber

## Acknowledgments

Special thanks to the Express.js and Node.js communities for their excellent libraries and documentation.

