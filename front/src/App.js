import { useState, useEffect } from 'react';
import axios from 'axios';
import { FixedSizeList } from 'react-window';
import './App.css';
import {
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  makeStyles,
  ListItemText,
  ListItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  axios.defaults.baseURL = 'http://localhost:5000/';

  useEffect(() => {
    async function fetchColumns() {
      const response = await axios.get('/columns');
      setColumns(response.data);
    }
    fetchColumns();
  }, []);

  const getRowsForSelectColumn = (column)=>{
    async function fetchRows() {
      const response = await axios.get('/rows', { params: { column: column } });
      if (response.data && response.data.length > 0) {
        const data = [];
        response.data.forEach((el) => {
          data.push({variableName: el.variableName, avgAge: el.avgAge, occurence: el.occurence})
        })
        setRows(data);
        setIsLoading(false);
      }
    }
    fetchRows();
  }

  const handleColumnClick = (index) => {
    setIsLoading(true);
    setSelectedIndex(index);
    getRowsForSelectColumn(columns[index]);
  }

  const renderRow = (props) => {
    const { index, style } = props;
    return (
      <ListItem button style={style} key={index} selected={selectedIndex === index} onClick={ ()=> handleColumnClick(index)}>
        <ListItemText primary={`${columns[index]}`} />
      </ListItem>
    );
  }

  return (
      <div className="App">
        <h1>Demographic record data browser</h1>
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper} style={{ width: '100%' }}>
                <FixedSizeList height={400} itemSize={46} itemCount={columns.length}>
                  {renderRow}
                </FixedSizeList>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                {isLoading && (
                  <CircularProgress />
                )}
                {!isLoading && (
                  <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Variable Name</TableCell>
                          <TableCell align="right">Avg Age</TableCell>
                          <TableCell align="right">Occurrence</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.variableName}
                            </TableCell>
                            <TableCell align="right">{row.avgAge}</TableCell>
                            <TableCell align="right">{row.occurence}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
  );
}

export default App;
