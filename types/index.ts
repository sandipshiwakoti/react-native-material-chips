export enum ChipsType {
  Default = 'Default',
  Filter = 'Filter',
  Input = 'Input',
}

export type ChipItem = {
  label: string;
  value: string;
};

export type ChipItemVariant = 'solid' | 'outlined' | 'disabled';
