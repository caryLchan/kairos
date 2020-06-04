import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { Header, Input, Button, Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
// import Icon from 'react-native-vector-icons/FontAwesome';

export const Listing = () => {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('status')

  const saveButton = () => {
    return;
  }
  const createButton = () => {
    return;
  }
  const deleteButton = () => {
    return;
  }

  let options = [{ value: 'Interested' }, { value: 'Applied' }, { value: 'Phone Screen' }, { value: 'Take Home' }, { value: 'Onsite' }, { value: 'Rejected' }, { value: 'Offer $' }]

  return (
    <SafeAreaView>
      <Text style={{ flexDirection: 'row', justifyContent: "flex-end", fontSize: 25, fontWeight: "bold", color: "dodgerblue", alignSelf: 'center' }}>Listing</Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 70, backgroundColor: "#fafafa" }}>
        {/* Job Title */}
        <View style={styles.input}>
          {/* <Text>Job Title</Text> */}
          <Input
            placeholder='Job Title'
            style={styles.inputField}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        {/* Company */}
        <View style={styles.input}>
          <Input
            placeholder='Company'
            style={styles.inputField}
            onChangeText={text => setCompany(text)}
            value={company}
          />
        </View>
        {/* Applied Date */}
        <View style={styles.input}>
          <DatePicker
            style={{ width: 175 }}
            date={date}
            mode="date"
            placeholder="Applied Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={true}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 5,
                top: 4,
              },
              dateInput: {
                marginLeft: 10
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => setDate(date)}
          />
        </View>
        {/* Notes */}
        <View style={styles.input}>
          <Input
            placeholder='Notes'
            style={styles.inputField}
            onChangeText={text => setNotes(text)}
            value={notes}
          />
        </View>
        <View style={{ paddingTop: 50 }}>
          <View>
            <Text style={{ color: "dodgerblue", fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Current Status</Text>
          </View>

          {/* Status */}
          <View style={styles.status}>
            <Dropdown
              label='Status'
              data={options}
              style={{ width: 50 }}
              onChangeText={(el) => setStatus(el)}
            />
          </View>
        </View>


        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.fixToText}>

            {/* Create Button */}
            <Button
              title='Create'
              type="outline"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10 }}

              // style={{ backgroundColor: "#99ccff", padding: 10, borderRadius: 10 }}
              onPress={() => createButton()}
            >
            </Button>

            {/* Save Button */}
            <Button
              title='Update'
              type="outline"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#43F45B", borderRadius: 10, }}
              // style={{ backgroundColor: "#99ccff", padding: 10, borderRadius: 10 }}
              onPress={() => createButton()}
            >
            </Button>

            {/* Delete Button */}
            <Button
              title="Delete"
              type="outline"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#ff7676", borderRadius: 10 }}
              onPress={() => deleteButton()}
            >
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 40,
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    textAlign: 'center'
  },
  status: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  }
});


