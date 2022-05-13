import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,SafeAreaView,FlatList,ImageBackground,Image} from 'react-native';
import axios from 'axios';

export default function Render(){
    const[Movie1,setMovie1]=useState('Movie1');
    const[Review1,setReview1]=useState('Review1');
    const[Movie2,setMovie2]=useState('Movie2');
    const[Review2,setReview2]=useState('Review2');
    const[Movie3,setMovie3]=useState('Movie3');
    const[Review3,setReview3]=useState('Review3');
    const[Movie4,setMovie4]=useState('Movie4');
    const[Review4,setReview4]=useState('Review4');
    const[Movie5,setMovie5]=useState('Movie5');
    const[Review5,setReview5]=useState('Review5');

    axios({
            method: 'get',
            url: 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=40&order=by-publication-date&api-key=nScDDpYDu0l8400wIhCTIAPV3s7A9ZdP',
        }).then((response)=>{
            setMovie1(response.data.results[0].display_title);
            setReview1(response.data.results[0].summary_short);
            setMovie2(response.data.results[1].display_title);
            setReview2(response.data.results[1].summary_short);
            setMovie3(response.data.results[2].display_title);
            setReview3(response.data.results[2].summary_short);
            setMovie4(response.data.results[3].display_title);
            setReview4(response.data.results[3].summary_short);            
            setMovie5(response.data.results[4].display_title);
            setReview5(response.data.results[4].summary_short);
        });
        
    return(
      <ScrollView>
          <View style={styles.head}>
              <Text style={styles.title}>5 Latest Movies !</Text>
          </View >
        <View style={{padding:20}}>
          <View>
          <Text style={styles.heading}>{Movie1}</Text>
          <Text style={{fontSize:20}}>Summary :</Text>
          <Text style={styles.summary}>{Review1}</Text>
          </View>
          <View>
          <Text style={styles.heading}>{Movie2}</Text>
          <Text style={{fontSize:20}}>Summary :</Text>
          <Text style={styles.summary}>{Review2}</Text> 
          </View>
          <View>
          <Text style={styles.heading}>{Movie3}</Text>
          <Text style={{fontSize:20}}>Summary :</Text>
          <Text style={styles.summary}>{Review3}</Text>  
          </View>
          <View>
          <Text style={styles.heading}>{Movie4}</Text>
          <Text style={{fontSize:20}}>Summary :</Text>
          <Text style={styles.summary}>{Review4}</Text> 
          </View>
          <View>
          <Text style={styles.heading}>{Movie5}</Text>
          <Text style={{fontSize:20}}>Summary :</Text>
          <Text style={styles.summary}>{Review5}</Text> 
          </View>
          </View>
          </ScrollView>
    );
}

const styles = StyleSheet.create({
    head:{
       width:500,
       height:150,
       backgroundColor:'orange',
       paddingTop:60,
       paddingLeft:30
    },
    title:{
        fontSize:40
    },
    heading:{
        fontSize:30,
        backgroundColor:'orange'  
    },
    summary:{
        margin:10,
        backgroundColor: 'black',
        color:'orange'
    }
});