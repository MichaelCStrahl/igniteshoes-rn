import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Michael Strahl",
    user_email: "michael@example.com",
  })
}