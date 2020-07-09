
import App from './App';
import './shims';

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import React from "react";
import { Drizzle, generateStore } from "@drizzle/store";
import MyStringStore from "./build/contracts/MyStringStore.json";

const options = {
  contracts: [MyStringStore]
};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

AppRegistry.registerComponent(appName, () => () => <App drizzle={drizzle} />);

