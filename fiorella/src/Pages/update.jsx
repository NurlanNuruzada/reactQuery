import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCategories } from "../Services/CategoryService";
import { Formik, Form, Field } from "formik";
function UpdateCategory() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: category } = useQuery(["category", id], () =>
    getCategories(id)
  );
  const updateMutation = useMutation(UpdateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["category", id]);
      navigate("/"); // Navigate back to the home page after update
    },
    onError: (error) => {
      console.error("Error updating category:", error);
    },
  });

  const handleSubmit = async (values) => {
    updateMutation.mutate({ ...category, ...values });
  };

  return (
    <div>
      <h2>Edit Category</h2>
      {category ? (
        <Formik
          initialValues={{
            name: category.name,
            description: category.description,
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="name" placeholder="Category Name" />
            <Field
              type="text"
              name="description"
              placeholder="Category Description"
            />
            <button type="submit">Update</button>
          </Form>
        </Formik>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UpdateCategory;
