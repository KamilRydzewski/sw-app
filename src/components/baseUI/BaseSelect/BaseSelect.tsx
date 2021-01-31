import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: "#ffffff",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 80,
    },
    select: {
      color: "#ffffff",
      fontFamily: "Poller One",
      "&:before": {
        borderColor: "#ffffff",
      },
      "&:after": {
        borderColor: "#ffffff",
      },
    },
    label: {
      color: "#ffffff",
      fontSize: "1.4rem",
      "&.MuiFormLabel-root.Mui-focused": {
        color: "#ffffff",
      },
    },
    menuItem: {
      margin: "0 8px",
    },
  })
);

type Props = {
  handleSelect: any;
  initialValue: number | string;
  values: string[];
};

const BaseSelect: React.FC<Props> = ({
  handleSelect,
  initialValue,
  values,
}) => {
  const classes = useStyles();
  const [value, setAge] = useState(initialValue);

  const handleChange = (event: object | any): void => {
    setAge(event.target.value);
    handleSelect(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label} id="demo-simple-select-label">
          Type
        </InputLabel>
        <Select
          className={classes.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          classes={{
            icon: classes.icon,
          }}
        >
          {values.map((item: string) => (
            <MenuItem key={item} className={classes.menuItem} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default BaseSelect;
