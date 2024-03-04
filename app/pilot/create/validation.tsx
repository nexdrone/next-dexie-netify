import * as Yup from 'yup';

export const schema = Yup.object().shape({
  pilotName: Yup
    .string()
    .required("入力必須です")
    .max(100, '100文字以内で入力してください'),
});

