
import { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { FlashList } from "@shopify/flash-list";

const DATA = [{title: "First Item"},{title: "Second Item"},{title: "First Item"},{title: "First Item"},{title: "First Item"},{title: "First Item"},{title: "First Item"},{title: "First Item"},];

export default function App() {

  useEffect(() => {
    getCoins();
  }, [])
  
  function getCoins() {
        fetch("https://api.coinlore.net/api/tickers/", {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
           console.log(res)
          }).catch(error => {
            console.log(`${error.message}!`);
          });
    }

  return (
    <ScrollView  contentContainerStyle={{marginTop: 50}}>
      <Text style={{fontSize: 32, textAlign: 'center', fontWeight: '300'}}>Cryptocurrencies</Text>
      <FlashList
      ListHeaderComponent={<View style={{alignItems:'center', justifyContent: 'space-around', flexDirection:'row', marginTop: 20}}>
        <Text style={{fontSize: 10, textAlign: 'center', fontWeight: '300'}}>Name</Text>
        <Text style={{fontSize: 10, textAlign: 'center', fontWeight: '300'}}>Symbol</Text>
        <Text style={{fontSize: 10, textAlign: 'center', fontWeight: '300'}}>Price ($USD)</Text>
        </View>}
      data={DATA}
      renderItem={({ item }) => <View style={{alignItems:'center', justifyContent: 'space-around', flexDirection:'row', padding:10}}>
      <Text style={{fontSize: 18}}>{item.title}</Text>
      <Text style={{fontSize: 18}}>{item.title}</Text>
      <Text style={{fontSize: 18}}>{item.title}</Text></View>}
      estimatedItemSize={200}
    />
    </ScrollView>
  );
}
