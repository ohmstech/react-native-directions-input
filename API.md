# REST Resource: places

 The new Places API provides information about places across a variety of categories, such as establishments, prominent points of interest, geographic locations, and more. The new API also exposes additional functionality such as the ability to retrieve photos and reviews of a place.

## Resource: Place

All the information representing a Place.

JSON representation
`{
&#x20; "name": string,
&#x20; "id": string,
&#x20; "displayName": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "types": \[
&#x20;   string
&#x20; ],
&#x20; "primaryType": string,
&#x20; "primaryTypeDisplayName": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "nationalPhoneNumber": string,
&#x20; "internationalPhoneNumber": string,
&#x20; "formattedAddress": string,
&#x20; "shortFormattedAddress": string,
&#x20; "addressComponents": \[
&#x20;   {
&#x20;     object ([`AddressComponent`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AddressComponent))
&#x20;   }
&#x20; ],
&#x20; "plusCode": {
&#x20;   object ([`PlusCode`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#PlusCode))
&#x20; },
&#x20; "location": {
&#x20;   object ([`LatLng`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LatLng))
&#x20; },
&#x20; "viewport": {
&#x20;   object ([`Viewport`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Viewport))
&#x20; },
&#x20; "rating": number,
&#x20; "googleMapsUri": string,
&#x20; "websiteUri": string,
&#x20; "reviews": \[
&#x20;   {
&#x20;     object ([`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review))
&#x20;   }
&#x20; ],
&#x20; "regularOpeningHours": {
&#x20;   object ([`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours))
&#x20; },
&#x20; "photos": \[
&#x20;   {
&#x20;     object ([`Photo`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Photo))
&#x20;   }
&#x20; ],
&#x20; "adrFormatAddress": string,
&#x20; "businessStatus": enum ([`BusinessStatus`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#BusinessStatus)),
&#x20; "priceLevel": enum ([`PriceLevel`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#PriceLevel)),
&#x20; "attributions": \[
&#x20;   {
&#x20;     object ([`Attribution`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Attribution))
&#x20;   }
&#x20; ],
&#x20; "iconMaskBaseUri": string,
&#x20; "iconBackgroundColor": string,
&#x20; "currentOpeningHours": {
&#x20;   object ([`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours))
&#x20; },
&#x20; "currentSecondaryOpeningHours": \[
&#x20;   {
&#x20;     object ([`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours))
&#x20;   }
&#x20; ],
&#x20; "regularSecondaryOpeningHours": \[
&#x20;   {
&#x20;     object ([`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours))
&#x20;   }
&#x20; ],
&#x20; "editorialSummary": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "paymentOptions": {
&#x20;   object ([`PaymentOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#PaymentOptions))
&#x20; },
&#x20; "parkingOptions": {
&#x20;   object ([`ParkingOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#ParkingOptions))
&#x20; },
&#x20; "subDestinations": \[
&#x20;   {
&#x20;     object ([`SubDestination`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#SubDestination))
&#x20;   }
&#x20; ],
&#x20; "fuelOptions": {
&#x20;   object ([`FuelOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#FuelOptions))
&#x20; },
&#x20; "evChargeOptions": {
&#x20;   object ([`EVChargeOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#EVChargeOptions))
&#x20; },
&#x20; "generativeSummary": {
&#x20;   object ([`GenerativeSummary`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#GenerativeSummary))
&#x20; },
&#x20; "areaSummary": {
&#x20;   object ([`AreaSummary`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AreaSummary))
&#x20; },
&#x20; "utcOffsetMinutes": integer,
&#x20; "userRatingCount": integer,
&#x20; "takeout": boolean,
&#x20; "delivery": boolean,
&#x20; "dineIn": boolean,
&#x20; "curbsidePickup": boolean,
&#x20; "reservable": boolean,
&#x20; "servesBreakfast": boolean,
&#x20; "servesLunch": boolean,
&#x20; "servesDinner": boolean,
&#x20; "servesBeer": boolean,
&#x20; "servesWine": boolean,
&#x20; "servesBrunch": boolean,
&#x20; "servesVegetarianFood": boolean,
&#x20; "outdoorSeating": boolean,
&#x20; "liveMusic": boolean,
&#x20; "menuForChildren": boolean,
&#x20; "servesCocktails": boolean,
&#x20; "servesDessert": boolean,
&#x20; "servesCoffee": boolean,
&#x20; "goodForChildren": boolean,
&#x20; "allowsDogs": boolean,
&#x20; "restroom": boolean,
&#x20; "goodForGroups": boolean,
&#x20; "goodForWatchingSports": boolean,
&#x20; "accessibilityOptions": {
&#x20;   object ([`AccessibilityOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AccessibilityOptions))
&#x20; }
}`

Fields`name`

`string`

This Place's resource name, in `places/{placeId}` format. Can be used to look up the Place.

`id`

`string`

The unique identifier of a place.

`displayName`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc.

`types[]`

`string`

A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at [https://developers.google.com/maps/documentation/places/web-service/place-types](https://developers.google.com/maps/documentation/places/web-service/place-types)

`primaryType`

`string`

The primary type of the given result. This type must one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at [https://developers.google.com/maps/documentation/places/web-service/place-types](https://developers.google.com/maps/documentation/places/web-service/place-types)

`primaryTypeDisplayName`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at [https://developers.google.com/maps/documentation/places/web-service/place-types](https://developers.google.com/maps/documentation/places/web-service/place-types)

`nationalPhoneNumber`

`string`

A human-readable phone number for the place, in national format.

`internationalPhoneNumber`

`string`

A human-readable phone number for the place, in international format.

`formattedAddress`

`string`

A full, human-readable address for this place.

`shortFormattedAddress`

`string`

A short, human-readable address for this place.

`addressComponents[]`

`object (`[`AddressComponent`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AddressComponent)`)`

Repeated components for each locality level. Note the following facts about the addressComponents\[] array: - The array of address components may contain more components than the formattedAddress. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formattedAddress. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of addressComponents varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response.

`plusCode`

`object (`[`PlusCode`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#PlusCode)`)`

Plus code of the place location lat/long.

`location`

`object (`[`LatLng`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LatLng)`)`

The position of this place.

`viewport`

`object (`[`Viewport`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Viewport)`)`

A viewport suitable for displaying the place on an average-sized map.

`rating`

`number`

A rating between 1.0 and 5.0, based on user reviews of this place.

`googleMapsUri`

`string`

A URL providing more information about this place.

`websiteUri`

`string`

The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain.

`reviews[]`

`object (`[`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review)`)`

