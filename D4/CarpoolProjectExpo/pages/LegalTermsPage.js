import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Banner2 from "../components/Banner2";

export default function LegalTermsPage({ navigation }) {
  const [requirements] = useState([
    {
      rule: "User’s private information will always be kept private and only accessible by the user and certain components of the application.",
      key: "a",
    },
    {
      rule: "All personal data stored in the database shall be encrypted, and data shall only be decrypted once the user has authorized access to view or modify the information.",
      key: "b",
    },
    {
      rule: "All data transmitted between users shall be encrypted from when the sender sends the message to when the system confirms that the receiver is authorized to view the message.",
      key: "c",
    },
    {
      rule: "The application shall not violate any Canadian or American laws. For instance, all data will be encrypted so that personal information privacy is preserved.",
      key: "d",
    },
    {
      rule: "Users will be informed about any personal information collected by the application.",
      key: "e",
    },
    {
      rule: "Prior to obtaining user consent to collect personal information, provide a clear explanation of the nature, purposes, and consequences of data collection by the application.",
      key: "f",
    },
    {
      rule: "Allow users to withdraw their consent to have their personal information collected at any time.",
      key: "g",
    },
    {
      rule: "Taxi companies partnered with the application must ensure licensing requirements for their taxi drivers",
      key: "h",
    },
    {
      rule: "Taxi companies partnered with the application must have adequate insurance coverage to protect all passengers in any taxi",
      key: "i",
    },
    {
      rule: "Taxi companies partnered with the application must have their taxi fares exceed the city or province’s taxi fare regulations",
      key: "j",
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Banner2 pageTitle="Legal Terms" navigation={navigation} />

      <View style={styles.legalPageContainer}>
        {requirements.map((item) => {
          return (
            <View key={item.key} style={styles.itemContainer}>
              <Text style={styles.item}>{item.rule}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    lineHeight: 24,
  },
  legalPageContainer: {
    padding: 24,
  },
});
