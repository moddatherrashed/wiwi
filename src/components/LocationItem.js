import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class LocationItem extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.root}
        onPress={() => {
          this.props.handler(this.props.description, this.props.fetchDetails(this.props.place_id))
        }}>
        <Image
          source={require('./../Icons/pin.png')}
          style={{
            height: 20,
            width: 12
          }}
        />
        <Text>{
          this.props.description}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: 400,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default LocationItem;