import type { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  types: ReactNode;
  params?: any;
};

export interface TextSectionProps {
  text: string;
  side: boolean;
}

export interface ListSectionProps {
  header: string;
  listOne: string;
  listTwo: string;
  listThree: string;
}

export interface GridSectionProps {
  svg: any;
  header: string;
  content: string;
}

export interface FlexContainerProps {
  quantity: string;
  post: string;
}

export interface ImageContainerProps {
  source: any;
  name: string;
}

export interface FigureSectionProps {
  source: any;
  height: string;
  width: string;
  name: string;
}
