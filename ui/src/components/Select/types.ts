export type Option = {
  id: string;
  name: string;
};

export interface ISelectProps {
  renderContent: Option[];
  onOptionSelect?(option: Option): void;
}
