import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.userContainer}>

        <View style={styles.iconContainer}>
          <Ionicons name="chevron-back" size={30} color="#F5F5F5" />
        </View>

        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText}>nataliezacek</Text>
        </View>

        <View style={styles.iconContainer}>
          <Ionicons name="notifications" size={24} color="#F5F5F5" />
        </View>

        <View style={styles.iconContainer}>
          <Feather name="more-horizontal" size={20} color="#F5F5F5" />
        </View>

      </View>

      <View style={styles.nameContainer}>

        <View style={styles.photoContainer}>
          <Image
            style={styles.photo}
            source={require('./assets/images/photoP.jpg')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.numbersContainer}>

          <View style={styles.name}>
            <Text style={styles.nameText}>natalie zacek</Text>
          </View>

          <View style={styles.numbers}>
            <View style={styles.number}>
              <Text style={styles.numberText}>2,547</Text>
              <Text style={styles.numberText}>posts</Text>
            </View>

            <View style={styles.number}>
              <Text style={styles.numberText}>932K</Text>
              <Text style={styles.numberText}>followers</Text>
            </View>

            <View style={styles.number}>
              <Text style={styles.numberText}>1,136</Text>
              <Text style={styles.numberText}>following</Text>
            </View>
          </View>

        </View>

      </View>

      <View style={styles.descripcionContainer}>
        <Text style={styles.userNameText}>☀️</Text>
        <Text style={styles.linkText}>@shopnatscafe</Text>

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

        <View style={styles.story}>
          <Text>Story 1</Text>
        </View>

        <View style={styles.story}>
          <Text>Story 2</Text>
        </View>

        <View style={styles.story}>
          <Text>Story 3</Text>
        </View>

        <View style={styles.story}>
          <Text>Story 4</Text>
        </View>

        <View style={styles.story}>
          <Text>Story 5</Text>
        </View>

      </View>

      <View style={styles.sectionsContainer}>

        <View style={styles.section}>
          <Text>Section 1</Text>
        </View>

        <View style={styles.section}>
          <Text>Section 2</Text>
        </View>

      </View>

      <View style={styles.feedContainer}>

        <View style={styles.feed}>

          <View style={styles.image}>
            <Text>Image1</Text>
          </View>

          <View style={styles.image}>
            <Text>Image2</Text>
          </View>

          <View style={styles.image}>
            <Text>Image3</Text>
          </View>

        </View>

        <View style={styles.feed}>

          <View style={styles.image}>
            <Text>Image1</Text>
          </View>

          <View style={styles.image}>
            <Text>Image2</Text>
          </View>

          <View style={styles.image}>
            <Text>Image3</Text>
          </View>

        </View>

      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  userContainer: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 5,
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameContainer: {
    flex: 9,
    paddingLeft: 10,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  nameContainer: {
    flex: 2.5,
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  photoContainer: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  numbersContainer: {
    flex: 7,
    backgroundColor: 'pink',
  },
  name: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 18,

  },
  nameText: {
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  numbers: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  number: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  descripcionContainer: {
    flex: 1.5,
    marginLeft: 10,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  linkText: {
    color: '#A5A6DF',
    fontSize: 16,
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
    flexDirection: 'row',
    backgroundColor: 'purple',
    gap: 10,
  },
  story: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionsContainer: {
    flex: 1.2,
    flexDirection: 'row',
    backgroundColor: 'orange',
  },
  section: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedContainer: {
    flex: 9,
    backgroundColor: 'pink',
  },
  feed: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
