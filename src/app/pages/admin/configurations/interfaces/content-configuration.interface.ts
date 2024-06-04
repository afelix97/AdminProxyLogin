export interface ContentConfigurationInterface {
  contentConfigurationId?: number;
  name: string;
  value: string;
  type: string;
  category?: string;
  createdBy?: string; // Campo opcional
  changedBy?: string; // Campo opcional
}
