import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { updateProfileAvatar } from '../api/updateProfileAvatar';
import { UseUploadAvatarReturn } from '../types';

export const useUploadAvatar = (): UseUploadAvatarReturn => {
    const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
    const [file, setFile] = useState<FileList | null>(null);
    const dispatch = useAppDispatch();

    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length !== 0) {
            setPreviewAvatar(URL.createObjectURL(e.target.files![0]));
        }
        setFile(e.target.files);
    };

    const uploadFile = (): void => {
        const formData = new FormData();
        if (file) {
            formData.append('avatar', file[0]);
            dispatch(updateProfileAvatar(formData));
        }
    };

    return { previewAvatar, file, selectFile, uploadFile };
};
