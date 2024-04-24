# devComm

## Technology Stack
- HTML 5/CSS3
- Sass (SCSS)

## How to set up locally

### Prerequisites
- Node.js and npm: If you don't have them installed, you can download and install them from [here](https://nodejs.org/).
- Gulp, gulp-sass, and sass: Install them as dev-dependencies in your project by running the following command:

```sh
$ npm install gulp gulp-sass sass --save-dev
```

### Steps
1. Clone the repository: `git clone https://github.com/josephchuangtw/devComm.git`
2. Navigate to the project directory: `cd devComm`
3. Install all dependencies using npm: `npm install`.
4. Add `"gulp": "gulp"` to your `package.json`
5. Run gulp which will compile your SCSS into CSS and watch for changes: `npm run gulp`.