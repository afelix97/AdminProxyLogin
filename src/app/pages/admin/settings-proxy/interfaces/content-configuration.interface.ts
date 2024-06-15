export interface ContentConfigurationInterface {
  content_configuration_id?: number;
  name: string;
  value: string;
  type: string;
  creation_date?: string;
  change_date?: string;
  category?: string;
  created_by?: string; // Campo opcional
  changed_by?: string; // Campo opcional
  version?: number;
}
