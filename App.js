import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.userContainer}>

        <View style={styles.iconContainer}>
          <Text>back</Text>
        </View>

        <View style={styles.userNameContainer}>
          <Text>Username</Text>
        </View>

        <View style={styles.iconContainer}>
          <Text>notification</Text>
        </View>

        <View style={styles.iconContainer}>
          <Text>more</Text>
        </View>

      </View>

      <View style={styles.nameContainer}>

        <View style={styles.photoContainer}>
          <Text>Photo</Text>
        </View>

        <View style={styles.numbersContainer}>
          <Text>Numbers</Text>
        </View>

      </View>

      <View style={styles.descripcionContainer}>
        <Text>Descripcion</Text>
        <Text>Descripcion2</Text>

      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonType1}>
          <Text>Follow</Text>
        </View>
        <View style={styles.buttonType1}>
          <Text>Message</Text>
        </View>
        <View style={styles.buttonType2}>
          <Text>Discover</Text>
        </View>
      </View>

      <View style={styles.storiesContainer}>
        <Text>Stories</Text>
      </View>

      <View style={styles.sectionsContainer}>
        <Text>Sections</Text>
      </View>

      <View style={styles.feedContainer}>
        <Text>Feed</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 15,
  },
  userContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameContainer: {
    flex: 9,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 2.5,
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  photoContainer: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbersContainer: {
    flex: 7,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descripcionContainer: {
    flex: 1.5,
    marginLeft: 10,
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1.3,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 15,
    gap: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonType1: {
    flex: 4,
    height: '100%',
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonType2: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storiesContainer: {
    flex: 2,
    marginLeft: 10,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionsContainer: {
    flex: 1.2,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedContainer: {
    flex: 9,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
