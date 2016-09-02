const http = require('http'); // Nodes built in HTTP server
const EasyJSON = require('easy-json'); // Look that production quality code!
const root = require('app-root-path'); // Base path for project
const server = http.createServer(); // Creates server

const jay = EasyJSON.getInstance('config.json', `${root.path}/config`);
const account = {
    username: 'Brandi95',
    name: 'brandi',
    balance: 1293.78,
    age: 21,
    accountActive: true,
}
jay.saveJSON(account); // Saves the data only once

const PORT = 3000;
server.on('request', (req, res) => {
    res.writeHead(200, {
        // Sets Header
        'Content-Type': 'application/json'
    });
    const p = jay.getJSON(); // Gets JSON from disk
    p.then((data) => {
        // Resolve on promise
        data = JSON.stringify(data);
        res.end(data);
    });
}).listen(PORT);

console.log(`Server started on port ${PORT}`);
