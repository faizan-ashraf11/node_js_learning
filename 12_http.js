 // Use of HTTP Modules
 const http = require('http');

 const server = http.createServer((request , result)=>{
     if(request.url === '/'){
          result.end('Welcome to Our home Page!');
     }
     if(request.url === '/about'){
         result.end('Here is our Short history!');
     }
     result.end(`
         <h1> Something went wrong please contact the administration!</h1>
         <a href="/">Back Home</a>
     `)
 });
 
 server.listen(5000);
 
 // This Code contains the servere requests or you may be say sample fynction to read server request and show result