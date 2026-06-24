import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TextFieldShowcase from '../ui/text-field-showcase';

/** TextField variant 3종과 실시간 입력값 표시를 보여주는 섹션 */
function InputSection() {
  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 600, mb: 1 }}
      >
        Input
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 3 } }}>
        variant(standard / outlined / filled) 3종 TextField이며, 입력한 값이 아래에 실시간으로 표시됩니다.
      </Typography>
      <TextFieldShowcase />
    </Box>
  );
}

export default InputSection;
