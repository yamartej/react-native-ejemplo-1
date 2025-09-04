import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
export function GameCard(game) {
  return (
    <>
        <View key={game.title} style={styles.card}>
            <Image source={{uri: game.thumbnail}} style={styles.image} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.score}>Score: {game.score}</Text>
            <Pressable onPress={() => alert(`You pressed on ${game.title}`)} style={styles.Pressable}>
                <Text style={{color: '#fff'}}>View Details</Text>
            </Pressable>
        </View>
    </>
  );
}



const styles = StyleSheet.create({ 
  card: {
    backgroundColor: '#1e1e1eff',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  score: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  Pressable: {
    backgroundColor: '#6200eeff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
