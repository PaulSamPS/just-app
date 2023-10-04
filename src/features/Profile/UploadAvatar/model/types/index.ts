import { ChangeEvent } from 'react';

export type UseUploadAvatarReturn = {
    previewAvatar: string | null
    selectFile: (e: ChangeEvent<HTMLInputElement>) => void
    uploadFile: () => void
    file: FileList | null
}
