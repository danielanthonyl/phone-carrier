export type Option = {
  id: string;
  value: string;
};

export interface ISelectProps {
  renderContent: Option[];
  onOptionSelect?(option: Option): void;
}
