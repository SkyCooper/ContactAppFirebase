import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch,DeleteUser } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Contacts = ({editUser}) => {
  const { isLoading, contactList } = useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="left">Phone Number</StyledTableCell>
              <StyledTableCell align="left">Gender</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
              <StyledTableCell align="left">Edit</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              // Bilgiler gelmediği durumda Loading yazısı görünsün
              isLoading ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell colSpan={5} align="center">
                    Loading
                  </StyledTableCell>
                </TableRow>
              ) : contactList?.lenght === 0 ? (
                // Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    No Result Found
                  </TableCell>
                </TableRow>
              ) : (
                // Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın
                contactList?.map((item, index) => (
                  <StyledTableRow>
                    <TableCell align="center">{item.username} </TableCell>
                    <TableCell align="center">{item.phoneNumber} </TableCell>
                    <TableCell align="center">{item.gender} </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => DeleteUser(item.id)}
                    >
                      <DeleteIcon sx={{ color: pink[500] }} />
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() =>
                        editUser(
                          item.id,
                          item.username,
                          item.phoneNumber,
                          item.gender
                        )
                      }
                    >
                      <EditIcon color="success"/>
                    </TableCell>
                  </StyledTableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
