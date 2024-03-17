import * as Yup from 'yup';

export const LoginValidation =
    Yup.object({
        phoneNumber: Yup.string()
            .matches(/^\d{10,11}$/, "電話番号は10桁または11桁の数字である必要があります")
            .required("電話番号は必須です"),
        password: Yup.string()
            .min(8, "パスワードは8文字以上である必要があります")
            .required("パスワードは必須です"),
    }).required();