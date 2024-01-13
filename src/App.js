import React from 'react';
import { StyleSheet, View } from 'react-native-web';
import Box from "./components/box";

// "@emotion/react": "^11.11.1",
// "@emotion/styled": "^11.11.0",
// "@mui/material": "^5.14.11",
//"react-native-web": "^0.19.9",

const data = [
  { date: 'September 28', input: 'my day went well. Im wondering if i would get an error on this all i know is that i hope it doesnt affect the thing for itself' },
  { date: 'September 29', input: 'my day went well' },
  { date: 'September 30', input: 'my day went well' },
];



const App = () => {
  return (
    <div>
      {data.map((user, index) => (
        <div key={index}>
            <Box date={user.date} input={user.input}></Box>
        </div>
      ))}
    </div>
  );
};

export default App;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        padding: 20,
      border: '1px solid black',//add border for borderRadius to work
      },
    outerBorder: {
      fontSize: '200%',
      padding: 20,
      marginTop: '1px',
      backgroundColor: 'green',
      borderRadius: '10px',
      border: '1px solid black',//add border for borderRadius to work

    },
    header: {
      color: 'white',
      backgroundColor: 'blue',
      padding: 10,
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      fontSize: '70px',
      border: '1px solid black',//add border for borderRadius to work
    },
    body: {
      color: 'black',
      backgroundColor: 'yellow',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      border: '1px solid black',//add border for borderRadius to work
    },
  });