List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned.

`regularOpeningHours`

`object (`[`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours)`)`

The regular hours of operation.

`photos[]`

`object (`[`Photo`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Photo)`)`

Information (including references) about photos of this place. A maximum of 10 photos can be returned.

`adrFormatAddress`

`string`

The place's address in adr microformat: [http://microformats.org/wiki/adr](http://microformats.org/wiki/adr).

`businessStatus`

`enum (`[`BusinessStatus`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#BusinessStatus)`)`

The business status for the place.

`priceLevel`

`enum (`[`PriceLevel`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#PriceLevel)`)`

Price level of the place.

`attributions[]`

`object (`[`Attribution`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Attribution)`)`

A set of data provider that must be shown with this result.

`iconMaskBaseUri`

`string`

A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png").

`iconBackgroundColor`

`string`

Background color for icon\_mask in hex format, e.g. #909CE1.

`currentOpeningHours`

`object (`[`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours)`)`

The hours of operation for the next seven days (including today). The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. This field includes the specialDays subfield of all hours, set for dates that have exceptional hours.

`currentSecondaryOpeningHours[]`

`object (`[`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours)`)`

Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE\_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the specialDays subfield of all hours, set for dates that have exceptional hours.

`regularSecondaryOpeningHours[]`

`object (`[`OpeningHours`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#OpeningHours)`)`

Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE\_THROUGH, PICKUP, or TAKEOUT) based on the types of the place.

`editorialSummary`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered.

`paymentOptions`

`object (`[`PaymentOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#PaymentOptions)`)`

Payment options the place accepts. If a payment option data is not available, the payment option field will be unset.

`parkingOptions`

`object (`[`ParkingOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#ParkingOptions)`)`

Options of parking provided by the place.

`subDestinations[]`

`object (`[`SubDestination`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#SubDestination)`)`

A list of sub destinations related to the place.

`fuelOptions`

`object (`[`FuelOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#FuelOptions)`)`

The most recent information about fuel options in a gas station. This information is updated regularly.

`evChargeOptions`

`object (`[`EVChargeOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#EVChargeOptions)`)`

Information of ev charging options.

`generativeSummary`

`object (`[`GenerativeSummary`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#GenerativeSummary)`)`

Experimental: See [https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative](https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative) for more details.

AI-generated summary of the place.

`areaSummary`

`object (`[`AreaSummary`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AreaSummary)`)`

Experimental: See [https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative](https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative) for more details.

AI-generated summary of the area that the place is in.

`utcOffsetMinutes`

`integer`

Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.

`userRatingCount`

`integer`

The total number of reviews (with or without text) for this place.

`takeout`

`boolean`

Specifies if the business supports takeout.

`delivery`

`boolean`

Specifies if the business supports delivery.

`dineIn`

`boolean`

Specifies if the business supports indoor or outdoor seating options.

`curbsidePickup`

`boolean`

Specifies if the business supports curbside pickup.

`reservable`

`boolean`

Specifies if the place supports reservations.

`servesBreakfast`

`boolean`

Specifies if the place serves breakfast.

`servesLunch`

`boolean`

Specifies if the place serves lunch.

`servesDinner`

`boolean`

Specifies if the place serves dinner.

`servesBeer`

`boolean`

Specifies if the place serves beer.

`servesWine`

`boolean`

Specifies if the place serves wine.

`servesBrunch`

`boolean`

Specifies if the place serves brunch.

`servesVegetarianFood`

`boolean`

Specifies if the place serves vegetarian food.

`outdoorSeating`

`boolean`

Place provides outdoor seating.

`liveMusic`

`boolean`

Place provides live music.

`menuForChildren`

`boolean`

Place has a children's menu.

`servesCocktails`

`boolean`

Place serves cocktails.

`servesDessert`

`boolean`

Place serves dessert.

`servesCoffee`

`boolean`

Place serves coffee.

`goodForChildren`

`boolean`

Place is good for children.

`allowsDogs`

`boolean`

Place allows dogs.

`restroom`

`boolean`

Place has restroom.

`goodForGroups`

`boolean`

Place accommodates groups.

`goodForWatchingSports`

`boolean`

Place is suitable for watching sports.

`accessibilityOptions`

`object (`[`AccessibilityOptions`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AccessibilityOptions)`)`

Information about the accessibility options a place offers.

## LocalizedText

Localized variant of a text in a particular language.

JSON representation{
&#x20; "text": string,
&#x20; "languageCode": string
}Fields`text`

`string`

Localized string in the language corresponding to [`languageCode`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText.FIELDS.language_code) below.

`languageCode`

`string`

The text's BCP-47 language code, such as "en-US" or "sr-Latn".

For more information, see [http://www.unicode.org/reports/tr35/#Unicode\_locale\_identifier](http://www.unicode.org/reports/tr35/#Unicode_locale_identifier).

## AddressComponent

The structured components that form the formatted address, if this information is available.

JSON representation{
&#x20; "longText": string,
&#x20; "shortText": string,
&#x20; "types": \[
&#x20;   string
&#x20; ],
&#x20; "languageCode": string
}Fields`longText`

`string`

The full text description or name of the address component. For example, an address component for the country Australia may have a long\_name of "Australia".

`shortText`

`string`

An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short\_name of "AU".

`types[]`

`string`

An array indicating the type(s) of the address component.

`languageCode`

`string`

The language used to format this components, in CLDR notation.

## PlusCode

Plus code ([http://plus.codes](http://plus.codes/)) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.

JSON representation{
&#x20; "globalCode": string,
&#x20; "compoundCode": string
}Fields`globalCode`

`string`

Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (\~14 by 14 meters).

`compoundCode`

`string`

Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.

## LatLng

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the [WGS84 standard](https://en.wikipedia.org/wiki/World_Geodetic_System#1984_version). Values must be within normalized ranges.

JSON representation{
&#x20; "latitude": number,
&#x20; "longitude": number
}Fields`latitude`

`number`

The latitude in degrees. It must be in the range \[-90.0, +90.0].

`longitude`

`number`

The longitude in degrees. It must be in the range \[-180.0, +180.0].

## Viewport

A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include:

* If `low` = `high`, the viewport consists of that single point.
* If `low.longitude` > `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line).
* If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes.
* If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty.
* If `low.latitude` > `high.latitude`, the latitude range is empty.

Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error.

For example, this viewport fully encloses New York City:

{ "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } }

JSON representation{
&#x20; "low": {
&#x20;   object ([`LatLng`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LatLng))
&#x20; },
&#x20; "high": {
&#x20;   object ([`LatLng`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LatLng))
&#x20; }
}Fields`low`

`object (`[`LatLng`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LatLng)`)`

Required. The low point of the viewport.

`high`

`object (`[`LatLng`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LatLng)`)`

Required. The high point of the viewport.

## Review

Information about a review of a place.

JSON representation{
&#x20; "name": string,
&#x20; "relativePublishTimeDescription": string,
&#x20; "text": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "originalText": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "rating": number,
&#x20; "authorAttribution": {
&#x20;   object ([`AuthorAttribution`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AuthorAttribution))
&#x20; },
&#x20; "publishTime": string
}Fields`name`

`string`

A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: `places/{placeId}/reviews/{review}`).

`relativePublishTimeDescription`

`string`

A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country.

`text`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

The localized text of the review.

`originalText`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

The review text in its original language.

`rating`

`number`

A number between 1.0 and 5.0, also called the number of stars.

`authorAttribution`

`object (`[`AuthorAttribution`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AuthorAttribution)`)`

This review's author.

`publishTime`

`string (`[`Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp)` format)`

Timestamp for the review.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: `"2014-10-02T15:01:23Z"` and `"2014-10-02T15:01:23.045123456Z"`.

## AuthorAttribution

Information about the author of the UGC data. Used in [`Photo`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Photo), and [`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review).

