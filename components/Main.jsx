import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import { getFreeGamesList } from '../lib/freegamelist.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameCard } from './GameCard.jsx';
import { Logo } from './Logo.jsx';


export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getFreeGamesList().then((games) => {
      setGames(games);    
    });
      
  }, []);

  return (
    <>
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right, 
            flex: 1, 
            width: '100%', 
            alignItems: 'center', 
            backgroundColor: '#000000ff'}}
        >
          <Logo style = {styles.logo}/>
            {games.length === 0 ? (
                <ActivityIndicator size="large" color="#6200eeff" />
            ):(
            <FlatList
                data={games}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <GameCard {...item }/>}
                contentContainerStyle={{ padding: 10, paddingBottom: 20 }}
                style={styles.FlatList}
            >
            </FlatList>
            )}
        </View>
    </>
  );
}


const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  FlatList: {
    width: '100%',
    flex: 1,
  },
  
  
});


