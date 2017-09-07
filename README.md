# 404-not-found
Web Application for Hackathon competition (Mumbai Studio).


# Tech Stacks Used in project

[[Angular 4]](https://angular.io/)
[[Bootstrap]](https://getbootstrap.com/docs/3.3/)
[[Scss]](http://sass-lang.com/)
[[Webpack]](https://webpack.js.org/)


## Usage

### Requirement Node version < 6+ && NPM version < 3+
    This application is build using Node version >= 6.0.0 and NPM => 3.0.0.To run error free application we recommend to upgrade node and npm version with above mentioned.
    
    ```
        node --version && npm --version
    ```    

#Steps to run this application
- `git clone https://github.com/atulneharkar/404-not-found.git` to clone the application at your local machine.
- `npm install`   to install all the required node modules.
- `npm install -g @angular/cli`   to install angular-cli globaly.
- `ng serve`      to launch a browser sync server on your source files.
- `npm test ` to run the spec for the application.

#Steps required for production deployment
- `ng build --prod` to build an optimized version of your application for production in dist folder.
- `npm test ` to run the spec for the application.
- `ng lint ` to check all the linting error defined in the lint files.
- `ng e2e ` to start end to end testing.

#Production URL
[http://404-not-found.beawesome.co.in/](http://404-not-found.beawesome.co.in/)


