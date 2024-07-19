import * as fs from "fs";
import * as path from "path";

class Logger {
  private static instance: Logger;
  private logFilePath: string;

  private constructor(logFilePath: string = "app.log") {
    this.logFilePath = path.join(__dirname, logFilePath);
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    // this.writeToFile("LOG", message);
    console.log(message);
  }

  public error(message: string): void {
    // this.writeToFile("ERROR", message);
    console.error(message);
  }

  private writeToFile(level: string, message: string): void {
    const logMessage = `${new Date().toISOString()} [${level}]: ${message}\n`;
    fs.appendFile(this.logFilePath, logMessage, (err) => {
      if (err) throw err;
    });
  }

  public disableConsoleLog(): void {
    console.log = function () {};
    console.error = function () {};
  }
}

export const logger = Logger.getInstance();
