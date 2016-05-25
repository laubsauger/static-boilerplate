### All inclusive build + test boilerplate for frontend assets
- ESLint
- ImageMin
- Libsass
- Karma/Mocha
- Browserify

### builds all static assets

uses environment variable 'NODE_ENV' to detect development, staging, production environments

 <code>
    export NODE_ENV=development
    <br>
    npm run build
 </code>
 
 <code>
    export NODE_ENV=production
    <br>
    npm run build
 </code>
