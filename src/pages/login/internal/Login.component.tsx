import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField, Button, Typography } from '@/library/mui/index';
import { LoginValidation } from '@/validations/schema';
// import { TextField } from '@/features/TextField'
import { LoginProps } from './Login.types';

export const Login = () => {
const { control, handleSubmit, formState: { errors } } = useForm<LoginProps>({
    resolver: yupResolver(LoginValidation)
});

const onSubmit: SubmitHandler<LoginProps> = data => {
    console.log(data);
    // 送信処理
};

return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ 
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: '400px', // フォームの最大幅を制限
        '.MuiTextField-root': {
            margin: '10px 0',
        },
        '.MuiButton-root': {
            marginTop: '20px',
            backgroundColor: '#1976d2',
            '&:hover': {
                backgroundColor: '#115293',
            },
        },
    }}>
    <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="電話番号"
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
                fullWidth
                margin="normal"
            />
        )}
    />
    <Controller
    name="password"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="パスワード"
            type="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
        />
    )}
    />
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    ログイン
    </Button>
        {errors.phoneNumber && <Typography color="error">{errors.phoneNumber.message}</Typography>}
        {errors.password && <Typography color="error">{errors.password.message}</Typography>}
    </Box>
    );
};

export default Login