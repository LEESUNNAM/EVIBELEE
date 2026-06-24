import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const variants = ['contained', 'outlined', 'text'];
const colors = ['primary', 'secondary', 'error'];

/** variant 3종 × color 3종 조합의 MUI Button을 보여주고, 클릭 시 알림창을 띄우는 컴포넌트 */
function ButtonShowcase() {
  const handleClick = (variant, color) => {
    alert(`${variant} / ${color} 버튼을 클릭했습니다.`);
  };

  return (
    <Stack spacing={{ xs: 2, md: 3 }}>
      {variants.map((variant) => (
        <Stack
          key={variant}
          direction="row"
          spacing={{ xs: 1, md: 2 }}
          alignItems="center"
          flexWrap="wrap"
        >
          <Box sx={{ width: { xs: '100%', sm: 90 } }}>
            <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
              { variant }
            </Typography>
          </Box>
          {colors.map((color) => (
            <Button
              key={`${variant}-${color}`}
              variant={variant}
              color={color}
              onClick={() => handleClick(variant, color)}
            >
              { color }
            </Button>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export default ButtonShowcase;