JSON representation{
&#x20; "displayName": string,
&#x20; "uri": string,
&#x20; "photoUri": string
}Fields`displayName`

`string`

Name of the author of the [`Photo`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Photo) or [`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review).

`uri`

`string`

URI of the author of the [`Photo`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Photo) or [`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review).

`photoUri`

`string`

Profile photo URI of the author of the [`Photo`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Photo) or [`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review).

## OpeningHours

Information about business hour of the place.

JSON representation{
&#x20; "periods": \[
&#x20;   {
&#x20;     object ([`Period`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Period))
&#x20;   }
&#x20; ],
&#x20; "weekdayDescriptions": \[
&#x20;   string
&#x20; ],
&#x20; "secondaryHoursType": enum ([`SecondaryHoursType`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#SecondaryHoursType)),
&#x20; "specialDays": \[
&#x20;   {
&#x20;     object ([`SpecialDay`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#SpecialDay))
&#x20;   }
&#x20; ],
&#x20; "openNow": boolean
}Fields`periods[]`

`object (`[`Period`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Period)`)`

The periods that this place is open during the week. The periods are in chronological order, starting with Sunday in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations.

`weekdayDescriptions[]`

`string`

Localized strings describing the opening hours of this place, one string for each day of the week. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00"

`secondaryHoursType`

`enum (`[`SecondaryHoursType`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#SecondaryHoursType)`)`

A type string used to identify the type of secondary hours.

`specialDays[]`

`object (`[`SpecialDay`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#SpecialDay)`)`

Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for currentOpeningHours and currentSecondaryOpeningHours if there are exceptional hours.

`openNow`

`boolean`

Is this place open right now? Always present unless we lack time-of-day or timezone data for these opening hours.

## Period

A period the place remains in openNow status.

JSON representation{
&#x20; "open": {
&#x20;   object ([`Point`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point))
&#x20; },
&#x20; "close": {
&#x20;   object ([`Point`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point))
&#x20; }
}Fields`open`

`object (`[`Point`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point)`)`

The time that the place starts to be open.

`close`

`object (`[`Point`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point)`)`

The time that the place starts to be closed.

## Point

Status changing points.

JSON representation{
&#x20; "date": {
&#x20;   object ([`Date`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Date))
&#x20; },
&#x20; "truncated": boolean,
&#x20; "day": integer,
&#x20; "hour": integer,
&#x20; "minute": integer
}Fields`date`

`object (`[`Date`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Date)`)`

Date in the local timezone for the place.

`truncated`

`boolean`

Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 \* 7 hours from midnight of the day of the request are returned.

`day`

`integer`

A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.

`hour`

`integer`

The hour in 2 digits. Ranges from 00 to 23.

`minute`

`integer`

The minute in 2 digits. Ranges from 00 to 59.

## Date

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:

* A full date, with non-zero year, month, and day values.
* A month and day, with a zero year (for example, an anniversary).
* A year on its own, with a zero month and a zero day.
* A year and month, with a zero day (for example, a credit card expiration date).

Related types:

* `google.type.TimeOfDay`
* `google.type.DateTime`
* [`google.protobuf.Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp)

