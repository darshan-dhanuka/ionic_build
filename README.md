# HashTag Poker

Install dependency using below command
#npm install

After done dependency installation add the platform using below command
#ionic cordova platform add android
#ionic cordova platform add ios
#ionic cordova platform add browser

For run application use below comman
- for browser
#ionic cordova run browser

- for android
#ionic cordova run android

- for ios
#ionic cordova run ios

For Generate simple build
- for android
#ionic cordova build android
- for ios
#ionic cordova build ios


For Generate production build
- for android
#ionic cordova build android --prod --release
- for ios
#ionic cordova build ios --prod --release

For android sign apk file
#jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hashtagpoker.keystore app-release-unsigned.apk hashtagpoker
for the password use 
#hashtagpoker

For android generate zip
#./zipalign -v 4 app-release-unsigned.apk HashTagPoker.apk
