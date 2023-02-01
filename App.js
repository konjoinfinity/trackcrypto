
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";

const DATA = [{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'},{title: "Bitcoin", symbol: 'BTC', price: '$23,045.23'}];

export default function App() {
  const [coins, setCoins] = useState({})

  useEffect(() => {
    getCoins();
  }, [])
  
  function getCoins() {
        fetch("https://api.coinlore.net/api/tickers/?limit=100", {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
           setCoins(res.data)
          }).catch(error => {
            console.log(`${error.message}!`);
          });
    }

  return (
    <View  style={{flex:1, padding: 10, marginTop: 30}}>
      <Text style={{fontSize: 30, textAlign: 'center', fontWeight: '300', marginTop: 25}}>Cryptocurrencies</Text>
      <View style={{alignItems:'center', justifyContent: 'space-around', flexDirection:'row', marginTop: 25, marginBottom: 10}}>
        <Text style={{fontSize: 10, textAlign: 'center', fontWeight: '300'}}>Name</Text>
        <Text style={{fontSize: 10, textAlign: 'center', fontWeight: '300'}}>Symbol</Text>
        <Text style={{fontSize: 10, textAlign: 'center', fontWeight: '300'}}>Price ($USD)</Text>
        </View>
      <FlashList
      data={coins}
      renderItem={({ item }) => <View style={{alignItems:'center', justifyContent: 'space-between', flexDirection:'row', 
      paddingTop: 20, paddingBottom: 20, paddingRight: 10, paddingLeft: 10, borderColor: '#e7e7e6', borderRadius: 8, borderWidth: 1, margin: 10}}>
     <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>  
     <Image style={{height: 20, width: 20, marginRight: 5}} source={{uri: `https://www.coinlore.com/img/${item.nameid}.webp`}}/>
      <Text style={{fontSize: 13, fontWeight: '400'}}>{item.name}</Text>
      </View> 
      <Text style={{fontSize: 13, fontWeight: '400'}}>{item.symbol}</Text>
      <Text style={{fontSize: 13, fontWeight: '600'}}>${item.price_usd}</Text></View>}
      estimatedItemSize={200}/>
    </View>
  );
}
