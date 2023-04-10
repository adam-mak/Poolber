import { StyleSheet, View, ScrollView } from "react-native";

import Banner from "../components/Banner";
import ButtonContainer from "../components/ButtonContainer";
import InputText from "../components/InputText";
import ConfirmChangesModal from "../components/ConfirmChangesModal";

import { useState } from "react";

const UserProfile = ({ navigation }) => {
  // this data should be replaced with a database access
  const originalData = {
    firstName: "John",
    lastName: "Doe",
    username: "JohnDoe123",
    email: "johndoe@poolber.com",
    phoneNumber: "123-456-7890",
  };

  const [currentProfileData, setCurrentProfileData] = useState(originalData);
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeHandler = (e, attr) => {
    setCurrentProfileData({ ...currentProfileData, [attr]: e });
  };

  const saveChangesHandler = () => {
    console.log("Saved Changes");
    console.log(currentProfileData);
    setModalVisible(true);
    // Will require a database update
  };

  const discardChangesHandler = () => {
    console.log("Discarded Changes");
    setCurrentProfileData(originalData);
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
          value={currentProfileData.firstName}
          header="First Name"
          updateStateHandler={onChangeHandler}
          attr="firstName"
        />
        <InputText
          placeholder="Doe"
          value={currentProfileData.lastName}
          header="Last Name"
          updateStateHandler={onChangeHandler}
          attr="lastName"
        />
        <InputText
          placeholder="JohnDoe123"
          value={currentProfileData.username}
          header="Username"
          updateStateHandler={onChangeHandler}
          attr="username"
        />
        <InputText
          placeholder="johndoe@poolber.com"
          value={currentProfileData.email}
          header="Email"
          updateStateHandler={onChangeHandler}
          attr="email"
        />
        <InputText
          placeholder="123-456-7890"
          value={currentProfileData.phoneNumber}
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
