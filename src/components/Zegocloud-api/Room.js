import React from "react"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room (){
    let myMeeting = async (element) => {
        const appID =2102494304
        const serverSecret ="0cb1da1a0fd6b9879d180926c38e4fb3"
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

        }
    return(
        <div>
          



        </div>
    )
}
export default Room