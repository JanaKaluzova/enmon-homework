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
  inventory_location_building: any;
  building_floor: number;
  manufactured: any;
  calibrated: any;
  meter_model: any;
  backend_gateway_meter_id: string;
  is_direct: any;
  measuring_current_transformer: any;
  is_submeter: boolean;
  orientation: any;
  q_max: number;
  q_min: any;
  resistance: any;
  installation_position: any;
  inventory_meter_api_key: InventoryMeterApiKey;
  submitted_at: string;
  submitted_by: string;
  unit: string;
  g_size: any;
  p_max: number;
  meter_mount_type: any;
  remote_reading_owner: any;
  floorplan_lat: any;
  floorplan_lng: any;
  code: any;
  factor: any;
  data_source_id: any;
  initial_offset: any;
  device_category: any;
  data_source_channel: any;
  installed_at: any;
  installed_by: any;
  owner_type: any;
  new_meter: boolean;
  submeter: boolean;
  remote_reading_serial: any;
  inventory_meter_photos: InventoryMeterPhoto[];
  inventory_meter_reading: InventoryMeterReading[];
  inventory_location_orders: any[];
  inventory_meter_checkpoints: any[];
}

export interface InventoryLocation {
  id: number;
  name: string;
  address: any;
  lat: any;
  lng: any;
  created_at: string;
  updated_at: string;
  folder_drive_id: string;
  inventory: number;
  backend_gateway_establishment_id: string;
  avatar_url: any;
  api_key: string;
  backend_gateway_customer_id: any;
}

export interface InventoryMeterApiKey {
  id: number;
  api_key: string;
  inventory: any;
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
  counter: any;
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
