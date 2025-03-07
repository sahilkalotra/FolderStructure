import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user info
interface UserState {
  profilePhoto: string | null;
  coverPhoto: string | null;
  userName: string;
  bio: string;
  gender: string;
  education: string;
  location: string;
}

const initialState: UserState = {
  profilePhoto: null,
  coverPhoto: null,
  userName: "",
  bio: "",
  gender: "",
  education: "",
  location: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setProfilePhoto(state, action: PayloadAction<string>) {
      state.profilePhoto = action.payload;
    },
    setCoverPhoto(state, action: PayloadAction<string>) {
      state.coverPhoto = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setBio(state, action: PayloadAction<string>) {
      state.bio = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setEducation(state, action: PayloadAction<string>) {
      state.education = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserState>) {
      const { profilePhoto, coverPhoto, userName, bio, gender, education, location } = action.payload;
      state.profilePhoto = profilePhoto; state.coverPhoto = coverPhoto; state.userName = userName;
      state.bio = bio; state.gender = gender; state.education = education; state.location = location;
    },
    resetState() {
      return { ...initialState }; 
    },
  },
});

export const { setProfilePhoto, setCoverPhoto, setUserName, setBio,
  setGender, setEducation, setLocation, setUserInfo, resetState } = userSlice.actions;

export default userSlice.reducer;
