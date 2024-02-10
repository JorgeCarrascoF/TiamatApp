import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";


const DiceRoller = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = (max) => {
    const randomValue = Math.floor(Math.random() * max) + 1;
    setDiceValue(randomValue);
  };

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: '70%', paddingTop: 20 }}
    >
      <View
        style={{
          width: "80%",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        <TouchableOpacity onPress={()=>{rollDice(4)}}>
          <Image
            source={require("../img/d4.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{rollDice(6)}}>
          <Image
            source={require("../img/d6.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{rollDice(8)}}>
          <Image
            source={require("../img/d8.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{rollDice(10)}}>
          <Image
            source={require("../img/d10.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{rollDice(12)}}>
          <Image
            source={require("../img/d12.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{rollDice(20)}}>
          <Image
            source={require("../img/d20.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>

      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', width: '60%', padding: 4, marginTop: 50}}>
      <Text>Number rolled:</Text>
      <Text style={{fontSize: 50, textAlign: 'center', width: '100%'}}> {diceValue}</Text>
      </View>
    </View>
  );
};

export default DiceRoller;