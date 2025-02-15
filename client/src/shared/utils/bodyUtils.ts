import { IAdvertisement } from "../types/IAdvertisement";

export function getBody(item: IAdvertisement) {
  let body: IAdvertisement = {
    id: item.id,
    name: item.name,
    description: item.description,
    location: item.location,
    type: item.type,
  };

  if (item.type.value === "Недвижимость") {
    body = {
      ...body,
      propertyType: item.propertyType,
      area: item.area,
      rooms: item.rooms,
      price: item.price,
    };
  }

  if (item.type.value === "Авто") {
    body = {
      ...body,
      brand: item.brand,
      model: item.model,
      year: item.year,
      mileage: item.mileage,
    };
  }

  if (item.type.value === "Услуги") {
    body = {
      ...body,
      serviceType: item.serviceType,
      experience: item.experience,
      cost: item.cost,
      workSchedule: item.workSchedule,
    };
  }

  return body;
}
