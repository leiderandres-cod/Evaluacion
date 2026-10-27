import { Pressable, StyleSheet, Text } from 'react-native';

export default function BotonMas({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.4 : 1 }
      ]}
    >
      <Text style={styles.symbol}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#147b9d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  symbol: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});