JSON representation{
&#x20; "year": integer,
&#x20; "month": integer,
&#x20; "day": integer
}Fields`year`

`integer`

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

`month`

`integer`

Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.

`day`

`integer`

Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

## SecondaryHoursType

A type used to identify the type of secondary hours.

Enums`SECONDARY_HOURS_TYPE_UNSPECIFIED`Default value when secondary hour type is not specified.`DRIVE_THROUGH`The drive-through hour for banks, restaurants, or pharmacies.`HAPPY_HOUR`The happy hour.`DELIVERY`The delivery hour.`TAKEOUT`The takeout hour.`KITCHEN`The kitchen hour.`BREAKFAST`The breakfast hour.`LUNCH`The lunch hour.`DINNER`The dinner hour.`BRUNCH`The brunch hour.`PICKUP`The pickup hour.`ACCESS`The access hours for storage places.`SENIOR_HOURS`The special hours for seniors.`ONLINE_SERVICE_HOURS`The online service hours.

## SpecialDay

Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day.

JSON representation{
&#x20; "date": {
&#x20;   object ([`Date`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Date))
&#x20; }
}Fields`date`

`object (`[`Date`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Date)`)`

The date of this special day.

## Photo

Information about a photo of a place.

JSON representation{
&#x20; "name": string,
&#x20; "widthPx": integer,
&#x20; "heightPx": integer,
&#x20; "authorAttributions": \[
&#x20;   {
&#x20;     object ([`AuthorAttribution`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AuthorAttribution))
&#x20;   }
&#x20; ]
}Fields`name`

