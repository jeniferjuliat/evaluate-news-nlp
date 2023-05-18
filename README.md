#Evaluate a News Article with Natural Language Processing
This project is a web app that allows users to enter a URL of an article and then uses Natural Language Processing (NLP) to analyze the text and provide information about the sentiment of the article.
![Captura de tela 2023-05-18 121845](https://github.com/jeniferjuliat/nlpapp/assets/107074702/f565a444-09ce-40fa-91c0-0788c21f6cfe)

![Captura de tela 2023-05-18 121906](https://github.com/jeniferjuliat/nlpapp/assets/107074702/b15a2b22-b84a-4ae2-b180-b061c1a32bc8)



##How to run the app
To run the app, first make sure you have Node.js installed on your computer. Then, follow these steps:

Clone the project to your local machine:

Copy code
git clone https://github.com/your-username/evaluate-news-nlp.git
Navigate to the project directory:


Copy code
cd evaluate-news-nlp
Install the dependencies:

Copy code
npm install
Build the project:


Copy code
npm run build-prod
Start the server:

Copy code
npm start
Open the app in your web browser at http://localhost:8081

Dependencies
This project uses the following dependencies:

Express
Webpack
Sass
Axios
dotenv
jest (for testing)
Project structure

###The project files are organized as follows:

evaluate-news-nlp/
├── __test__/          # Test files
├── src/               # Source files
│   ├── client/        # Client-side files (JavaScript and styles)
│   ├── server/        # Server-side files (Node.js and Express)
│   └── views/         # HTML templates
├── .gitignore         # Git ignore file
├── package-lock.json  # Package lock file
├── package.json       # Package file
├── README.md          # This file
└── webpack.dev.js  # Webpack developer configuration file
└── webpack.prod.js  # Webpack production configuration file

####Credits
This project was created as part of the Udacity Front End Developer Nanodegree program. The NLP analysis is provided by the MeaningCloud API.
