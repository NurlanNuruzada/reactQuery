import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  Button,
  FormHelperText,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query"; // Import useMutation and useQueryClient
import { PostCategories } from "../Services/CategoryService";

import React from "react";

export const PostCategory = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const HandleGoToCrud = () => {
    navigate("/");
  };

  const mutation = useMutation(PostCategories, {
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries("Categoryies");
    },
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        mutation.mutateAsync(values);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>name</FormLabel>
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            trype="text"
          ></Input>
          <FormLabel>desc</FormLabel>
          <Input
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            type="text"
          />
        </FormControl>
        <Button type="submit" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </form>
      <Button onClick={HandleGoToCrud} m="5" colorScheme="whatsapp">
        Get Back to Home
      </Button>
    </div>
  );
};

export default PostCategory;
