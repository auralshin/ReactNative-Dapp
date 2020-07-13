# Building React Native app using drizzle

## Packages Required
	- truffle
	- ganache-cli
	- react-native
	- react
	- @drizzle/store

## Project Structure
	 ├── android
	 ├── contracts
	 ├── ios
	 ├── migrations
	 ├── gitignore
	 ├── test
	 ├── App.js
	 ├── app.json
	 ├── index.js
	 ├── shims.js
	 ├── global.js
	 ├── rn-cli.config.js
	 ├── package.json
	 ├── truffle-config.js
	 ├── truffle.js
	 └── yarn.lock
## Steps to follow

	- run npm install or yarn install
	- install truffle and ganache-cli
	- set ANDROID_HOME in path properly
	- Start ganache-cli: ganache-cli -b 3
	- Compile and migrate contracts: truffle compile && truffle migrate
	- Reverse ports: adb reverse tcp:8545 tcp:8545
	- react-native start
	- Install app: react-native run-android ( on different terminal )
