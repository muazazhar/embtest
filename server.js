const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check if the request is for the root URL
    if (req.url === '/') {
        // Read the HTML file
        fs.readFile(path.join(__dirname, 'RK-Termin.html'), (err, data) => {
            if (err) {
                // If there's an error reading the file, send a 500 error response
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            } else {
                // If the file is read successfully, send it as the response
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // If the requested URL is not the root, send a 404 error response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
