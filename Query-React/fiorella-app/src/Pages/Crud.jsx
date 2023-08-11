import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, FormHelperText, FormLabel, Input,FormControl } from "@chakra-ui/react";
export default function Crud() {
  const navigate = useNavigate();
  const HandleGoToCrud = () => {
    navigate("/");
    catagoru;
  };
  return (
    <div>
      <FormControl>
        <FormLabel>name</FormLabel>
        <Input type="text" />
        <FormLabel>desc</FormLabel>
        <Input type="text" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <br />
      <Button onClick={HandleGoToCrud} m="5" colorScheme="whatsapp">
        Get Back to Home
      </Button>
    </div>
  );
}
