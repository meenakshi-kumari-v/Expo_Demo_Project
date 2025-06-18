import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const Utils ={
     calculatedHeight(height:number) {
    return responsiveHeight(height);
  },
   calculatedWidth(width:number) {
    return responsiveWidth(width);
  }

  //json-server --host 0.0.0.0 db.json
}
