import clsx from 'clsx';
import React, { ChangeEvent } from 'react';
import styles from './SelectFile.module.scss';

interface SelectFileProps {
    chooseText: string
    chooseTextDone: string
    selectFile?: (e: ChangeEvent<HTMLInputElement>) => void
    fileSelected: string
    id: string
}

export const SelectFile = ({
    chooseText,
    chooseTextDone,
    selectFile,
    fileSelected,
    id
}: SelectFileProps) => (
    <>
        <input
            type='file'
            id={id}
            onChange={selectFile}
            className={styles.file}
        />
        <label htmlFor={id}>
            <span
                className={clsx(styles['input-btn'], {
                    [styles['file-success']]: fileSelected,
                })}
                role='button'
            >
                {fileSelected ? chooseTextDone : chooseText}
            </span>
        </label>
    </>
);
