import { IApplicationSettingItem } from "../interfaces/application_setting_item";

export class ApplicationSettingItem implements IApplicationSettingItem {
  title: string;
  imageSrc: string;
  route: string;
  windowSize: {
    width: number;
    height: number;
  };

  constructor({ title, imageSrc, route, windowSize }: IApplicationSettingItem) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.route = route;
    this.windowSize = windowSize;
  }
}
