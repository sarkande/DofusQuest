import { ApplicationSettingItem } from "./application_setting_item";
import { IApplicationSettingItem } from "../interfaces/application_setting_item";
import * as fs from "fs";
import * as path from "path";
import { app } from "electron";

export class ApplicationSettings {
  applicationSettings: ApplicationSettingItem[] = [];

  constructor() {
    this.fetchApplicationSettings();
  }

  addApplicationSetting(applicationSettingItem: IApplicationSettingItem) {
    const newApplicationSetting = new ApplicationSettingItem(applicationSettingItem);
    this.applicationSettings.push(newApplicationSetting);
    console.log("Application setting added:", newApplicationSetting.title);
  }

  findApplicationSettingItemByRoute(route: string): ApplicationSettingItem | false {
    return this.applicationSettings.find((item) => item.route === route) ?? false;
  }

  async fetchApplicationSettings() {
    try {
      const isDev = process.env.NODE_ENV === "development";
      const basePath = isDev ? path.join(__dirname, "..", "..", "..") : app.getAppPath();
      const filePath = path.join(basePath, "datas", "applications_settings.json");

      // Lire le fichier JSON avec fs.promises.readFile
      const data = await fs.promises.readFile(filePath, { encoding: "utf-8" });

      // Parser le JSON
      const applicationSettings = JSON.parse(data);

      if (!applicationSettings) {
        throw new Error("No data found in datas/applications_settings.json");
      }

      // Vérifier et ajouter chaque élément de réglage d'application
      applicationSettings.forEach((applicationSetting: IApplicationSettingItem) => {
        if (this.isValidApplicationSettingItem(applicationSetting)) {
          this.addApplicationSetting(applicationSetting);
        } else {
          throw new Error("Invalid application setting item");
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  isValidApplicationSettingItem(item: any): item is IApplicationSettingItem {
    const windowSizeKeys: (keyof IApplicationSettingItem["windowSize"])[] = ["width", "height"];
    const mainKeys: (keyof IApplicationSettingItem)[] = ["title", "imageSrc", "route", "windowSize"];

    if (typeof item !== "object" || item === null) {
      return false;
    }

    for (const key of mainKeys) {
      if (!(key in item)) {
        return false;
      }
    }

    if (typeof item.title !== "string" || typeof item.imageSrc !== "string" || typeof item.route !== "string") {
      return false;
    }

    if (typeof item.windowSize !== "object" || item.windowSize === null) {
      return false;
    }

    for (const key of windowSizeKeys) {
      if (!(key in item.windowSize) || typeof item.windowSize[key] !== "number") {
        return false;
      }
    }

    return true;
  }

  editApplicationSettingItem(applicationSettingItem: IApplicationSettingItem) {
    //find the application setting item in the array
    //change the values
    //save the changes by exporting the array to the json file
    this.applicationSettings.forEach((item, index) => {
      if (item.title === applicationSettingItem.title) {
        this.applicationSettings[index] = new ApplicationSettingItem(applicationSettingItem);
      }
    });

    this.exportApplicationSettings();
  }

  exportApplicationSettings() {
    const isDev = process.env.NODE_ENV === "development";
    const basePath = isDev ? path.join(__dirname, "..", "..", "..") : app.getAppPath();
    const filePath = path.join(basePath, "datas", "applications_settings.json");

    //use fs to write the application settings to the json file, we need to replace the file
    fs.writeFile(filePath, JSON.stringify(this.applicationSettings), (err: any) => {
      if (err) {
        console.error("Error:", err);
      }
    });
  }
}
