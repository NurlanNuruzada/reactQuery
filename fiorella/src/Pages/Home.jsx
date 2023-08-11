import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getCategories } from "../Services/CategoryService";
import {PostCategory} from "../Pages/PostCategory"
import { useState } from "react";
export function Home() {
  const [Color, SetColor] = useState("white");
  
  const navigate = useNavigate();

  const HandleBackgroundColor = () => SetColor("red");
  const HandleGoToCrud = () => navigate("/Crud");


  const onSuccess = (data) =>{
    console.log("perform side effect after data fetching",data)
  }
  const onError = (error) =>{
    console.log("perform side effect after encounting error",error)
  }

  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["Categoryies"],
      queryFn: getCategories,
      staleTime: 0,
      onError,
      onSuccess,
    },
  );
  

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error.message}</h2>;

  if (error) return "An error has occured: " + error.message;
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
            </Tr>
          </Thead>
          <Tbody>
            {data.data?.map((Category) => (
              <Tr key={Category.guid}>
                <Td>{Category.name}</Td>
                <Td>{Category.description}</Td>
                <Td>{Category.id}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <Button onClick={HandleGoToCrud} m="10" colorScheme="whatsapp">
        Go to Crud
      </Button>
      <Button onClick={HandleBackgroundColor} m="10" colorScheme="red">
        change Color
      </Button>
    </div>
  );
}
