import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";
const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext); //the data comes from 'blog context'
  return (
    <View>
      <Text>Index </Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
