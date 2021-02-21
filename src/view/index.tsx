import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  Paper,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core/";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { generateColors } from "./utils/colorsRandom";
import { number } from "yargs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Index(props: object) {
  const classes = useStyles();
  const [colorState] = useState(generateColors(40));
  const [darker, setDarker] = useState(false);
  const [filterState, setFilterState] = useState("all");
  const [filterOptions, setFilterOptions] = useState([
    { value: "all", label: "all" },
  ]);

  useEffect(() => {
    if (colorState[0]?.name) {
      let dataMerge = [
        {
          value: "all",
          label: "all",
        },
      ];
      for (let i = 0; i < colorState?.length; i++) {
        if (
          dataMerge.filter((filter) => filter.value === colorState[i].name)
            .length === 0
        ) {
          dataMerge.push({
            value: colorState[i].name,
            label: colorState[i].name,
          });
        }
      }
      setFilterOptions(dataMerge);
    }
  }, [colorState]);

  const handleChange = (event: any) => {
    setFilterState(event.target.value);
  };

  const handleDarker = () => {
    setDarker(!darker);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gallery
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ color: "white" }}
            >
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={filterState}
              onChange={handleChange}
              label="Age"
              style={{ color: "white" }}
            >
              {filterOptions.map((obj, index) => (
                <MenuItem
                  key={String(index) + String(obj?.value)}
                  value={obj?.value}
                >
                  {obj?.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={darker}
                onChange={handleDarker}
                name="checkedA"
              />
            }
            label="Darker"
          />
        </Toolbar>
      </AppBar>
      <br />
      <Grid container spacing={1}>
        {darker === false ? (
          <>
            {filterState === "all" ? (
              <>
                {colorState.map((objColor, index) => (
                  <Grid
                    item
                    style={{ width: "20%" }}
                    key={
                      String(index) +
                      String(objColor.color[0]) +
                      String(objColor.color[1]) +
                      String(objColor.color[2])
                    }
                  >
                    <Paper
                      className={classes.paper}
                      style={{
                        backgroundColor:
                          "rgb(" +
                          objColor.color[0] +
                          ", " +
                          objColor.color[1] +
                          ", " +
                          objColor.color[2] +
                          ")",
                        paddingTop: "100%",
                      }}
                    />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {colorState
                  .filter((filter) => filter.name === filterState)
                  .map((objColor, index) => (
                    <Grid
                      item
                      style={{ width: "20%" }}
                      key={
                        String(index) +
                        String(objColor.color[0]) +
                        String(objColor.color[1]) +
                        String(objColor.color[2])
                      }
                    >
                      <Paper
                        className={classes.paper}
                        style={{
                          backgroundColor:
                            "rgb(" +
                            objColor.color[0] +
                            ", " +
                            objColor.color[1] +
                            ", " +
                            objColor.color[2] +
                            ")",
                          paddingTop: "100%",
                        }}
                      />
                    </Grid>
                  ))}
              </>
            )}
          </>
        ) : (
          <>
            {colorState
              .filter((filter) => filter.darker === true)
              .map((objColor, index) => (
                <Grid
                  item
                  style={{ width: "20%" }}
                  key={
                    String(index) +
                    String(objColor.color[0]) +
                    String(objColor.color[1]) +
                    String(objColor.color[2])
                  }
                >
                  <Paper
                    className={classes.paper}
                    style={{
                      backgroundColor:
                        "rgb(" +
                        objColor.color[0] +
                        ", " +
                        objColor.color[1] +
                        ", " +
                        objColor.color[2] +
                        ")",
                      paddingTop: "100%",
                    }}
                  />
                </Grid>
              ))}
          </>
        )}
      </Grid>
    </div>
  );
}
