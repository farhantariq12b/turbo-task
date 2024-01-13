import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { formatDateTime } from "../../utils/time";
import microsoftWord from "../../assets/svg/microsoft-word.svg";
import microsoftPowerPoint from "../../assets/svg/power-point.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, IconButton, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import styles from "./datatable.module.css";
import { Deliverable, TableProps } from "../../interfaces/deliverables";

const iconPaths: { [key: string]: string } = {
  word: microsoftWord,
  powerPoint: microsoftPowerPoint,
};

const DataTable: React.FC<TableProps> = ({ rows, onRowClick }) => {
  const handleRowClick = (row: Deliverable) => {
    onRowClick(row);
  };

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="60%">
              <Typography variant="body2" color="textSecondary">
                Name
              </Typography>
            </TableCell>
            <TableCell width="15%">
              <Typography variant="body2" color="textSecondary">
                Created
              </Typography>
            </TableCell>
            <TableCell width="20%">
              <Typography variant="body2" color="textSecondary">
                By
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Deliverable) => (
            <TableRow
              key={uuid()}
              className={styles.tableRow}
              onClick={() => handleRowClick(row)}
            >
              <TableCell align="left">
                <Box display="flex" flexDirection="row">
                  <Box mr="8px">
                    <img
                      src={iconPaths[row.type || "word"]}
                      alt={`microsoft ${row.type || "word"}`}
                    />
                  </Box>

                  <Typography variant="body2">{row.name}</Typography>
                </Box>
              </TableCell>
              <TableCell align="left">{formatDateTime(row.date)}</TableCell>
              <TableCell align="left">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {row.profile_img ? (
                    <img
                      src={row.profile_img}
                      width="22px"
                      height="22px"
                      alt="user avatar"
                    />
                  ) : (
                    <Avatar
                      src={row.profile_img}
                      sx={{ width: "22px", height: "22px" }}
                      alt="User Avatar"
                    />
                  )}

                  <IconButton className={styles.moreIcon}>
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
