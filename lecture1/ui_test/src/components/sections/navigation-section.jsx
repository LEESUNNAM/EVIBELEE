import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AppBarShowcase from '../ui/app-bar-showcase';

/** AppBar/Toolbar 기반 네비게이션과 모바일 햄버거 메뉴를 보여주는 섹션 */
function NavigationSection() {
  return (
    <Box component="section" sx={{ width: '100%' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 600, mb: 1 }}
      >
        Navigation
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 3 } }}>
        홈 / 소개 / 서비스 / 연락처 메뉴이며, 클릭하면 알림창이 표시됩니다. 화면이 좁아지면 햄버거 메뉴로 전환됩니다.
      </Typography>
      <AppBarShowcase />
    </Box>
  );
}

export default NavigationSection;
