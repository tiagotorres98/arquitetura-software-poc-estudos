import http from 'node:http';

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        const agora = new Date().toLocaleString();

        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Experimento SSR</title>
            </head>
            <body>
                <h1>Teste APP SSR (Server Side Rendering)</h1>
                <p>Este HTML foi gerado no servidor.</p>
                <p>Servidor respondeu em: ${agora}</p>
            </body>
            </html>
        `;

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(html);
    }
});

server.listen(3000);