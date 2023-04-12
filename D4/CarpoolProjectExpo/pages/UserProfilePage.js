import { StyleSheet, View, ScrollView } from "react-native";

import Banner from "../components/Banner";
import ButtonContainer from "../components/ButtonContainer";
import InputText from "../components/InputText";
import ConfirmChangesModal from "../components/ConfirmChangesModal";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "@firebase/firestore";

const UserProfile = ({ navigation }) => {
  // this data should be replaced with a database access
  const originalData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@poolber.com",
    phoneNumber: "123-456-7890",
  };

  const getUserDetails = async () => {
    try {
      const querySnapshot = await getDoc(
        doc(db, "users", auth.currentUser.uid)
      );
      if (querySnapshot.exists()) {
        const currentProfileData = Object.assign(
          originalData,
          querySnapshot.data()
        );
        setCurrentProfileData(currentProfileData);
        setProfileData(currentProfileData);
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const [currentProfileData, setCurrentProfileData] = useState();
  const [profileData, setProfileData] = useState(originalData);
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeHandler = (e, attr) => {
    setProfileData({ ...profileData, [attr]: e });
  };

  const saveChangesHandler = () => {
    console.log("Saved Changes");
    console.log(profileData);
    setModalVisible(true);
    // Will require a database update
  };

  const discardChangesHandler = () => {
    console.log("Discarded Changes");
    setProfileData(currentProfileData);
  };

  const deleteAccountHandler = () => {
    console.log("Permanently Deleted Account");
  };

  return (
    <ScrollView>
      <ConfirmChangesModal
        modalVisible={modalVisible}
        modalHandler={setModalVisible}
        navigation={navigation}
        data={profileData}
      />

      <Banner
        pageTitle="Edit Profile"
        header="Change Profile Picture"
        name="john_doe"
        navigation={navigation}
      />

      <View style={styles.form}>
        <InputText
          placeholder="John"
          value={profileData.firstName}
          header="First Name"
          updateStateHandler={onChangeHandler}
          attr="firstName"
        />
        <InputText
          placeholder="Doe"
          value={profileData.lastName}
          header="Last Name"
          updateStateHandler={onChangeHandler}
          attr="lastName"
        />
        <InputText
          placeholder="johndoe@poolber.com"
          value={profileData.email}
          header="Username/Email"
          updateStateHandler={onChangeHandler}
          attr="email"
        />
        <InputText
          placeholder="123-456-7890"
          value={profileData.phoneNumber}
          header="Phone Number"
          updateStateHandler={onChangeHandler}
          attr="phoneNumber"
        />
      </View>

      <ButtonContainer
        successMessage="Save Changes"
        successHandler={saveChangesHandler}
        unsuccessfulMessage="Discard Changes"
        unsuccessfulHandler={discardChangesHandler}
        endState="Permanently Delete Account"
        endStateHandler={deleteAccountHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 94,
    paddingHorizontal: 36,
    justifyContent: "space-evenly",
    height: 350,
  },
});

export default UserProfile;
