import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ButtonShowcase from '../ui/button-showcase';

/** Button 컴포넌트의 variant·color 조합을 소개하는 섹션 */
function ButtonSection() {
  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 600, mb: 1 }}
      >
        Button
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 3 } }}>
        variant(contained / outlined / text) × color(primary / secondary / error) 조합이며, 클릭하면 알림창이 표시됩니다.
      </Typography>
      <ButtonShowcase />
    </Box>
  );
}

export default ButtonSection;
