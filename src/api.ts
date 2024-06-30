import axios from 'axios';
export type PlacesResponses = {
  predictions: Array<{
    description: string;
    matched_substrings: Array<{
      length: number;
      offset: number;
    }>;
    place_id: string;
    reference: string;
    structured_formatting: {
      main_text: string;
      main_text_matched_substrings: Array<{
        length: number;
        offset: number;
      }>;
      secondary_text: string;
    };
    terms: Array<{
      offset: number;
      value: string;
    }>;
    types: Array<string>;
  }>;
  status: string;
};

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeometryLocation {
  lat: number;
  lng: number;
}

interface Viewport {
  northeast: GeometryLocation;
  southwest: GeometryLocation;
}

interface OpeningHoursPeriod {
  open: { day: number; time: string };
  close: { day: number; time: string };
}

interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface Review {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceDetails {
  address_components: AddressComponent[];
  adr_address: string;
  business_status: string;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: {
    location: GeometryLocation;
    viewport: Viewport;
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  international_phone_number: string;
  name: string;
  opening_hours: {
    open_now: boolean;
    periods: OpeningHoursPeriod[];
    weekday_text: string[];
  };
  photos: Photo[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  reviews: Review[];
  types: string[];
  url: string;
  utc_offset: number;
  vicinity: string;
  website: string;
  permanently_closed: boolean;
}

const PLACES_API =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json';

/**
 * Get places from Google Places API
 * @param apiKey
 * @param query
 * @returns
 */
export const getPlaces = async (
  apiKey: string,
  query: string
): Promise<PlacesResponses | undefined> => {
  try {
    const response = await axios.get<PlacesResponses>(
      `${PLACES_API}?key=${apiKey}&input=${query}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

/**
 * Get place details from Google Places API
 * @param apiKey
 * @param placeId
 * @param fields - Fields to include in the response (default: all). You can find the list of fields here: https://developers.google.com/maps/documentation/places/web-service/place-data-fields
 * @returns
 */
export const getPlaceDetails = async (
  apiKey: string,
  placeId: string,
  fields: string[] = []
): Promise<GooglePlaceDetails | undefined> => {
  try {
    const fieldsQuery = fields.length ? `&fields=${fields.join(',')}` : '';
    const response = await axios.get<GooglePlaceDetails>(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}${fieldsQuery}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

/**
 * List of fields to include in the response
 */
export const PLACEDATA_FIELD = {
  address_component: 'address_component',
  adr_address: 'adr_address',
  business_status: 'business_status',
  formatted_address: 'formatted_address',
  formatted_phone_number: 'formatted_phone_number',
  geometry: 'geometry',
  icon: 'icon',
  icon_background_color: 'icon_background_color',
  icon_mask_base_uri: 'icon_mask_base_uri',
  international_phone_number: 'international_phone_number',
  name: 'name',
  opening_hours: 'opening_hours',
  photos: 'photos',
  place_id: 'place_id',
  plus_code: 'plus_code',
  rating: 'rating',
  reference: 'reference',
  reviews: 'reviews',
  types: 'types',
  url: 'url',
  utc_offset: 'utc_offset',
  vicinity: 'vicinity',
  website: 'website',
  permanently_closed: 'permanently_closed',
};
