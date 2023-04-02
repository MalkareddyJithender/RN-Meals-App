import { View,Text,StyleSheet } from 'react-native';

function SubTitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginVertical:4,
        marginHorizontal:12,
        padding:6,
      },
      subTitle:{
        color:'#e2b497',
        fontWeight:'500',
        fontSize:18,
        textAlign:'center',
      },
})
