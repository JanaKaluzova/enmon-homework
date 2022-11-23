export interface Meter {
  id: number;
  inventory_location: InventoryLocation;
  owner: string;
  tenant: string;
  note: string;
  serial_number: string;
  meter_type: string;
  rssi: number;
  diameter_nominal: number;
  lay_length: number;
  flowrate: string;
  flange: any;
  lat: number;
  lng: number;
  created_at: string;
  updated_at: string;
  monitored_entity: string;
  is_suggested_new_meter: boolean;
  is_mounted: boolean;
  accessibility: string;
  inventory_location_building: string;
  building_floor: number;
  manufactured: string;
  calibrated: boolean;
  meter_model: number;
  backend_gateway_meter_id: string;
  is_direct: boolean;
  measuring_current_transformer: boolean;
  is_submeter: boolean;
  orientation: string;
  q_max: number;
  q_min: number;
  resistance: string;
  installation_position: string;
  inventory_meter_api_key: InventoryMeterApiKey;
  submitted_at: string;
  submitted_by: string;
  unit: string;
  g_size: number;
  p_max: number;
  meter_mount_type: string;
  remote_reading_owner: string;
  floorplan_lat: number;
  floorplan_lng: number;
  code: number;
  factor: string;
  data_source_id: number;
  initial_offset: string;
  device_category: string;
  data_source_channel: string;
  installed_at: string;
  installed_by: string;
  owner_type: string;
  new_meter: boolean;
  submeter: boolean;
  remote_reading_serial: boolean;
  inventory_meter_photos: InventoryMeterPhoto[];
  inventory_meter_reading: InventoryMeterReading[];
  inventory_location_orders: string[];
  inventory_meter_checkpoints: string[];
}

export interface InventoryLocation {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  created_at: string;
  updated_at: string;
  folder_drive_id: number;
  inventory: number;
  backend_gateway_establishment_id: string;
  avatar_url: string;
  api_key: string;
  backend_gateway_customer_id: number;
}

export interface InventoryMeterApiKey {
  id: number;
  api_key: string;
  inventory: string;
  inventory_meter: number;
  admin_user: number;
  created_at: string;
  updated_at: string;
}

export interface InventoryMeterPhoto {
  id: number;
  file_drive_id: string;
  type?: string;
  inventory_meter: number;
  created_at: string;
  updated_at: string;
}

export interface InventoryMeterReading {
  id: number;
  date: string;
  counter: number;
  inventory_meter: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  jwt: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  token: string;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}
