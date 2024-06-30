import axios, { type AxiosInstance } from 'axios';

const BASE_URL = 'https://places.googleapis.com/v1/places';

export interface AutoCompleteRequest {
  /**
   * The input text for which to return place predictions.
   */
  input: string;
  /**
   * Location for prediction biasing. Predictions will be biased towards the given location and radius.
   */
  locationBias?: {
    circle?: {
      center: {
        latitude: number;
        longitude: number;
      };
      radius: number;
    };
    rectangle?: {
      low: {
        latitude: number;
        longitude: number;
      };
      high: {
        latitude: number;
        longitude: number;
      };
    };
  };
  /**
   * The ISO 3166-1 Alpha-2 country code bias. This code will only be used for biasing prediction results.
   */
  includedRegionCodes?: string[];
}

export interface AutoCompleteResponse {
  suggestions: Array<{
    placePrediction?: {
      place: string;
      placeId: string;
      text: {
        text: string;
        matches: Array<{
          endOffset: number;
        }>;
      };
    };
    queryPrediction?: {
      text: {
        text: string;
        matches: Array<{
          endOffset: number;
        }>;
      };
    };
  }>;
}

export type PlaceSuggestions = AutoCompleteResponse['suggestions'];
/**
 * A Place represents a location with a name and a set of optional details.
 */
export interface GooglePlace {
  name: string;
  id: string;
  displayName: {
    text: string;
    languageCode: string;
  };
  types: string[];
  primaryType: string;
  primaryTypeDisplayName: {
    text: string;
    languageCode: string;
  };
  nationalPhoneNumber: string;
  internationalPhoneNumber: string;
  formattedAddress: string;
  shortFormattedAddress: string;
  addressComponents: {
    longText: string;
    shortText: string;
    types: string[];
    languageCode: string;
  }[];
  plusCode: {
    globalCode: string;
    compoundCode: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  viewport: {
    low: {
      latitude: number;
      longitude: number;
    };
    high: {
      latitude: number;
      longitude: number;
    };
  };
  rating: number;
  googleMapsUri: string;
  websiteUri: string;
  reviews: { text: string; rating: number }[];
  regularOpeningHours: {
    periods: {
      open: {
        day: number;
        time: string;
      };
      close: {
        day: number;
        time: string;
      };
    }[];
    timeZone: string;
  };
  photos: {
    photoReference: string;
    height: number;
    width: number;
  }[];
  adrFormatAddress: string;
  businessStatus: string;
  priceLevel: string;
  attributions: string[];
  iconMaskBaseUri: string;
  iconBackgroundColor: string;
  currentOpeningHours: {
    periods: {
      open: {
        day: number;
        time: string;
      };
      close: {
        day: number;
        time: string;
      };
    }[];
    timeZone: string;
  };
  currentSecondaryOpeningHours: {
    periods: {
      open: {
        day: number;
        time: string;
      };
      close: {
        day: number;
        time: string;
      };
    }[];
    timeZone: string;
  }[];
  regularSecondaryOpeningHours: {
    periods: {
      open: {
        day: number;
        time: string;
      };
      close: {
        day: number;
        time: string;
      };
    }[];
    timeZone: string;
  }[];
  editorialSummary: {
    localized: string;
  };
  paymentOptions: {
    cash: boolean;
    creditCard: boolean;
    debitCard: boolean;
    mobilePayments: boolean;
    cashOnly: boolean;
  };
  parkingOptions: {
    street: boolean;
    lot: boolean;
    valet: boolean;
    garage: boolean;
    validated: boolean;
  };
  subDestinations: {
    name: string;
    placeId: string;
  }[];
  fuelOptions: {
    octaneRating: string;
    fuelType: string;
    ethanolPercentage: string;
  };
  evChargeOptions: {
    evNetwork: string;
    evLevel: string;
  };
  generativeSummary: {
    text: string;
    languageCode: string;
  };
  areaSummary: {
    text: string;
    languageCode: string;
  };
  utcOffsetMinutes: number;
  userRatingCount: number;
  takeout: boolean;
  delivery: boolean;
  dineIn: boolean;
  curbsidePickup: boolean;
  reservable: boolean;
  servesBreakfast: boolean;
  servesLunch: boolean;
  servesDinner: boolean;
  servesBeer: boolean;
  servesWine: boolean;
  servesBrunch: boolean;
  servesVegetarianFood: boolean;
  outdoorSeating: boolean;
  liveMusic: boolean;
  menuForChildren: boolean;
  servesCocktails: boolean;
  servesDessert: boolean;
  servesCoffee: boolean;
  goodForChildren: boolean;
  allowsDogs: boolean;
  restroom: boolean;
  goodForGroups: boolean;
  goodForWatchingSports: boolean;
  accessibilityOptions: {
    wheelchairAccessible: boolean;
    wheelchairInaccessible: boolean;
    wheelchairElevator: boolean;
    wheelchairRamp: boolean;
    wheelchairParking: boolean;
    wheelchairRestroom: boolean;
    wheelchairSeating: boolean;
    wheelchairSignLanguage: boolean;
    wheelchairAudioAssistance: boolean;
    wheelchairBrailleMenu: boolean;
  };
}

class GooglePlacesApi {
  /**
   *
   */
  constructor(API_KEY: string) {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
      },
    });
  }
  client: AxiosInstance;

  async autoComplete(request: AutoCompleteRequest) {
    if (request.input.length < 3) {
      return { suggestions: [] }; // Return empty array if input is less than 3 characters
    }
    const response = await this.client.post<AutoCompleteResponse>(
      ':autocomplete',
      request
    );
    return response.data;
  }
  /**
   * Get place details by placeId. Returns only the fields specified in the fields parameter.
   * Default fields are: id, displayName, location. Use * to get all fields.
   * @param placeId - Place ID
   * @param fields - Array of fields to return
   * @returns
   */
  async getPlaceDetails(
    placeId: string,
    fields: string[] = ['id', 'displayName', 'location', 'formattedAddress']
  ) {
    const response = await this.client.get<GooglePlace>(`/${placeId}`, {
      headers: {
        'X-Goog-FieldMask': fields.join(','),
      },
    });
    return response.data;
  }
}

export default GooglePlacesApi;
