import { useNavigation } from '@react-navigation/native';

export function useButtonNavigation() {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return navigateTo;
}
