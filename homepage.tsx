import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

// home Screen (with Apply Now button)
const Homepage = ({ navigation }) => {
  return (
    <ScrollView>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.nav}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/schoolbuilding.png')} // Adjust path as needed
              style={styles.logo}
            />
            <Text style={styles.title}>Empowering the Nation School</Text>
          </View>
          <View style={styles.navLinks}>
            <TouchableOpacity onPress={() => navigation.navigate('homepage')}>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('aboutuspage')}>
              <Text style={styles.navLink}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('coursespage')}>
              <Text style={styles.navLink}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigateL('login')}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigateL('contact')}>
              <Text style={styles.navLink}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to Our School</Text>
          <Text style={styles.heroDescription}>
            Building a better future, one student at a time.
          </Text>
          <TouchableOpacity
  style={styles.heroButton}
  onPress={() => navigation.navigate('ApplicationFormPage')} // Use the exact screen name
>
  <Text style={styles.heroButtonText}>Apply Now</Text>
</TouchableOpacity>


          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => navigation.navigate('coursespage')} // Navigate to Application Form Screen
          >
            <Text style={styles.heroButtonText}>View Courses</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Programs Section */}
      <View style={styles.programs}>
        <Text style={styles.sectionTitle}>Our Programs</Text>
        <View style={styles.programCards}>
        <TouchableOpacity
  style={styles.programCard}
  onPress={() => navigation.navigate('coursespage')}
>
  <Text style={styles.programTitle}>Six Months</Text>
  <Text style={styles.programDescription}>
    The short courses take six month.
  </Text>
</TouchableOpacity>

          <TouchableOpacity
  style={styles.programCard}
  onPress={() => navigation.navigate('coursespage')}
>
  <Text style={styles.programTitle}>Six Weeks</Text>
  <Text style={styles.programDescription}>
    The short courses take six weeks.
  </Text>
</TouchableOpacity>

        </View>
      </View>

      {/* About Section */}
      <View style={styles.about}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.aboutDescription}>
          Empowering the Nation was established in 2018 and offers courses in
          Johannesburg. Hundreds of domestic workers and gardeners have been
          trained on both the six-month long Learnerships and six-week Short
          Skills Training Programmes to empower themselves and can provide more
          marketable skills.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.contact}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactDescription}>
          Get in touch with us for more information on our programs and
          admissions process.
        </Text>
        <Text style={styles.contactDetails}>
          Email: preciousradebe@example.com | Phone: +27 52 254 2540
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; 2024 Empowering the Nation. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default homepage;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#666565',
    padding: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    color: 'rgb(33, 10, 239)',
    fontSize: 16,
    marginLeft: 15,
  },
  heroSection: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a4aed',
  },
  heroContent: {
    backgroundColor: 'rgba(114, 114, 116, 0.5)',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    color: 'white',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 18,
    color: 'blanchedalmond',
    marginBottom: 20,
    textAlign: 'center',
  },
  heroButton: {
    backgroundColor: '#555592',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  heroButtonText: {
    color: 'white',
    fontSize: 16,
  },
  programs: {
    padding: 20,
    backgroundColor: '#cccdd0',
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  programCards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  programCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  programTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  programDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  about: {
    padding: 20,
    backgroundColor: '#0a4aed',
    textAlign: 'center',
  },
  aboutDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  contact: {
    padding: 20,
    backgroundColor: '#cccdd0',
    textAlign: 'center',
  },
  contactDescription: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  contactDetails: {
    fontSize: 14,
    color: '#fff',
  },
  footer: {
    padding: 10,
    backgroundColor: '#0a4aed',
    textAlign: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
