import axios from 'axios';
const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
type BaseParams = {
  apiKey: string;
};
/**
 * Geocode an address
 * @returns
 */
export const geocodeAddress = async ({
  address,
  apiKey,
}: BaseParams & { address: string }) => {
  const url = `${BASE_URL}?address=${address}&key=${apiKey}`;
  const { data } = await axios.get<GeocodeResponse>(url);
  return data;
};
/**
 * Reverse geocode a location
 * @returns
 */
export const reverseGeocode = async ({
  lat,
  lng,
  apiKey,
}: BaseParams & { lat: number; lng: number }) => {
  const url = `${BASE_URL}?latlng=${lat},${lng}&key=${apiKey}`;
  const { data } = await axios.get<ReverseGeocodeResponse>(url);
  return data;
};

export interface ReverseGeocodeResponse {
  results: Array<{
    address_components: Array<AddressComponent>;
    formatted_address: string;
    geometry: Geometry;
    partial_match: boolean;
    place_id: string;
    types: Array<string>;
  }>;
}

export interface GeocodeResponse {
  results: Array<{
    address_components: Array<AddressComponent>;
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    types: Array<string>;
  }>;
  status: string;
}

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: Array<string>;
};

type Geometry = {
  location: {
    lat: number;
    lng: number;
  };
  location_type: string;
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
};
