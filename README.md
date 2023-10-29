# Deep-linking with react native

This is a demo app that shows how to setup deep-linking with react native.
The full tutorial can be found [here](https://yeledtheo.hashnode.dev/deep-linking-with-react-native).


# Setup

1. Clone the repo

```
git clone https://reppo.com/your-repo
```

2. Install dependencies

```
cd your-repo
npm install
```

3. Run the app on a device or emulator

```
npx expo run:android
```

4. Test the deep-linking

```bash
# Open the the Home screen
adb shell am start -W -a android.intent.action.VIEW -d "https://yourdomain.com/Home"

# Open the Items screen
adb shell am start -W -a android.intent.action.VIEW -d "https://yourdomain.com/Items"

# Open the Item screen
adb shell am start -W -a android.intent.action.VIEW -d "https://yourdomain.com/Item?id=1"
```