import { ServiceData } from "../services";

const getRelatedService = (currentSlug: string, allServices: ServiceData[]) => {
  return allServices.filter((service) => service.slug !== currentSlug).slice(0, 3);
};

export default getRelatedService;