`string`

Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: `places/{placeId}/photos/{photo}`).

`widthPx`

`integer`

The maximum available width, in pixels.

`heightPx`

`integer`

The maximum available height, in pixels.

`authorAttributions[]`

`object (`[`AuthorAttribution`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#AuthorAttribution)`)`

This photo's authors.

## BusinessStatus

Business status for the place.

Enums`BUSINESS_STATUS_UNSPECIFIED`Default value. This value is unused.`OPERATIONAL`The establishment is operational, not necessarily open now.`CLOSED_TEMPORARILY`The establishment is temporarily closed.`CLOSED_PERMANENTLY`The establishment is permanently closed.

## PriceLevel

Price level of the place.

Enums`PRICE_LEVEL_UNSPECIFIED`Place price level is unspecified or unknown.`PRICE_LEVEL_FREE`Place provides free services.`PRICE_LEVEL_INEXPENSIVE`Place provides inexpensive services.`PRICE_LEVEL_MODERATE`Place provides moderately priced services.`PRICE_LEVEL_EXPENSIVE`Place provides expensive services.`PRICE_LEVEL_VERY_EXPENSIVE`Place provides very expensive services.

## Attribution

Information about data providers of this place.

JSON representation{
&#x20; "provider": string,
&#x20; "providerUri": string
}Fields`provider`

`string`

Name of the Place's data provider.

`providerUri`

`string`

URI to the Place's data provider.

## PaymentOptions

Payment options the place accepts.

JSON representation{
&#x20; "acceptsCreditCards": boolean,
&#x20; "acceptsDebitCards": boolean,
&#x20; "acceptsCashOnly": boolean,
&#x20; "acceptsNfc": boolean
}Fields`acceptsCreditCards`

`boolean`

Place accepts credit cards as payment.

`acceptsDebitCards`

`boolean`

Place accepts debit cards as payment.

`acceptsCashOnly`

`boolean`

Place accepts cash only as payment. Places with this attribute may still accept other payment methods.

`acceptsNfc`

`boolean`

Place accepts NFC payments.

## ParkingOptions

Information about parking options for the place. A parking lot could support more than one option at the same time.

JSON representation{
&#x20; "freeParkingLot": boolean,
&#x20; "paidParkingLot": boolean,
&#x20; "freeStreetParking": boolean,
&#x20; "paidStreetParking": boolean,
&#x20; "valetParking": boolean,
&#x20; "freeGarageParking": boolean,
&#x20; "paidGarageParking": boolean
}Fields`freeParkingLot`

`boolean`

Place offers free parking lots.

`paidParkingLot`

`boolean`

Place offers paid parking lots.

`freeStreetParking`

`boolean`

Place offers free street parking.

`paidStreetParking`

`boolean`

Place offers paid street parking.

`valetParking`

`boolean`

Place offers valet parking.

`freeGarageParking`

`boolean`

Place offers free garage parking.

`paidGarageParking`

`boolean`

Place offers paid garage parking.

## SubDestination

Place resource name and id of sub destinations that relate to the place. For example, different terminals are different destinations of an airport.

JSON representation{
&#x20; "name": string,
&#x20; "id": string
}Fields`name`

`string`

The resource name of the sub destination.

`id`

`string`

The place id of the sub destination.

## AccessibilityOptions

Information about the accessibility options a place offers.

JSON representation{
&#x20; "wheelchairAccessibleParking": boolean,
&#x20; "wheelchairAccessibleEntrance": boolean,
&#x20; "wheelchairAccessibleRestroom": boolean,
&#x20; "wheelchairAccessibleSeating": boolean
}Fields`wheelchairAccessibleParking`

`boolean`

Place offers wheelchair accessible parking.

`wheelchairAccessibleEntrance`

`boolean`

Places has wheelchair accessible entrance.

`wheelchairAccessibleRestroom`

`boolean`

Place has wheelchair accessible restroom.

`wheelchairAccessibleSeating`

`boolean`

Place has wheelchair accessible seating.

## FuelOptions

The most recent information about fuel options in a gas station. This information is updated regularly.

JSON representation{
&#x20; "fuelPrices": \[
&#x20;   {
&#x20;     object ([`FuelPrice`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#FuelPrice))
&#x20;   }
&#x20; ]
}Fields`fuelPrices[]`

`object (`[`FuelPrice`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#FuelPrice)`)`

The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important.

## FuelPrice

Fuel price information for a given type.

JSON representation{
&#x20; "type": enum ([`FuelType`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#FuelType)),
&#x20; "price": {
&#x20;   object ([`Money`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Money))
&#x20; },
&#x20; "updateTime": string
}Fields`type`

`enum (`[`FuelType`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#FuelType)`)`

The type of fuel.

`price`

`object (`[`Money`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Money)`)`

The price of the fuel.

`updateTime`

`string (`[`Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp)` format)`

The time the fuel price was last updated.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: `"2014-10-02T15:01:23Z"` and `"2014-10-02T15:01:23.045123456Z"`.

## FuelType

Types of fuel.

Enums`FUEL_TYPE_UNSPECIFIED`Unspecified fuel type.`DIESEL`Diesel fuel.`REGULAR_UNLEADED`Regular unleaded.`MIDGRADE`Midgrade.`PREMIUM`Premium.`SP91`SP 91.`SP91_E10`SP 91 E10.`SP92`SP 92.`SP95`SP 95.`SP95_E10`SP95 E10.`SP98`SP 98.`SP99`SP 99.`SP100`SP 100.`LPG`LPG.`E80`E 80.`E85`E 85.`METHANE`Methane.`BIO_DIESEL`Bio-diesel.`TRUCK_DIESEL`Truck diesel.

## Money

Represents an amount of money with its currency type.

JSON representation{
&#x20; "currencyCode": string,
&#x20; "units": string,
&#x20; "nanos": integer
}Fields`currencyCode`

`string`

The three-letter currency code defined in ISO 4217.

`units`

`string (`[`int64`](https://developers.google.com/discovery/v1/type-format)` format)`

The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.

`nanos`

`integer`

Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.

## EVChargeOptions

Information about the EV Charge Station hosted in Place. Terminology follows [https://afdc.energy.gov/fuels/electricity\_infrastructure.html](https://afdc.energy.gov/fuels/electricity_infrastructure.html) One port could charge one car at a time. One port has one or more connectors. One station has one or more ports.

JSON representation{
&#x20; "connectorCount": integer,
&#x20; "connectorAggregation": \[
&#x20;   {
&#x20;     object ([`ConnectorAggregation`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#ConnectorAggregation))
&#x20;   }
&#x20; ]
}Fields`connectorCount`

`integer`

Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.

`connectorAggregation[]`

`object (`[`ConnectorAggregation`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#ConnectorAggregation)`)`

A list of EV charging connector aggregations that contain connectors of the same type and same charge rate.

## ConnectorAggregation

EV charging information grouped by \[type, maxChargeRateKw]. Shows EV charge aggregation of connectors that have the same type and max charge rate in kw.

JSON representation{
&#x20; "type": enum ([`EVConnectorType`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#EVConnectorType)),
&#x20; "maxChargeRateKw": number,
&#x20; "count": integer,
&#x20; "availabilityLastUpdateTime": string,
&#x20; "availableCount": integer,
&#x20; "outOfServiceCount": integer
}Fields`type`

`enum (`[`EVConnectorType`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#EVConnectorType)`)`

The connector type of this aggregation.

`maxChargeRateKw`

`number`

The static max charging rate in kw of each connector in the aggregation.

`count`

`integer`

Number of connectors in this aggregation.

`availabilityLastUpdateTime`

`string (`[`Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp)` format)`

The timestamp when the connector availability information in this aggregation was last updated.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: `"2014-10-02T15:01:23Z"` and `"2014-10-02T15:01:23.045123456Z"`.

`availableCount`

`integer`

Number of connectors in this aggregation that are currently available.

`outOfServiceCount`

`integer`

Number of connectors in this aggregation that are currently out of service.

## EVConnectorType

See [http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6872107](http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6872107) for additional information/context on EV charging connector types.

Enums`EV_CONNECTOR_TYPE_UNSPECIFIED`Unspecified connector.`EV_CONNECTOR_TYPE_OTHER`Other connector types.`EV_CONNECTOR_TYPE_J1772`J1772 type 1 connector.`EV_CONNECTOR_TYPE_TYPE_2`IEC 62196 type 2 connector. Often referred to as MENNEKES.`EV_CONNECTOR_TYPE_CHADEMO`CHAdeMO type connector.`EV_CONNECTOR_TYPE_CCS_COMBO_1`Combined Charging System (AC and DC). Based on SAE. Type-1 J-1772 connector`EV_CONNECTOR_TYPE_CCS_COMBO_2`Combined Charging System (AC and DC). Based on Type-2 Mennekes connector`EV_CONNECTOR_TYPE_TESLA`The generic TESLA connector. This is NACS in the North America but can be non-NACS in other parts of the world (e.g. CCS Combo 2 (CCS2) or GB/T). This value is less representative of an actual connector type, and more represents the ability to charge a Tesla brand vehicle at a Tesla owned charging station.`EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T`GB/T type corresponds to the GB/T standard in China. This type covers all GB\_T types.`EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET`Unspecified wall outlet.

## GenerativeSummary

Experimental: See [https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative](https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative) for more details.

AI-generated summary of the place.

JSON representation{
&#x20; "overview": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "description": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "references": {
&#x20;   object ([`References`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#References))
&#x20; }
}Fields`overview`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

The overview of the place.

`description`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

The detailed description of the place.

`references`

`object (`[`References`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#References)`)`

References that are used to generate the summary description.

## References

Experimental: See [https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative](https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative) for more details.

Reference that the generative content is related to.

JSON representation{
&#x20; "reviews": \[
&#x20;   {
&#x20;     object ([`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review))
&#x20;   }
&#x20; ],
&#x20; "places": \[
&#x20;   string
&#x20; ]
}Fields`reviews[]`

`object (`[`Review`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Review)`)`

Reviews that serve as references.

`places[]`

`string`

The list of resource names of the referenced places. This name can be used in other APIs that accept Place resource names.

## AreaSummary

Experimental: See [https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative](https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative) for more details.

AI-generated summary of the area that the place is in.

JSON representation{
&#x20; "contentBlocks": \[
&#x20;   {
&#x20;     object ([`ContentBlock`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#ContentBlock))
&#x20;   }
&#x20; ]
}Fields`contentBlocks[]`

`object (`[`ContentBlock`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#ContentBlock)`)`

Content blocks that compose the area summary. Each block has a separate topic about the area.

## ContentBlock

A block of content that can be served individually.

JSON representation{
&#x20; "topic": string,
&#x20; "content": {
&#x20;   object ([`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText))
&#x20; },
&#x20; "references": {
&#x20;   object ([`References`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#References))
&#x20; }
}Fields`topic`

`string`

The topic of the content, for example "overview" or "restaurant".

`content`

`object (`[`LocalizedText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#LocalizedText)`)`

Content related to the topic.

`references`

`object (`[`References`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#References)`)`

Experimental: See [https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative](https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative) for more details.

References that are related to this block of content.

## Methods

### [`autocomplete`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/autocomplete)

Returns predictions for the given input.

### [`get`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/get)

Get the details of a place based on its resource name, which is a string in the `places/{place_id}` format.

### [`searchNearby`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchNearby)

Search for places near locations.

### [`searchText`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText)

Text query based place search.


## `autocomplete`
`
// curl -X POST -d '{
//   "input": "pizza",
//   "locationBias": {
//     "circle": {
//       "center": {
//         "latitude": 37.7937,
//         "longitude": -122.3965
//       },
//       "radius": 500.0
//     },
// "rectangle": {
//     "low": {
//       "latitude": 40.477398,
//       "longitude": -74.259087
//     },
//     "high": {
//       "latitude": 40.91618,
//       "longitude": -73.70018
//     }
//   }
//   },
// "includedRegionCodes": ["de", "fr"]
// }' \
// -H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY" \
// https://places.googleapis.com/v1/places:autocomplete

// {
//   "suggestions": [
//     {
//       "placePrediction": {
//         "place": "places/ChIJ5YQQf1GHhYARPKG7WLIaOko",
//         "placeId": "ChIJ5YQQf1GHhYARPKG7WLIaOko",
//         "text": {
//           "text": "Amoeba Music, Haight Street, San Francisco, CA, USA",
//           "matches": [
//             {
//               "endOffset": 6
//             }]
//         },
//       ...
//     },
//     {
//       "queryPrediction": {
//         "text": {
//           "text": "Amoeba Music",
//           "matches": [
//             {
//               "endOffset": 6
//             }]
//         },
//         ...
//     }
//   ...]
// }
`
