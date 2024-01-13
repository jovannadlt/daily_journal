import { Box } from '@mui/material';
import React from 'react';
import { StyleSheet, View } from 'react-native-web';

export default function Boxes({date, input}){
    return(
        <View style={styles.imageContainer}>
            <Box style={styles.outerBorder}>
                <Box style={styles.header}>
                    {date}
                    <form style={styles.body}>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit"/> 
                        {/* write an onsubmit  */}
                        {/* have the submitted text be put into the data base so it can then be displayed depending on the date the website displaying */}
                    </form>
                    <input style={styles.body} color="black"/>
                </Box>
                    
            </Box>
        </View>
        );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        padding: 50,
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
      borderRadius: '10px',
      fontSize: '70px',
      border: '1px solid black',//add border for borderRadius to work
    },
    body: {
      fontSize: 30,
      color: 'black',
      backgroundColor: 'yellow',
      borderRadius: '10px',
      border: '1px solid black',//add border for borderRadius to work
      width:'100%',
      paddingTop: 10,
      paddingBottom: 10,
    },
  });