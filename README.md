This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Triage (MyScheduler)

## icons used from
- Material UI icons : https://mui.com/components/material-icons/

## depolyed at

- netlify : https://myscheduler.netlify.app/
- firebase hosting : https://myscheduler-c8f00.web.app/

## Available Scripts

### deploy to Netlify

> npm run build  
> npm install netlify-cli -g  

- Now you need to create a `/build/_redirects` file for redirecting all requests to `index.html` for React client-side routing
- /build/_redirects>>>>
    ```
    /*  /index.html
    ```
    > netlify deploy  
- or for directly on production...
    > netlify deploy --prod  
    - select `./build` folder

### deploy to Firebase hosting

> npm run build     
> sudo npm install -g firebase-tools    
> firebase login    
> firebase init     
> firebase deploy   
    - select `./build` file and select redirect all requests to `index.html`    
