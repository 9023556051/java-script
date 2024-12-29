import os from 'os';
import fs from 'fs';
import path from 'path';

// Get the current directory using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

function logSystemInfo() {
    const systemInfo = {
        OS: os.type(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpu: os.cpus().map(cpu => cpu.model).join(', '),
        uptime: os.uptime(),
    };

    console.log('System Info Gathered:', systemInfo);

    // Fix the directory creation logic
    const logDir = path.join( 'D:\CHARUSAT\SEM-4\FSWD\practical\pr_3', 'logs');
    const logFilePath = path.join(logDir, 'system-info.txt');

    // Check if logs directory exists, if not create it
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }

    const logContent = `
    ===================== System Information =====================
    OS: ${systemInfo.OS}
    Total Memory: ${(systemInfo.totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB
    Free Memory: ${(systemInfo.freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB
    CPU: ${systemInfo.cpu}
    Uptime: ${systemInfo.uptime} seconds
    ===============================================================
    `;

    fs.writeFileSync(logFilePath, logContent, 'utf8');
    console.log('System information saved to', logFilePath);
}

async function main() {
    logSystemInfo();
}

main();
