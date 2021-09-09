# Task_2_Krista_Jaunsleine

Website deployed on Githubpages using Webpack - https://kjaunsleine.github.io/Task_2_Krista_Jaunsleine/

To view locally:

  1. Clone the source code
  2. In the cloned folder install node packages

    npm install

  3. Build website

    npm run build -- env.env=prod

All the source files will form in 'assets' folder.

To run the website on local server in development mode:

    npm run server:default -- --env.env=dev

To run the website on local server in production mode:

    npm run server:default -- --env.env=prod

Incase of build troubleshooting:
  1. First rebuild npm
  
    npm rebuild
   
  2. Then 
  
    npm install

