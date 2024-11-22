import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalFee, setTotalFee] = useState(0);


  // Handle course selection
  const toggleCourseSelection = (courseValue, courseName) => {
    if (selectedCourses.some(course => course.value === courseValue)) {
      setSelectedCourses(selectedCourses.filter(course => course.value !== courseValue));
    } else {
      setSelectedCourses([...selectedCourses, { value: courseValue, name: courseName }]);
    }
  };
  const calculateTotal = () => {
    // Ensure the selectedCourses array is valid and contains numeric values
    let total = 0;
  
    // Calculate the total fee from selected courses
    selectedCourses.forEach(course => {
      total += parseFloat(course.value);
    });
  
    // Apply discount based on the number of selected courses
    let discount = 0;
    if (selectedCourses.length === 2) {
      discount = total * 0.05; // 5% discount for two courses
    } else if (selectedCourses.length === 3) {
      discount = total * 0.10; // 10% discount for three courses
    } else if (selectedCourses.length > 3) {
      discount = total * 0.15; // 15% discount for more than three courses
    }
  
    // Subtract the discount from the total
    const discountedTotal = total - discount;
  
    // Calculate VAT (15%)
    const VAT = 0.15;
    const vatAmount = discountedTotal * VAT;
  
    // Final total
    const finalTotal = discountedTotal + vatAmount;
  
    // Update state with formatted total fee
    setTotalFee(finalTotal.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Empowering the Nation School</Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.formTitle}>Request a Course Quotation</Text>
        <Text style={styles.formDescription}>
          Fill in your details and select the courses you're interested in. Click "Calculate Fee" to see the estimated total.
        </Text>

        {/* Contact Details */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name and Surname</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        {/* Course Selection */}
        <Text style={styles.label}>Select Courses</Text>
        <View style={styles.courseList}>
          {[
            { value: '1500', name: 'First Aid' },
            { value: '1500', name: 'Sewing' },
            { value: '1500', name: 'Landscaping' },
            { value: '1500', name: 'Life Skills' },
            { value: '750', name: 'Cooking' },
            { value: '750', name: 'Child Minding' },
            { value: '750', name: 'Garden Maintenance' },
          ].map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleCourseSelection(course.value, course.name)}
              style={[
                styles.courseItem,
                selectedCourses.some(selected => selected.value === course.value) && styles.selectedCourse,
              ]}
            >
              <Text style={styles.courseText}>
                {course.name} - R{course.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Calculate Fee Button */}
        <Button title="Calculate Fee" onPress={calculateTotal} />

        {/* Display Total Fee */}
        <Text style={styles.totalFee}>Total Quoted Fee: R{totalFee}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#61ccfd',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  formSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  formDescription: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  courseList: {
    marginBottom: 20,
  },
  courseItem: {
    padding: 10,
    backgroundColor: '#e8e8e8',
    marginBottom: 10,
    borderRadius: 4,
  },
  selectedCourse: {
    backgroundColor: '#61ccfd',
  },
  courseText: {
    color: '#333',
  },
  totalFee: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default App;
