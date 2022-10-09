/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FaCopyright } from "react-icons/fa";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      {/* <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "center",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          { }
        </Text>
      </Text> */}
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
        </ListItem>
      </List>
    </Flex>
  );
}
