const fs = require('fs');
const path = require('path');

exports.logToFile = (message, type = 'app') => {
	const logsDirectory = path.join(__dirname, '../logs');
	const logFilePath = path.join(logsDirectory, type + '.log');

	// Create the 'logs' directory if it doesn't exist
	if (!fs.existsSync(logsDirectory)) {
		fs.mkdirSync(logsDirectory);
	}

	// Create a timestamp for the log entry
	const timestamp = new Date().toISOString();

	// Create the log entry
	const logEntry = `${timestamp}: ${safeStringify(message)}\n`;

	// Append the log entry to the file
	fs.appendFile(logFilePath, logEntry, (err) => {
		if (err) {
			console.error('Error writing to log file:', err);
		} else {
			console.log('Log entry written to file:', logEntry);
		}
	});
}

function safeStringify(obj) {
	const seen = new WeakSet();
	return JSON.stringify(obj, function (_, value) {
		if (typeof value === 'object' && value !== null) {
			if (seen.has(value)) {
				return '[Circular]';
			}
			seen.add(value);
		}
		return value;
	});
}