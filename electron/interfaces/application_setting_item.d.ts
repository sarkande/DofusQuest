// interface for application setting item
export interface IApplicationSettingItem {
  title: string;
  imageSrc: string;
  route: string;
  windowSize: {
    width: number;
    height: number;
  };
}
