import { Alert, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from "react-native-permissions";

const apiLevel = DeviceInfo.getApiLevel;

//#region Identification Method
const mediaString =
  Platform.OS === "ios"
    ? PERMISSIONS.IOS.PHOTO_LIBRARY
    : (Number(apiLevel) < 33
    ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
const cameraString =
  Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
//#endregion

//#region Common Alert
export const PermissionAlert = (title: string, message: string) => {
  Alert.alert(
    title,
    message,
    [
      { text: "Go to Settings", onPress: () => openSettings() },
      {
        text: "Cancel",
        onPress: () => console.log("User canceled"),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};
//#region End Common Alert

//#region Location Permissions
// export const LocationPermission = async () => {
//   const grantPermission = await checkLocationPermissions();
//   if (!grantPermission) {
//     requestLocationPermissions();
//   } else {
//     return true;
//   }
// };

// export const checkLocationPermissions = async () => {
//   const checkLocation = await check(locationString);
//   if (checkLocation == RESULTS.GRANTED) {
//     return true;
//   }
//   return false;
// };

// export const requestLocationPermissions = async () => {
//   const requestLocation = await request(locationString);
//   if (requestLocation == RESULTS.GRANTED) {
//     return true;
//   }
//   if (requestLocation == RESULTS.DENIED) {
//     PermissionAlert(
//       "Location Permission denied",
//       "Do you want to re-request the permission?"
//     );
//     return false;
//   }
//   if (
//     requestLocation == RESULTS.BLOCKED ||
//     requestLocation === ("never_ask_again" as string)
//   ) {
//     PermissionAlert(
//       "Location Permission blocked",
//       "Please enable location permission through settings."
//     );
//     return false;
//   }
//   return false;
// };
//#region End Location Permissions

//#region Media Permissions
export const MediaPermission = async () => {
  const grantPermission = await checkMediaPermissions();
  console.log(grantPermission,"<grraaamnttt")
  if (grantPermission) return true
  return await requestMediaPermissions();
};

export const checkMediaPermissions = async () => {
  const checkMedia = await check(mediaString);
  if (checkMedia == RESULTS.GRANTED) {
    return true;
  }
  return false;
};

export const requestMediaPermissions = async () => {
  const requestMedia = await request(mediaString);
  if (requestMedia == RESULTS.GRANTED) {
    return true;
  }
  if (requestMedia == RESULTS.DENIED) {
    PermissionAlert(
      "Media Permission denied",
      "Do you want to re-request the permission?"
    );
    return false;
  }
  if (
    requestMedia == RESULTS.BLOCKED || 
    requestMedia === ("never_ask_again" as string)
  ) {
    PermissionAlert(
      "Media Permission blocked",
      "Please enable media permission through settings."
    );
    return false;
  }
  return false;
};
//#region End Media Permissions

//#region Camera Permissions
export const CameraPermission = async () => {
  const grantPermission = await checkCameraPermissions();
  if (grantPermission) return true
  return await requestCameraPermissions();
};

export const checkCameraPermissions = async () => {
  const checkCamera = await check(cameraString);
  if (checkCamera == RESULTS.GRANTED) {
    return true;
  }
  return false;
};

export const requestCameraPermissions = async () => {
  const requestCamera = await request(cameraString);
  if (requestCamera == RESULTS.GRANTED) {
    return true;
  }
  if (requestCamera == RESULTS.DENIED) {
    PermissionAlert(
      "Camera Permission denied",
      "Do you want to re-request the permission?"
    );
    return false;
  }
  if (
    requestCamera == RESULTS.BLOCKED ||
    requestCamera === ("never_ask_again" as string)
  ) {
    PermissionAlert(
      "Camera Permission blocked",
      "Please enable camera permission through settings."
    );
    return false;
  }
  return false;
};
//#region End Camera Permissions
