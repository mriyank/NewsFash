import * as React from "react";
import { ProgressBar, Colors } from "react-native-paper";

const Progressbar = ({ progress }) => <ProgressBar backgroundColor="#ffffff" progress={progress} color={progress > 0.6 ? "#32a852" : Colors.red800} />;

export default Progressbar;
