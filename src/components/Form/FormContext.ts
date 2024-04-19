import { createContext } from 'react';

export interface FormContextProps {
  values?: Record<string, any>;
  setValues?: (values: Record<string, any>) => void;
  onValueChange?: (key: string, value: any) => void;
  validateRegister?: (name:string, cb: Function) => void;
}

export default createContext<FormContextProps>({})

// 1.在context里保存values也就是Store的值
// 2.添加setValues来修改values
// 3.onValueChange监听value变化
// 4.validateRegister用来注册表单项的校验规则