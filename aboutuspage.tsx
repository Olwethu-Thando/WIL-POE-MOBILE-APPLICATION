import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/schoolbuilding.png')} // Adjust path as needed
            style={styles.logo}
          />
          <Text style={styles.logoText}>Empowering the Nation School</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Us Section */}
      <View style={styles.aboutSection}>
        <View style={styles.centerText}>
          <Text style={styles.heading}>About Us</Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Empowering the Nation</Text> was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training Programmes to empower themselves and provide more marketable skills.
          </Text>
        </View>

        <View style={styles.centerText}>
          <Text style={styles.heading}>Our Vision</Text>
          <Text style={styles.text}>
            We envision a world where every student is empowered to succeed in life, not only through academic achievement but also by becoming thoughtful, compassionate, and responsible citizens.
          </Text>
        </View>

        <View style={styles.centerText}>
          <Text style={styles.heading}>Our Mission</Text>
          <Text style={styles.text}>
            The SME is an initiative by Precious Radebe to provide skills training for domestic workers and gardeners. Her parents and other elderly relatives were never given the chance to upskill themselves or follow a formal educational qualification, so this training school is her way of supporting similarly affected members from her community.
          </Text>
        </View>

        <View style={styles.centerText}>
          <Text style={styles.heading}>Why Choose Us?</Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Experienced Educators:</Text> Our dedicated teachers ensure that every student receives engaging and personalized learning experiences.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Comprehensive Curriculum:</Text> Balanced academic programs, arts, and sports for well-rounded development.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Supportive Learning Environment:</Text> A nurturing and safe space for students to thrive academically and personally.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>State-of-the-Art Facilities:</Text> Modern technology and sports amenities to enrich the student experience.
          </Text>
        </View>

        <View style={styles.centerText}>
          <Text style={styles.heading}>Join Our Community</Text>
          <Text style={styles.text}>
            We invite you to become a part of the <Text style={styles.bold}>Empowering the Nation</Text> family, where each child is encouraged to reach their full potential. We look forward to welcoming you to our community.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Empowering the Nation. All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#666565',
    padding: 10,
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    marginLeft: 10,
  },
  navLink: {
    color: 'rgb(33, 10, 239)',
    fontSize: 16,
  },
  aboutSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  centerText: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    color: '#0056b3',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default AboutUsScreen;
