const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const clientIp = req.ip;
    const serverIp = os.networkInterfaces().eth0[0].address; // Adjust according to your network interface
    const hostName = os.hostname();
    const clientHostName = os.hostname(); // Assuming client hostname is same as server's for demonstration

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Deepak's DevOps Webpage</title>
            <link rel="stylesheet" href="styles.css">
            <script src="script.js" defer></script>
        </head>
        <body>
            <nav>
                <ul class="flex-container">
                    <li><a href="/">Home</a></li>
                    <li><a href="/topics">Topics</a></li>
                    <li><a href="https://roadmap.sh/devops" target="_blank">Roadmap</a></li>
                    <li><a href="https://www.naukri.com/devops-engineer-jobs" target="_blank">Jobs</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div class="container">
                <h1 class="fire-animation">Hello DevOps Enthusiasts!</h1>
                <h2 class="fire-animation">Welcome to Deepak's DevOps Webpage</h2>
                <div class="info">
                    <p class="vibrant">Client IP: <span id="client-ip">${clientIp}</span></p>
                    <p class="vibrant">Client Hostname: <span id="client-hostname">${clientHostName}</span></p>
                    <p class="vibrant">Server Hostname: <span id="host-name">${hostName}</span></p>
                    <p class="vibrant">Server IP: <span id="server-ip">${serverIp}</span></p>
                </div>
                <div id="clock"></div>
                <button onclick="toggleClockFormat()">Toggle 12/24 Hour Format</button>
            </div>
        </body>
        </html>
    `);
});

// Route for Topics
app.get('/topics', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Topics</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <nav>
                <ul class="flex-container">
                    <li><a href="/">Home</a></li>
                    <li><a href="/topics">Topics</a></li>
                    <li><a href="https://roadmap.sh/devops" target="_blank">Roadmap</a></li>
                    <li><a href="https://www.naukri.com/devops-engineer-jobs" target="_blank">Jobs</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div class="container">
                <h1>Important DevOps Tools</h1>
                <ul>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Jenkins</li>
                    <li>Git</li>
                    <li>Ansible</li>
                    <li>Terraform</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Prometheus</li>
                    <li>Grafana</li>
                    <li>Slack</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

// Serve static files from the public directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

