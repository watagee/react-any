import { SubmitHandler } from 'react-hook-form';
import { LoginProps } from './Login.types';
// import { useNavigate } from '@/features/routes/AuthProvider';

export const useHooks = () => {
    const onSubmit: SubmitHandler<LoginProps> = data => {
        console.log(data);
        // 送信処理
    };

    return {
        onSubmit
    };
};