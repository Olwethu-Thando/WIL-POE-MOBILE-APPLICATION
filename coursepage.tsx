import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoursesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/schoollogo.png')} // Adjust the path to your logo image
            style={styles.logo}
          />
          <Text style={styles.logoText}>Empowering the nation School</Text>
        </View>

        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.navText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
            <Text style={styles.navText}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <Text style={styles.navText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.courseContainer}>
        <Text style={styles.sectionHeader}>Select Your Courses</Text>
        <Text style={styles.subHeader}>Six months</Text>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('Firstaid')}>
            <Text style={styles.courseTitle}>First Aid</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            First aid training is how to respond in a variety of first aid scenarios and emergencies.
          </Text>
        </View>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('Sewing')}>
            <Text style={styles.courseTitle}>Sewing</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            Sewing is the activity of making or mending clothes or other things using a needle and thread.
          </Text>
        </View>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('Landscaping')}>
            <Text style={styles.courseTitle}>Landscaping</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            Landscaping refers to any activity that modifies the visible features of an area of land.
          </Text>
        </View>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('LifeSkills')}>
            <Text style={styles.courseTitle}>Life Skills</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            Life skills help promote mental well-being and competence in young people as they face the realities of life.
          </Text>
        </View>

        <Text style={styles.subHeader}>Six weeks</Text>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('ChildMinding')}>
            <Text style={styles.courseTitle}>Child Minding</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            The job of a person who takes care of other people's children in his or her own home.
          </Text>
        </View>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('Cooking')}>
            <Text style={styles.courseTitle}>Cooking</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            Cooking classes teach the art of food creation and presentation.
          </Text>
        </View>

        <View style={styles.course}>
          <TouchableOpacity onPress={() => navigation.navigate('Garden')}>
            <Text style={styles.courseTitle}>Garden Maintenance</Text>
          </TouchableOpacity>
          <Text style={styles.courseDescription}>
            Gardeners are required to keep plots clean and free of weeds and debris.
          </Text>
        </View>

        <View style={styles.submitButton}>
          <Button title="Submit" onPress={() => alert('Courses Submitted')} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#666565',
    color: '#6b1010',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#431818',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  navText: {
    color: '#21a1f1',
    marginHorizontal: 10,
    fontSize: 16,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  course: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 18,
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
  courseDescription: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default CoursesScreen;
