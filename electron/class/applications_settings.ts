import { ApplicationSettingItem } from "./application_setting_item";
import { IApplicationSettingItem } from "../interfaces/application_setting_item";
import * as fs from "fs";

export class ApplicationSettings {
  applicationSettings: ApplicationSettingItem[] = [];
  constructor() {
    this.fetchApplicationSettings();
  }

  addApplicationSetting(applicationSettingItem: IApplicationSettingItem) {
    const newApplicationSetting = new ApplicationSettingItem(applicationSettingItem);

    this.applicationSettings.push(newApplicationSetting);
  }
  fetchApplicationSettings() {
    //Load json file at datas/applications_settings.json
    // then serialize it to ApplicationSettingItem
    fetch("datas/applications_settings.json")
      .then((response) => {
        //check if the response is ok and a valid json file
        if (response.status !== 200) {
          throw new Error("Can't fetch datas/applications_settings.json");
        }

        let data = response.json();
        if (data === null) {
          throw new Error("Can't parse datas/applications_settings.json into json");
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          throw new Error("No data found in datas/applications_settings.json");
        }

        data.forEach((applicationSetting: IApplicationSettingItem) => {
          //check if the data is valid using the interface then create a new ApplicationSettingItem
          if (this.isValidApplicationSettingItem(applicationSetting)) this.addApplicationSetting(applicationSetting);
          else throw new Error("Invalid application setting item");
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
    //use fs to write the application settings to the json file, we need to replace the file
    fs.writeFile("datas/applications_settings.json", JSON.stringify(this.applicationSettings), (err: any) => {
      if (err) {
        console.error("Error:", err);
      }
    });
  }
}
