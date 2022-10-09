import React from "react";
import { Flex } from "@chakra-ui/react";

export function Separator_v(props) {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      h="100%"
      w="1px"
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
      {...rest}
    >
      {children}
    </Flex>
  );
}
