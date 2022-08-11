export interface RenderContent {
  id: string;
  value: string;
}

export interface IDropdownProps {
  visible?: boolean;
  renderContent: RenderContent[];
}
