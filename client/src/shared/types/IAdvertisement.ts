export interface IAdvertisement {
  id?: number | string;
  name: string;
  description: string;
  location: string;
  photo?: string;
  type: { value: string; label: string };
  propertyType?: { value: string; label: string };
  area?: number;
  rooms?: number;
  price?: number;
  brand?: { value: string; label: string };
  model?: string;
  year?: number;
  mileage?: number;
  serviceType?: { value: string; label: string };
  experience?: number;
  cost?: number;
  workSchedule?: number;
}
