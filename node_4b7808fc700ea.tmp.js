const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.method);
    
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (req.method === 'GET' && pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else if (req.method === 'POST' && pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Received a POST request');
    } else if (req.method === 'DELETE' && pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Received a DELETE request');
    } else if (pathname === '/about') {
        res.writeHead(301, { 'Location': '/' });
        res.end();
    } else if (pathname === '/calculate') {
        const num1 = parseFloat(query.num1);
        const num2 = parseFloat(query.num2);
        const operation = query.operation;
        let result;

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                    break;
                default:
                    result = 'Invalid operation';
            }
        } else {
            result = 'Invalid numbers';
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Result: ${result}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
