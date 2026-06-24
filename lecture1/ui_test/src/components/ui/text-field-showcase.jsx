import { useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const fields = [
  { key: 'standard', variant: 'standard', label: 'Standard' },
  { key: 'outlined', variant: 'outlined', label: 'Outlined' },
  { key: 'filled', variant: 'filled', label: 'Filled' },
];

/** TextField variant 3종을 보여주고, 입력값을 실시간으로 화면에 표시하는 컴포넌트 */
function TextFieldShowcase() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  const handleChange = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      {fields.map(({ key, variant, label }) => (
        <Stack key={key} spacing={1}>
          <TextField
            variant={variant}
            label={label}
            placeholder="내용을 입력하세요"
            value={values[key]}
            onChange={handleChange(key)}
            fullWidth
          />
          <Typography variant="body2" color="text.secondary">
            입력값: { values[key] || '(없음)' }
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default TextFieldShowcase;
