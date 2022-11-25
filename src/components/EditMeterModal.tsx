import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";

export type MeterSlim = {
  note: string;
};

type Props = {
  onEditMeter: (meter: MeterSlim) => void;
};

export const EditMeterModal: React.FC<Props> = ({ onEditMeter }) => {
  const ref = useRef<HTMLInputElement>();

  const handleClick = () => {
    const result = ref.current?.value;
    onEditMeter({
      note: result ?? "",
    });
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <FormControl>
          <Typography sx={{ padding: 2 }}>Edit the cell</Typography>
          <TextField inputRef={ref} sx={{ height: 80 }}>
            Note
          </TextField>
          <Button variant="contained" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};
