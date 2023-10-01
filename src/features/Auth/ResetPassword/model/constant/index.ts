export const emailOptions = {
    required: { value: true, message: 'Введите email' },
    pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: 'Некорректный email',
    },
};
