import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  type StyleSheetProperties
} from 'react-native';
import { debounce } from 'lodash';
import GooglePlacesApi, {
  type GooglePlace,
  type PlaceSuggestions,
} from './api.new';
import { SvgXml } from 'react-native-svg';
import OutsidePressHandler, { EventProvider } from 'react-native-outside-press';

type DirectionsInputProps = {
  apiKey: string;
  onOriginChange: (place: GooglePlace) => void;
  onDestinationChange: (place: GooglePlace) => void;
  inputStyle?: StyleSheetProperties;
  suggestionStyle?: StyleSheetProperties;
};
/**
 * Google Places Directions Input
 * @param
 * @returns
 */
export const DirectionsInput: React.FC<DirectionsInputProps> = ({
  apiKey,
  inputStyle,
  suggestionStyle,
  onOriginChange,
  onDestinationChange,
}) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState<PlaceSuggestions>(
    []
  );
  const [destinationSuggestions, setDestinationSuggestions] =
    useState<PlaceSuggestions>([]);

  const placeClient = useMemo(() => new GooglePlacesApi(apiKey), [apiKey]);

  const handleAutoComplete = useCallback(
    async (query: string): Promise<PlaceSuggestions> => {
      const autocomplete = await placeClient.autoComplete({ input: query });
      return autocomplete.suggestions;
    },
    [placeClient]
  );

  const debouncedAutoComplete = useMemo(
    () => debounce(handleAutoComplete, 300),
    [handleAutoComplete]
  );

  const handleInputChange = useCallback(
    async (query: string, isOrigin: boolean) => {
      const setter = isOrigin ? setOrigin : setDestination;
      const suggestionSetter = isOrigin
        ? setOriginSuggestions
        : setDestinationSuggestions;

      setter(query);
      const suggestions = await debouncedAutoComplete(query);
      suggestionSetter(suggestions ?? []);
    },
    [debouncedAutoComplete]
  );

  const handlePlaceDetails = useCallback(
    async (placeId: string) => {
      const placeDetails = await placeClient.getPlaceDetails(placeId);
      return placeDetails;
    },
    [placeClient]
  );

  const handleCompletion = useCallback(
    async (placeId: string, isOrigin: boolean) => {
      const place = await handlePlaceDetails(placeId);
      if (!place) return;

      const setter = isOrigin ? setOrigin : setDestination;
      const onChangeFn = isOrigin ? onOriginChange : onDestinationChange;

      setter(place.displayName.text);
      onChangeFn(place);
    },
    [handlePlaceDetails, onOriginChange, onDestinationChange]
  );

  return (
    <EventProvider>
      <View style={styles.container}>
        <AutoCompleteInput
          placeholder="Origin"
          value={origin}
          onChangeText={(text) => handleInputChange(text, true)}
          suggestions={originSuggestions}
          onCompletion={(placeId) => handleCompletion(placeId, true)}
          Icon={StartIcon}
          style={inputStyle}
          suggestionStyle={suggestionStyle}
        />
        <VerticalLine />
        <AutoCompleteInput
          placeholder="Destination"
          value={destination}
          onChangeText={(text) => handleInputChange(text, false)}
          suggestions={destinationSuggestions}
          onCompletion={(placeId) => handleCompletion(placeId, false)}
          style={inputStyle}
          Icon={DestinationIcon}
          suggestionStyle={suggestionStyle}
        />
      </View>
    </EventProvider>
  );
};

type AutoCompleteInputProps = {
  placeholder: string;
  value: string;
  suggestions: PlaceSuggestions;
  onCompletion: (placeId: string) => void;
  onChangeText: (text: string) => void;
  Icon?: React.FC | null;
  style?: StyleSheetProperties;
  suggestionStyle?: StyleSheetProperties;
};

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  placeholder,
  value,
  style,
  suggestionStyle,
  onChangeText,
  suggestions,
  onCompletion,
  Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.useRef<TextInput>(null);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOutsidePress = React.useCallback(() => {
    setIsFocused(false);
    inputRef.current?.blur();
  }, []);

  const handleSuggestionPress = React.useCallback(
    (placeId: string) => {
      onCompletion(placeId);
      setIsFocused(false);
      inputRef.current?.blur();
    },
    [onCompletion]
  );

  return (
    <OutsidePressHandler onOutsidePress={handleOutsidePress}>
      <View>
        <View style={styles.inputIconContainer}>
          {Icon && <Icon />}
          <TextInput
            ref={inputRef}
            style={{ ...styles.input, ...style }}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
          />
        </View>
        {isFocused && suggestions.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            style={suggestionStyle}
            onPress={handleSuggestionPress}
          />
        )}
      </View>
    </OutsidePressHandler>
  );
};

const Suggestions: React.FC<{
  suggestions: PlaceSuggestions;
  style?: StyleSheetProperties;
  onPress: (placeId: string) => void;
}> = ({ suggestions, onPress, style }) => {
  const ListRenderItem = useCallback(
    ({ item }: { item: PlaceSuggestions[0] }) => (
      <SuggestionItem suggestion={item} onPress={onPress} style={style} />
    ),
    [onPress, style]
  );
  return (
    <View style={styles.flatList}>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.placePrediction?.placeId ?? ''}
        renderItem={ListRenderItem}
      />
    </View>
  );
};

const SuggestionItem: React.FC<{
  suggestion: PlaceSuggestions[0];
  style?: StyleSheetProperties;
  onPress: (placeId: string) => void;
}> = ({ suggestion, onPress, style }) => {
  const handlePress = useCallback(() => {
    if (suggestion.placePrediction?.placeId) {
      onPress(suggestion.placePrediction.placeId);
    }
  }, [suggestion, onPress]);

  return (
    <View>
      <TouchableOpacity style={{ ...styles.suggestion, ...style }} onPress={handlePress}>
        <SvgXml xml={LocationXml} width={16} height={16} fill={'black'} />
        <Text style={styles.suggestionText}>
          {suggestion.placePrediction?.text.text ?? ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 16,
    elevation: 8,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  flatList: {
    width: '100%',
    padding: 8,
  },
  suggestion: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 2,
    minHeight: 48,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  suggestionText: {
    fontSize: 16,
  },
  inputIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 8,
  },
});

const StartIcon = () => (
  <SvgXml xml={CircleXml} width={12} height={12} fill={'orange'} />
);

const DestinationIcon = () => (
  <SvgXml xml={LocationXml} width={12} height={12} fill={'gray'} />
);

const VerticalLine = () => (
  <SvgXml xml={LineXml} width={12} height={12} fill={'black'} />
);

const LocationXml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>`;

const CircleXml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>`;

const LineXml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>`;
