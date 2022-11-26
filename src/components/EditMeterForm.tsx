import { Box, Button, TextField } from "@mui/material";
import React, { useRef } from "react";

export type MeterSlim = {
  owner: string;
  tenant: string;
  serial_number: string;
  monitored_entity: string;
  note: string;
};

type Props = {
  initialValue: MeterSlim;
  onEditMeter: (meter: MeterSlim) => void;
  onCancel: () => void;
};

export const EditMeterForm: React.FC<Props> = ({
  onEditMeter,
  initialValue,
  onCancel,
}) => {
  const refOwner = useRef<HTMLInputElement>();
  const refTenant = useRef<HTMLInputElement>();
  const refSerialNumber = useRef<HTMLInputElement>();
  const refMonitoredEntity = useRef<HTMLInputElement>();
  const refNote = useRef<HTMLInputElement>();

  const handleClick = () => {
    onEditMeter({
      owner: refOwner.current?.value ?? "",
      tenant: refTenant.current?.value ?? "",
      serial_number: refSerialNumber.current?.value ?? "",
      monitored_entity: refMonitoredEntity.current?.value ?? "",
      note: refNote.current?.value ?? "",
    });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          inputRef={refOwner}
          sx={{ height: 80 }}
          defaultValue={initialValue.owner}
          label="Owner"
        />
        <TextField
          inputRef={refTenant}
          sx={{ height: 80 }}
          defaultValue={initialValue.tenant}
          label="Tenant"
        />
        <TextField
          inputRef={refSerialNumber}
          sx={{ height: 80 }}
          defaultValue={initialValue.serial_number}
          label="Serial number"
        />
        <TextField
          inputRef={refMonitoredEntity}
          sx={{ height: 80 }}
          defaultValue={initialValue.monitored_entity}
          label="Monitored entity"
        />
        <TextField
          inputRef={refNote}
          sx={{ height: 80 }}
          defaultValue={initialValue.note}
          label="Note"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Button variant="contained" onClick={onCancel}>
          Cancel
        </Button>

        <Button variant="contained" color="success" onClick={handleClick}>
          Save
        </Button>
      </Box>
    </div>
  );
};
