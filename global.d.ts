interface Content {
  id: number;
  url: string;
  alt: string;
  desc: string;
}

type Drawer = {
  id: number;
  name: string;
  path: string;
  icon: IconType;
}