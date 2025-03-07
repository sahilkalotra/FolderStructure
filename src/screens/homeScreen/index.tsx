import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Reels from '../../components/Reels/Reels';
import SafeArea from '../../components/safeAreaView';
import colors from '../../utils/colors';
import Label from '../../components/label';
import { useAppDispatch } from '../../hooks/reduxHook';
import { setLoggedIn } from '../../redux/slice/authSlice';

// Pass the array of objects with _id and uri as props
const videoa: any = [
  {
    _id: 4,
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    _id: 1,
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    _id: 2,
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    _id: 3,
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },

  {
    _id: 5,
    uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  }
]
const HomeScreen = () => {
  const dispatch = useAppDispatch()
  return (
      <View style={{ flex: 1, backgroundColor:colors.black }}>
        <TouchableOpacity onPress={()=>{dispatch(setLoggedIn(false))}} style={{position:'absolute', top:100,zIndex:100, alignSelf:'center'}}>
          <Label text='log out' fontSize={25} style={{color:colors.white}}/>
        </TouchableOpacity>
        {/* <Reels videos={videoa} /> */}
      </View>
  )
}

export default HomeScreen