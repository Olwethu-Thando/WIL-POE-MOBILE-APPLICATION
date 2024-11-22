import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, Button, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'

type Props = {
  navigation: any;
};

const ApplicationFormPage= ({ navigation }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    courseUnder6Months: '',
    courseUnder6Weeks: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Navigate to the Confirmation screen and pass form data
    navigation.navigate('Confirmation', { formData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Empowering the nation Application Form</Text>

      {/* Personal Information */}
      <Text style={styles.sectionHeader}>Personal Information</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
      </View>
      

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={formData.dob}
          onChangeText={(text) => handleInputChange('dob', text)}
        />
      </View>


      {/* Home Address Section */}
      <Text style={styles.sectionHeader}>Home Address</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Street Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter street address"
          value={formData.street}
          onChangeText={(text) => handleInputChange('street', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>City:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={formData.city}
          onChangeText={(text) => handleInputChange('city', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>State/Province:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter state"
          value={formData.state}
          onChangeText={(text) => handleInputChange('state', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Zip/Postal Code:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter zip code"
          value={formData.zip}
          onChangeText={(text) => handleInputChange('zip', text)}
        />
      </View>
      
      {/* Academic Information */}
      <Text style={styles.sectionHeader}>Select Your Courses</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Courses (Under 6 Months):</Text>
        <Picker
          selectedValue={formData.courseUnder6Months}
          style={styles.picker}
          onValueChange={(itemValue) => handleInputChange('courseUnder6Months', itemValue)}
        >
          <Picker.Item label="Select course under six months" value="" />
          <Picker.Item label="First Aid" value="First Aid" />
          <Picker.Item label="Sewing" value="Sewing" />
          <Picker.Item label="Landscaping" value="Landscaping" />
          <Picker.Item label="Life Skills" value="Life Skills" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Courses (Under 6 Weeks):</Text>
        <Picker
          selectedValue={formData.courseUnder6Weeks}
          style={styles.picker}
          onValueChange={(itemValue) => handleInputChange('courseUnder6Weeks', itemValue)}
        >
          <Picker.Item label="Select course under six weeks" value="" />
          <Picker.Item label="Child Minding" value="Child Minding" />
          <Picker.Item label="Cooking" value="Cooking" />
          <Picker.Item label="Garden Maintenance" value="Garden Maintenance" />
        </Picker>
      </View>
       
      {/* Submit Button */}
      <View style={styles.formGroup}>
        <Button title="Request Quotation" onPress={handleSubmit} color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ApplicationFormPage;
