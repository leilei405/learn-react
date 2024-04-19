export interface FormModalProps {
    name?: string;
    age?: number;
    address?: string;
}

export interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

export interface TableListProps {
    showModal: () => void;
    setTitle: (title: string) => void;
    setEditObj: (obj: FormModalProps) => void;
    editObj: FormModalProps;
    setIsModalOpen: (bool: boolean) => void;
}

export interface ModalFormProps {
    title: string;
    open: boolean;
    cancel: () => void;
    showModal: () => void;
    editObj: FormModalProps;
    setEditObj: (obj: FormModalProps) => void;
}

export type FieldType = {
    name?: string;
    age?: string;
    address?: string;
};