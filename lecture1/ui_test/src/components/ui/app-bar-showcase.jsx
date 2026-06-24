import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navItems = ['홈', '소개', '서비스', '연락처'];

/** AppBar + Toolbar 기반 반응형 네비게이션(모바일 햄버거 메뉴 포함)을 보여주는 컴포넌트 */
function AppBarShowcase() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (item) => {
    alert(`${item} 메뉴를 클릭했습니다.`);
    handleCloseMenu();
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Navigation
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navItems.map((item) => (
            <Button key={item} color="inherit" onClick={() => handleMenuClick(item)}>
              { item }
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" aria-label="메뉴 열기" onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            {navItems.map((item) => (
              <MenuItem key={item} onClick={() => handleMenuClick(item)}>
                { item }
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarShowcase;
