import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Mutation, useMutation, useQuery, useQueryClient } from "react-query";
import { deleteCategory, getCategories } from "../Services/CategoryService";
export function Home() {
  const [Color, SetColor] = useState("white");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const HandleBackgroundColor = () => SetColor("red");
  const HandleGoToCrud = () => navigate("/PostCategory");

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 0,
  });
  const QueryClient = useQueryClient();
  const deleteMutation = useMutation(deleteCategory,{
    onSuccess: ()=>{
      queryClient.invalidateQueries("categories")
    },
    onError: (error)=>{
      console.log("this is error",error)
    }
  })
  const handleDelete = (categoryId)=>{
    deleteMutation.mutate(categoryId)
  }
  
  return (
    <div style={{ backgroundColor: Color }}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Categories</TableCaption>
          <Thead>
            <Tr>
              <Th>Category Name</Th>
              <Th>Desc</Th>
              <Th>Guid Id</Th>
              <Th>delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((Category) => (
              <Tr key={Category.guid}>
                <Td>{Category.name}</Td>
                <Td>{Category.description}</Td>
                <Td>{Category.id}</Td>
                <Td>
                  <Button
                    onClick={() => handleDelete(Category.id)}
                    color={"white"}
                    backgroundColor={"red"}
                  >
                    Delete
                  </Button>
                  <Link to={`/Update/${Category.id}`}>
                    <Button
                      value={Category.id}
                      color={"white"}
                      backgroundColor={"yellow"}
                    >
                      Update
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <Button onClick={HandleGoToCrud} m="10" colorScheme="whatsapp">
        Go to add
      </Button>
      <Button onClick={HandleBackgroundColor} m="10" colorScheme="red">
        Change Color
      </Button>
    </div>
  );
}
