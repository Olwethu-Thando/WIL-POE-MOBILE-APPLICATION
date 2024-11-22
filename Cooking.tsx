import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CookingCoursePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/schoollogo.png')} style={styles.logo} />
          <Text style={styles.headerText}>Empowering the Nation School</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity>
            <Text style={styles.navItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navItem}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navItem}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navItem}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navItem}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Course Header */}
      <View style={styles.courseHeader}>
        <Text style={styles.title}>Cooking</Text>
        <Image
          source={require('./assets/cooking.png')}
          style={styles.courseImage}
        />
        <Text style={styles.courseCode}>Course Code: CC5432</Text>
      </View>

      {/* Course Purpose */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Purpose</Text>
        <Text style={styles.sectionText}>
          To prepare and cook nutritious family meals.
        </Text>
      </View>

      {/* Instructor Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructor</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.boldText}>Name:</Text> Precious Radebe
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.boldText}>Email:</Text> preciousradebe@gmail.com
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.boldText}>Office Hours:</Text> Mon & Wed, 2-4 PM
        </Text>
      </View>

      {/* Course Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Content</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Nutritional requirements for a healthy body</Text>
          <Text style={styles.listItem}>Types of protein, carbohydrates and vegetables</Text>
          <Text style={styles.listItem}>Planning meals</Text>
          <Text style={styles.listItem}>Preparation and cooking of meals</Text>
        </View>
      </View>

      {/* Enrollment Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Enrollment Information</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.boldText}>Fees:</Text> R750
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.boldText}>Duration:</Text> 6 weeks
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.boldText}>Location:</Text> Johannesburg
        </Text>
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Course Page</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  header: {
    backgroundColor: '#666565',
    padding: 10,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#6b1010',
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  navItem: {
    fontSize: 16,
    color: '#1546e9',
  },
  courseHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  courseImage: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  courseCode: {
    fontSize: 16,
    color: '#1546e9',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    backgroundColor: '#e8e8e8',
    marginVertical: 5,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#666565',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CookingCoursePage;
